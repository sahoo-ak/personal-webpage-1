import type { Skill, SkillCategory, SpecializedTool } from "@/types"

export const programmingSkills: Skill[] = [
  {
    name: "Julia",
    level: "Expert",
    percentage: 90,
  },
  {
    name: "Fortran",
    level: "Advanced",
    percentage: 80,
  },
  {
    name: "Python",
    level: "Intermediate",
    percentage: 70,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: "Operating Systems",
    skills: ["Linux (Ubuntu, Fedora)", "Windows"],
  },
  {
    name: "Scientific Computing",
    skills: ["NumPy, SciPy", "TensorFlow"],
  },
  {
    name: "Version Control",
    skills: ["Git, GitHub", "GitLab"],
  },
  {
    name: "Visualization",
    skills: ["Plots.jl , Gnuplot", "Matplotlib"],
  },
]

export const specializedTools: SpecializedTool[] = [
  { name: "High-Performance Computing" },
  { name: "LaTeX" },
]

