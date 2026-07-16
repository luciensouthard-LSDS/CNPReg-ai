import crypto from "node:crypto";

/**
 * Validates the `x-admin-password` header against ADMIN_PASSWORD (Vercel env var).
 * On failure it writes a 401 and returns false, so callers do: if (!requireAuth(req, res)) return;
 */
export function requireAuth(req, res) {
  const provided = String(req.headers["x-admin-password"] || "");
  const expected = String(process.env.ADMIN_PASSWORD || "");

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  const ok =
    expected.length > 0 &&
    a.length === b.length &&
    crypto.timingSafeEqual(a, b);

  if (!ok) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return false;
  }
  return true;
}
