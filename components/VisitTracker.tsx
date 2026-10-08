"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type TrackedEvent = { type: "page_view" | "engagement" | "click"; path: string; target?: string; seconds?: number; referrer?: string; source?: string };

function send(event: TrackedEvent, beacon = false) {
  const body = JSON.stringify(event);
  if (beacon && navigator.sendBeacon) {
    navigator.sendBeacon("/api/visit", new Blob([body], { type: "application/json" }));
    return;
  }
  void fetch("/api/visit", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
}

function sourceFromReferrer(referrer: string): string | undefined {
  try {
    const host = new URL(referrer).hostname.toLowerCase().replace(/^www\./, "");
    if (host === "x.com" || host.endsWith(".x.com") || host === "twitter.com" || host.endsWith(".twitter.com")) return "twitter";
    if (host === "github.com" || host.endsWith(".github.com")) return "github";
    if (host === "linkedin.com" || host.endsWith(".linkedin.com") || host === "lnkd.in") return "linkedin";
  } catch { return undefined; }
  return undefined;
}

export function VisitTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_VISIT_LOG !== "true") return;
    const started = Date.now();
    const path = pathname || "/";
    if (path.startsWith("/admin")) return;
    const querySource = new URLSearchParams(window.location.search).get("utm_source")?.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 40);
    let source = querySource || sessionStorage.getItem("kluthria_traffic_source") || sourceFromReferrer(document.referrer);
    if (querySource) sessionStorage.setItem("kluthria_traffic_source", querySource);
    else if (source && !sessionStorage.getItem("kluthria_traffic_source")) sessionStorage.setItem("kluthria_traffic_source", source);
    send({ type: "page_view", path, referrer: document.referrer, source });
    let engagementSent = false;
    const recordEngagement = () => {
      if (engagementSent) return;
      engagementSent = true;
      const seconds = Math.round((Date.now() - started) / 1000);
      if (seconds >= 5) send({ type: "engagement", path, seconds, source }, true);
    };
    const recordClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
      let target: string;
      try {
        const url = new URL(href, window.location.origin);
        target = url.origin === window.location.origin ? url.pathname : url.origin;
      } catch { return; }
      send({ type: "click", path, target, source });
    };
    window.addEventListener("pagehide", recordEngagement, { once: true });
    document.addEventListener("click", recordClick);
    return () => {
      window.removeEventListener("pagehide", recordEngagement);
      document.removeEventListener("click", recordClick);
      recordEngagement();
    };
  }, [pathname]);
  return null;
}
