import { useState, useRef, useEffect } from "react";

/* ───────────────────────── DATA ───────────────────────── */

const TOPICS = [
  "Meal Pattern Requirements",
  "Income Eligibility & Certification",
  "Verification Procedures",
  "Procurement Standards (2 CFR 200)",
  "Civil Rights Compliance",
  "Administrative Reviews",
  "Professional Standards",
  "Community Eligibility Provision",
  "CACFP Meal Patterns",
  "Summer Food Service Program",
  "Direct Certification",
  "USDA Foods / Commodity Programs",
];

const SAMPLE_QS = [
  "What are the NSLP meal pattern requirements under 7 CFR 210?",
  "Explain CEP eligibility and how ISP is calculated",
  "What triggers an administrative review?",
  "CACFP infant meal pattern requirements",
];

const VALUE_PROPS = [
  "Completely free — no cost ever",
  "No account or login required",
  "Answers cited to exact CFR sections",
  "Auto-synced from the live eCFR API",
];

const DISCLAIMER_TEXT = "CNPReg AI is an artificial intelligence tool designed to assist state agency administrators with USDA Child Nutrition Program regulatory questions. As with all AI systems, responses may contain errors, omissions, or outdated information. This tool does not constitute legal advice and should not be used as the sole basis for compliance or programmatic decisions. Always verify responses against official USDA FNS regulations, published policy memoranda, and current USDA FNS guidance before taking action. LS Digital Solutions, LLC is not affiliated with, endorsed by, or acting on behalf of the United States Department of Agriculture or the Food and Nutrition Service.";

/* ──────────────────────── PALETTE ────────────────────────
   7 brand essentials (per spec) — the visual spine.            */
const NAVY = "#001e3c";
const BLUE = "#0077b6";
const BLUE_LIGHT = "#4db8e8";
const BLUE_BG = "#e6f4fb";
const WHITE = "#ffffff";
const GREY_BG = "#f4f7fa";
const GREY_TEXT = "#6b8fa8";
/* Semantic support tokens — required by the locked disclaimer +
   tri-color citation design; kept separate from the brand spine. */
const BORDER = "#ccd9e6";
const WARN = "#b45309";
const WARN_BG = "#fffbeb";
const WARN_BD = "#fde68a";
const GUID = "#1f7a3d";
const GUID_BG = "#e7f6ec";
const GUID_BD = "#b7e0c4";

/* Citation chip styling: CFR/default = blue, Memo = amber, Guidance = green.
   Detection is keyword-based on the source string — adjust the matches
   below if your /api/chat source labels use different wording. */
function chipStyle(src) {
  const s = String(src).toLowerCase();
  if (s.includes("memo")) return S.chipMemo;
  if (s.includes("guidance") || s.includes("guide")) return S.chipGuid;
  return S.chipCfr;
}

