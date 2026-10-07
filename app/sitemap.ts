import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://kluthria.us", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://kluthria.us/research", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://kluthria.us/publications", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
