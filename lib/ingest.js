import crypto from "node:crypto";
import { sql } from "./db.js";
import { embedText } from "./embed.js";
import { chunkText } from "./chunking.js";

/**
 * Chunks `fullText`, embeds each chunk, and inserts rows into cfr_chunks under a
 * shared source_doc. Returns { source_doc, chunksCreated }.
 *
 * meta: { title, memoNumber, effectiveDate, programs, docType }
 *
 * The CFR-location columns (cfr_part, subpart, section, subsection, tier) are
 * NOT NULL on this table, so memo rows fill them with neutral placeholders
 * ('' / 0) rather than real CFR data. Memo metadata lives in citation, title,
 * program, memo_number, effective_date. `id` is auto-assigned; `indexed_at` = NOW().
 */
function slug(s) {
  return (
    String(s || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "doc"
  );
}

export async function ingestDocument(meta, fullText) {
  const chunks = chunkText(fullText);
  if (chunks.length === 0) throw new Error("No text to index after chunking.");

  const docType = meta.docType || "MEMO";
  const citation = meta.memoNumber || meta.title;
  const base = slug(meta.memoNumber || meta.title);
  const source_doc = `${base}__${crypto.randomUUID().slice(0, 8)}`;

  const insert =
    `INSERT INTO cfr_chunks ` +
    `(cfr_part, subpart, section, subsection, citation, title, tier, program, ` +
    `content, token_count, embedding, source_doc, indexed_at, source_type, memo_number, effective_date) ` +
    `VALUES ('', '', '', '', $1, $2, 0, $3, $4, $5, $6::vector, $7, NOW(), $8, $9, $10)`;

  let created = 0;
  for (const chunk of chunks) {
    const v = await embedText(chunk);
    const vecLiteral = `[${v.join(",")}]`;
    await sql.query(insert, [
      citation,               // $1 citation
      meta.title,             // $2 title
      meta.programs || "",    // $3 program (NOT NULL-safe)
      chunk,                  // $4 content
      Math.ceil(chunk.length / 4), // $5 token_count (approx)
      vecLiteral,             // $6 embedding
      source_doc,             // $7 source_doc
      docType,                // $8 source_type
      meta.memoNumber || null, // $9 memo_number
      meta.effectiveDate || null, // $10 effective_date
    ]);
    created++;
  }

  return { source_doc, chunksCreated: created };
}