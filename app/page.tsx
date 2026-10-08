import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components/SiteChrome";
import { ORCID, publications } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const profileStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Karan Luthria",
      url: "https://kluthria.us/",
      image: "https://kluthria.us/images/karan-profile-social.jpg",
      description: "MD-PhD student at Columbia University in the Izar Laboratory studying cancer evolution, metastatic progression, and tumor ecosystems.",
      affiliation: { "@type": "Organization", name: "Columbia University" },
      sameAs: [ORCID],
    },
  };

  return <div id="top"><Header/><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c") }} />
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-grid"><div className="hero-copy">
        <p className="eyebrow hero-kicker"><span className="small-rule"/> <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a> · Izar laboratory</p>
        <h1 id="hero-title">Karan Luthria</h1>
        <p className="hero-subtitle">MD-PhD student · Computational oncology</p>
        <p className="hero-statement">I study cancer evolution, metastatic progression, and tumor ecosystems using computational and multimodal approaches.</p>
        <div className="hero-actions"><Link href="/research" className="button button-dark">Research <span aria-hidden="true">↗</span></Link><a href={ORCID} target="_blank" rel="noopener noreferrer" className="text-link">ORCID ↗</a></div>
      </div><div className="hero-art" aria-hidden="true"><div className="hero-art-number">CANCER EVOLUTION</div><svg viewBox="0 0 560 590"><path d="M66 459 C110 323 144 319 209 332 S321 278 358 180 S450 147 514 108" fill="none" stroke="#b95c48" strokeWidth="2"/><path d="M209 332 C252 375 296 395 338 424 S429 436 506 469" fill="none" stroke="#b95c48" strokeWidth="2"/><path d="M358 180 C394 213 426 267 495 278" fill="none" stroke="#b95c48" strokeWidth="2"/><g fill="#b95c48"><circle cx="66" cy="459" r="15"/><circle cx="209" cy="332" r="10"/><circle cx="358" cy="180" r="10"/><circle cx="338" cy="424" r="7"/><circle cx="514" cy="108" r="21"/><circle cx="506" cy="469" r="29"/><circle cx="495" cy="278" r="16"/></g><g fill="none" stroke="#b95c48" opacity=".4"><circle cx="66" cy="459" r="39"/><circle cx="514" cy="108" r="37"/><circle cx="506" cy="469" r="43"/></g></svg><div className="art-label art-label-one">PRIMARY</div><div className="art-label art-label-two">EVOLUTION</div><div className="art-label art-label-three">METASTASIS</div><p>Columbia University</p></div></div>
      <div className="hero-bottom"><span>MD-PhD training</span><span>Columbia University · New York</span></div>
    </section>

    <section className="about-section"><div className="container about-grid"><div className="about-heading"><p className="eyebrow about-label">About me</p><figure className="about-photo"><Image src="/images/karan-profile-social.jpg" alt="Karan hiking in the mountains" width={4032} height={3024} sizes="(max-width: 760px) 100vw, 34vw"/></figure><figure className="about-photo about-kayak"><Image src="/images/karan-kayaking-cropped.jpg" alt="Karan kayaking beside seals" width={1536} height={1948} sizes="(max-width: 760px) 100vw, 34vw"/></figure></div><div className="about-copy"><p className="about-lead">I am an MD-PhD student at Columbia University in the Izar Laboratory.</p><p>My research asks how cancers evolve, acquire metastatic potential, and interact with the cells and tissues around them. I develop computational models and multimodal approaches for studying melanoma, sarcoma, and metastatic disease, with an emphasis on questions that require connecting genomic, transcriptomic, spatial, and clinical observations.</p><p>This work is motivated by a practical challenge: patient tumors are complex and change over time, while any single measurement captures only part of that biology. My goal is to build and apply methods that make those measurements more interpretable and help generate testable hypotheses about progression and treatment response.</p><p>Before medical school, I studied computer science at the University of Maryland, Baltimore County (UMBC). I was named to <a href="https://top.mlh.com/2021/profiles/karan-luthria" target="_blank" rel="noopener noreferrer">MLH’s Top 50 Hackers ↗</a> and received a Goldwater Scholarship for work using deep learning to improve drug-repurposing models.</p><p className="about-interests">Away from research, I play tennis, hike, and spend time in the mountains. I enjoy trying new restaurants and am a Yelp Elite reviewer, and I’m perfecting my chai-making process. I’m a Washington Wizards fan and make sure to watch each game (shoutout AJ Dybantsa); my fantasy football team, meanwhile, keeps losing each Sunday.</p><Link href="/research" className="text-link">Research overview ↗</Link></div></div></section>

    <section className="timeline-section"><div className="container"><div className="timeline-header"><h2>Recent Updates</h2></div><ul className="recent-updates">
      <li><span className="update-year">2026</span><div><p><a href={publications[0].href} target="_blank" rel="noopener noreferrer"><strong>Released a co-first-author preprint on bioRxiv</strong> · <em>Genomic correlates of metastatic competence and progression in human melanoma</em> ↗</a></p><p className="update-detail">The study examines genomic features associated with metastatic competence and reconstructs melanoma evolution from primary tumors to distant disease.</p></div></li>
      <li><span className="update-year">2026</span><div><p><a href={publications[4].href} target="_blank" rel="noopener noreferrer"><strong>Published a study in Nature Communications as a contributing author</strong> · <em>Single-cell correlatives in a phase 2 study of metastatic pancreatic cancer</em> ↗</a></p><p className="update-detail">The clinical study pairs combination treatment with single-cell profiling to characterize tumor and immune states associated with treatment response.</p></div></li>
      <li><span className="update-year">2026</span><div><p><strong>Awarded an <a href="https://reporter.nih.gov/search/g1db5vPndkqSAP_uS6b9JQ/projects" target="_blank" rel="noopener noreferrer">NIH/NCI F30 fellowship ↗</a>.</strong></p><p className="update-detail">The fellowship supports doctoral research and training in cancer biology, including work on melanoma dormancy and metastatic relapse.</p></div></li>
      <li><span className="update-year">2026</span><div><p><a href="https://melanoma.org/news-press/research-grant/defining-genomic-programs-of-dormancy-and-reactivation-in-melanoma/" target="_blank" rel="noopener noreferrer"><strong>Received a Melanoma Research Foundation grant</strong> · <em>Defining Genomic Programs of Dormancy and Reactivation in Melanoma</em> ↗</a></p><p className="update-detail">The grant supports research on genomic programs that may help melanoma cells disseminate, remain dormant, and later reactivate.</p></div></li>
      <li><span className="update-year">2025</span><div><p><a href={publications[2].href} target="_blank" rel="noopener noreferrer"><strong>Published a study in Nature Medicine as a contributing author</strong> · <em>Single-cell and spatial genomic landscape of non-small cell lung cancer brain metastases</em> ↗</a></p><p className="update-detail">The paper maps tumor and microenvironmental states in lung cancer brain metastases using single-cell and spatial genomics.</p></div></li>
      <li><span className="update-year">2025</span><div><p><a href={publications[3].href} target="_blank" rel="noopener noreferrer"><strong>Published a study in Nature as a contributing author</strong> · <em>Neuronal activity-dependent mechanisms of small cell lung cancer pathogenesis</em> ↗</a></p><p className="update-detail">The study investigates how neuronal activity contributes to small cell lung cancer development and progression.</p></div></li>
      <li><span className="update-year">2025</span><div><p><a href={publications[5].href} target="_blank" rel="noopener noreferrer"><strong>Published a first-author educational module in MedEdPORTAL</strong> · <em>Deconstructing the Monolith</em> ↗</a></p><p className="update-detail">The module teaches learners to recognize health disparities within Asian American, Native Hawaiian, and Pacific Islander populations.</p></div></li>
    </ul></div></section>
  </main><Footer/></div>;
}
