import { sql } from "../../lib/db.js";
import { requireAuth } from "../../lib/auth.js";

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;
  try {
    const rows = await sql`SELECT source_type, COUNT(*)::int AS c FROM cfr_chunks GROUP BY source_type`;
    const by = Object.fromEntries(rows.map((r) => [r.source_type, r.c]));
    const docRows = await sql`SELECT COUNT(DISTINCT source_doc)::int AS c FROM cfr_chunks WHERE source_type IN ('MEMO','GUIDANCE') AND source_doc IS NOT NULL`;

    return res.status(200).json({
      ok: true,
      stats: {
        totalChunks: rows.reduce((s, r) => s + r.c, 0),
        cfrChunks: by.CFR || 0,
        memoChunks: by.MEMO || 0,
        guidanceChunks: by.GUIDANCE || 0,
        docCount: docRows[0]?.c || 0,
      },
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
