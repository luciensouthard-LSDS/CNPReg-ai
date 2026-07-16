import { PDFParse } from "pdf-parse";

/**
 * Extracts plain text from a PDF buffer using pdf-parse v2's PDFParse class.
 * Strips the "-- N of M --" page markers the library injects by default so they
 * don't pollute the embedded text.
 */
export async function extractPdfText(buffer) {
  const parser = new PDFParse({ data: buffer });
  try {
    const result = await parser.getText();
    return (result.text || "")
      .replace(/^\s*--\s*\d+\s*of\s*\d+\s*--\s*$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  } finally {
    await parser.destroy();
  }
}