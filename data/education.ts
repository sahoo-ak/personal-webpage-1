import type { Education } from "@/types"

export const educationData: Education[] = [
  {
    degree: "Ph.D. in Physics",
    institution: "Indian Institute of Technology Roorkee, Roorkee, India",
    period: "Dec 2019-Feb2025",
    thesis: "Theoretical Investigation of Electron Interactions with Complex Atomic Systems: Selected Case Studies",
    supervisor: "Prof. Lalita Sharma",
    description:
      "A comprehensive theoretical investigation into the atomic structure and electron interactions, focusing on heavy atomic systems with complex electronic configurations. The study includes both elastic scattering and electron impact excitation, employing a relativistic framework to handle the complexities of these systems. Additionally, the research explores the behavior of atomic systems under confinement, providing insights into how confinement affects electron interactions.",
  },
  {
    degree: "M.Sc. in Physics",
    institution: "Indian Institute of Technology (ISM) Dhanbad, Dhanbad, India",
    period: "2017-2019",
    gpa: "8.75/10.0",
    specialization: "Atomic and Molecular Physics",
    thesis: "Electron and Positron Scattering from Pyridine",
    advisor: "Prof. Bobby Antony",
    // description:
      // "Developed computational models to study electron and positron interactions with molecular systems, contributing to the understanding of fundamental processes in molecular physics.",
  },
  {
    degree: "B.Sc. in Physics (Honors)",
    institution: "BJB (Auto) College, Utkal University, Bhubaneswar, India",
    period: "2014-2017",
    gpa: "77.33%",
    minor: "Mathematics",
    description:"First Class with Distinction.",
  },
]

