import React, { useState, useEffect } from "react";

/**
 * CNPReg AI — "What's Included" (public Coverage page)
 *
 * Public, read-only view of the memos & guidance loaded into the retrieval
 * index. Styled to match App.jsx (navy / blue, Georgia headers, LS branding)
 * and fully self-contained — it does NOT import from App.jsx, so it can never
 * break the main site.
 *
 * Route: main.jsx renders <Coverage /> when the path is /coverage.
 * Data:  GET /api/updates  (PUBLIC — no password), already filtered to
 *        source_type IN ('MEMO','GUIDANCE').
 */

// -- Site palette (mirrors App.jsx) ------------------------------
const N   = "#001e3c";
const N2  = "#002a52";
const N3  = "#001428";
const A   = "#0077b6";
const AL  = "#4db8e8";
const AP  = "#e6f4fb";
const W   = "#ffffff";
const OF  = "#f4f7fa";
const BD  = "#ccd9e6";
const TM  = "#3a5570";
const TL  = "#6b8fa8";
const WN  = "#b45309";
const WB  = "#fffbeb";
const WBD = "#fde68a";

// Semantic chips, harmonized to the site palette
const CHIP = {
  MEMO:     { bg: WB, fg: WN, dot: WN },
  GUIDANCE: { bg: AP, fg: A,  dot: A  },
};

function go(path) { window.location.href = path; }

function parseDate(s) {
  if (!s) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(s).trim());
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return isNaN(d.getTime()) ? null : d;
}
function formatDate(s) {
  const d = parseDate(s);
  if (!d) return s || "\u2014";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
function formatPrograms(p) {
  if (!p) return "\u2014";
  return String(p).split(",").map((x) => x.trim()).filter(Boolean).join(", ");
}

function Chip({ type }) {
  const c = CHIP[type] || CHIP.MEMO;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: c.bg, color: c.fg, borderRadius: 999,
      padding: "3px 10px", fontSize: 11.5, fontWeight: 700,
      letterSpacing: "0.04em", whiteSpace: "nowrap",
    }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: c.dot }} />
      {type}
    </span>
  );
}

function LSLogo({ variant }) {
  const sizes = { nav: { ls: 22, ds: 11, llc: 9 }, footer: { ls: 16, ds: 9, llc: 8 } };
  const sz = sizes[variant] || sizes.nav;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: sz.ls + 8, height: sz.ls + 8, background: A, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: sz.ls, fontWeight: 700, color: W, lineHeight: 1 }}>LS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: sz.ds, fontWeight: 700, color: W, letterSpacing: 2, textTransform: "uppercase" }}>Digital Solutions</span>
        <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: sz.llc, color: TL, letterSpacing: 1, textTransform: "uppercase" }}>Child Nutrition Program Technology Specialist</span>
      </div>
    </div>
  );
}

