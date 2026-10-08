import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";
import { ResearchVisual } from "@/components/ResearchVisual";
import { projects, publications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: "Selected research in cancer evolution, tumor ecosystems, and multimodal methods.",
  alternates: { canonical: "/research/" },
};

export default function ResearchPage() {
  return <div id="top"><Header/><main className="container research-page">
    <div className="research-page-heading"><p className="eyebrow">Research</p><h1>Research</h1><p>Selected work in cancer evolution, tumor ecosystems, and multimodal methods.</p></div>
    <div className="research-project-list">{projects.map((project)=><article className="research-project" key={project.slug}>
      <div className="research-project-visual"><ResearchVisual project={project}/></div>
      <div className="research-project-copy"><p className="eyebrow">{project.eyebrow}</p><h2>{project.title}</h2><p className="project-lede">{project.description}</p><div className="project-details">{project.details.map((detail, i)=><p key={i}>{detail}</p>)}</div><div className="project-papers"><h3>Related papers</h3>{project.relatedPublicationIds.map((id)=>publications.find((paper)=>paper.id===id)).filter((paper)=>paper !== undefined).map((paper)=><a href={paper.href} target="_blank" rel="noopener noreferrer" key={paper.id}><span>{paper.journal} · {paper.year}{paper.label && ` · ${paper.label}`}</span><strong>{paper.title}</strong><span className="paper-arrow" aria-hidden="true">↗</span></a>)}</div></div>
    </article>)}</div>
  </main><Footer/></div>;
}
