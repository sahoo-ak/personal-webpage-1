import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { researchAreas } from "@/data/research"

export function ResearchSection() {
  // Calculate if we need to center the last row
  const totalItems = researchAreas.length
  const itemsInLastRow = totalItems % 3
  const shouldCenterLastRow = itemsInLastRow > 0 && itemsInLastRow < 3

  return (
    <section id="research" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Research</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {researchAreas.slice(0,3).map((area, index) => (
          <Card
            key={index}
            className={`flex flex-col ${
              shouldCenterLastRow && index >= totalItems - itemsInLastRow ? "md:col-span-1 md:mx-auto md:w-full" : ""
            }`}
            style={
              shouldCenterLastRow && index >= totalItems - itemsInLastRow
                ? { gridColumn: index === totalItems - 1 && itemsInLastRow === 1 ? "2" : "auto" }
                : {}
            }
          >
            <CardContent className="flex-grow p-6">
              <h3 className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </CardContent>
            <CardFooter className="pt-0 pb-6 px-6">
              <Button variant="outline" className="border-primary hover:bg-primary/10 w-full" asChild>
                <Link
                  href="/#research"
                  // href={`/research/${area.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center justify-center"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

