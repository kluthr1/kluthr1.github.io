interface VisitDatabase {
  prepare(query: string): {
    bind(...values: unknown[]): { run(): Promise<unknown> };
  };
}

interface Env {
  DB: VisitDatabase;
}

type VisitEvent = {
  type: "page_view" | "engagement" | "click";
  path: string;
  target?: string;
  seconds?: number;
  referrer?: string;
};

function safeReferer(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`.slice(0, 500);
  } catch {
    return null;
  }
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }): Promise<Response> {
  if (request.headers.get("content-type")?.split(";")[0] !== "application/json") return new Response(null, { status: 415 });
  let event: VisitEvent;
  try { event = await request.json() as VisitEvent; } catch { return new Response(null, { status: 400 }); }
  if (!event || !["page_view", "engagement", "click"].includes(event.type)) return new Response(null, { status: 400 });

  const path = typeof event.path === "string" && event.path.startsWith("/") ? event.path.slice(0, 500) : "/";
  const target = typeof event.target === "string" ? event.target.slice(0, 500) : null;
  const seconds = Number.isFinite(event.seconds) ? Math.max(0, Math.min(86400, Math.round(event.seconds!))) : null;
  const cf = (request as Request & { cf?: { country?: string; region?: string; city?: string; asn?: number; asOrganization?: string } }).cf;

  await env.DB.prepare(`
    INSERT INTO visits (event_type, path, target, seconds, occurred_at, ip_address, country, region, city, asn, network, user_agent, referrer)
    VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    event.type, path, target, seconds,
    request.headers.get("CF-Connecting-IP"),
    cf?.country ?? null, cf?.region ?? null, cf?.city ?? null, cf?.asn ?? null, cf?.asOrganization ?? null,
    request.headers.get("user-agent")?.slice(0, 500) ?? null,
    safeReferer(event.referrer ?? request.headers.get("referer")),
  ).run();

  await env.DB.prepare("DELETE FROM visits WHERE occurred_at < datetime('now', '-90 days')").bind().run();
  return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
}
