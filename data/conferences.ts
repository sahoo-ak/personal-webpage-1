import type { Conference } from "@/types"

export const conferences: Conference[] = [
  {
    title: "APS March Meeting 2023",
    location: "Las Vegas, Nevada, USA",
    date: "March 2023",
    role: 'Talk: "Topological Order and Quantum Criticality in Twisted Bilayer Graphene"',
    description:
      "Presented recent findings on the interplay between topology and quantum criticality in twisted bilayer graphene, focusing on the emergence of novel quantum phases at magic angles.",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "International Conference on Topological Quantum Matter",
    location: "ICTP, Trieste, Italy",
    date: "September 2022",
    role: 'Poster: "Entanglement Entropy Scaling at Quantum Critical Points with Emergent Gauge Fields"',
    description:
      "Presented a poster on novel entanglement entropy scaling laws at quantum critical points characterized by emergent gauge fields, with implications for quantum information theory.",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Quantum Matter Symposium",
    location: "ETH Zurich, Switzerland",
    date: "June 2022",
    role: 'Invited Talk: "Non-Fermi Liquid Behavior in Strongly Correlated Electron Systems"',
    description:
      "Delivered an invited talk on recent advances in understanding non-Fermi liquid behavior using renormalization group techniques, with applications to strange metal phases in high-temperature superconductors.",
    logo: "/placeholder.svg?height=100&width=100",
  },
]

export const schools: Conference[] = [
  {
    title: "Aspen Winter Conference on Quantum Matter",
    location: "Aspen Center for Physics, Colorado, USA",
    date: "January 2023",
    role: "Participant",
    description:
      "Participated in intensive discussions and workshops on recent developments in quantum matter research, focusing on topological phases and strongly correlated systems.",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "Les Houches Summer School on Quantum Information and Quantum Matter",
    location: "Les Houches, France",
    date: "July 2021",
    role: "Participant",
    description:
      "Attended lectures and workshops on the intersection of quantum information theory and condensed matter physics, with a focus on entanglement in many-body systems.",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "KITP Program on Quantum Matter",
    location: "Kavli Institute for Theoretical Physics, Santa Barbara, USA",
    date: "September-December 2022",
    role: "Visiting Researcher",
    description:
      "Participated in a long-term research program on quantum matter, collaborating with leading researchers in the field and presenting work on topological phases in non-Hermitian systems.",
    logo: "/placeholder.svg?height=100&width=100",
  },
]

