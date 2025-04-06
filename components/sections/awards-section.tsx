import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import { awardsData } from "@/data/awards"

export function AwardsSection() {
  return (
    <section id="awards" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Awards & Memberships</h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {awardsData.map((award, index) => (
          <Card key={index} className={award.isWide ? "md:col-span-2" : ""}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {award.organization}, {award.year}
                  </p>
                  <p className="mt-2 text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

