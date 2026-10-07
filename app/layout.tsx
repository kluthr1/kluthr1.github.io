import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kluthria.us";
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Karan Luthria | MD-PhD Student", template: "%s | Karan Luthria" },
  description: "Karan Luthria is an MD-PhD student at Columbia University studying cancer evolution, metastatic progression, and tumor ecosystems.",
  openGraph: {
    type: "website",
    siteName: "Karan Luthria",
    title: "Karan Luthria | Computational Oncology",
    description: "Computational models and multimodal approaches for understanding how human tumors evolve, metastasize, and respond to therapy.",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
