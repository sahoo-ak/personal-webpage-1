import type { AcademicEvent } from "@/types"

// Add the academicEvents export that combines conferences and schools
export const academicEvents: AcademicEvent[] = [
  // Add conferences
  {
    title: "24th National Conference on Atomic and Molecular Physics (NCAMP25)",
    organization: "Indian Institute of Techlogy (ISM) Dhanabad",
    location: "Dhanbad, India",
    date: "08-11 Jan 2025",
    role: 'Poster: ',
    description: "Electron impact excitation of bismuth.",
    type: "conference",
    featured: true,
  },
  {
    title: "9th Topical Conference on Ultrafast Photonics and Quantum Science",
    organization: "Physical Research Laboratory",
    location: "Ahmedabad, India",
    date: "15-17 Feb 2024",
    role: 'Poster: ',
    description: "Electron impact excitation cross section and rate coefficient calculations with JAC package.",
    type: "conference",
    featured: true,
  },
  {
    title: "International School on Atomic and Molecular Data Evaluation and Curation (ISAMDEC)",
    organization: "University de Valladolid, Spain in cooperation with the National Institute of Standards and Technology (NIST), USA and the International Atomic Energy Agency (IAEA)",
    location: "Valladolid, Spain",
    date: "22-25 Oct 2023",
    role: 'Poster: ',
    description: "Collisional radiative modelling using relativistic e - Tl+ collision cross sections",
    type: "school",
    featured: true,
  },
  {
    title: "23rd National Conference on Atomic and Molecular Physics (NCAMP23)",
    organization: "Indian Institute of Space Science and Technology (IIST)",
    location: "Thiruvananthapuram, India",
    date: "20-23 Feb 2023",
    role: 'Poster: ',
    description: "Collisional Radiative Model for Thallium Plasma with Fine Structure Electron Impact Cross Sections.",
    type: "conference",
    featured: true,
  },
  {
    title: "37th National Symposium on Plasma Science & Technology (PLASMA2022)",
    organization: "Indian Institute of Technology Jodhpur with Plasma Science Society of India (PSSI)",
    location: "Jodhpur, Rajasthan, India",
    date: "12-14 Dec 2023",
    role: 'Poster: ',
    description: "A Collisional Radiative Model for Tl Plasma.",
    type: "conference",
    featured: true,
  },
  {
    title: "53rd Annual Meeting of the APS Division of Atomic, Molecular and Optical Physics (DAMOP 2022)",
    organization: "American Physical Society",
    location: "Orlando, Florida, USA",
    date: "30 May - 3 June 2022",
    role: 'Poster: ',
    description: "Electron Impact Excitation of Extreme Ultra-Violet Transitions in Xe7+ – Xe10+ Ions.",
    type: "conference",
    featured: true,
  },
]

