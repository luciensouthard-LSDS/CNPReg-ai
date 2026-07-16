import { requireAuth } from "../../lib/auth.js";
import { ingestDocument } from "../../lib/ingest.js";
import { extractPdfText } from "../../lib/pdf.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "POST only" });
  if (!requireAuth(req, res)) return;

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { mode, title, memoNumber, effectiveDate, programs, docType, text, pdfBase64 } = body;

    if (!title || !String(title).trim()) {
      return res.status(400).json({ ok: false, error: "Title is required." });
    }

    let fullText = "";
    if (mode === "pdf") {
      if (!pdfBase64) return res.status(400).json({ ok: false, error: "pdfBase64 is required." });
      fullText = await extractPdfText(Buffer.from(pdfBase64, "base64"));
      if (!fullText.trim()) {
        return res.status(422).json({
          ok: false,
          error: "No extractable text in PDF (it may be a scanned image — OCR needed).",
        });
      }
    } else {
      fullText = String(text || "");
      if (!fullText.trim()) return res.status(400).json({ ok: false, error: "No text provided." });
    }

    const { source_doc, chunksCreated } = await ingestDocument(
      {
        title: String(title).trim(),
        memoNumber: memoNumber || null,
        effectiveDate: effectiveDate || null,
        programs: programs || null,
        docType: docType || "MEMO",
      },
      fullText
    );

    return res.status(200).json({ ok: true, doc_id: source_doc, chunksCreated });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
