"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Project, VisualKind } from "@/lib/content";

function Evolution() {
  return <svg viewBox="0 0 720 440" role="img" aria-label="Conceptual diagram of a primary tumor branching toward two metastatic lineages across time">
    <defs><pattern id="dots-e" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#b5a99a" opacity=".35" /></pattern></defs>
    <rect width="720" height="440" fill="#ebe8e1"/><rect width="720" height="440" fill="url(#dots-e)"/>
    <text x="38" y="45" className="svg-small">PRIMARY TUMOR</text><text x="517" y="45" className="svg-small">DISTANT RELAPSE</text>
    <line x1="65" y1="364" x2="655" y2="364" stroke="#b8ad9e"/><path d="M65 359v10 M655 359v10" stroke="#b8ad9e"/><text x="65" y="392" className="svg-tiny">RESECTION</text><text x="586" y="392" className="svg-tiny">METASTASIS</text>
    <path d="M153 212 H290 V145 H414 V99 H571" fill="none" stroke="#a15443" strokeWidth="2.5"/><path d="M290 212 V277 H423 V302 H583" fill="none" stroke="#a15443" strokeWidth="2.5"/><path d="M414 145 V201 H528" fill="none" stroke="#a15443" strokeWidth="2.5"/>
    <circle cx="153" cy="212" r="42" fill="#e3a68d" stroke="#a15443" strokeWidth="1.5"/><circle cx="290" cy="212" r="11" fill="#a15443"/><circle cx="414" cy="145" r="11" fill="#a15443"/><circle cx="423" cy="277" r="11" fill="#a15443"/>
    <circle cx="571" cy="99" r="31" fill="#cd7761" stroke="#a15443"/><circle cx="528" cy="201" r="25" fill="#df947c" stroke="#a15443"/><circle cx="583" cy="302" r="35" fill="#b45a49" stroke="#a15443"/>
    <g fill="#9b493b" opacity=".75"><circle cx="139" cy="201" r="4"/><circle cx="161" cy="194" r="5"/><circle cx="167" cy="219" r="5"/><circle cx="139" cy="229" r="3"/><circle cx="561" cy="91" r="4"/><circle cx="580" cy="108" r="5"/><circle cx="575" cy="81" r="3"/><circle cx="575" cy="294" r="5"/><circle cx="596" cy="310" r="5"/></g>
    <rect x="310" y="340" width="202" height="47" fill="#ebe8e1"/><text x="335" y="368" className="svg-label">DORMANCY / EVOLUTION</text>
    <text x="114" y="290" className="svg-small">CLONAL DIVERSITY</text><text x="480" y="350" className="svg-small">SEEDING CLONES</text>
  </svg>;
}

