import { sql } from "../../lib/db.js";
import { requireAuth } from "../../lib/auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "POST only" });
  if (!requireAuth(req, res)) return;

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { doc_id } = body;
    if (!doc_id) return res.status(400).json({ ok: false, error: "doc_id is required." });

    // Guard: only memo/guidance rows are ever deletable here — CFR is protected.
    const rows = await sql`
      DELETE FROM cfr_chunks
      WHERE source_doc = ${doc_id} AND source_type IN ('MEMO', 'GUIDANCE')
      RETURNING source_doc
    `;
    return res.status(200).json({ ok: true, deleted: rows.length });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
