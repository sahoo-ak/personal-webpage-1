import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { researchAreas, researchProjects } from "@/data/research"

export function ResearchSection() {
  return (
    <section id="research" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Research</h2>

      <Tabs defaultValue="areas" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto">
          <TabsTrigger value="areas">Research Areas</TabsTrigger>
          <TabsTrigger value="projects">Current Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="areas" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="projects" className="mt-6">
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-8 items-start">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Funding: {project.funding}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

