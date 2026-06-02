import { neon } from '@neondatabase/serverless';
import { GoogleGenerativeAI } from '@google/generative-ai';

const sql = neon(process.env.DATABASE_URL);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const embedModel = genAI.getGenerativeModel({ model: 'gemini-embedding-001' });
const chatModel = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

const SYSTEM_INSTRUCTION = `You are CNPReg AI, a free regulatory intelligence tool developed by LS Digital Solutions, LLC for state agency administrators of USDA Child Nutrition Programs.

Use ONLY the retrieved regulatory excerpts below as your source. Always cite the exact CFR section from the citation field provided. Do not invent or guess citations.

CRITICAL FACTS:
- The Community Eligibility Provision (CEP) ISP threshold is 25%, NOT 40%. Per 7 CFR § 245.9(f), schools/LEAs with an Identified Student Percentage of 25% or greater are eligible.
- The 12 CFR Parts covered: 210 (NSLP), 215 (SMP), 220 (SBP), 225 (SFSP), 226 (CACFP), 227 (NET), 235 (SAE), 240 (Cash in Lieu), 245 (Eligibility/CEP), 246 (WIC), 247 (CSFP), 292 (Summer EBT).

Format key terms and citations in bold. Keep answers concise, accurate, and actionable for state agency administrators. If the retrieved excerpts don't fully answer the question, say so directly rather than guessing.

End every response with this exact line:
*Warning: Verify all guidance against official USDA FNS sources before making compliance decisions.*`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid request — messages array required' });
    }

    const latestQuestion = messages[messages.length - 1].content;

    // STEP 1: Embed the user's question
    const embedResult = await embedModel.embedContent({
      content: { parts: [{ text: latestQuestion }] },
      outputDimensionality: 768,
      taskType: 'RETRIEVAL_QUERY'
    });
    const queryEmbedding = embedResult.embedding.values;
    const vectorStr = '[' + queryEmbedding.join(',') + ']';

    // STEP 2: Retrieve top 8 relevant chunks from Neon
    const rows = await sql`
      SELECT cfr_part, citation, content, tier,
             1 - (embedding <=> ${vectorStr}::vector) AS similarity
      FROM cfr_chunks
      ORDER BY embedding <=> ${vectorStr}::vector
      LIMIT 8
    `;

    // STEP 3: Build context block from retrieved chunks
    const retrievedContext = rows.map(r =>
      `[${r.citation}]\n${r.content}`
    ).join('\n\n---\n\n');

    // STEP 4: Build Gemini request — map prior messages, then prepend context to latest
    const geminiContents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    geminiContents[geminiContents.length - 1].parts[0].text =
      `Retrieved regulatory text:\n\n${retrievedContext}\n\n` +
      `User question: ${latestQuestion}\n\n` +
      `Answer the question using ONLY the retrieved text above. Cite specific CFR sections.`;

    // STEP 5: Generate answer with Gemini Flash
    const result = await chatModel.generateContent({
      systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents: geminiContents,
      generationConfig: { maxOutputTokens: 4000, temperature: 0.2 }
    });

    // STEP 6: Extract unique citations from retrieved chunks (deduplicated)
    const uniqueCitations = [...new Set(rows.map(r => {
      // Strip "(Part X of Y)" suffix for cleaner display
      return r.citation.replace(/\s*\(Part \d+ of \d+\)$/, '');
    }))];

    return res.status(200).json({
      candidates: result.response.candidates,
      sources: uniqueCitations
    });
  } catch (error) {
    console.error('chat.js error:', error);
    return res.status(500).json({
      error: 'Server error: ' + (error.message || 'Unknown error')
    });
  }
}
