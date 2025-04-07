import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Presentation, School, ExternalLink } from "lucide-react"
import { academicEvents } from "@/data/conferences"

export function ConferencesSection() {
  // Filter to only show featured events
  const featuredEvents = academicEvents.filter((event) => event.featured)

  return (
    <section id="conferences" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
        Conferences & Academic Events
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {featuredEvents.map((event, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  {event.type === "conference" ? (
                    <Presentation className="h-6 w-6 text-primary" />
                  ) : (
                    <School className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className="text-sm text-muted-foreground sm:ml-auto">{event.date}</span>
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.organization} {event.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-1"></span> {event.role} {event.description}
                    </div>
                  </div>
                  {/* <p className="text-muted-foreground">{event.description}</p> */}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
          <Link href="/conferences" className="flex items-center">
            View Complete Conference List <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

