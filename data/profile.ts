import { Github, Linkedin, Mail, BookOpen, Users, Award, Globe } from "lucide-react"
import type { SocialLink, Section } from "@/types"

export const personalInfo = {
  name: "Dr. Aloka Kumar Sahoo",
  title: "Postdoctoral Researcher in Theoretical Physics",
  institution: "Helmholtz-Insitut Jena, Germany",
  description: "Specializing in Atomic Physics.",
  profileImage: "./photo-1.JPG",
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    platform: "Google Scholar",
    url: "https://scholar.google.com",
    icon: BookOpen,
  },
  {
    platform: "ResearchGate",
    url: "https://researchgate.net",
    icon: Users,
  },
  {
    platform: "ORCID",
    url: "https://orcid.org",
    icon: Award,
  },
  {
    platform: "Web of Science",
    url: "https://webofscience.com",
    icon: Globe,
  },
  {
    platform: "Email",
    url: "mailto:aloka_s@ph.iitr.ac.in, aloka.ku.sahoo@gmail.com",
    icon: Mail,
  },
]

export const navigationSections: Section[] = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "conferences", label: "Conferences" },
  { id: "experience", label: "Experience" },
  { id: "awards", label: "Awards" },
  { id: "skills", label: "Skills" },
]

