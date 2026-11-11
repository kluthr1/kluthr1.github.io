import type { Metadata } from "next";
import localFont from "next/font/local";
import { VisitTracker } from "@/components/VisitTracker";
import "./globals.css";

const siteUrl = "https://kluthria.org";
const sans = localFont({ src: "../public/fonts/dm-sans-latin.woff2", variable: "--font-sans", display: "swap", weight: "100 1000" });
const serif = localFont({ src: "../public/fonts/cormorant-garamond-latin.woff2", variable: "--font-serif", display: "swap", weight: "300 700" });

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
    images: [{ url: "/images/karan-profile-social.jpg", width: 4032, height: 3024, alt: "Karan Luthria hiking in the Canadian Rockies" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/karan-profile-social.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><VisitTracker />{children}</body></html>;
}
