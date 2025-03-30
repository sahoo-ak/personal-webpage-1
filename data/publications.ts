import type { Publication } from "@/types"

// Single publications array with featured flag to control display
export const publications: Publication[] = [
  // Recent publications
  {
    title: "Topological Order and Quantum Criticality in Twisted Bilayer Graphene",
    authors: "A. Chen, A. Johnson, L. Chen, R. Williams",
    journal: "Physical Review Letters",
    volume: "128",
    issue: "17",
    pages: "176401-176408",
    year: 2023,
    featured: true,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://journals.aps.org/prl/",
    },
  },
  {
    title: "Entanglement Entropy Scaling at Quantum Critical Points with Emergent Gauge Fields",
    authors: "A. Chen, T. Rodriguez, S. Kumar",
    journal: "Nature Physics",
    volume: "19",
    issue: "3",
    pages: "245-251",
    year: 2023,
    featured: true,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://www.nature.com/nphys/",
    },
  },
  {
    title: "Non-Fermi Liquid Behavior in Strongly Correlated Electron Systems: A Renormalization Group Approach",
    authors: "A. Chen, P. Anderson, M. Zhang",
    journal: "Physical Review B",
    volume: "105",
    issue: "19",
    pages: "195132-195145",
    year: 2022,
    featured: true,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://journals.aps.org/prb/",
    },
  },
  {
    title: "Majorana Zero Modes in Proximitized Semiconductor Nanowires: Beyond the Kitaev Model",
    authors: "A. Chen, H. Wang, K. Lee, D. Miller",
    journal: "Science",
    volume: "375",
    issue: "6584",
    pages: "1234-1238",
    year: 2022,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://www.science.org/",
    },
  },
  // Selected publications
  {
    title: "Quantum Entanglement and the Geometry of Spacetime",
    authors: "A. Chen, R. Patel, T. Rodriguez",
    journal: "Nature",
    volume: "563",
    issue: "7732",
    pages: "714-718",
    year: 2021,
    citations: 87,
    featured: true,
    description:
      "This work established a connection between quantum entanglement in boundary theories and the geometry of bulk spacetime, providing new insights into the AdS/CFT correspondence.",
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://www.nature.com/",
    },
  },
  {
    title: "Emergent Gauge Fields in Strongly Correlated Electron Systems",
    authors: "A. Chen, P. Anderson",
    journal: "Physical Review Letters",
    volume: "125",
    issue: "12",
    pages: "125701-125705",
    year: 2020,
    citations: 102,
    description:
      "This paper introduced a novel theoretical framework for understanding emergent gauge fields in strongly correlated electron systems, with applications to high-temperature superconductivity.",
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://journals.aps.org/prl/",
    },
  },
  // Additional publications
  {
    title: "Quantum Phase Transitions in Disordered Systems: A Renormalization Group Approach",
    authors: "A. Chen, B. Smith, C. Johnson",
    journal: "Physical Review B",
    volume: "102",
    issue: "13",
    pages: "134502-134515",
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
    journal: "Nature Materials",
    volume: "18",
    issue: "7",
    pages: "723-731",
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
    journal: "Journal of Statistical Mechanics: Theory and Experiment",
    volume: "2019",
    issue: "6",
    pages: "063102",
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
    journal: "Computer Physics Communications",
    volume: "240",
    pages: "115-128",
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
    journal: "Reviews of Modern Physics",
    volume: "90",
    issue: "1",
    pages: "015001",
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
    journal: "Annual Review of Condensed Matter Physics",
    volume: "9",
    pages: "227-251",
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
    journal: "Physical Review B",
    volume: "95",
    issue: "14",
    pages: "144417",
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
    journal: "Journal of Physics A: Mathematical and Theoretical",
    volume: "50",
    issue: "26",
    pages: "265302",
    year: 2017,
    citations: 38,
    links: {
      pdf: "#",
      bibtex: "#",
      journal: "https://iopscience.iop.org/journal/1751-8121",
    },
  },
]

// Helper function to get featured publications
export const getFeaturedPublications = () => publications.filter((pub) => pub.featured)

export const recentPublications = publications.filter((pub) => pub.year >= 2022)
export const selectedPublications = publications.filter((pub) => pub.citations && pub.citations > 80)

