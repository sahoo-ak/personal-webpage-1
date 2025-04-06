import type { SocialLink, Section, DropdownSection } from "@/types"


export const personalInfo = {
  name: "Dr. Aloka Kumar Sahoo",
  title: "Postdoctoral Researcher in Theoretical Physics",
  institution: "Helmholtz-Insitut Jena, Germany",
  description: "Specializing in Atomic Physics.",
  profileImage: "./photo-1.JPG",
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Google Scholar",
    url: "https://scholar.google.com/citations?user=kLeggdsAAAAJ&hl=en",
    iconClass: "ai ai-google-scholar",
  },
  {
    platform: "ResearchGate",
    url: "https://www.researchgate.net/profile/Aloka-Sahoo-2",
    iconClass: "ai ai-researchgate",
  },
  {
    platform: "ORCID",
    url: "https://orcid.org/0000-0003-2441-4075",
    iconClass: "ai ai-orcid",
  },
  {
    platform: "Scopus",
    url: "https://www.scopus.com/authid/detail.uri?authorId=57217350178",
    iconClass: "ai ai-scopus",
  },
  {
    platform: "ResearcherID",
    url: "https://www.webofscience.com/wos/author/record/KRQ-9261-2024",
    iconClass: "ai ai-researcherid",
  },
  {
    platform: "GitHub",
    url: "https://github.com/sahoo-ak",
    iconClass: "ai ai-github",
  },
]

export const navigationSections: (Section | DropdownSection)[] = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  {
    id: "experience",
    label: "Experience",
    dropdown: [
      { id: "research-experience", label: "Research" },
      { id: "teaching-experience", label: "Teaching" },
    ],
  },
  { id: "conferences", label: "Conferences" },
  { id: "awards", label: "Awards" },
  { id: "skills", label: "Skills" },
]

