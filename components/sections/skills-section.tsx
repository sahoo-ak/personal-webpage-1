import { Card, CardContent } from "@/components/ui/card"
import { Code, Database } from "lucide-react"
import { programmingSkills, skillCategories, specializedTools } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
        Technical Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Software & Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">{category.name}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <h4 className="font-medium mb-2">Specialized Tools</h4>
              <div className="flex flex-wrap gap-2">
                {specializedTools.map((tool, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

