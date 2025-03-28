import type { LucideIcon } from "lucide-react"

export interface SocialLink {
  platform: string
  url: string
  icon: LucideIcon
}

export interface Section {
  id: string
  label: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  gpa?: string
  thesis?: string
  supervisor?: string
  fellowship?: string
  specialization?: string
  advisor?: string
  minor?: string
  honors?: string
}

export interface ResearchArea {
  title: string
  description: string
}

export interface ResearchProject {
  title: string
  description: string
  image: string
  tags: string[]
  funding: string
}

export interface Publication {
  title: string
  authors: string
  journal: string
  year: number
  citations?: number
  description?: string
  links: {
    pdf?: string
    bibtex?: string
    journal?: string
  }
}

export interface Conference {
  title: string
  location: string
  date: string
  role: string
  description: string
  logo: string
}

export interface Experience {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export interface Award {
  title: string
  organization: string
  year: string
  description: string
  isWide?: boolean
}

export interface Skill {
  name: string
  level: string
  percentage: number
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface SpecializedTool {
  name: string
}

export interface ContactInfo {
  email: string
  address: {
    department: string
    university: string
    street: string
    city: string
  }
  orcid: string
}

