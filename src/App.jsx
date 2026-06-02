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

const DISCLAIMER_TEXT = "CNPReg AI is an artificial intelligence tool designed to assist state agency administrators with USDA Child Nutrition Program regulatory questions. As with all AI systems, responses may contain errors, omissions, or outdated information. This tool does not constitute legal advice and should not be used as the sole basis for compliance or programmatic decisions. Always verify responses against official USDA FNS regulations, published policy memoranda, and current USDA FNS guidance before taking action. LS Digital Solutions, LLC is not affiliated with, endorsed by, or acting on behalf of the United States Department of Agriculture or the Food and Nutrition Service.";


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
      // Only send recent conversation history — the server handles the rest
      const recentHistory = newHistory.slice(-5);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: recentHistory }),
      });

      const data = await res.json();
      const reply = (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text)
        || (data.error && (data.error.message || data.error))
        || ("Debug: HTTP " + res.status + " — " + JSON.stringify(data).substring(0, 200));
      const sources = data.sources || [];

      setHistory([...newHistory, { role: "assistant", content: reply }]);
      setMessages(m => [...m, { from: "ai", text: reply, sources: sources }]);
    } catch (err) {
      setMessages(m => [...m, { from: "ai", text: "Connection error. Please try again.", sources: [] }]);
    }

    setLoading(false);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
  }

  function handleSend() {
    if (!input.trim() || loading) return;
    sendMessage(input.trim());
  }

  if (screen === "chat" && !accepted) return (
    <>
      <GlobalCSS />
      <div style={S.gate}>
        <div style={S.gateCard}>
          <div style={S.gateHeader}><LSLogo variant="gate" /></div>
          <div style={S.gateBody}>
            <div style={S.gateProduct}>
              <span style={S.productName}>CNPReg</span>
              <span style={S.productAI}>AI</span>
              <span style={S.productSub}>Child Nutrition Program Regulatory Intelligence</span>
            </div>
            <div style={S.disclaimerBox}>
              <div style={S.disclaimerTitle}>Important — Please Read Before Proceeding</div>
              <p style={S.disclaimerText}>{DISCLAIMER_TEXT}</p>
            </div>
            <p style={S.acknowledgeText}>By clicking below, you acknowledge that AI responses may contain errors and agree to verify all regulatory guidance against official USDA FNS sources before making compliance or programmatic decisions.</p>
            <button style={S.gateBtn} onClick={() => setAccepted(true)}>I Understand — Open CNPReg AI</button>
            <button style={S.gateBack} onClick={() => setScreen("landing")}>Back to Home</button>
          </div>
        </div>
      </div>
    </>
  );

  if (screen === "landing") return (
    <>
      <GlobalCSS />
      <div style={S.landing}>
        <nav style={S.nav}>
          <LSLogo variant="nav" />
          <div style={S.navRight}>
            <span style={S.freePill}>FREE TOOL</span>
            <button style={S.navLink} onClick={() => setShowModal(true)}>Disclaimer</button>
          </div>
        </nav>

        <div style={S.hero}>
          <div style={S.heroGrid} />
          <div style={S.heroInner}>
            <div style={S.heroBadge}>
              <span style={S.heroDot} />
              CHILD NUTRITION PROGRAMS &middot; REGULATORY INTELLIGENCE
            </div>
            <h1 style={S.heroH1}>
              <span style={{ color: W }}>CNPReg</span>
              <span style={{ color: AL }}>AI</span>
            </h1>
            <p style={S.heroTagline}>Instant regulatory answers for state agency Child Nutrition Program administrators.</p>
            <p style={S.heroSub}>Grounded in official Federal Register regulatory text across 12 CFR parts — cited, precise, and completely free.</p>
            <div style={S.heroCtas}>
              <button style={S.ctaPrimary} onClick={() => setScreen("chat")}>Start Asking Questions</button>
            </div>
            <div style={S.heroChecks}>
              {["No account required", "No subscription", "No cost — ever", "No data sold"].map(t => (
                <span key={t} style={S.heroCheck}><span style={{ color: AL, fontWeight: 700 }}>&#10003;</span> {t}</span>
              ))}
            </div>
          </div>
          <div style={S.heroPanel}>
            <div style={S.panelLabel}>SAMPLE QUERIES</div>
            {SAMPLE_QS.map((q, i) => (
              <div key={i} style={S.panelQ} onClick={() => setScreen("chat")}>
                <span style={{ color: A, fontWeight: 700, flexShrink: 0 }}>&#8250;</span>
                <span>{q}</span>
              </div>
            ))}
            <div style={{ margin: "18px 0", borderTop: "1px solid " + N2 }} />
            <div style={S.panelLabel}>REGULATORY COVERAGE</div>
            {["7 CFR Part 210 — NSLP","7 CFR Part 215 — Special Milk","7 CFR Part 220 — SBP","7 CFR Part 225 — SFSP","7 CFR Part 226 — CACFP","7 CFR Part 245 — Eligibility","7 CFR Part 246 — WIC","7 CFR Part 247 — CSFP","7 CFR Part 292 — Summer EBT","Auto-synced from eCFR"].map(l => (
              <div key={l} style={S.panelCovLine}>{l}</div>
            ))}
          </div>
        </div>

        <div style={S.warnStrip}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>&#9888;&#65039;</span>
          <span style={S.warnText}>
            <strong>AI Disclaimer:</strong> CNPReg AI may produce errors or omissions. Always verify regulatory guidance against official USDA FNS sources before making compliance decisions. Not legal advice.{" "}
            <button style={S.warnLink} onClick={() => setShowModal(true)}>Full disclaimer</button>
          </span>
        </div>

        <div style={{ padding: "64px 0", background: W }}>
          <div style={S.inner}>
            <div style={S.eyebrow}>HOW IT WORKS</div>
            <h2 style={S.h2}>Built for precision. Designed for speed.</h2>
            <div style={S.cardGrid}>
              {[
                { n: "01", title: "Ask any regulatory question", body: "Type any question about meal patterns, eligibility, procurement, administrative reviews, civil rights, or program operations." },
                { n: "02", title: "Receive cited answers", body: "Responses reference exact CFR section numbers drawn directly from official Federal Register regulatory text." },
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

        <div style={{ background: N, padding: "52px 40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(20px,3vw,30px)", color: W, marginBottom: 10 }}>Ready to get answers?</h2>
          <p style={{ color: "#8ab0c8", fontSize: 15, marginBottom: 28 }}>No login. No cost. Just regulatory intelligence.</p>
          <button style={S.ctaPrimary} onClick={() => setScreen("chat")}>Open CNPReg AI</button>
        </div>

        <footer style={S.footer}>
          <LSLogo variant="footer" />
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <button style={S.footerLink} onClick={() => setShowModal(true)}>AI Disclaimer</button>
            <span style={{ fontSize: 12, color: N2 }}>&middot;</span>
            <span style={{ fontSize: 12, color: TL }}>Not affiliated with USDA FNS</span>
            <span style={{ fontSize: 12, color: N2 }}>&middot;</span>
            <span style={{ fontSize: 12, color: TL }}>Not legal advice</span>
            <span style={{ fontSize: 12, color: N2 }}>&middot;</span>
            <a href="https://www.LSDigitalSolutions.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: TL, textDecoration: "none" }}>
              &copy; 2026 LS Digital Solutions, LLC
            </a>
          </div>
        </footer>
      </div>
      {showModal && <DisclaimerModal onClose={() => setShowModal(false)} onAccept={() => { setShowModal(false); setScreen("chat"); }} />}
    </>
  );

  return (
    <>
      <GlobalCSS />
      <style>{"@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}"}</style>
      <div style={S.app}>
        {sidebarOpen && (
          <aside style={S.sidebar}>
            <div style={S.sideHeader}><LSLogo variant="sidebar" /></div>
            <div style={S.sideProduct}>
              <span style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 700, color: W }}>CNPReg</span>
              <span style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 700, color: AL }}>AI</span>
              <div style={{ fontSize: 10, color: TL, letterSpacing: 1, marginTop: 3 }}>Regulatory Intelligence</div>
            </div>
            <div style={S.sideDivider} />
            <div style={S.sideLabel}>QUICK TOPICS</div>
            {TOPICS.map(t => (
              <button key={t} className="side-btn" onClick={() => sendMessage("Explain the key regulatory requirements for: " + t)} disabled={loading}>
                <span style={{ color: A, marginRight: 4 }}>&#8250;</span>{t}
              </button>
            ))}
            <div style={S.sideDivider} />
            <div style={S.sideLabel}>KNOWLEDGE BASE</div>
            {["7 CFR 210 - 215 - 220 - 225","7 CFR 226 - 227 - 235 - 240","7 CFR 245 - 246 - 247 - 292","Auto-synced from eCFR"].map(l => (
              <div key={l} style={{ fontSize: 10.5, color: "#8ab0c8", padding: "2px 16px", fontFamily: "monospace" }}>{l}</div>
            ))}
            <button style={S.sideWarnBtn} onClick={() => setShowModal(true)}>&#9888; View Disclaimer</button>
          </aside>
        )}

        <div style={S.main}>
          <div style={S.topbar}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <button style={S.menuBtn} onClick={() => setSidebarOpen(o => !o)}>
                <span style={S.menuLine} /><span style={S.menuLine} /><span style={S.menuLine} />
              </button>
              <div>
                <div style={{ fontFamily: "'Georgia',serif", fontSize: 18, fontWeight: 700, color: W, lineHeight: 1 }}>
                  CNPReg<span style={{ color: AL }}>AI</span>
                </div>
                <div style={{ fontSize: 11, color: TL, letterSpacing: 0.5 }}>Child Nutrition &middot; Regulatory Assistant</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {messages.length > 0 && (
                <button style={S.topClearBtn} onClick={() => { setMessages([]); setHistory([]); }} title="Clear conversation">
                  &#10227; Clear
                </button>
              )}
              <button style={S.topWarnBtn} onClick={() => setShowModal(true)}>&#9888; Disclaimer</button>
              <button style={S.topHomeBtn} onClick={() => setScreen("landing")}>Home</button>
            </div>
          </div>

          <div style={S.messages}>
            {messages.length === 0 && (
              <div style={S.empty}>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 700, color: N }}>CNPReg</span>
                  <span style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 700, color: A }}>AI</span>
                </div>
                <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 20, color: N, marginBottom: 10 }}>What can I help you with?</h2>
                <p style={{ fontSize: 14, color: TM, lineHeight: 1.7, marginBottom: 22 }}>Type any USDA Child Nutrition Program regulatory question. Answers are drawn directly from official Federal Register regulatory text via the live eCFR API.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 24 }}>
                  {SAMPLE_QS.map(q => (
                    <button key={q} className="prompt-chip" onClick={() => sendMessage(q)} disabled={loading}>{q}</button>
                  ))}
                </div>
                <div style={{ background: WB, border: "1px solid " + WBD, borderLeft: "4px solid " + WN, padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: 8, textAlign: "left", maxWidth: 480, margin: "0 auto" }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>&#9888;</span>
                  <span style={{ fontSize: 12, color: "#78350f", lineHeight: 1.6 }}>AI may make mistakes. Verify all guidance against official USDA FNS sources before making compliance decisions.</span>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "user" ? "flex-end" : "flex-start", gap: 4 }}>
                {msg.from === "ai" && <span style={S.msgLabel}>CNPReg AI &middot; LS Digital Solutions, LLC</span>}
                <div style={msg.from === "user" ? S.userBubble : S.aiBubble}
                  dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>") }}
                />
                {msg.from === "ai" && msg.sources && msg.sources.length > 0 && (
                  <div style={S.sources}>
                    <div style={S.sourcesLabel}>Sources:</div>
                    {msg.sources.map((src, idx) => (
                      <span key={idx} style={S.sourceTag}>{src}</span>
                    ))}
                  </div>
                )}
                {msg.from === "user" && <span style={{ ...S.msgLabel, textAlign: "right" }}>You</span>}
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                <span style={S.msgLabel}>CNPReg AI &middot; LS Digital Solutions, LLC</span>
                <div style={S.aiBubble}>
                  <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "2px 0" }}>
                    {[0, 0.15, 0.3].map((d, i) => (
                      <span key={i} style={{ width: 7, height: 7, background: AL, borderRadius: "50%", display: "inline-block", animation: "bounce 1s " + d + "s infinite ease-in-out" }} />
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
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                rows={2}
                disabled={loading}
              />
              <button
                style={{ ...S.sendBtn, background: input.trim() && !loading ? A : "#1a3a5c", cursor: input.trim() && !loading ? "pointer" : "not-allowed" }}
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >&#8593;</button>
            </div>
            <div style={S.inputMeta}>
              <span>AI may make mistakes &middot; Verify with official USDA FNS sources &middot; Shift+Enter for new line</span>
              <span style={{ color: AL, fontWeight: 600 }}>CNPReg AI &middot; LS Digital Solutions, LLC</span>
            </div>
          </div>
        </div>
      </div>
      {showModal && <DisclaimerModal onClose={() => setShowModal(false)} onAccept={() => setShowModal(false)} />}
    </>
  );
}

function DisclaimerModal({ onClose, onAccept }) {
  return (
    <>
      <GlobalCSS />
      <div style={S.overlay}>
        <div style={S.modal}>
          <div style={S.modalHeader}>
            <span style={{ fontFamily: "'Georgia',serif", fontSize: 18, color: W }}>AI Disclaimer</span>
            <button style={{ background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 20 }} onClick={onClose}>&#10005;</button>
          </div>
          <div style={{ padding: "28px 28px 24px" }}>
            <p style={{ fontSize: 13.5, color: TM, lineHeight: 1.85, marginBottom: 18 }}>{DISCLAIMER_TEXT}</p>
            <div style={{ background: WB, border: "1px solid " + WBD, padding: "12px 16px", fontSize: 13, color: "#78350f", lineHeight: 1.65, marginBottom: 22 }}>
              By using CNPReg AI, you acknowledge that AI responses may contain errors and agree to verify all regulatory guidance against official USDA FNS sources before making compliance or programmatic decisions.
            </div>
            <button style={{ ...S.ctaPrimary, width: "100%", padding: 13, fontSize: 14 }} onClick={onAccept}>I Understand</button>
          </div>
        </div>
      </div>
    </>
  );
}

function LSLogo({ variant }) {
  const sizes = { nav: { ls: 22, ds: 11, llc: 9 }, gate: { ls: 20, ds: 10, llc: 8 }, sidebar: { ls: 18, ds: 9, llc: 8 }, footer: { ls: 16, ds: 9, llc: 8 } };
  const sz = sizes[variant] || sizes.nav;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: sz.ls + 8, height: sz.ls + 8, background: "#0077b6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: sz.ls, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>LS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: sz.ds, fontWeight: 700, color: "#ffffff", letterSpacing: 2, textTransform: "uppercase" }}>Digital Solutions</span>
        <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: sz.llc, color: "#6b8fa8", letterSpacing: 1, textTransform: "uppercase" }}>Child Nutrition Program Technology Specialist</span>
      </div>
    </div>
  );
}

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
      .side-btn { display: block; width: 100%; text-align: left; background: transparent; border: none; border-left: 2px solid transparent; color: #b8cfe0; padding: 6px 16px; font-size: 11.5px; cursor: pointer; transition: all 0.15s; margin-bottom: 1px; }
      .side-btn:hover:not(:disabled) { background: #0077b6; color: #ffffff; border-left-color: #4db8e8; }
      .side-btn:disabled { opacity: 0.4; cursor: not-allowed; }
      .prompt-chip { background: #e6f4fb; border: 1px solid #b3d9ef; color: #001e3c; padding: 8px 14px; font-size: 13px; cursor: pointer; transition: background 0.15s; }
      .prompt-chip:hover:not(:disabled) { background: #b3d9ef; }
    `}</style>
  );
}

const S = {
  gate: { background: N3, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 },
  gateCard: { background: N, maxWidth: 560, width: "100%", border: "1px solid " + N2, borderTop: "4px solid " + A, boxShadow: "0 24px 80px rgba(0,0,0,0.5)" },
  gateHeader: { background: N3, padding: "24px 28px", borderBottom: "1px solid " + N2, display: "flex", justifyContent: "center" },
  gateBody: { padding: "28px 32px 32px" },
  gateProduct: { display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 0, marginBottom: 22 },
  productName: { fontFamily: "'Georgia',serif", fontSize: 28, fontWeight: 700, color: W },
  productAI: { fontFamily: "'Georgia',serif", fontSize: 28, fontWeight: 700, color: AL },
  productSub: { width: "100%", fontSize: 12, color: TL, letterSpacing: 1, marginTop: 2 },
  disclaimerBox: { background: WB, border: "1px solid " + WBD, borderLeft: "4px solid " + WN, padding: "16px 18px", marginBottom: 18 },
  disclaimerTitle: { fontSize: 12, fontWeight: 700, color: WN, marginBottom: 8, letterSpacing: 0.5 },
  disclaimerText: { fontSize: 12.5, color: "#78350f", lineHeight: 1.8 },
  acknowledgeText: { fontSize: 12.5, color: TL, lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 },
  gateBtn: { width: "100%", padding: 14, fontSize: 15, fontWeight: 700, background: A, color: W, border: "none", cursor: "pointer", marginBottom: 10 },
  gateBack: { width: "100%", background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13, padding: 8 },
  landing: { background: OF, minHeight: "100vh" },
  nav: { background: N, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 40px", height: 68, borderBottom: "3px solid " + A, position: "sticky", top: 0, zIndex: 50 },
  navRight: { display: "flex", alignItems: "center", gap: 16 },
  freePill: { fontSize: 10, color: AL, border: "1px solid " + A, padding: "3px 10px", fontWeight: 700, letterSpacing: 1.5 },
  navLink: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13 },
  hero: { background: N, display: "flex", alignItems: "stretch", minHeight: 480, position: "relative", overflow: "hidden" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(" + N2 + " 1px, transparent 1px), linear-gradient(90deg, " + N2 + " 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3, pointerEvents: "none" },
  heroInner: { flex: 1, padding: "64px 48px 64px", position: "relative", zIndex: 1 },
  heroBadge: { display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: AL, fontWeight: 700, letterSpacing: 2, marginBottom: 24 },
  heroDot: { width: 6, height: 6, background: AL, borderRadius: "50%", display: "inline-block" },
  heroH1: { fontFamily: "'Georgia',serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 700, letterSpacing: -1, marginBottom: 16, display: "flex" },
  heroTagline: { fontSize: "clamp(17px,2vw,22px)", color: W, fontFamily: "'Georgia',serif", fontStyle: "italic", marginBottom: 14, lineHeight: 1.4 },
  heroSub: { fontSize: 15, color: "#8ab0c8", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 },
  heroCtas: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 },
  ctaPrimary: { background: A, color: W, border: "none", padding: "13px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3 },
  heroChecks: { display: "flex", flexWrap: "wrap", gap: "8px 22px" },
  heroCheck: { fontSize: 13, color: "#8ab0c8", display: "flex", alignItems: "center", gap: 6 },
  heroPanel: { width: 280, background: "rgba(0,10,25,0.6)", borderLeft: "1px solid " + N2, padding: "40px 24px", position: "relative", zIndex: 1, flexShrink: 0 },
  panelLabel: { fontSize: 9, letterSpacing: 3, color: TL, fontWeight: 700, marginBottom: 14 },
  panelQ: { fontSize: 12.5, color: "#8ab0c8", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer", display: "flex", gap: 8, lineHeight: 1.5 },
  panelCovLine: { fontSize: 11, color: TL, fontFamily: "monospace", marginBottom: 5, lineHeight: 1.5 },
  warnStrip: { background: WB, borderBottom: "1px solid " + WBD, padding: "12px 40px", display: "flex", alignItems: "flex-start", gap: 10 },
  warnText: { fontSize: 13, color: "#78350f", lineHeight: 1.6 },
  warnLink: { background: "none", border: "none", color: WN, fontWeight: 700, cursor: "pointer", fontSize: 13, padding: 0, textDecoration: "underline" },
  inner: { maxWidth: 960, margin: "0 auto", padding: "0 40px" },
  eyebrow: { fontSize: 10, letterSpacing: 3, color: A, fontWeight: 700, marginBottom: 10 },
  h2: { fontFamily: "'Georgia',serif", fontSize: "clamp(22px,3vw,32px)", color: N, marginBottom: 36 },
  cardGrid: { display: "flex", gap: 20, flexWrap: "wrap" },
  featureCard: { flex: 1, minWidth: 220, border: "1px solid " + BD, borderTop: "4px solid " + A, padding: "26px 22px", background: OF },
  featureNum: { fontFamily: "monospace", fontSize: 28, color: BD, fontWeight: 700, marginBottom: 10, lineHeight: 1 },
  featureTitle: { fontFamily: "'Georgia',serif", fontSize: 17, color: N, marginBottom: 10 },
  featureBody: { fontSize: 13.5, color: TM, lineHeight: 1.7 },
  footer: { background: N3, padding: "20px 40px", borderTop: "1px solid " + N2, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 },
  footerLink: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 12 },
  app: { display: "flex", height: "100vh", overflow: "hidden", background: OF },
  sidebar: { width: 240, background: N, display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto", borderRight: "2px solid " + A },
  sideHeader: { background: N3, padding: 16, borderBottom: "1px solid " + N2, display: "flex", justifyContent: "center" },
  sideProduct: { padding: "14px 16px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)" },
  sideDivider: { height: 1, background: "rgba(255,255,255,0.06)", margin: "8px 0" },
  sideLabel: { fontSize: 9, letterSpacing: 2.5, color: AL, fontWeight: 700, padding: "8px 16px 4px" },
  sideWarnBtn: { margin: "10px 10px 14px", background: "rgba(180,83,9,0.1)", border: "1px solid rgba(180,83,9,0.3)", color: "#f59e0b", padding: "8px 12px", fontSize: 11.5, cursor: "pointer", textAlign: "left" },
  main: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 },
  topbar: { background: N, borderBottom: "2px solid " + A, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 58, flexShrink: 0 },
  menuBtn: { background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 4 },
  menuLine: { display: "block", width: 20, height: 2, background: "#8ab0c8" },
  topClearBtn: { background: "rgba(0,119,182,0.1)", border: "1px solid rgba(0,119,182,0.3)", color: "#4db8e8", padding: "5px 12px", fontSize: 12, cursor: "pointer" },
  topWarnBtn: { background: "rgba(180,83,9,0.1)", border: "1px solid rgba(180,83,9,0.3)", color: "#f59e0b", padding: "5px 12px", fontSize: 12, cursor: "pointer" },
  topHomeBtn: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13 },
  messages: { flex: 1, overflowY: "auto", padding: "28px 32px 12px", display: "flex", flexDirection: "column", gap: 20 },
  empty: { margin: "auto", textAlign: "center", maxWidth: 580 },
  msgLabel: { fontSize: 10.5, color: TL, letterSpacing: 0.3 },
  userBubble: { background: N, color: W, padding: "12px 18px", maxWidth: "68%", fontSize: 14, lineHeight: 1.65 },
  aiBubble: { background: W, border: "1px solid " + BD, borderLeft: "3px solid " + A, padding: "14px 18px", maxWidth: "82%", fontSize: 14, color: N, lineHeight: 1.85 },
  sources: { marginTop: 8, paddingTop: 10, borderTop: "1px solid " + BD, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", maxWidth: "82%" },
  sourcesLabel: { fontSize: 10, color: TL, textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 700, marginRight: 4 },
  sourceTag: { fontSize: 11, padding: "3px 8px", background: AP, color: N, border: "1px solid #b3d9ef", fontFamily: "monospace" },
  inputArea: { background: W, borderTop: "1px solid " + BD, padding: "14px 20px 16px" },
  inputWrap: { display: "flex", gap: 10, alignItems: "flex-end", background: OF, border: "1.5px solid " + BD, padding: "10px 14px" },
  textarea: { flex: 1, background: "transparent", border: "none", outline: "none", resize: "none", color: N, fontSize: 14, lineHeight: 1.6, maxHeight: 120, overflowY: "auto" },
  sendBtn: { border: "none", color: W, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, transition: "background 0.2s" },
  inputMeta: { display: "flex", justifyContent: "space-between", fontSize: 11, color: TL, marginTop: 8, flexWrap: "wrap", gap: 4 },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,10,25,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 },
  modal: { background: W, maxWidth: 560, width: "100%", border: "3px solid " + A, boxShadow: "0 32px 80px rgba(0,0,0,0.5)" },
  modalHeader: { background: N, padding: "18px 24px", borderBottom: "3px solid " + A, display: "flex", justifyContent: "space-between", alignItems: "center" },
};
