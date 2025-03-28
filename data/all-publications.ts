import type { Publication } from "@/types"
import { recentPublications, selectedPublications } from "./publications"

// Combine recent and selected publications and add more
export const allPublications: Publication[] = [
  ...recentPublications,
  ...selectedPublications.filter((selected) => !recentPublications.some((recent) => recent.title === selected.title)),
  // Additional publications
  {
    title: "Quantum Phase Transitions in Disordered Systems: A Renormalization Group Approach",
    authors: "A. Chen, B. Smith, C. Johnson",
    journal: "Physical Review B, 102, 134502",
    year: 2020,
    citations: 45,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://journals.aps.org/prb/",
    },
  },
  {
    title: "Topological Insulators in Three Dimensions: Theoretical Predictions and Experimental Realizations",
    authors: "A. Chen, D. Wilson, E. Brown",
    journal: "Nature Materials, 18, 723-731",
    year: 2019,
    citations: 78,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://www.nature.com/nmat/",
    },
  },
  {
    title: "Entanglement Entropy in Quantum Critical Systems with Boundaries",
    authors: "A. Chen, F. Garcia",
    journal: "Journal of Statistical Mechanics: Theory and Experiment, 2019, 063102",
    year: 2019,
    citations: 32,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://iopscience.iop.org/journal/1742-5468",
    },
  },
  {
    title: "Numerical Methods for Strongly Correlated Quantum Systems",
    authors: "A. Chen, G. Martinez, H. Wang",
    journal: "Computer Physics Communications, 240, 115-128",
    year: 2019,
    citations: 29,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://www.sciencedirect.com/journal/computer-physics-communications",
    },
  },
  {
    title: "Quantum Criticality in Heavy Fermion Compounds",
    authors: "A. Chen, J. Kim, K. Lee",
    journal: "Reviews of Modern Physics, 90, 015001",
    year: 2018,
    citations: 112,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://journals.aps.org/rmp/",
    },
  },
  {
    title: "Topological Phases in Quantum Spin Systems: From Theory to Materials",
    authors: "A. Chen, L. Zhang",
    journal: "Annual Review of Condensed Matter Physics, 9, 227-251",
    year: 2018,
    citations: 95,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://www.annualreviews.org/journal/conmatphys",
    },
  },
  {
    title: "Quantum Monte Carlo Studies of Frustrated Magnets",
    authors: "A. Chen, M. Davis, N. Wilson",
    journal: "Physical Review B, 95, 144417",
    year: 2017,
    citations: 41,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://journals.aps.org/prb/",
    },
  },
  {
    title: "Exact Solutions of Quantum Spin Chains with Long-Range Interactions",
    authors: "A. Chen, O. Brown, P. Garcia",
    journal: "Journal of Physics A: Mathematical and Theoretical, 50, 265302",
    year: 2017,
    citations: 38,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://iopscience.iop.org/journal/1751-8121",
    },
  },
]

