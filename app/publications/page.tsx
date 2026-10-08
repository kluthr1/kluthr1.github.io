import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";
import { publications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications and preprints by Karan Luthria.",
  alternates: { canonical: "/publications/" },
};

function AuthorLine({ authors }: { authors: string }) {
  return <>{authors.split(/(Luthria K(?:D)?)/g).map((piece, i) => /Luthria K(?:D)?/.test(piece) ? <strong key={i}>{piece}</strong> : piece)}</>;
}

export default function PublicationsPage() {
  return <div id="top"><Header/><main className="container full-publications-page">
    <div className="research-page-heading"><p className="eyebrow">Bibliography</p><h1>Publications</h1><p>Peer-reviewed articles and preprints.</p></div>
    <div className="full-publication-list">{[...publications].sort((a, b) => b.year - a.year).map((paper, index)=><article className="full-publication" key={paper.href}>
      <span className="pub-number">{String(index+1).padStart(2,"0")}</span>
      <div><p className="full-pub-meta">{paper.journal} · {paper.year}{paper.label && <> · <span>{paper.label}</span></>}</p><h2><a href={paper.href} target="_blank" rel="noopener noreferrer">{paper.title} <span aria-hidden="true">↗</span></a></h2><p className="full-pub-authors"><AuthorLine authors={paper.authors}/></p></div>
    </article>)}</div>
    <p className="bibliography-note">Journal and preprint records are linked by DOI where available.</p>
  </main><Footer/></div>;
}
