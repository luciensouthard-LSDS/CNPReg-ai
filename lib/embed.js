import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Embeds text with Gemini, producing a 768-dim vector.
 *
 * This mirrors the CFR ingestion path EXACTLY — same SDK, same model, same
 * taskType, same dimensionality, and (importantly) NO normalization — so memo
 * vectors land in the identical space as the original 1,594 CFR chunks.
 *
 *   embedModel.embedContent({
 *     content: { parts: [{ text }] },
 *     outputDimensionality: 768,
 *     taskType: 'RETRIEVAL_DOCUMENT',
 *   })  ->  result.embedding.values   (stored raw)
 */

const MODEL = "gemini-embedding-001";
const DIM = 768;
const TASK_TYPE = "RETRIEVAL_DOCUMENT";

function getKey() {
  return (
    process.env.GEMINI_KEY ||
    process.env.Gemini_Key ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env[Object.keys(process.env).find((n) => /gemini/i.test(n)) || ""]
  );
}

let _model;
function model() {
  if (_model) return _model;
  const key = getKey();
  if (!key) throw new Error("No Gemini API key found in environment.");
  _model = new GoogleGenerativeAI(key).getGenerativeModel({ model: MODEL });
  return _model;
}

export async function embedText(text) {
  const result = await model().embedContent({
    content: { parts: [{ text }] },
    outputDimensionality: DIM,
    taskType: TASK_TYPE,
  });
  const values = result?.embedding?.values;
  if (!Array.isArray(values) || values.length !== DIM) {
    throw new Error(`Unexpected embedding length: ${values?.length}`);
  }
  return values; // raw, un-normalized — matches CFR ingestion
}
