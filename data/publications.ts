import type { Publication } from "@/types"

export const recentPublications: Publication[] = [
  {
    id: "chen2023topological",
    title: "Topological Order and Quantum Criticality in Twisted Bilayer Graphene",
    authors: "A. Chen, A. Johnson, L. Chen, R. Williams",
    journal: "Physical Review Letters, 128, 176401",
    year: 2023,
    links: {
      pdf: "/api/publications/pdf/chen2023topological",
      bibtex: "/api/publications/bibtex/chen2023topological",
      journal: "https://journals.aps.org/prl/",
    },
  },
  {
    id: "chen2023entanglement",
    title: "Entanglement Entropy Scaling at Quantum Critical Points with Emergent Gauge Fields",
    authors: "A. Chen, T. Rodriguez, S. Kumar",
    journal: "Nature Physics, 19, 245-251",
    year: 2023,
    links: {
      pdf: "/api/publications/pdf/chen2023entanglement",
      bibtex: "/api/publications/bibtex/chen2023entanglement",
      journal: "https://www.nature.com/nphys/",
    },
  },
  {
    id: "chen2022nonfermi",
    title: "Non-Fermi Liquid Behavior in Strongly Correlated Electron Systems: A Renormalization Group Approach",
    authors: "A. Chen, P. Anderson, M. Zhang",
    journal: "Physical Review B, 105, 195132",
    year: 2022,
    links: {
      pdf: "/api/publications/pdf/chen2022nonfermi",
      bibtex: "/api/publications/bibtex/chen2022nonfermi",
      journal: "https://journals.aps.org/prb/",
    },
  },
  {
    id: "chen2022majorana",
    title: "Majorana Zero Modes in Proximitized Semiconductor Nanowires: Beyond the Kitaev Model",
    authors: "A. Chen, H. Wang, K. Lee, D. Miller",
    journal: "Science, 375, 1234-1238",
    year: 2022,
    links: {
      pdf: "/api/publications/pdf/chen2022majorana",
      bibtex: "/api/publications/bibtex/chen2022majorana",
      journal: "https://www.science.org/",
    },
  },
]

export const selectedPublications: Publication[] = [
  {
    id: "chen2021quantum",
    title: "Quantum Entanglement and the Geometry of Spacetime",
    authors: "A. Chen, R. Patel, T. Rodriguez",
    journal: "Nature, 563, 714-718",
    year: 2021,
    citations: 87,
    description:
      "This work established a connection between quantum entanglement in boundary theories and the geometry of bulk spacetime, providing new insights into the AdS/CFT correspondence.",
    links: {
      pdf: "/api/publications/pdf/chen2021quantum",
      bibtex: "/api/publications/bibtex/chen2021quantum",
      journal: "https://www.nature.com/",
    },
  },
  {
    id: "chen2020emergent",
    title: "Emergent Gauge Fields in Strongly Correlated Electron Systems",
    authors: "A. Chen, P. Anderson",
    journal: "Physical Review Letters, 125, 125701",
    year: 2020,
    citations: 102,
    description:
      "This paper introduced a novel theoretical framework for understanding emergent gauge fields in strongly correlated electron systems, with applications to high-temperature superconductivity.",
    links: {
      pdf: "/api/publications/pdf/chen2020emergent",
      bibtex: "/api/publications/bibtex/chen2020emergent",
      journal: "https://journals.aps.org/prl/",
    },
  },
]

