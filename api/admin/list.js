import { sql } from "../../lib/db.js";
import { requireAuth } from "../../lib/auth.js";

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;
  try {
    const docs = await sql`
      SELECT
        source_doc                AS doc_id,
        source_type,
        MIN(title)                AS title,
        MIN(memo_number)          AS memo_number,
        MIN(effective_date)::text AS effective_date,
        MIN(program)              AS program,
        COUNT(*)::int             AS chunk_count
      FROM cfr_chunks
      WHERE source_type IN ('MEMO', 'GUIDANCE') AND source_doc IS NOT NULL
      GROUP BY source_doc, source_type
      ORDER BY MIN(title)
    `;
    return res.status(200).json({ ok: true, docs });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
