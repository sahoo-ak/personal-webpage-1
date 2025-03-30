import type { LucideIcon } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

export interface SocialLink {
  platform: string
  url: string
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon
}

export interface Section {
  id: string
  label: string
}

export interface DropdownSection extends Section {
  dropdown: Section[]
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
  description?: string
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
  volume?: string
  issue?: string
  pages?: string
  citations?: number
  description?: string
  featured?: boolean
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

export interface AcademicEvent {
  title: string
  location: string
  date: string
  role: string
  description: string
  type: "conference" | "school"
  featured?: boolean
}

