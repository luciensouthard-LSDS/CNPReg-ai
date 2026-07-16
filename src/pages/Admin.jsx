import React, { useState, useEffect, useCallback } from "react";

/**
 * CNPReg AI — Admin (Version B)
 *
 * Self-contained: all styling is inline, no Tailwind / CSS-module dependency,
 * so this drops into the Vite app as-is. Wire it up as a route, e.g. with
 * react-router:
 *
 *   import Admin from "./pages/Admin";
 *   <Route path="/admin" element={<Admin />} />
 *
 * Auth model: the password the user types is sent as the `x-admin-password`
 * header on every request and validated server-side against ADMIN_PASSWORD.
 * It is never baked into the client bundle. We keep it in sessionStorage so a
 * page refresh doesn't log you out, and clear it on "Sign out".
 */

const ACCENT = "#1f3a5f"; // deep regulatory blue
const BG = "#f7f6f2"; // warm paper
const CARD = "#ffffff";
const BORDER = "#e3e0d8";
const INK = "#23211c";
const MUTED = "#6f6a60";

const DOC_TYPES = ["CFR", "MEMO", "GUIDANCE"];

// Chip palette per spec: CFR=blue, MEMO=amber, GUIDANCE=green
const CHIP = {
  CFR: { bg: "#e8eef6", fg: "#1f3a5f", dot: "#3b6ea5" },
  MEMO: { bg: "#fbeed6", fg: "#8a5a06", dot: "#d39323" },
  GUIDANCE: { bg: "#e4f0e6", fg: "#27613a", dot: "#3d9960" },
};

const serif = '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif';
const sans =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';

const S = {
  page: { minHeight: "100vh", background: BG, color: INK, fontFamily: sans },
  shell: { maxWidth: 980, margin: "0 auto", padding: "32px 24px 80px" },
  h1: { fontFamily: serif, fontSize: 30, fontWeight: 600, margin: 0, letterSpacing: "-0.01em" },
  sub: { color: MUTED, fontSize: 14, marginTop: 4 },
  card: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    padding: 22,
    marginTop: 22,
  },
  sectionTitle: {
    fontFamily: serif,
    fontSize: 18,
    fontWeight: 600,
    margin: "0 0 14px",
  },
  label: { display: "block", fontSize: 12, fontWeight: 600, color: MUTED, marginBottom: 5, letterSpacing: "0.02em", textTransform: "uppercase" },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "9px 11px",
    fontSize: 14,
    border: `1px solid ${BORDER}`,
    borderRadius: 7,
    background: "#fff",
    color: INK,
    fontFamily: sans,
    outline: "none",
  },
  btn: {
    background: ACCENT,
    color: "#fff",
    border: "none",
    borderRadius: 7,
    padding: "10px 18px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  btnGhost: {
    background: "transparent",
    color: MUTED,
    border: `1px solid ${BORDER}`,
    borderRadius: 7,
    padding: "8px 14px",
    fontSize: 13,
    cursor: "pointer",
  },
  th: { textAlign: "left", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: MUTED, padding: "0 10px 10px", fontWeight: 600 },
  td: { padding: "12px 10px", borderTop: `1px solid ${BORDER}`, fontSize: 14, verticalAlign: "middle" },
};

function Chip({ type }) {
  const c = CHIP[type] || CHIP.CFR;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: c.bg,
        color: c.fg,
        borderRadius: 999,
        padding: "3px 10px",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: 999, background: c.dot }} />
      {type}
    </span>
  );
}

function StatTile({ label, value }) {
  return (
    <div style={{ flex: 1, minWidth: 130 }}>
      <div style={{ fontFamily: serif, fontSize: 30, fontWeight: 600, lineHeight: 1 }}>
        {value ?? "—"}
      </div>
      <div style={{ ...S.sub, marginTop: 6 }}>{label}</div>
    </div>
  );
}

