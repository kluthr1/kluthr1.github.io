"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type TrackedEvent = { type: "page_view" | "engagement" | "click"; path: string; target?: string; seconds?: number; referrer?: string };
function send(event: TrackedEvent, beacon = false) {
  const body = JSON.stringify(event);
  if (beacon && navigator.sendBeacon) {
    navigator.sendBeacon("/api/visit", new Blob([body], { type: "application/json" }));
    return;
  }
  void fetch("/api/visit", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
}

export function VisitTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_VISIT_LOG !== "true") return;
    const started = Date.now();
    const path = pathname || "/";
    if (path.startsWith("/admin")) return;
    send({ type: "page_view", path, referrer: document.referrer });
    let engagementSent = false;
    const recordEngagement = () => {
      if (engagementSent) return;
      engagementSent = true;
      const seconds = Math.round((Date.now() - started) / 1000);
      if (seconds >= 5) send({ type: "engagement", path, seconds }, true);
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
      send({ type: "click", path, target });
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
