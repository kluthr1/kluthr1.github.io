"use client";

import { useState } from "react";

type Visit = {
  event_type: string; path: string; target: string | null; seconds: number | null; occurred_at: string;
  ip_address: string | null; country: string | null; region: string | null; city: string | null;
  asn: number | null; network: string | null; user_agent: string | null; referrer: string | null;
};
const columns: (keyof Visit)[] = ["occurred_at", "event_type", "path", "target", "ip_address", "country", "region", "city", "network", "user_agent", "referrer", "seconds"];
const csvCell = (value: unknown) => `"${String(value ?? "").replaceAll('"', '""')}"`;

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [records, setRecords] = useState<Visit[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function load() {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/admin?limit=1000", { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
      if (!response.ok) throw new Error(response.status === 401 ? "That access key was not accepted." : "Could not load visit records.");
      setRecords(await response.json() as Visit[]);
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Could not load visit records."); }
    finally { setLoading(false); }
  }
  function download() {
    const rows = [columns.map(csvCell).join(","), ...records.map((record) => columns.map((column) => csvCell(record[column])).join(","))];
    const blob = new Blob([rows.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob); const link = document.createElement("a");
    link.href = url; link.download = `kluthria-visits-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click(); URL.revokeObjectURL(url);
  }
  return <main style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px", color: "#242622" }}>
    <p style={{ color: "#a6503d", fontSize: 11, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase" }}>Private analytics</p>
    <h1 style={{ fontFamily: "Georgia,serif", fontSize: 48, fontWeight: 400 }}>Visit log</h1>
    <p>Enter the private access key configured for Cloudflare. Records are automatically removed after 90 days.</p>
    <form onSubmit={(event) => { event.preventDefault(); void load(); }} style={{ display: "flex", gap: 10, margin: "24px 0" }}>
      <label htmlFor="access-key" style={{ position: "absolute", left: -10000 }}>Access key</label>
      <input id="access-key" type="password" autoComplete="current-password" value={token} onChange={(event) => setToken(event.target.value)} placeholder="Access key" style={{ minWidth: 260, padding: 12, border: "1px solid #d8d5cb", background: "#fff" }} />
      <button type="submit" disabled={loading || !token} style={{ padding: "12px 18px", border: 0, background: "#242622", color: "white", cursor: "pointer" }}>{loading ? "Loading…" : "Load visits"}</button>
      <button type="button" disabled={!records.length} onClick={download} style={{ padding: "12px 18px", border: "1px solid #242622", background: "transparent", cursor: "pointer" }}>Download CSV</button>
    </form>
    {error && <p role="alert" style={{ color: "#a33" }}>{error}</p>}
    <p>{records.length ? `${records.length} most recent records` : "No records loaded."}</p>
    {records.length > 0 && <div style={{ overflowX: "auto", borderTop: "1px solid #d8d5cb" }}><table style={{ borderCollapse: "collapse", minWidth: 1050, width: "100%", fontSize: 12 }}>
      <thead><tr>{columns.map((column) => <th key={column} style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #d8d5cb" }}>{column.replaceAll("_", " ")}</th>)}</tr></thead>
      <tbody>{records.map((record, index) => <tr key={`${record.occurred_at}-${index}`}>{columns.map((column) => <td key={column} style={{ verticalAlign: "top", padding: 10, borderBottom: "1px solid #e4e1d9", maxWidth: 240, overflowWrap: "anywhere" }}>{record[column] ?? "—"}</td>)}</tr>)}</tbody>
    </table></div>}
    <p style={{ marginTop: 36, fontSize: 12, color: "#656860" }}>Keep the access key private. This page does not save it in your browser.</p>
  </main>;
}