export default function Admin() {
  const [pw, setPw] = useState(() => sessionStorage.getItem("cnpreg_admin_pw") || "");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [stats, setStats] = useState(null);
  const [docs, setDocs] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [banner, setBanner] = useState(null); // {type:'ok'|'err', msg}

  const api = useCallback(
    async (path, opts = {}) => {
      const res = await fetch(`/api/admin/${path}`, {
        ...opts,
        headers: {
          "x-admin-password": pw,
          ...(opts.body ? { "Content-Type": "application/json" } : {}),
          ...(opts.headers || {}),
        },
      });
      if (res.status === 401) {
        setAuthed(false);
        sessionStorage.removeItem("cnpreg_admin_pw");
        throw new Error("Unauthorized — check the admin password.");
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      return data;
    },
    [pw]
  );

  const refresh = useCallback(async () => {
    setLoadingList(true);
    try {
      const [s, l] = await Promise.all([api("stats"), api("list")]);
      setStats(s.stats);
      setDocs(l.docs || []);
    } catch (e) {
      setBanner({ type: "err", msg: e.message });
    } finally {
      setLoadingList(false);
    }
  }, [api]);

  async function signIn() {
    setAuthError("");
    try {
      const res = await fetch("/api/admin/stats", { headers: { "x-admin-password": pw } });
      if (res.status === 401) {
        setAuthError("Incorrect password.");
        return;
      }
      if (!res.ok) {
        setAuthError(`Server error (${res.status}).`);
        return;
      }
      sessionStorage.setItem("cnpreg_admin_pw", pw);
      setAuthed(true);
    } catch {
      setAuthError("Could not reach the server.");
    }
  }

  function signOut() {
    sessionStorage.removeItem("cnpreg_admin_pw");
    setPw("");
    setAuthed(false);
    setStats(null);
    setDocs([]);
  }

  useEffect(() => {
    if (authed) refresh();
  }, [authed, refresh]);

  // Auto sign-in if a valid password is already in sessionStorage
  useEffect(() => {
    if (!authed && pw) signIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authed) {
    return (
      <div style={{ ...S.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ ...S.card, width: 360, marginTop: 0 }}>
          <h1 style={{ ...S.h1, fontSize: 24 }}>CNPReg Admin</h1>
          <p style={S.sub}>Enter the admin password to continue.</p>
          <div style={{ marginTop: 18 }}>
            <label style={S.label}>Password</label>
            <input
              style={S.input}
              type="password"
              value={pw}
              autoFocus
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && signIn()}
              placeholder="••••••••••••••••"
            />
          </div>
          {authError && (
            <div style={{ color: "#b23", fontSize: 13, marginTop: 10 }}>{authError}</div>
          )}
          <button style={{ ...S.btn, width: "100%", marginTop: 16 }} onClick={signIn}>
            Sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={S.page}>
      <div style={S.shell}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h1 style={S.h1}>CNPReg AI — Source Admin</h1>
            <p style={S.sub}>Upload USDA memos &amp; guidance into the retrieval index.</p>
          </div>
          <button style={S.btnGhost} onClick={signOut}>Sign out</button>
        </div>

        {banner && (
          <div
            style={{
              ...S.card,
              marginTop: 18,
              padding: "12px 16px",
              background: banner.type === "ok" ? CHIP.GUIDANCE.bg : "#fae5e1",
              borderColor: banner.type === "ok" ? CHIP.GUIDANCE.dot : "#e0a99e",
              color: banner.type === "ok" ? CHIP.GUIDANCE.fg : "#9a2d18",
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 14 }}>{banner.msg}</span>
            <span style={{ cursor: "pointer", fontWeight: 700 }} onClick={() => setBanner(null)}>×</span>
          </div>
        )}

        {/* Dashboard */}
        <div style={S.card}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <StatTile label="Total chunks" value={stats?.totalChunks?.toLocaleString?.()} />
            <StatTile label="CFR chunks" value={stats?.cfrChunks?.toLocaleString?.()} />
            <StatTile label="Memo chunks" value={stats?.memoChunks?.toLocaleString?.()} />
            <StatTile label="Guidance chunks" value={stats?.guidanceChunks?.toLocaleString?.()} />
            <StatTile label="Documents" value={stats?.docCount?.toLocaleString?.()} />
          </div>
        </div>

        <UploadForm api={api} onDone={(msg) => { setBanner({ type: "ok", msg }); refresh(); }} onError={(msg) => setBanner({ type: "err", msg })} />

        {/* Document list */}
        <div style={S.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h2 style={{ ...S.sectionTitle, margin: 0 }}>Documents</h2>
            <button style={S.btnGhost} onClick={refresh} disabled={loadingList}>
              {loadingList ? "Refreshing…" : "Refresh"}
            </button>
          </div>

          {docs.length === 0 ? (
            <p style={S.sub}>{loadingList ? "Loading…" : "No memos or guidance loaded yet. CFR chunks are not listed individually."}</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={S.th}>Type</th>
                  <th style={S.th}>Title</th>
                  <th style={S.th}>Memo #</th>
                  <th style={S.th}>Effective</th>
                  <th style={S.th}>Programs</th>
                  <th style={{ ...S.th, textAlign: "right" }}>Chunks</th>
                  <th style={S.th}></th>
                </tr>
              </thead>
              <tbody>
                {docs.map((d) => (
                  <tr key={d.doc_id}>
                    <td style={S.td}><Chip type={d.source_type} /></td>
                    <td style={{ ...S.td, fontWeight: 600, maxWidth: 300 }}>{d.title}</td>
                    <td style={{ ...S.td, color: MUTED }}>{d.memo_number || "—"}</td>
                    <td style={{ ...S.td, color: MUTED, whiteSpace: "nowrap" }}>{d.effective_date || "—"}</td>
                    <td style={{ ...S.td, color: MUTED }}>{d.program || "—"}</td>
                    <td style={{ ...S.td, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{d.chunk_count}</td>
                    <td style={{ ...S.td, textAlign: "right" }}>
                      <DeleteButton
                        doc={d}
                        api={api}
                        onDone={(msg) => { setBanner({ type: "ok", msg }); refresh(); }}
                        onError={(msg) => setBanner({ type: "err", msg })}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

function DeleteButton({ doc, api, onDone, onError }) {
  const [busy, setBusy] = useState(false);
  async function del() {
    if (!window.confirm(`Delete "${doc.title}" and all ${doc.chunk_count} of its chunks? This cannot be undone.`)) return;
    setBusy(true);
    try {
      await api("delete", { method: "POST", body: JSON.stringify({ doc_id: doc.doc_id }) });
      onDone(`Deleted "${doc.title}".`);
    } catch (e) {
      onError(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <button
      onClick={del}
      disabled={busy}
      style={{ ...S.btnGhost, color: "#9a2d18", borderColor: "#e0a99e", padding: "6px 12px", fontSize: 12 }}
    >
      {busy ? "Deleting…" : "Delete"}
    </button>
  );
}

function UploadForm({ api, onDone, onError }) {
  const [mode, setMode] = useState("pdf"); // 'pdf' | 'text'
  const [title, setTitle] = useState("");
  const [memoNumber, setMemoNumber] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [programs, setPrograms] = useState("");
  const [docType, setDocType] = useState("MEMO");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);

  function reset() {
    setTitle(""); setMemoNumber(""); setEffectiveDate(""); setPrograms("");
    setDocType("MEMO"); setText(""); setFile(null);
  }

  function fileToBase64(f) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result).split(",")[1]);
      r.onerror = () => reject(new Error("Could not read file."));
      r.readAsDataURL(f);
    });
  }

  async function submit() {
    if (!title.trim()) return onError("Title is required.");
    if (mode === "pdf" && !file) return onError("Choose a PDF file.");
    if (mode === "text" && !text.trim()) return onError("Paste some text.");

    setBusy(true);
    try {
      const payload = {
        mode,
        title: title.trim(),
        memoNumber: memoNumber.trim() || null,
        effectiveDate: effectiveDate || null,
        programs: programs.trim() || null, // comma-delimited
        docType,
      };
      if (mode === "pdf") {
        payload.filename = file.name;
        payload.pdfBase64 = await fileToBase64(file);
      } else {
        payload.text = text;
      }
      const res = await api("upload", { method: "POST", body: JSON.stringify(payload) });
      onDone(`Loaded "${title.trim()}" — ${res.chunksCreated} chunk(s) embedded.`);
      reset();
    } catch (e) {
      onError(e.message);
    } finally {
      setBusy(false);
    }
  }

  const tab = (id, lbl) => (
    <button
      onClick={() => setMode(id)}
      style={{
        ...S.btnGhost,
        background: mode === id ? ACCENT : "transparent",
        color: mode === id ? "#fff" : MUTED,
        borderColor: mode === id ? ACCENT : BORDER,
      }}
    >
      {lbl}
    </button>
  );

  return (
    <div style={S.card}>
      <h2 style={S.sectionTitle}>Add a source</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {tab("pdf", "Upload PDF")}
        {tab("text", "Paste text")}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={S.label}>Title *</label>
          <input style={S.input} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="SP 02-2024: Updated Meal Pattern Flexibilities" />
        </div>
        <div>
          <label style={S.label}>Memo number</label>
          <input style={S.input} value={memoNumber} onChange={(e) => setMemoNumber(e.target.value)} placeholder="SP 02-2024 (optional)" />
        </div>
        <div>
          <label style={S.label}>Effective date</label>
          <input style={S.input} type="date" value={effectiveDate} onChange={(e) => setEffectiveDate(e.target.value)} />
        </div>
        <div>
          <label style={S.label}>Programs (comma-delimited)</label>
          <input style={S.input} value={programs} onChange={(e) => setPrograms(e.target.value)} placeholder="NSLP, SBP" />
        </div>
        <div>
          <label style={S.label}>Doc type</label>
          <select style={S.input} value={docType} onChange={(e) => setDocType(e.target.value)}>
            {DOC_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          {mode === "pdf" ? (
            <>
              <label style={S.label}>PDF file</label>
              <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} style={{ fontSize: 14 }} />
              {file && <span style={{ ...S.sub, marginLeft: 10 }}>{file.name}</span>}
            </>
          ) : (
            <>
              <label style={S.label}>Pasted text</label>
              <textarea
                style={{ ...S.input, minHeight: 160, resize: "vertical", fontFamily: sans, lineHeight: 1.5 }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste the memo body here…"
              />
            </>
          )}
        </div>
      </div>

      <div style={{ marginTop: 18, display: "flex", gap: 10, alignItems: "center" }}>
        <button style={{ ...S.btn, opacity: busy ? 0.6 : 1 }} onClick={submit} disabled={busy}>
          {busy ? "Embedding…" : "Upload & index"}
        </button>
        <span style={S.sub}>Chunks are embedded and inserted into the live index immediately.</span>
      </div>
    </div>
  );
}