function Mechanics() {
  const points = Array.from({length: 11}, (_, row) => Array.from({length: 15}, (_, col) => ({x: 55+col*22, y: 88+row*20, r: 5+((row*7+col*3)%6), color: (row+col)%4===0 ? "#b65443" : (row+col)%3===0 ? "#cb9274" : "#c5baa8"}))).flat();
  return <svg viewBox="0 0 720 440" role="img" aria-label="Conceptual registration of tissue mechanics, histology, and spatial transcriptomics into a shared tissue map">
    <rect width="720" height="440" fill="#e8e9e3"/>
    <text x="43" y="45" className="svg-small">MEASUREMENTS FROM ADJACENT SECTIONS</text>
    <g transform="translate(42 67)"><rect width="345" height="247" fill="#d9ddd3" stroke="#8c998b"/>
      {points.map((p,i)=><circle key={i} cx={p.x-35} cy={p.y-68} r={p.r} fill={p.color} opacity=".8"/>)}
      <path d="M35 195 Q105 149 160 184 T310 161" fill="none" stroke="#f3f1e9" strokeWidth="8" opacity=".9"/>
    </g>
    <g transform="translate(443 67)"><rect width="230" height="247" fill="#cdd8d0" stroke="#8c998b"/>
      {Array.from({length: 100},(_,i)=>{const x=(i%10)*22+17,y=Math.floor(i/10)*22+16;const v=Math.sin(i*.48)+Math.cos(i*.2);return <rect key={i} x={x-9} y={y-9} width="18" height="18" fill={v>.9?"#aa5f4a":v>0?"#d5a77b":"#70928d"} opacity=".75"/>})}
      <path d="M15 197 Q75 151 120 183 T215 160" fill="none" stroke="#f3f1e9" strokeWidth="4" opacity=".8"/>
    </g>
    <path d="M395 186 h39" stroke="#a15443" strokeWidth="2"/><path d="m426 179 9 7-9 7" fill="none" stroke="#a15443" strokeWidth="2"/>
    <text x="45" y="347" className="svg-label">TISSUE ARCHITECTURE + STIFFNESS</text><text x="443" y="347" className="svg-label">SPATIAL CELL STATE</text>
    <line x1="42" y1="372" x2="673" y2="372" stroke="#9fa99e"/><text x="42" y="403" className="svg-tiny">REGISTER  →  ALIGN  →  INTEGRATE</text>
  </svg>;
}

function Ecosystem() {
  const cells = Array.from({length: 77}, (_,i)=>{const a=i*2.39996;const r=Math.sqrt(i/77);return {x:357+Math.cos(a)*r*264,y:210+Math.sin(a)*r*146,i};});
  return <svg viewBox="0 0 720 440" role="img" aria-label="Conceptual single-cell map showing malignant, immune, and stromal cell states">
    <rect width="720" height="440" fill="#e6eae5"/><text x="40" y="42" className="svg-small">HETEROGENEOUS TUMOR ECOSYSTEM</text>
    <path d="M88 210c-8-106 136-148 223-100 54 31 73 112 16 170-47 49-161 67-211 18-17-17-27-42-28-88Z" fill="#bdccbc" opacity=".6"/>
    <path d="M346 94c105-50 243 4 277 94 35 94-36 163-153 147-89-12-147-61-157-126-9-55 4-93 33-115Z" fill="#dfbfae" opacity=".65"/>
    {cells.map(({x,y,i})=><circle key={i} cx={x} cy={y} r={i%6===0?9:6} fill={x<340?(i%4===0?"#527e7b":"#80a7a0"):(i%5===0?"#9a5145":"#bf8065")} opacity=".88"/>)}
    <path d="M223 138 Q356 170 464 237" fill="none" stroke="#9b6d5c" strokeDasharray="5 6" strokeWidth="2"/>
    <rect x="39" y="365" width="642" height="43" fill="#f0f1eb"/><circle cx="62" cy="386" r="5" fill="#709e97"/><text x="76" y="391" className="svg-tiny">IMMUNE / STROMAL</text><circle cx="259" cy="386" r="5" fill="#b66e58"/><text x="273" y="391" className="svg-tiny">MALIGNANT</text><text x="501" y="391" className="svg-tiny">CELL STATE → RESPONSE</text>
  </svg>;
}

