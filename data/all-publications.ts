import type { Publication } from "@/types"
import { recentPublications, selectedPublications } from "./publications"

// Combine recent and selected publications and add more
export const allPublications: Publication[] = [
  ...recentPublications,
  ...selectedPublications.filter((selected) => !recentPublications.some((recent) => recent.id === selected.id)),
  // Additional publications
  {
    id: "chen2020quantum",
    title: "Quantum Phase Transitions in Disordered Systems: A Renormalization Group Approach",
    authors: "A. Chen, B. Smith, C. Johnson",
    journal: "Physical Review B, 102, 134502",
    year: 2020,
    citations: 45,
    links: {
      pdf: "/api/publications/pdf/chen2020quantum",
      bibtex: "/api/publications/bibtex/chen2020quantum",
      journal: "https://journals.aps.org/prb/",
    },
  },
  {
    id: "chen2019topological",
    title: "Topological Insulators in Three Dimensions: Theoretical Predictions and Experimental Realizations",
    authors: "A. Chen, D. Wilson, E. Brown",
    journal: "Nature Materials, 18, 723-731",
    year: 2019,
    citations: 78,
    links: {
      pdf: "/api/publications/pdf/chen2019topological",
      bibtex: "/api/publications/bibtex/chen2019topological",
      journal: "https://www.nature.com/nmat/",
    },
  },
  // Additional publications...
]

