import type { Skill, SkillCategory, SpecializedTool } from "@/types"

export const programmingSkills: Skill[] = [
  {
    name: "Python",
    level: "Expert",
    percentage: 95,
  },
  {
    name: "MATLAB",
    level: "Advanced",
    percentage: 85,
  },
  {
    name: "C++",
    level: "Intermediate",
    percentage: 70,
  },
  {
    name: "Julia",
    level: "Intermediate",
    percentage: 65,
  },
  {
    name: "Fortran",
    level: "Basic",
    percentage: 40,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: "Operating Systems",
    skills: ["Linux (Ubuntu, CentOS)", "macOS", "Windows"],
  },
  {
    name: "Scientific Computing",
    skills: ["NumPy, SciPy, Pandas", "TensorFlow, PyTorch", "Mathematica"],
  },
  {
    name: "Version Control",
    skills: ["Git, GitHub", "GitLab"],
  },
  {
    name: "Visualization",
    skills: ["Matplotlib, Seaborn", "Plotly, Bokeh", "ParaView"],
  },
]

export const specializedTools: SpecializedTool[] = [
  { name: "VASP" },
  { name: "Quantum ESPRESSO" },
  { name: "COMSOL" },
  { name: "ANSYS" },
  { name: "LaTeX" },
  { name: "High-Performance Computing" },
]

