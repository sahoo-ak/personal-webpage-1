import type { SocialLink, Section, DropdownSection } from "@/types"
import { GoogleScholarIcon } from "@/components/icons/google-scholar-icon"
import { ResearchGateIcon } from "@/components/icons/researchgate-icon"
import { OrcidIcon } from "@/components/icons/orcid-icon"
import { GitHubIcon } from "@/components/icons/github-icon"

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
    icon: GoogleScholarIcon,
  },
  {
    platform: "ResearchGate",
    url: "https://www.researchgate.net/profile/Aloka-Sahoo-2",
    icon: ResearchGateIcon,
  },
  {
    platform: "ORCID",
    url: "https://orcid.org/0000-0003-2441-4075",
    icon: OrcidIcon,
  },
  {
    platform: "GitHub",
    url: "https://github.com/sahoo-ak",
    icon: GitHubIcon,
  },
]

export const navigationSections: (Section | DropdownSection)[] = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "conferences", label: "Conferences" },
  {
    id: "experience",
    label: "Experience",
    dropdown: [
      { id: "research-experience", label: "Research" },
      { id: "teaching-experience", label: "Teaching" },
    ],
  },
  { id: "awards", label: "Awards" },
  { id: "skills", label: "Skills" },
  // Contact section removed from navigation
]

