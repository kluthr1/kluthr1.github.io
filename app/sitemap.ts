import type { MetadataRoute } from "next";
export const dynamic = "force-static";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kluthria.us").replace(/\/$/, "");
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/research/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/publications/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
