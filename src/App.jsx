import { useState, useRef, useEffect } from "react";

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

const DISCLAIMER_TEXT = `CNPReg AI is an artificial intelligence tool designed to assist state agency administrators with USDA Child Nutrition Program regulatory questions. As with all AI systems, responses may contain errors, omissions, or outdated information. This tool does not constitute legal advice and should not be used as the sole basis for compliance or programmatic decisions. Always verify responses against official USDA FNS regulations (Code of Federal Regulations), published policy memoranda, and current USDA FNS guidance before taking action. LS Digital Solutions, LLC is not affiliated with, endorsed by, or acting on behalf of the United States Department of Agriculture or the Food and Nutrition Service.`;

// ── BRAND TOKENS ─────────────────────────────────────────────────────────────
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

export default function App() {
  const [screen, setScreen]   = useState("landing");
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const userMsg    = { role: "user", content: text };
    const newHistory = [...history, userMsg];
    setMessages(m => [...m, { from: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 1000,
          system: `You are CNPReg AI, a free regulatory intelligence tool developed by LS Digital Solutions, LLC for state agency administrators of USDA Child Nutrition Programs.

Programs covered: NSLP, SBP, CACFP, SFSP, FFVP, USDA Foods, and related programs.

Regulatory knowledge base:
- 7 CFR Parts 210 (NSLP), 215 (SMP), 220 (SBP), 225 (SFSP), 226 (CACFP), 245 (Eligibility), 250 (USDA Foods)
- 2 CFR Part 200 (Procurement / Uniform Guidance)
- 7 CFR Part 15 (Civil Rights)
- USDA FNS Policy Memos: SP, CACFP, SFSP numbered series
- Administrative review protocols and corrective action requirements
- CEP, Direct Certification, Provision 2 & 3 guidance

Response standards:
- Always cite CFR sections precisely (e.g., 7 CFR § 210.10(c)(2)) and FNS memo numbers (e.g., SP 30-2012)
- Flag when state agency discretion applies or when policy varies by state
- Note any recent changes, pending rulemaking, or areas of regulatory flux
- If uncertain about any detail, say so explicitly — never guess on compliance matters
- Structure responses clearly with regulatory citations bolded

IMPORTANT: End every response with this exact line:
"⚠️ Verify all guidance against official USDA FNS sources before making compliance decisions."`,
          messages: newHistory,
        }),
      });

      const data  = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text
        || `Error: ${data.error?.message || data.error?.type || JSON.stringify(data)}`;

      setHistory([...newHistory, { role: "assistant", content: reply }]);
      setMessages(m => [...m, { from: "ai", text: reply }]);
    } catch {
      setMessages(m => [...m, { from: "ai", text: "⚠️ Connection error. Please try again." }]);
    }

    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function handleSend() {
    if (!input.trim() || loading) return;
    sendMessage(input.trim());
  }

  // ── DISCLAIMER GATE ────────────────────────────────────────────────────────
  if (screen === "chat" && !accepted) return (
    <>
      <GlobalCSS />
      <div style={S.gate}>
        <div style={S.gateCard}>
          <div style={S.gateHeader}>
            <img src="/logo.jpg" alt="LS Digital Solutions, LLC" style={S.gateLogo} />
          </div>
          <div style={S.gateBody}>
            <div style={S.gateProduct}>
              <span style={S.productName}>CNPReg</span>
              <span style={S.productAI}>AI</span>
              <span style={S.productSub}>Child Nutrition Program Regulatory Intelligence</span>
            </div>
            <div style={S.disclaimerBox}>
              <div style={S.disclaimerTitle}>⚠️ Important — Please Read Before Proceeding</div>
              <p style={S.disclaimerText}>{DISCLAIMER_TEXT}</p>
            </div>
            <p style={S.acknowledgeText}>
              By clicking below, you acknowledge that AI responses may contain errors and agree
              to verify all regulatory guidance against official USDA FNS sources before making
              compliance or programmatic decisions.
            </p>
            <button style={S.gateBtn} onClick={() => setAccepted(true)}>
              I Understand — Open CNPReg AI →
            </button>
            <button style={S.gateBack} onClick={() => setScreen("landing")}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // ── LANDING ────────────────────────────────────────────────────────────────
  if (screen === "landing") return (
    <>
      <GlobalCSS />
      <div style={S.landing}>

        {/* NAV */}
        <nav style={S.nav}>
          <img src="/logo.jpg" alt="LS Digital Solutions, LLC" style={S.navLogo} />
          <div style={S.navRight}>
            <span style={S.freePill}>FREE TOOL</span>
            <button style={S.navLink} onClick={() => setShowModal(true)}>Disclaimer</button>
            <button style={S.navCta} onClick={() => setScreen("chat")}>Open CNPReg AI →</button>
          </div>
        </nav>

        {/* HERO */}
        <div style={S.hero}>
          <div style={S.heroGrid} />
          <div style={S.heroInner}>
            <div style={S.heroBadge}>
              <span style={S.heroDot} />
              CHILD NUTRITION PROGRAMS · REGULATORY INTELLIGENCE
            </div>
            <h1 style={S.heroH1}>
              <span style={{ color: W }}>CNPReg</span>
              <span style={{ color: AL }}>AI</span>
            </h1>
            <p style={S.heroTagline}>
              Instant regulatory answers for state agency<br />
              Child Nutrition Program administrators.
            </p>
            <p style={S.heroSub}>
              Grounded in 7 CFR regulations, USDA FNS policy memos, and program
              guidance — cited, precise, and completely free.
            </p>
            <div style={S.heroCtas}>
              <button style={S.ctaPrimary} onClick={() => setScreen("chat")}>
                Start Asking Questions →
              </button>
              <button style={S.ctaSecondary} onClick={() => setShowModal(true)}>
                Read AI Disclaimer
              </button>
            </div>
            <div style={S.heroChecks}>
              {["No account required", "No subscription", "No cost — ever", "No data sold"].map(t => (
                <span key={t} style={S.heroCheck}>
                  <span style={{ color: AL, fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div style={S.heroPanel}>
            <div style={S.panelLabel}>SAMPLE QUERIES</div>
            {SAMPLE_QS.map((q, i) => (
              <div key={i} style={S.panelQ} onClick={() => setScreen("chat")}>
                <span style={{ color: A, fontWeight: 700, flexShrink: 0 }}>›</span>
                <span>{q}</span>
              </div>
            ))}
            <div style={{ margin: "18px 0", borderTop: `1px solid ${N2}` }} />
            <div style={S.panelLabel}>REGULATORY COVERAGE</div>
            {[
              "7 CFR Parts 210 · 215 · 220 · 225 · 226 · 245 · 250",
              "2 CFR Part 200 (Procurement)",
              "7 CFR Part 15 (Civil Rights)",
              "USDA FNS SP / CACFP / SFSP Memos",
            ].map(l => (
              <div key={l} style={S.panelCovLine}>{l}</div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER STRIP */}
        <div style={S.warnStrip}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
          <span style={S.warnText}>
            <strong>AI Disclaimer:</strong> CNPReg AI may produce errors or omissions. Always
            verify regulatory guidance against official USDA FNS sources before making compliance
            decisions. Not legal advice.{" "}
            <button style={S.warnLink} onClick={() => setShowModal(true)}>
              Full disclaimer →
            </button>
          </span>
        </div>

        {/* HOW IT WORKS */}
        <div style={{ padding: "64px 0", background: W }}>
          <div style={S.inner}>
            <div style={S.eyebrow}>HOW IT WORKS</div>
            <h2 style={S.h2}>Built for precision. Designed for speed.</h2>
            <div style={S.cardGrid}>
              {[
                { n: "01", title: "Ask any regulatory question", body: "Type any question about meal patterns, eligibility, procurement, administrative reviews, civil rights, or program operations." },
                { n: "02", title: "Receive cited answers", body: "Responses reference exact CFR sections and FNS policy memo numbers — so you can trace every claim to an official source." },
                { n: "03", title: "Verify before you act", body: "Use answers as a research accelerator. Always confirm against official USDA FNS regulations before making compliance decisions." },
              ].map(f => (
                <div key={f.n} style={S.featureCard}>
                  <div style={S.featureNum}>{f.n}</div>
                  <div style={S.featureTitle}>{f.title}</div>
                  <div style={S.featureBody}>{f.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TOPICS */}
        <div style={{ padding: "52px 0", background: OF, borderTop: `1px solid ${BD}`, borderBottom: `1px solid ${BD}` }}>
          <div style={S.inner}>
            <div style={S.eyebrow}>COVERAGE AREAS</div>
            <h2 style={S.h2}>Every major program area</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {TOPICS.map(t => (
                <span key={t} style={S.topicTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER CTA */}
        <div style={{ background: N, padding: "56px 40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(20px,3vw,30px)", color: W, marginBottom: 10 }}>
            Ready to get answers?
          </h2>
          <p style={{ color: "#8ab0c8", fontSize: 15, marginBottom: 28 }}>
            No login. No cost. Just regulatory intelligence.
          </p>
          <button style={S.ctaPrimary} onClick={() => setScreen("chat")}>
            Open CNPReg AI →
          </button>
        </div>

        {/* FOOTER */}
        <footer style={S.footer}>
          <img src="/logo.jpg" alt="LS Digital Solutions, LLC"
            style={{ height: 34, objectFit: "contain", filter: "brightness(0) invert(0.55)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <button style={S.footerLink} onClick={() => setShowModal(true)}>AI Disclaimer</button>
            {["·", "Not affiliated with USDA FNS", "·", "Not legal advice", "·", "© 2026 LS Digital Solutions, LLC"].map((t, i) => (
              <span key={i} style={{ fontSize: 12, color: i % 2 === 0 ? N2 : TL }}>{t}</span>
            ))}
          </div>
        </footer>
      </div>

      {showModal && (
        <DisclaimerModal
          onClose={() => setShowModal(false)}
          onAccept={() => { setShowModal(false); setScreen("chat"); }}
        />
      )}
    </>
  );

  // ── CHAT ──────────────────────────────────────────────────────────────────
  return (
    <>
      <GlobalCSS />
      <style>{`@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}`}</style>
      <div style={S.app}>

        {/* SIDEBAR */}
        {sidebarOpen && (
          <aside style={S.sidebar}>
            <div style={S.sideHeader}>
              <img src="/logo.jpg" alt="LS Digital Solutions, LLC" style={S.sideLogo} />
            </div>
            <div style={S.sideProduct}>
              <span style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 700, color: W }}>CNPReg</span>
              <span style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 700, color: AL }}>AI</span>
              <div style={{ fontSize: 10, color: TL, letterSpacing: 1, marginTop: 3 }}>Regulatory Intelligence</div>
            </div>
            <div style={S.sideDivider} />
            <div style={S.sideLabel}>QUICK TOPICS</div>
            {TOPICS.map(t => (
              <button key={t} className="side-btn"
                onClick={() => sendMessage(`Explain the key regulatory requirements for: ${t}`)}
                disabled={loading}>
                <span style={{ color: A, marginRight: 4 }}>›</span>{t}
              </button>
            ))}
            <div style={S.sideDivider} />
            <div style={S.sideLabel}>KNOWLEDGE BASE</div>
            {["7 CFR Parts 210–250", "2 CFR Part 200", "FNS Policy Memos", "Updated: May 2025"].map(l => (
              <div key={l} style={{ fontSize: 10.5, color: "#3a5570", padding: "2px 16px", fontFamily: "monospace" }}>{l}</div>
            ))}
            <button style={S.sideWarnBtn} onClick={() => setShowModal(true)}>
              ⚠️ View Disclaimer
            </button>
          </aside>
        )}

        {/* MAIN */}
        <div style={S.main}>

          {/* TOP BAR */}
          <div style={S.topbar}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <button style={S.menuBtn} onClick={() => setSidebarOpen(o => !o)}>
                <span style={S.menuLine} /><span style={S.menuLine} /><span style={S.menuLine} />
              </button>
              <div>
                <div style={{ fontFamily: "'Georgia',serif", fontSize: 18, fontWeight: 700, color: W, lineHeight: 1 }}>
                  CNPReg<span style={{ color: AL }}>AI</span>
                </div>
                <div style={{ fontSize: 11, color: TL, letterSpacing: 0.5 }}>
                  Child Nutrition · Regulatory Assistant
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button style={S.topWarnBtn} onClick={() => setShowModal(true)}>⚠️ Disclaimer</button>
              <button style={S.topHomeBtn} onClick={() => setScreen("landing")}>Home</button>
            </div>
          </div>

          {/* MESSAGES */}
          <div style={S.messages}>
            {messages.length === 0 && (
              <div style={S.empty}>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 700, color: N }}>CNPReg</span>
                  <span style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 700, color: A }}>AI</span>
                </div>
                <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 20, color: N, marginBottom: 10 }}>
                  What regulatory question can I help with?
                </h2>
                <p style={{ fontSize: 14, color: TM, lineHeight: 1.7, marginBottom: 22 }}>
                  Type any USDA Child Nutrition Program regulatory question. Answers cite CFR
                  sections and USDA FNS policy memos.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 20 }}>
                  {SAMPLE_QS.map(q => (
                    <button key={q} className="prompt-chip" onClick={() => sendMessage(q)} disabled={loading}>{q}</button>
                  ))}
                </div>
                <div style={S.emptyWarn}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>⚠️</span>
                  <span style={{ fontSize: 12, color: "#78350f", lineHeight: 1.6 }}>
                    AI may make mistakes. Verify all guidance against official USDA FNS sources
                    before making compliance decisions.
                  </span>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "user" ? "flex-end" : "flex-start", gap: 4 }}>
                {msg.from === "ai" && (
                  <span style={S.msgLabel}>CNPReg AI · LS Digital Solutions, LLC</span>
                )}
                <div
                  style={msg.from === "user" ? S.userBubble : S.aiBubble}
                  dangerouslySetInnerHTML={{
                    __html: msg.text
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br/>"),
                  }}
                />
                {msg.from === "user" && (
                  <span style={{ ...S.msgLabel, textAlign: "right" }}>You</span>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                <span style={S.msgLabel}>CNPReg AI · LS Digital Solutions, LLC</span>
                <div style={S.aiBubble}>
                  <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "2px 0" }}>
                    {[0, 0.15, 0.3].map((d, i) => (
                      <span key={i} style={{
                        width: 7, height: 7, background: AL, borderRadius: "50%",
                        display: "inline-block",
                        animation: `bounce 1s ${d}s infinite ease-in-out`,
                      }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div style={S.inputArea}>
            <div style={S.inputWrap}>
              <textarea
                ref={inputRef}
                style={S.textarea}
                placeholder="Ask a Child Nutrition Program regulatory question…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
                }}
                rows={2}
                disabled={loading}
              />
              <button
                style={{
                  ...S.sendBtn,
                  background: input.trim() && !loading ? A : "#1a3a5c",
                  cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                }}
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >
                ↑
              </button>
            </div>
            <div style={S.inputMeta}>
              <span>⚠️ AI may make mistakes · Verify with official USDA FNS sources · Shift+Enter for new line</span>
              <span style={{ color: AL, fontWeight: 600 }}>CNPReg AI · LS Digital Solutions, LLC</span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <DisclaimerModal
          onClose={() => setShowModal(false)}
          onAccept={() => setShowModal(false)}
        />
      )}
    </>
  );
}

// ── DISCLAIMER MODAL ─────────────────────────────────────────────────────────
function DisclaimerModal({ onClose, onAccept }) {
  return (
    <>
      <GlobalCSS />
      <div style={S.overlay}>
        <div style={S.modal}>
          <div style={S.modalHeader}>
            <span style={{ fontFamily: "'Georgia',serif", fontSize: 18, color: W }}>⚠️ AI Disclaimer</span>
            <button style={{ background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 20 }} onClick={onClose}>✕</button>
          </div>
          <div style={{ padding: "28px 28px 24px" }}>
            <p style={{ fontSize: 13.5, color: TM, lineHeight: 1.85, marginBottom: 18 }}>{DISCLAIMER_TEXT}</p>
            <div style={{ background: WB, border: `1px solid ${WBD}`, padding: "12px 16px", fontSize: 13, color: "#78350f", lineHeight: 1.65, marginBottom: 22 }}>
              By using CNPReg AI, you acknowledge that AI responses may contain errors and agree to
              verify all regulatory guidance against official USDA FNS sources before making
              compliance or programmatic decisions.
            </div>
            <button style={{ ...S.ctaPrimary, width: "100%", padding: 13, fontSize: 14 }} onClick={onAccept}>
              I Understand
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── GLOBAL CSS ────────────────────────────────────────────────────────────────
function GlobalCSS() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { height: 100%; }
      body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #f4f7fa; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-thumb { background: #c0d4e8; border-radius: 3px; }
      button { font-family: inherit; }
      textarea { font-family: inherit; }

      .side-btn {
        display: block; width: 100%; text-align: left;
        background: transparent; border: none; border-left: 2px solid transparent;
        color: #7a9bbf; padding: 6px 16px; font-size: 11.5px;
        cursor: pointer; transition: all 0.15s; margin-bottom: 1px;
      }
      .side-btn:hover:not(:disabled) {
        background: rgba(0,119,182,0.15);
        color: #ffffff;
        border-left-color: #0077b6;
      }
      .side-btn:disabled { opacity: 0.4; cursor: not-allowed; }

      .prompt-chip {
        background: #e6f4fb; border: 1px solid #b3d9ef; color: #001e3c;
        padding: 8px 14px; font-size: 13px; cursor: pointer; transition: background 0.15s;
      }
      .prompt-chip:hover:not(:disabled) { background: #b3d9ef; }
      .prompt-chip:disabled { opacity: 0.5; cursor: not-allowed; }
    `}</style>
  );
}

// ── STYLE OBJECTS ─────────────────────────────────────────────────────────────
const S = {
  // GATE
  gate: { background: N3, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 },
  gateCard: { background: N, maxWidth: 560, width: "100%", border: `1px solid ${N2}`, borderTop: `4px solid ${A}`, boxShadow: "0 24px 80px rgba(0,0,0,0.5)" },
  gateHeader: { background: N3, padding: "24px 28px", borderBottom: `1px solid ${N2}`, display: "flex", justifyContent: "center" },
  gateLogo: { height: 48, objectFit: "contain" },
  gateBody: { padding: "28px 32px 32px" },
  gateProduct: { display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 0, marginBottom: 22 },
  productName: { fontFamily: "'Georgia',serif", fontSize: 28, fontWeight: 700, color: W },
  productAI: { fontFamily: "'Georgia',serif", fontSize: 28, fontWeight: 700, color: AL },
  productSub: { width: "100%", fontSize: 12, color: TL, letterSpacing: 1, marginTop: 2 },
  disclaimerBox: { background: WB, border: `1px solid ${WBD}`, borderLeft: `4px solid ${WN}`, padding: "16px 18px", marginBottom: 18 },
  disclaimerTitle: { fontSize: 12, fontWeight: 700, color: WN, marginBottom: 8, letterSpacing: 0.5 },
  disclaimerText: { fontSize: 12.5, color: "#78350f", lineHeight: 1.8 },
  acknowledgeText: { fontSize: 12.5, color: TL, lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 },
  gateBtn: { width: "100%", padding: 14, fontSize: 15, fontWeight: 700, background: A, color: W, border: "none", cursor: "pointer", marginBottom: 10, letterSpacing: 0.3 },
  gateBack: { width: "100%", background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13, padding: 8 },

  // LANDING
  landing: { background: OF, minHeight: "100vh" },
  nav: { background: N, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 40px", height: 68, borderBottom: `3px solid ${A}`, position: "sticky", top: 0, zIndex: 50 },
  navLogo: { height: 40, objectFit: "contain" },
  navRight: { display: "flex", alignItems: "center", gap: 16 },
  freePill: { fontSize: 10, color: AL, border: `1px solid ${A}`, padding: "3px 10px", fontWeight: 700, letterSpacing: 1.5 },
  navLink: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13 },
  navCta: { background: A, color: W, border: "none", padding: "10px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3 },

  hero: { background: N, display: "flex", alignItems: "stretch", minHeight: 480, position: "relative", overflow: "hidden" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${N2} 1px, transparent 1px), linear-gradient(90deg, ${N2} 1px, transparent 1px)`, backgroundSize: "40px 40px", opacity: 0.3, pointerEvents: "none" },
  heroInner: { flex: 1, padding: "64px 48px 64px", position: "relative", zIndex: 1 },
  heroBadge: { display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: AL, fontWeight: 700, letterSpacing: 2, marginBottom: 24 },
  heroDot: { width: 6, height: 6, background: AL, borderRadius: "50%", display: "inline-block" },
  heroH1: { fontFamily: "'Georgia',serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 700, letterSpacing: -1, marginBottom: 16, display: "flex" },
  heroTagline: { fontSize: "clamp(17px,2vw,22px)", color: W, fontFamily: "'Georgia',serif", fontStyle: "italic", marginBottom: 14, lineHeight: 1.4 },
  heroSub: { fontSize: 15, color: "#8ab0c8", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 },
  heroCtas: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 },
  ctaPrimary: { background: A, color: W, border: "none", padding: "13px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3, transition: "background 0.2s" },
  ctaSecondary: { background: "transparent", color: W, border: `1.5px solid rgba(255,255,255,0.25)`, padding: "12px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer" },
  heroChecks: { display: "flex", flexWrap: "wrap", gap: "8px 22px" },
  heroCheck: { fontSize: 13, color: "#8ab0c8", display: "flex", alignItems: "center", gap: 6 },

  heroPanel: { width: 280, background: "rgba(0,10,25,0.6)", borderLeft: `1px solid ${N2}`, padding: "40px 24px", position: "relative", zIndex: 1, flexShrink: 0 },
  panelLabel: { fontSize: 9, letterSpacing: 3, color: TL, fontWeight: 700, marginBottom: 14 },
  panelQ: { fontSize: 12.5, color: "#8ab0c8", padding: "10px 0", borderBottom: `1px solid rgba(255,255,255,0.05)`, cursor: "pointer", display: "flex", gap: 8, lineHeight: 1.5 },
  panelCovLine: { fontSize: 11, color: TL, fontFamily: "monospace", marginBottom: 5, lineHeight: 1.5 },

  warnStrip: { background: WB, borderBottom: `1px solid ${WBD}`, padding: "12px 40px", display: "flex", alignItems: "flex-start", gap: 10 },
  warnText: { fontSize: 13, color: "#78350f", lineHeight: 1.6 },
  warnLink: { background: "none", border: "none", color: WN, fontWeight: 700, cursor: "pointer", fontSize: 13, padding: 0, textDecoration: "underline" },

  inner: { maxWidth: 960, margin: "0 auto", padding: "0 40px" },
  eyebrow: { fontSize: 10, letterSpacing: 3, color: A, fontWeight: 700, marginBottom: 10 },
  h2: { fontFamily: "'Georgia',serif", fontSize: "clamp(22px,3vw,32px)", color: N, marginBottom: 36 },
  cardGrid: { display: "flex", gap: 20, flexWrap: "wrap" },
  featureCard: { flex: 1, minWidth: 220, border: `1px solid ${BD}`, borderTop: `4px solid ${A}`, padding: "26px 22px", background: OF },
  featureNum: { fontFamily: "monospace", fontSize: 28, color: BD, fontWeight: 700, marginBottom: 10, lineHeight: 1 },
  featureTitle: { fontFamily: "'Georgia',serif", fontSize: 17, color: N, marginBottom: 10 },
  featureBody: { fontSize: 13.5, color: TM, lineHeight: 1.7 },
  topicTag: { background: AP, border: `1px solid #b3d9ef`, color: N, padding: "7px 14px", fontSize: 13, fontWeight: 500 },

  footer: { background: N3, padding: "20px 40px", borderTop: `1px solid ${N2}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 },
  footerLink: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 12 },

  // CHAT
  app: { display: "flex", height: "100vh", overflow: "hidden", background: OF },
  sidebar: { width: 240, background: N, display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto", borderRight: `2px solid ${A}` },
  sideHeader: { background: N3, padding: 16, borderBottom: `1px solid ${N2}`, display: "flex", justifyContent: "center" },
  sideLogo: { height: 36, objectFit: "contain" },
  sideProduct: { padding: "14px 16px 10px", borderBottom: `1px solid rgba(255,255,255,0.06)` },
  sideDivider: { height: 1, background: "rgba(255,255,255,0.06)", margin: "8px 0" },
  sideLabel: { fontSize: 9, letterSpacing: 2.5, color: AL, fontWeight: 700, padding: "8px 16px 4px" },
  sideWarnBtn: { margin: "10px 10px 14px", background: "rgba(180,83,9,0.1)", border: "1px solid rgba(180,83,9,0.3)", color: "#f59e0b", padding: "8px 12px", fontSize: 11.5, cursor: "pointer", textAlign: "left" },

  main: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 },
  topbar: { background: N, borderBottom: `2px solid ${A}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 58, flexShrink: 0 },
  menuBtn: { background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 4 },
  menuLine: { display: "block", width: 20, height: 2, background: "#8ab0c8" },
  topWarnBtn: { background: "rgba(180,83,9,0.1)", border: "1px solid rgba(180,83,9,0.3)", color: "#f59e0b", padding: "5px 12px", fontSize: 12, cursor: "pointer" },
  topHomeBtn: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13 },

  messages: { flex: 1, overflowY: "auto", padding: "28px 32px 12px", display: "flex", flexDirection: "column", gap: 20 },
  empty: { margin: "auto", textAlign: "center", maxWidth: 580 },
  emptyWarn: { background: WB, border: `1px solid ${WBD}`, borderLeft: `4px solid ${WN}`, padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: 8, textAlign: "left" },

  msgLabel: { fontSize: 10.5, color: TL, letterSpacing: 0.3 },
  userBubble: { background: N, color: W, padding: "12px 18px", maxWidth: "68%", fontSize: 14, lineHeight: 1.65 },
  aiBubble: { background: W, border: `1px solid ${BD}`, borderLeft: `3px solid ${A}`, padding: "14px 18px", maxWidth: "82%", fontSize: 14, color: N, lineHeight: 1.85 },

  inputArea: { background: W, borderTop: `1px solid ${BD}`, padding: "14px 20px 16px" },
  inputWrap: { display: "flex", gap: 10, alignItems: "flex-end", background: OF, border: `1.5px solid ${BD}`, padding: "10px 14px" },
  textarea: { flex: 1, background: "transparent", border: "none", outline: "none", resize: "none", color: N, fontSize: 14, lineHeight: 1.6, maxHeight: 120, overflowY: "auto" },
  sendBtn: { border: "none", color: W, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, transition: "background 0.2s" },
  inputMeta: { display: "flex", justifyContent: "space-between", fontSize: 11, color: TL, marginTop: 8, flexWrap: "wrap", gap: 4 },

  // MODAL
  overlay: { position: "fixed", inset: 0, background: "rgba(0,10,25,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 },
  modal: { background: W, maxWidth: 560, width: "100%", border: `3px solid ${A}`, boxShadow: "0 32px 80px rgba(0,0,0,0.5)" },
  modalHeader: { background: N, padding: "18px 24px", borderBottom: `3px solid ${A}`, display: "flex", justifyContent: "space-between", alignItems: "center" },
};
