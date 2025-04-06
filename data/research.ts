import type { ResearchArea, ResearchProject } from "@/types"

export const researchAreas: ResearchArea[] = [
  {
    title: "Atomic Structure",
    description:
      "My work in quantum field theory focuses on developing new mathematical frameworks for understanding strongly correlated quantum systems. This includes applications to high-temperature superconductivity and quantum criticality.",
  },
  {
    title: "Electron Atom Interactions",
    description:
      "I study topological phases in condensed matter systems, including topological insulators, topological superconductors, and quantum spin liquids. My research aims to classify these phases and understand their exotic properties.",
  },
  {
    title: "Confined Atomic Systems",
    description:
      "I investigate the intersection of quantum information theory and condensed matter physics, particularly entanglement properties of many-body systems and their applications to quantum computing.",
  },
  {
    title: "Atomic Cascades",
    description:
      "My research addresses the challenging problem of strongly interacting electrons in materials, developing theoretical tools to understand phenomena like high-temperature superconductivity and quantum magnetism.",
  },
]

export const researchProjects: ResearchProject[] = [
  {
    title: "Novel Quantum Materials",
    description:
      "Collaborating with experimental groups to design and characterize new quantum materials with exotic properties. Current focus is on materials that could host Majorana fermions for topological quantum computing.",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["Topological Superconductivity", "Majorana Fermions", "Quantum Computing"],
    funding: "National Science Foundation, 2022-2025",
  },
  {
    title: "Entanglement in Many-Body Systems",
    description:
      "Developing new theoretical tools to characterize and measure quantum entanglement in many-body systems, with applications to quantum phase transitions and quantum information processing.",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["Quantum Entanglement", "Many-Body Physics", "Quantum Phase Transitions"],
    funding: "Department of Energy, 2021-2024",
  },
]

