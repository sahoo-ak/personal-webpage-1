import type { ResearchArea, ResearchProject } from "@/types"

export const researchAreas: ResearchArea[] = [
  {
    title: "Atomic Structure",
    description:
      "Exploring relativistic effects and electron correlations in heavy atomic systems to understand spectroscopic properties, energy levels, and their implications for fundamental physics, including precision tests of quantum electrodynamics.",
  },
  {
    title: "Electron-Atom Interactions",
    description:
      "Investigating elastic and inelastic electron scattering from atoms and ions using the Relativistic Distorted Wave approximation to uncover interaction mechanisms, cross-section behaviors, and their relevance to plasma modeling and astrophysical phenomena.",
  },
  {
    title: "Confined Atomic Systems",
    description:
      "Studying electron scattering in confined systems like C60-fullerene to analyze quantum confinement effects, electron correlations, resonance phenomena, and their potential applications in different branches of physics.",
  },
  {
    title: "Atomic Cascades",
    description:
      "Performing atomic cascade calculations to understand energy transfer processes in highly excited systems, with applications in astrophysics, plasma physics, and the modeling of radiative processes in extreme environments such as neutron stars mergers.",
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

