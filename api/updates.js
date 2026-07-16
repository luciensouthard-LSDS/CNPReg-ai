import { sql } from "../lib/db.js";

/**
 * GET /api/updates  — PUBLIC (no auth)
 *
 * Feeds the public Coverage page. Same shape as /api/admin/list, but:
 *   - no requireAuth (this is meant to be public)
 *   - no chunk_count (internal implementation detail, not for users)
 *   - ordered by effective_date DESC so the newest guidance is first
 *
 * If your cfr_chunks table has a source_url column, uncomment the two marked
 * lines and the Coverage page will automatically turn each memo number into a
 * "verify at the source" link.
 */
export default async function handler(req, res) {
  try {
    const docs = await sql`
      SELECT
        source_doc                AS doc_id,
        source_type,
        MIN(title)                AS title,
        MIN(memo_number)          AS memo_number,
        MIN(effective_date)::text AS effective_date,
        MIN(program)              AS program
        -- , MIN(source_url)        AS source_url   -- uncomment if the column exists
      FROM cfr_chunks
      WHERE source_type IN ('MEMO', 'GUIDANCE') AND source_doc IS NOT NULL
      GROUP BY source_doc, source_type
      ORDER BY MIN(effective_date) DESC NULLS LAST
    `;
    return res.status(200).json({ ok: true, docs });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
