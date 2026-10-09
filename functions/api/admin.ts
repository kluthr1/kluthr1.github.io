interface VisitDatabase {
  prepare(query: string): {
    bind(...values: unknown[]): { all<T>(): Promise<{ results: T[] }> };
  };
}
interface Env { DB: VisitDatabase; ADMIN_TOKEN: string; }
type Row = Record<string, string | number | null>;

export async function onRequestGet({ request, env }: { request: Request; env: Env }): Promise<Response> {
  if (new URL(request.url).hostname.toLowerCase() !== "kluthria.org") return new Response("Not found", { status: 404 });
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!env.ADMIN_TOKEN || !token || token.length !== env.ADMIN_TOKEN.length) {
    return new Response("Unauthorized", { status: 401, headers: { "Cache-Control": "no-store" } });
  }
  let diff = 0;
  for (let i = 0; i < token.length; i += 1) diff |= token.charCodeAt(i) ^ env.ADMIN_TOKEN.charCodeAt(i);
  if (diff !== 0) return new Response("Unauthorized", { status: 401, headers: { "Cache-Control": "no-store" } });
  const limit = Math.min(1000, Math.max(1, Number(new URL(request.url).searchParams.get("limit")) || 500));
  let results: Row[];
  try {
    ({ results } = await env.DB.prepare(`
      SELECT event_type, path, target, seconds, occurred_at, ip_address, country, region, city, asn, network, user_agent, referrer, source
      FROM visits ORDER BY occurred_at DESC LIMIT ?
    `).bind(limit).all<Row>());
  } catch (error) {
    const message = String(error).toLowerCase();
    if (!message.includes("source") || !(message.includes("no such column") || message.includes("has no column named"))) throw error;
    ({ results } = await env.DB.prepare(`
      SELECT event_type, path, target, seconds, occurred_at, ip_address, country, region, city, asn, network, user_agent, referrer
      FROM visits ORDER BY occurred_at DESC LIMIT ?
    `).bind(limit).all<Row>());
    results = results.map((row) => ({ ...row, source: null }));
  }
  return Response.json(results, { headers: { "Cache-Control": "no-store, private", "X-Content-Type-Options": "nosniff" } });
}