/* ──────────────────────── APP ──────────────────────── */

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalIntent, setModalIntent] = useState("info"); // "gate" -> open chat on accept
  const [topicsOpen, setTopicsOpen] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* ── API call — PRESERVED EXACTLY from production ── */
  async function sendMessage(text) {
    const userMsg = { role: "user", content: text };
    const newHistory = [...history, userMsg];
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      // Only send recent conversation history — the server handles the rest
      const recentHistory = newHistory.slice(-5);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: recentHistory }),
      });

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        (data.error && (data.error.message || data.error)) ||
        "Debug: HTTP " + res.status + " — " + JSON.stringify(data).substring(0, 200);
      const sources = data.sources || [];

      setHistory([...newHistory, { role: "assistant", content: reply }]);
      setMessages((m) => [...m, { from: "ai", text: reply, sources }]);
    } catch (err) {
      setMessages((m) => [...m, { from: "ai", text: "Connection error. Please try again.", sources: [] }]);
    }

    setLoading(false);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
  }

  function handleSend() {
    if (!input.trim() || loading) return;
    sendMessage(input.trim());
  }

  function fireTopic(t) {
    setTopicsOpen(false);
    sendMessage("Explain the key regulatory requirements for: " + t);
  }

  function openGate() {
    setModalIntent("gate");
    setShowModal(true);
  }
  function openInfo() {
    setModalIntent("info");
    setShowModal(true);
  }
  function acceptModal() {
    setShowModal(false);
    if (modalIntent === "gate") setScreen("chat");
  }

  /* ────────────── LANDING ────────────── */
  if (screen === "landing")
    return (
      <>
        <GlobalCSS />
        <div style={S.landing}>
          <header style={S.header}>
            <a href="https://www.cnpsuite.com" target="_blank" rel="noopener noreferrer" className="cnpsuite-link" style={{ fontSize: 17, gap: 9 }}>
              <SuiteMark size={24} />
              <span>CNP<span style={{ fontFamily: "'Georgia', serif" }}>Suite</span></span>
            </a>
          <div style={S.headerRight}>
              <button style={S.linkBtn} onClick={() => { window.location.href = "/coverage" }}>What's Included</button>   {/* ← ADD THIS LINE */}
              <button style={S.linkBtn} onClick={openInfo}>Disclaimer</button>
              <button style={S.startBtn} onClick={openGate}>Start &rarr;</button>
            </div>
          </header>

          <main style={S.hero}>
            <div style={S.heroBadge}>
              <span style={S.heroDot} /> CHILD NUTRITION PROGRAMS &middot; REGULATORY INTELLIGENCE
            </div>
            <h1 style={S.heroH1}>
              <span style={{ color: WHITE }}>CNPReg</span>
              <span style={{ color: BLUE_LIGHT }}>AI</span>
            </h1>
            <p style={S.heroTagline}>
              Instant, cited regulatory answers for state agency Child Nutrition Program administrators.
            </p>
            <button style={S.ctaPrimary} onClick={openGate}>Start Asking Questions</button>

            <div style={S.props}>
              {VALUE_PROPS.map((p) => (
                <div key={p} style={S.propItem}>
                  <span style={S.propCheck}>&#10003;</span> {p}
                </div>
              ))}
            </div>
            <div style={S.props}>
              {VALUE_PROPS.map((p) => (
                <div key={p} style={S.propItem}>
                  <span style={S.propCheck}>&#10003;</span> {p}
                </div>
              ))}
            </div>
            <button
              onClick={() => { window.location.href = "/coverage" }}
              style={{ background: "none", border: "none", color: BLUE_LIGHT, cursor: "pointer", fontSize: 13.5, marginTop: 22, textDecoration: "underline", letterSpacing: 0.3 }}
            >
              See what&apos;s included &rarr;
            </button>
          </main>

          <div style={S.warnStrip}>
            <span style={{ fontSize: 15, flexShrink: 0 }}>&#9888;&#65039;</span>
            <span style={S.warnText}>
              <strong>AI Disclaimer:</strong> CNPReg AI may produce errors or omissions. Always verify
              guidance against official USDA FNS sources before making compliance decisions. Not legal advice.{" "}
              <button style={S.warnLink} onClick={openInfo}>Full disclaimer</button>
            </span>
          </div>

          <SiteFooter />
        </div>
        {showModal && <DisclaimerModal onClose={() => setShowModal(false)} onAccept={acceptModal} intent={modalIntent} />}
      </>
    );

  /* ────────────── CHAT ────────────── */
  return (
    <>
      <GlobalCSS />
      <style>{"@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}"}</style>
      <div style={S.chatRoot}>
        <div style={S.topbar}>
          <div style={S.topLeft}>
            <button style={S.iconBtn} onClick={() => setTopicsOpen((o) => !o)} title="Topics" aria-label="Topics menu">
              <span style={S.menuLine} /><span style={S.menuLine} /><span style={S.menuLine} />
            </button>
            <div>
              <div style={S.topTitle}>CNPReg<span style={{ color: BLUE_LIGHT }}>AI</span></div>
              <div style={S.topSub}>Child Nutrition &middot; Regulatory Assistant</div>
            </div>
          </div>
          <div style={S.topRight}>
            <button style={S.topPill} onClick={() => setTopicsOpen((o) => !o)}>Topics &#9662;</button>
            {messages.length > 0 && (
              <button style={S.topGhost} onClick={() => { setMessages([]); setHistory([]); }} title="Clear conversation">
                &#10227; Clear
              </button>
            )}
            <button style={S.topWarn} onClick={openInfo} title="Disclaimer">&#9888;</button>
            <button style={S.topGhost} onClick={() => setScreen("landing")}>&#8962; Home</button>
          </div>

          {topicsOpen && (
            <>
              <div style={S.topicsBackdrop} onClick={() => setTopicsOpen(false)} />
              <div style={S.topicsMenu}>
                <div style={S.topicsLabel}>QUICK TOPICS</div>
                {TOPICS.map((t) => (
                  <button key={t} className="topic-row" onClick={() => fireTopic(t)} disabled={loading}>
                    <span style={{ color: BLUE, marginRight: 6 }}>&#8250;</span>{t}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div style={S.messages}>
          {messages.length === 0 && (
            <div style={S.empty}>
              <h2 style={S.emptyH}>What can I help you with?</h2>
              <div style={S.chipRow}>
                {SAMPLE_QS.map((q) => (
                  <button key={q} className="prompt-chip" onClick={() => sendMessage(q)} disabled={loading}>{q}</button>
                ))}
              </div>
              <div style={S.emptyWarn}>
                <span style={{ fontSize: 13, flexShrink: 0 }}>&#9888;</span>
                <span style={{ fontSize: 12, color: "#78350f", lineHeight: 1.6 }}>
                  AI may make mistakes. Verify all guidance against official USDA FNS sources before making compliance decisions.
                </span>
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "user" ? "flex-end" : "flex-start", gap: 4 }}>
              {msg.from === "ai" && <span style={S.msgLabel}>CNPReg AI</span>}
              <div
                style={msg.from === "user" ? S.userBubble : S.aiBubble}
                dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>") }}
              />
              {msg.from === "ai" && msg.sources && msg.sources.length > 0 && (
                <div style={S.sources}>
                  <span style={S.sourcesLabel}>Sources:</span>
                  {msg.sources.map((src, idx) => (
                    <span key={idx} style={chipStyle(src)}>{src}</span>
                  ))}
                </div>
              )}
              {msg.from === "user" && <span style={{ ...S.msgLabel, textAlign: "right" }}>You</span>}
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
              <span style={S.msgLabel}>CNPReg AI</span>
              <div style={S.aiBubble}>
                <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "2px 0" }}>
                  {[0, 0.15, 0.3].map((d, i) => (
                    <span key={i} style={{ width: 7, height: 7, background: BLUE_LIGHT, borderRadius: "50%", display: "inline-block", animation: "bounce 1s " + d + "s infinite ease-in-out" }} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div style={S.inputArea}>
          <div style={S.inputWrap}>
            <textarea
              ref={inputRef}
              style={S.textarea}
              placeholder="Ask a Child Nutrition Program regulatory question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              rows={2}
              disabled={loading}
            />
            <button
              style={{ ...S.sendBtn, background: input.trim() && !loading ? BLUE : "#1a3a5c", cursor: input.trim() && !loading ? "pointer" : "not-allowed" }}
              onClick={handleSend}
              disabled={loading || !input.trim()}
            >&#8593;</button>
          </div>
        </div>

        <SiteFooter />
      </div>
      {showModal && <DisclaimerModal onClose={() => setShowModal(false)} onAccept={acceptModal} intent={modalIntent} />}
    </>
  );
}

/* ──────────────────── DISCLAIMER MODAL ──────────────────── */
function DisclaimerModal({ onClose, onAccept, intent }) {
  return (
    <>
      <GlobalCSS />
      <div style={S.overlay}>
        <div style={S.modal}>
          <div style={S.modalHeader}>
            <span style={{ fontFamily: "'Georgia',serif", fontSize: 18, color: WHITE }}>
              {intent === "gate" ? "Before You Begin" : "AI Disclaimer"}
            </span>
            <button style={{ background: "none", border: "none", color: GREY_TEXT, cursor: "pointer", fontSize: 20 }} onClick={onClose}>&#10005;</button>
          </div>
          <div style={{ padding: "26px 28px 24px" }}>
            <p style={{ fontSize: 13.5, color: NAVY, lineHeight: 1.85, marginBottom: 18 }}>{DISCLAIMER_TEXT}</p>
            <div style={{ background: WARN_BG, border: "1px solid " + WARN_BD, padding: "12px 16px", fontSize: 13, color: "#78350f", lineHeight: 1.65, marginBottom: 22 }}>
              By using CNPReg AI, you acknowledge that AI responses may contain errors and agree to verify all
              regulatory guidance against official USDA FNS sources before making compliance or programmatic decisions.
            </div>
            <button style={S.modalAccept} onClick={onAccept}>I Understand</button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ──────────────────────── LOGO ──────────────────────── */
function LSLogo() {
  return (
    <a
      href="https://www.lsdigitalsolutions.com"
      target="_blank"
      rel="noopener noreferrer"
      title="LS Digital Solutions"
      style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
    >
      <div style={{ width: 30, height: 30, background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 15, fontWeight: 700, color: WHITE, lineHeight: 1 }}>LS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 12, fontWeight: 700, color: WHITE, letterSpacing: 1.5, textTransform: "uppercase" }}>Digital Solutions</span>
        <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: 8.5, color: GREY_TEXT, letterSpacing: 0.8, textTransform: "uppercase" }}>Child Nutrition Program Technology</span>
      </div>
    </a>
  );
}

/* ──────────────────────── SITE FOOTER ────────────────────────
   The CNPSuite brand now leads the landing header (top-left, linked
   to the hub). The footer carries the LS Digital Solutions lockup,
   centered, as the quiet company credit on both screens. The lockup
   links to the company site and opens in a new tab. */
function SuiteMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" style={{ flexShrink: 0, display: "block" }}>
      <rect x="6" y="6" width="40" height="40" rx="9" fill="#3475B4" />
      <rect x="54" y="6" width="40" height="40" rx="9" fill="#32533D" />
      <rect x="6" y="54" width="40" height="40" rx="9" fill="#BD8D29" />
      <rect x="54" y="54" width="40" height="40" rx="9" fill="none" stroke={GREY_TEXT} strokeWidth="6" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <footer style={S.siteFooter}>
      <LSLogo />
    </footer>
  );
}

/* ──────────────────────── GLOBAL CSS ──────────────────────── */
function GlobalCSS() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { height: 100%; }
      body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: ${GREY_BG}; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-thumb { background: #c0d4e8; border-radius: 3px; }
      button, textarea { font-family: inherit; }
      .prompt-chip { background: ${BLUE_BG}; border: 1px solid #b3d9ef; color: ${NAVY}; padding: 8px 14px; font-size: 13px; cursor: pointer; transition: background 0.15s; }
      .prompt-chip:hover:not(:disabled) { background: #b3d9ef; }
      .prompt-chip:disabled { opacity: 0.5; cursor: not-allowed; }
      .topic-row { display: block; width: 100%; text-align: left; background: transparent; border: none; color: ${NAVY}; padding: 9px 16px; font-size: 13px; cursor: pointer; transition: background 0.12s; }
      .topic-row:hover:not(:disabled) { background: ${BLUE_BG}; }
      .topic-row:disabled { opacity: 0.45; cursor: not-allowed; }
      .footer-link { color: ${GREY_TEXT}; font-size: 12px; text-decoration: none; letter-spacing: 0.3px; transition: color 0.15s; }
      .footer-link:hover { color: ${BLUE_LIGHT}; }
      .cnpsuite-link { display: inline-flex; align-items: center; gap: 7px; color: ${WHITE}; font-size: 13px; font-weight: 700; text-decoration: none; transition: opacity 0.15s; }
      .cnpsuite-link:hover { opacity: 0.8; }
    `}</style>
  );
}

/* ──────────────────────── STYLES ──────────────────────── */
const S = {
  /* landing */
  landing: { background: NAVY, minHeight: "100vh", display: "flex", flexDirection: "column" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 28px", height: 60, borderBottom: "1px solid #002a52", flexShrink: 0 },
  headerRight: { display: "flex", alignItems: "center", gap: 14 },
  linkBtn: { background: "none", border: "none", color: GREY_TEXT, cursor: "pointer", fontSize: 13 },
  startBtn: { background: BLUE, color: WHITE, border: "none", padding: "8px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3 },
  hero: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "48px 24px" },
  heroBadge: { display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: 2, marginBottom: 22 },
  heroDot: { width: 6, height: 6, background: BLUE_LIGHT, borderRadius: "50%", display: "inline-block" },
  heroH1: { fontFamily: "'Georgia',serif", fontSize: "clamp(46px,7vw,76px)", fontWeight: 700, letterSpacing: -1, marginBottom: 18, display: "flex" },
  heroTagline: { fontSize: "clamp(16px,2.2vw,20px)", color: "#8ab0c8", fontFamily: "'Georgia',serif", fontStyle: "italic", marginBottom: 30, lineHeight: 1.5, maxWidth: 560 },
  ctaPrimary: { background: BLUE, color: WHITE, border: "none", padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3, marginBottom: 36 },
  props: { display: "flex", flexWrap: "wrap", gap: "12px 26px", justifyContent: "center", maxWidth: 620 },
  propItem: { fontSize: 13.5, color: "#8ab0c8", display: "flex", alignItems: "center", gap: 7 },
  propCheck: { color: BLUE_LIGHT, fontWeight: 700 },
  warnStrip: { background: WARN_BG, borderTop: "1px solid " + WARN_BD, padding: "12px 28px", display: "flex", alignItems: "flex-start", gap: 10, flexShrink: 0 },
  warnText: { fontSize: 12.5, color: "#78350f", lineHeight: 1.6 },
  warnLink: { background: "none", border: "none", color: WARN, fontWeight: 700, cursor: "pointer", fontSize: 12.5, padding: 0, textDecoration: "underline" },

  /* site footer */
  siteFooter: { background: NAVY, borderTop: "1px solid #002a52", padding: "13px 28px", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexShrink: 0, flexWrap: "wrap" },

  /* chat shell */
  chatRoot: { display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", background: GREY_BG },
  topbar: { position: "relative", background: NAVY, borderBottom: "2px solid " + BLUE, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", height: 58, flexShrink: 0 },
  topLeft: { display: "flex", alignItems: "center", gap: 12 },
  iconBtn: { background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 4 },
  menuLine: { display: "block", width: 20, height: 2, background: "#8ab0c8" },
  topTitle: { fontFamily: "'Georgia',serif", fontSize: 18, fontWeight: 700, color: WHITE, lineHeight: 1 },
  topSub: { fontSize: 11, color: GREY_TEXT, letterSpacing: 0.5, marginTop: 2 },
  topRight: { display: "flex", alignItems: "center", gap: 10 },
  topPill: { background: "rgba(0,119,182,0.15)", border: "1px solid rgba(0,119,182,0.4)", color: BLUE_LIGHT, padding: "6px 14px", fontSize: 12.5, fontWeight: 600, cursor: "pointer" },
  topGhost: { background: "none", border: "none", color: GREY_TEXT, cursor: "pointer", fontSize: 13 },
  topWarn: { background: "rgba(180,83,9,0.12)", border: "1px solid rgba(180,83,9,0.35)", color: "#f59e0b", padding: "5px 11px", fontSize: 13, cursor: "pointer" },

  /* topics dropdown */
  topicsBackdrop: { position: "fixed", inset: 0, zIndex: 40 },
  topicsMenu: { position: "absolute", top: 58, left: 12, width: 290, background: WHITE, border: "1px solid " + BORDER, boxShadow: "0 18px 50px rgba(0,10,25,0.28)", zIndex: 50, padding: "8px 0", maxHeight: "70vh", overflowY: "auto" },
  topicsLabel: { fontSize: 9.5, letterSpacing: 2, color: GREY_TEXT, fontWeight: 700, padding: "6px 16px 8px" },

  /* messages */
  messages: { flex: 1, overflowY: "auto", padding: "28px 32px 12px", display: "flex", flexDirection: "column", gap: 20 },
  empty: { margin: "auto", textAlign: "center", maxWidth: 560 },
  emptyH: { fontFamily: "'Georgia',serif", fontSize: 24, color: NAVY, marginBottom: 22 },
  chipRow: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 24 },
  emptyWarn: { background: WARN_BG, border: "1px solid " + WARN_BD, borderLeft: "4px solid " + WARN, padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: 8, textAlign: "left", maxWidth: 480, margin: "0 auto" },
  msgLabel: { fontSize: 10.5, color: GREY_TEXT, letterSpacing: 0.3 },
  userBubble: { background: NAVY, color: WHITE, padding: "12px 18px", maxWidth: "68%", fontSize: 14, lineHeight: 1.65 },
  aiBubble: { background: WHITE, border: "1px solid " + BORDER, borderLeft: "3px solid " + BLUE, padding: "14px 18px", maxWidth: "82%", fontSize: 14, color: NAVY, lineHeight: 1.85 },

  /* citation chips */
  sources: { marginTop: 8, paddingTop: 10, borderTop: "1px solid " + BORDER, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", maxWidth: "82%" },
  sourcesLabel: { fontSize: 10, color: GREY_TEXT, textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 700, marginRight: 4 },
  chipCfr: { fontSize: 11, padding: "3px 8px", background: BLUE_BG, color: NAVY, border: "1px solid #b3d9ef", fontFamily: "monospace" },
  chipMemo: { fontSize: 11, padding: "3px 8px", background: WARN_BG, color: WARN, border: "1px solid " + WARN_BD, fontFamily: "monospace" },
  chipGuid: { fontSize: 11, padding: "3px 8px", background: GUID_BG, color: GUID, border: "1px solid " + GUID_BD, fontFamily: "monospace" },

  /* input */
  inputArea: { background: WHITE, borderTop: "1px solid " + BORDER, padding: "14px 20px 16px", flexShrink: 0 },
  inputWrap: { display: "flex", gap: 10, alignItems: "flex-end", background: GREY_BG, border: "1.5px solid " + BORDER, padding: "10px 14px" },
  textarea: { flex: 1, background: "transparent", border: "none", outline: "none", resize: "none", color: NAVY, fontSize: 14, lineHeight: 1.6, maxHeight: 120, overflowY: "auto" },
  sendBtn: { border: "none", color: WHITE, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, transition: "background 0.2s" },

  /* modal */
  overlay: { position: "fixed", inset: 0, background: "rgba(0,10,25,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 },
  modal: { background: WHITE, maxWidth: 560, width: "100%", border: "3px solid " + BLUE, boxShadow: "0 32px 80px rgba(0,0,0,0.5)" },
  modalHeader: { background: NAVY, padding: "18px 24px", borderBottom: "3px solid " + BLUE, display: "flex", justifyContent: "space-between", alignItems: "center" },
  modalAccept: { width: "100%", padding: 13, fontSize: 14, fontWeight: 700, background: BLUE, color: WHITE, border: "none", cursor: "pointer" },
};
