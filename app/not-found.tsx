import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
export default function NotFound() { return <><Header/><main className="container not-found"><p className="eyebrow">404 / Page not found</p><h1>Nothing here <em>yet.</em></h1><Link href="/" className="button button-dark">Return home ↗</Link></main><Footer/></>; }
