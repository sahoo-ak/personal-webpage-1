import type { AcademicEvent } from "@/types"

// Add the academicEvents export that combines conferences and schools
export const academicEvents: AcademicEvent[] = [
  // Add conferences
  {
    title: "APS March Meeting 2023",
    location: "Las Vegas, Nevada, USA",
    date: "March 2023",
    role: 'Talk: "Topological Order and Quantum Criticality in Twisted Bilayer Graphene"',
    description:
      "Presented recent findings on the interplay between topology and quantum criticality in twisted bilayer graphene, focusing on the emergence of novel quantum phases at magic angles.",
    type: "conference",
    featured: true,
  },
  {
    title: "International Conference on Topological Quantum Matter",
    location: "ICTP, Trieste, Italy",
    date: "September 2022",
    role: 'Poster: "Entanglement Entropy Scaling at Quantum Critical Points with Emergent Gauge Fields"',
    description:
      "Presented a poster on novel entanglement entropy scaling laws at quantum critical points characterized by emergent gauge fields, with implications for quantum information theory.",
    type: "conference",
    featured: true,
  },
  {
    title: "Quantum Matter Symposium",
    location: "ETH Zurich, Switzerland",
    date: "June 2022",
    role: 'Invited Talk: "Non-Fermi Liquid Behavior in Strongly Correlated Electron Systems"',
    description:
      "Delivered an invited talk on recent advances in understanding non-Fermi liquid behavior using renormalization group techniques, with applications to strange metal phases in high-temperature superconductors.",
    type: "conference",
    featured: true,
  },
  // Add additional conferences
  {
    title: "American Physical Society Annual Meeting",
    location: "Chicago, Illinois, USA",
    date: "April 2022",
    role: 'Contributed Talk: "Emergent Gauge Fields in Strongly Correlated Electron Systems"',
    description:
      "Presented research on emergent gauge fields in strongly correlated electron systems and their role in determining the low-energy physics of these systems.",
    type: "conference",
  },
  {
    title: "International Conference on Quantum Information",
    location: "Singapore",
    date: "January 2022",
    role: 'Poster: "Entanglement Properties of Topological Phases"',
    description:
      "Presented a poster on the entanglement properties of topological phases and their applications to quantum information processing.",
    type: "conference",
  },
  // Add schools
  {
    title: "Aspen Winter Conference on Quantum Matter",
    location: "Aspen Center for Physics, Colorado, USA",
    date: "January 2023",
    role: "Participant",
    description:
      "Participated in intensive discussions and workshops on recent developments in quantum matter research, focusing on topological phases and strongly correlated systems.",
    type: "school",
    featured: true,
  },
  {
    title: "Les Houches Summer School on Quantum Information and Quantum Matter",
    location: "Les Houches, France",
    date: "July 2021",
    role: "Participant",
    description:
      "Attended lectures and workshops on the intersection of quantum information theory and condensed matter physics, with a focus on entanglement in many-body systems.",
    type: "school",
  },
  {
    title: "KITP Program on Quantum Matter",
    location: "Kavli Institute for Theoretical Physics, Santa Barbara, USA",
    date: "September-December 2022",
    role: "Visiting Researcher",
    description:
      "Participated in a long-term research program on quantum matter, collaborating with leading researchers in the field and presenting work on topological phases in non-Hermitian systems.",
    type: "school",
  },
  // Add additional schools/workshops
  {
    title: "Boulder Summer School for Condensed Matter Physics",
    location: "University of Colorado, Boulder, USA",
    date: "July 2020",
    role: "Student",
    description:
      "Attended lectures and workshops on topological phases of matter and quantum information theory, with a focus on applications to quantum computing.",
    type: "school",
  },
  {
    title: "Quantum Materials Workshop",
    location: "Max Planck Institute, Dresden, Germany",
    date: "May 2021",
    role: "Invited Participant",
    description:
      "Participated in a workshop focused on recent developments in quantum materials research, with emphasis on experimental techniques and theoretical models.",
    type: "school",
  },
]