function Brain() {
  const dots = Array.from({length: 92},(_,i)=>{const a=i*2.39996;const r=Math.sqrt(i/92);return {x:355+Math.cos(a)*r*238,y:216+Math.sin(a)*r*138,i};});
  return <svg viewBox="0 0 720 440" role="img" aria-label="Conceptual spatial map of malignant and microenvironmental states within a brain metastasis">
    <rect width="720" height="440" fill="#e9e8e2"/><text x="42" y="43" className="svg-small">METASTATIC TUMOR IN A NEW ORGAN NICHE</text>
    <ellipse cx="350" cy="218" rx="274" ry="160" fill="#d5ddd7"/><path d="M221 112 Q328 77 432 126 T581 249 Q472 331 363 281 T162 274 Q140 183 221 112Z" fill="#b7cbc7" opacity=".7"/>
    <path d="M270 157 Q358 114 440 164 T520 259 Q463 303 370 281 T243 216 Q241 179 270 157Z" fill="#c47e6b" opacity=".76"/>
    {dots.map(({x,y,i})=><circle key={i} cx={x} cy={y} r={i%9===0?7:4} fill={Math.hypot((x-370)/1.2,y-217)<110?"#a8584d":i%3===0?"#5c8989":"#8aaba4"} opacity=".78"/>)}
    <path d="M88 341 H634" stroke="#a5afa9"/><text x="90" y="377" className="svg-tiny">SPATIAL GENOMICS</text><text x="476" y="377" className="svg-tiny">LOCAL INTERACTIONS</text>
  </svg>;
}

function Education() {
  return <svg viewBox="0 0 720 440" role="img" aria-label="Conceptual illustration of a medical education module">
    <rect width="720" height="440" fill="#e8e9e3"/><text x="42" y="45" className="svg-small">MEDICAL EDUCATION</text>
    <rect x="75" y="89" width="570" height="260" fill="#f3f1e9" stroke="#b8b8aa"/>
    <rect x="75" y="89" width="570" height="49" fill="#d6dfd7"/><text x="102" y="119" className="svg-label">LEARNING MODULE</text>
    <rect x="108" y="168" width="219" height="143" fill="#e7e3d9"/><circle cx="171" cy="211" r="22" fill="#af6855"/><circle cx="227" cy="211" r="22" fill="#7e9a8c"/><circle cx="282" cy="211" r="22" fill="#c69c75"/><path d="M141 260h153M141 278h123" stroke="#9a9a8d" strokeWidth="5"/>
    <rect x="361" y="168" width="246" height="12" fill="#c8c8bb"/><rect x="361" y="196" width="213" height="9" fill="#d4d2c7"/><rect x="361" y="218" width="231" height="9" fill="#d4d2c7"/><rect x="361" y="240" width="190" height="9" fill="#d4d2c7"/>
    <rect x="361" y="274" width="113" height="31" fill="#a6503d"/><text x="380" y="294" style={{fill:"#fff",fontSize:9,letterSpacing:1.2,fontWeight:700}}>DISCUSSION</text>
    <text x="77" y="390" className="svg-tiny">EDUCATIONAL RESOURCE · HEALTH EQUITY</text>
  </svg>;
}

const illustrations: Record<VisualKind, () => React.JSX.Element> = { evolution: Evolution, mechanics: Mechanics, ecosystem: Ecosystem, brain: Brain, education: Education };

export function ResearchVisual({ project, expandable = true }: { project: Project; expandable?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const Graphic = illustrations[project.visual];
  const content = project.figure ? <Image src={project.figure.src} alt={project.figure.alt} width={project.figure.width} height={project.figure.height} sizes="(max-width: 760px) 100vw, 50vw" className="research-image" /> : <Graphic />;
  return <>
    <div className="visual-wrap">
      {expandable ? <button className="visual-button" type="button" onClick={() => dialog.current?.showModal()} aria-label={`Expand visual for ${project.shortTitle}`}>{content}<span className="expand-hint">Expand figure <span aria-hidden="true">↗</span></span></button> : content}
      <p className="visual-caption">{project.figure?.caption ?? "Original conceptual illustration"}</p>
    </div>
    {expandable && <dialog ref={dialog} className="figure-dialog" onClick={(event) => {if (event.target === dialog.current) dialog.current?.close();}}>
      <button type="button" className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Close expanded figure">Close ×</button>
      <div className="dialog-figure">{project.figure ? <img src={project.figure.originalSrc ?? project.figure.src} alt={project.figure.alt} /> : <Graphic />}</div>
      <p>{project.figure?.caption ?? "Original conceptual illustration"}</p>
    </dialog>}
  </>;
}