function GlobalCSS() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { height: 100%; }
      body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: ${OF}; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-thumb { background: #c0d4e8; border-radius: 3px; }
      button { font-family: inherit; }
      .cov-row:hover { background: ${OF}; }
      .cov-home:hover { color: ${W} !important; }
    `}</style>
  );
}

export default function Coverage() {
  const [docs, setDocs] = useState([]);
  const [state, setState] = useState("loading"); // loading | ready | error
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/updates");
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.ok === false) throw new Error(data.error || `Couldn't load sources (${res.status}).`);
        if (cancelled) return;
        const list = (data.docs || [])
          .filter((d) => d.source_type !== "CFR")
          .sort((a, b) => {
            const da = parseDate(a.effective_date), db = parseDate(b.effective_date);
            if (da && db) return db - da;
            if (da) return -1;
            if (db) return 1;
            return 0;
          });
        setDocs(list);
        setState("ready");
      } catch (e) {
        if (!cancelled) { setError(e.message); setState("error"); }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const latest = docs.map((d) => parseDate(d.effective_date)).filter(Boolean).sort((a, b) => b - a)[0];

  return (
    <>
      <GlobalCSS />
      <div style={{ background: OF, minHeight: "100vh" }}>

        {/* Nav */}
        <nav style={S.nav}>
          <div className="cov-home" style={{ cursor: "pointer" }} onClick={() => go("/")}><LSLogo variant="nav" /></div>
          <div style={S.navRight}>
            <span style={S.freePill}>FREE TOOL</span>
            <button style={S.navLink} className="cov-home" onClick={() => go("/")}>&#8592; Back to CNPReg AI</button>
          </div>
        </nav>

        {/* Header band */}
        <div style={S.hero}>
          <div style={S.heroGrid} />
          <div style={S.heroInner}>
            <div style={S.eyebrow}>KNOWLEDGE BASE</div>
            <h1 style={S.h1}><span style={{ color: W }}>What&apos;s </span><span style={{ color: AL }}>Included</span></h1>
            <p style={S.sub}>
              Every USDA policy memo and guidance document CNPReg AI draws on, with the date each was issued.
              Federal regulations (7 CFR) are synced automatically and aren&apos;t listed here.
            </p>
            {state === "ready" && (
              <div style={S.freshness}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "#3fbf7f" }} />
                {latest ? `Latest guidance added \u2014 ${formatDate(latest.toISOString())}` : "Knowledge base is current"}
                <span style={{ color: TL, fontWeight: 500 }}>&middot; {docs.length} sources</span>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer strip */}
        <div style={S.warnStrip}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>&#9888;&#65039;</span>
          <span style={S.warnText}>
            <strong>AI Disclaimer:</strong> This list reflects what&apos;s loaded into the tool, not the full universe of USDA guidance.
            Always verify against official USDA FNS sources before making compliance decisions.
          </span>
        </div>

        {/* Content */}
        <div style={S.wrap}>
          <div style={S.card}>
            {state === "loading" && <p style={S.muted}>Loading sources&hellip;</p>}
            {state === "error" && <p style={{ ...S.muted, color: "#9a2d18" }}>{error} Try refreshing in a moment.</p>}
            {state === "ready" && docs.length === 0 && <p style={S.muted}>No memos or guidance are loaded yet.</p>}

            {state === "ready" && docs.length > 0 && (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
                  <thead>
                    <tr>
                      <th style={S.th}>Type</th>
                      <th style={S.th}>Title</th>
                      <th style={S.th}>Reference</th>
                      <th style={S.th}>Issued</th>
                      <th style={S.th}>Programs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docs.map((d, i) => (
                      <tr key={d.doc_id ?? `${d.memo_number}-${i}`} className="cov-row">
                        <td style={S.td}><Chip type={d.source_type} /></td>
                        <td style={{ ...S.td, fontWeight: 600, color: N, maxWidth: 360 }}>{d.title}</td>
                        <td style={{ ...S.td, color: TM, whiteSpace: "nowrap" }}>
                          {d.memo_number
                            ? (d.source_url
                                ? <a href={d.source_url} target="_blank" rel="noreferrer" style={S.link}>{d.memo_number}</a>
                                : d.memo_number)
                            : "\u2014"}
                        </td>
                        <td style={{ ...S.td, color: TM, whiteSpace: "nowrap" }}>{formatDate(d.effective_date)}</td>
                        <td style={{ ...S.td, color: TM }}>{formatPrograms(d.program)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <p style={S.footnote}>
            Don&apos;t see a memo you need? It may not be loaded yet &mdash; ask in the chat and the answer will tell you what it&apos;s grounded in.
          </p>
        </div>

        {/* Footer */}
        <footer style={S.footer}>
          <LSLogo variant="footer" />
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: TL }}>Not affiliated with USDA FNS</span>
            <span style={{ fontSize: 12, color: N2 }}>&middot;</span>
            <span style={{ fontSize: 12, color: TL }}>Not legal advice</span>
            <span style={{ fontSize: 12, color: N2 }}>&middot;</span>
            <a href="https://www.LSDigitalSolutions.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: TL, textDecoration: "none" }}>&copy; 2026 LS Digital Solutions, LLC</a>
          </div>
        </footer>

      </div>
    </>
  );
}

const S = {
  nav: { background: N, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 40px", height: 68, borderBottom: "3px solid " + A, position: "sticky", top: 0, zIndex: 50 },
  navRight: { display: "flex", alignItems: "center", gap: 16 },
  freePill: { fontSize: 10, color: AL, border: "1px solid " + A, padding: "3px 10px", fontWeight: 700, letterSpacing: 1.5 },
  navLink: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13 },

  hero: { background: N, position: "relative", overflow: "hidden", padding: "48px 48px 40px" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(" + N2 + " 1px, transparent 1px), linear-gradient(90deg, " + N2 + " 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3, pointerEvents: "none" },
  heroInner: { position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto" },
  eyebrow: { fontSize: 10, letterSpacing: 3, color: AL, fontWeight: 700, marginBottom: 12 },
  h1: { fontFamily: "'Georgia',serif", fontSize: "clamp(30px,4vw,46px)", fontWeight: 700, letterSpacing: -0.5, marginBottom: 14, display: "flex" },
  sub: { fontSize: 15, color: "#8ab0c8", lineHeight: 1.7, maxWidth: 620, marginBottom: 22 },
  freshness: { display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 999, background: "rgba(255,255,255,0.08)", color: AL, fontSize: 13, fontWeight: 600 },

  warnStrip: { background: WB, borderBottom: "1px solid " + WBD, padding: "12px 40px", display: "flex", alignItems: "flex-start", gap: 10 },
  warnText: { fontSize: 13, color: "#78350f", lineHeight: 1.6, maxWidth: 900 },

  wrap: { maxWidth: 960, margin: "0 auto", padding: "32px 40px 72px" },
  card: { background: W, border: "1px solid " + BD, borderTop: "4px solid " + A, padding: 22 },
  muted: { color: TL, fontSize: 14 },

  th: { textAlign: "left", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: TL, padding: "0 10px 12px", fontWeight: 700 },
  td: { padding: "13px 10px", borderTop: "1px solid " + BD, fontSize: 14, verticalAlign: "middle" },
  link: { color: A, textDecoration: "none", borderBottom: "1px solid " + BD },

  footnote: { fontSize: 13.5, color: TM, lineHeight: 1.7, marginTop: 20 },

  footer: { background: N3, padding: "20px 40px", borderTop: "1px solid " + N2, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 },
};
