import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Information about analytics collected on Karan Luthria’s website.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return <div id="top"><Header/><main className="container" style={{ maxWidth: 850, paddingTop: 100, paddingBottom: 120 }}>
    <p className="eyebrow">Website information</p>
    <h1 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(48px, 6vw, 76px)", lineHeight: 1, margin: "24px 0 32px" }}>Privacy</h1>
    <p style={{ maxWidth: 700, fontSize: 16, lineHeight: 1.8 }}>This site uses first-party visit logging to understand how its pages and links are used. When analytics is enabled, the log may include the public IP address seen by Cloudflare, approximate location and network, browser user-agent, page visited, referring page when provided by the browser, tagged traffic source, link clicks, and an estimate of time on a page.</p>
    <p style={{ maxWidth: 700, fontSize: 16, lineHeight: 1.8 }}>Visit records are stored in a private Cloudflare database, are not shown on the public site, and are automatically deleted after 90 days. They are used only to review traffic to this website. Location and network information can be imprecise, and an IP address does not necessarily identify an individual.</p>
  </main><Footer/></div>;
}
