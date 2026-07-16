/**
 * Splits document text into overlapping chunks sized for embedding.
 * Aggregates paragraphs up to ~target chars; splits over-long paragraphs by
 * sentence; prepends a short tail of the previous chunk as overlap so context
 * isn't lost at boundaries.
 *
 * Defaults (~1,800 chars ≈ ~450 tokens) are a sane match for section-level CFR
 * chunks. If your CFR chunks are noticeably larger/smaller, tune `target`.
 */
export function chunkText(text, { target = 1800, max = 2600, overlap = 200 } = {}) {
  const clean = String(text || "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (!clean) return [];

  const paras = clean
    .split(/\n\s*\n/)
    .map((p) => p.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean);

  const chunks = [];
  let buf = "";
  const flush = () => { if (buf.trim()) chunks.push(buf.trim()); buf = ""; };

  for (const p of paras) {
    if (p.length > max) {
      flush();
      const sentences = p.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [p];
      let s = "";
      for (const sent of sentences) {
        if ((s + sent).length > target) { if (s.trim()) chunks.push(s.trim()); s = sent; }
        else s += sent;
      }
      if (s.trim()) chunks.push(s.trim());
      continue;
    }
    if (buf && (buf + "\n\n" + p).length > target) { flush(); buf = p; }
    else buf = buf ? buf + "\n\n" + p : p;
  }
  flush();

  if (overlap > 0) {
    for (let i = 1; i < chunks.length; i++) {
      const prev = chunks[i - 1];
      const tail = prev.slice(Math.max(0, prev.length - overlap));
      chunks[i] = `${tail} … ${chunks[i]}`;
    }
  }
  return chunks;
}
