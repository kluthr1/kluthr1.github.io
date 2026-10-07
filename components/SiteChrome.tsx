import Link from "next/link";
import { ORCID } from "@/lib/content";

export function Header() {
  return <header className="site-header"><div className="container nav-inner">
    <Link href="/" className="brand" aria-label="Karan Luthria home"><span className="brand-mark">KL<span>.</span></span><span>Karan Luthria</span></Link>
    <nav className="main-nav" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/research">Research</Link><Link href="/publications">Publications</Link></nav>
    <a className="nav-orcid" href={ORCID} target="_blank" rel="noopener noreferrer" aria-label="Karan Luthria on ORCID">ORCID <span aria-hidden="true">↗</span></a>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><div><span className="eyebrow">Karan Luthria</span></div><div className="footer-links"><a href={ORCID} target="_blank" rel="noopener noreferrer">ORCID ↗</a><a href="/privacy/">Privacy</a><a href="#top">Back to top ↑</a></div><span className="copyright">© {new Date().getFullYear()} Karan Luthria</span></div></footer>;
}
