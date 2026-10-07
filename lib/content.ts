export type VisualKind = "evolution" | "mechanics" | "ecosystem" | "brain" | "education";

export type Project = {
  slug: string;
  index: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  relatedPublicationIds: string[];
  visual: VisualKind;
  figure?: { src: string; originalSrc?: string; alt: string; caption: string; width: number; height: number };
};

export const ORCID = "https://orcid.org/0000-0002-4392-9675";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  href: string;
  label?: string;
  visual?: VisualKind;
};

export const publications: Publication[] = [
  {
    id: "melanoma",
    title: "Genomic correlates of metastatic competence and progression in human melanoma",
    authors: "Chatziioannou E, Luthria K, Shah P, et al.",
    journal: "bioRxiv",
    year: 2026,
    href: "https://doi.org/10.64898/2026.09.23.753695",
    label: "Co-first author · Preprint",
    visual: "evolution",
  },
  {
    id: "sarcoma",
    title: "Single-Cell Profiling of Sarcomas from Archival Tissue Reveals Programs Associated with Resistance to Immune Checkpoint Blockade",
    authors: "Luthria KD, Shah P, Caldwell B, et al.",
    journal: "Clinical Cancer Research",
    year: 2024,
    href: "https://doi.org/10.1158/1078-0432.CCR-23-2976",
    label: "First author",
    visual: "ecosystem",
  },
  {
    id: "brain-mets",
    title: "Single-cell and spatial genomic landscape of non-small cell lung cancer brain metastases",
    authors: "Tagore S, Caprio L, Amin AD, Bestak K, Luthria KD, et al.",
    journal: "Nature Medicine",
    year: 2025,
    href: "https://doi.org/10.1038/s41591-025-03530-z",
    visual: "brain",
  },
  {
    id: "sclc-nature",
    title: "Neuronal activity-dependent mechanisms of small cell lung cancer pathogenesis",
    authors: "Savchuk S, Gentry KM, Wang W, et al. (including Luthria KD)",
    journal: "Nature",
    year: 2025,
    href: "https://doi.org/10.1038/s41586-025-09492-z",
  },
  {
    id: "pancreatic-single-cell",
    title: "Motixafortide, cemiplimab, gemcitabine and nab-paclitaxel in metastatic pancreatic cancer: a single-arm phase 2 study with single-cell correlatives",
    authors: "Raufi AG, D’Souza EK, May MS, et al. (including Luthria KD)",
    journal: "Nature Communications",
    year: 2026,
    href: "https://doi.org/10.1038/s41467-026-76559-4",
  },
  {
    id: "meded-module",
    title: "Deconstructing the Monolith: An Educational Module for Understanding Disparities Within Asian American, Native Hawaiian, and Pacific Islander Populations",
    authors: "Luthria KD, Kim DK, Xing SX, et al.",
    journal: "MedEdPORTAL",
    year: 2025,
    href: "https://doi.org/10.15766/mep_2374-8265.11480",
    label: "First author",
    visual: "education",
  },
  {
    id: "patient-informatics",
    title: "Patient-Generated Collections for Organizing Electronic Health Record Data to Elevate Personal Meaning, Improve Actionability, and Support Patient–Health Care Provider Communication: Think-Aloud Evaluation Study",
    authors: "Nakikj D, Kreda DA, Luthria KD, Gehlenborg N.",
    journal: "JMIR Human Factors",
    year: 2025,
    href: "https://doi.org/10.2196/50331",
  },
  {
    id: "ecm-diseasome",
    title: "The Human Extracellular Matrix Diseasome Reveals Genotype–Phenotype Associations with Clinical Implications for Age-Related Diseases",
    authors: "Statzer C, Luthria KD, Sharma A, Kann MG, Ewald CY.",
    journal: "Biomedicines",
    year: 2023,
    href: "https://doi.org/10.3390/biomedicines11041212",
  },
];

export const projects: Project[] = [
  {
    slug: "melanoma-evolution",
    index: "01",
    eyebrow: "Goal 1 · Cancer evolution",
    title: "Metastatic evolution in melanoma",
    shortTitle: "Metastatic evolution in melanoma",
    description: "Studying when metastatic competence emerges and how tumors continue evolving after dissemination.",
    details: [
      "This work examines genomic changes in primary melanomas and matched metastases from patients who later relapsed.",
      "The preprint reports a six-gene copy-number signature associated with relapse and continued copy-number evolution in metastatic samples.",
      "Clonal reconstruction and spatial measurements were used to examine seeding patterns and the organization of metastatic subclones.",
    ],
    relatedPublicationIds: ["melanoma", "brain-mets"],
    visual: "evolution",
  },
  {
    slug: "tumor-ecosystems",
    index: "02",
    eyebrow: "Goal 2 · Tumor ecosystems",
    title: "Tumor ecosystems and treatment response",
    shortTitle: "Tumor ecosystems and treatment response",
    description: "Examining malignant and surrounding cell states in human tumors, including programs associated with treatment response.",
    details: [
      "Tumors contain malignant, immune, and stromal populations that can be studied together at single-cell and spatial resolution.",
      "My first-author Clinical Cancer Research paper analyzes archival sarcomas and reports cellular programs associated with resistance to immune checkpoint blockade.",
      "Collaborative work extends this interest to lung cancer brain metastases and single-cell measurements in a pancreatic cancer clinical study.",
      "A Nature study on neuronal activity and small cell lung cancer provides another example of work examining interactions between tumors and their surrounding context.",
    ],
    relatedPublicationIds: ["sarcoma", "brain-mets", "pancreatic-single-cell", "sclc-nature"],
    visual: "ecosystem",
  },
  {
    slug: "spatial-mechanics",
    index: "03",
    eyebrow: "Goal 3 · Multimodal methods",
    title: "Tumor mechanics and spatial cell states",
    shortTitle: "Tumor mechanics and spatial cell states",
    description: "Connecting physical properties of tissue with its spatially organized cellular states.",
    details: [
      "This methods-development project asks how tissue mechanics relates to molecular and cellular organization in human tumors.",
      "The planned approach combines atomic force microscopy with histology and spatial transcriptomics measured on adjacent sections.",
      "Tissue registration is used to align physical measurements with spatial molecular information.",
      "Related spatial publications are listed below; they are separate from this mechanics project.",
    ],
    relatedPublicationIds: ["brain-mets", "melanoma"],
    visual: "mechanics",
  },
  {
    slug: "medical-education",
    index: "04",
    eyebrow: "Goal 4 · Medical education",
    title: "Medical education and health equity",
    shortTitle: "Medical education and health equity",
    description: "Educational work on understanding disparities within Asian American, Native Hawaiian, and Pacific Islander populations.",
    details: [
      "This work addresses how health disparities can differ across communities often grouped under a single broad category.",
      "The educational module focuses on disparities within Asian American, Native Hawaiian, and Pacific Islander populations.",
    ],
    relatedPublicationIds: ["meded-module"],
    visual: "education",
  },
];
