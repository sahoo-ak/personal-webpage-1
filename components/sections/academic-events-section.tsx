import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Presentation, GraduationCap } from "lucide-react"
import { academicEvents } from "@/data/conferences"

export function AcademicEventsSection() {
  return (
    <section id="academic-events" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
        Conferences & Academic Events
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {academicEvents.map((event, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  {event.type === "conference" ? (
                    <Presentation className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className="text-sm text-muted-foreground sm:ml-auto">{event.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-1">Role:</span> {event.role}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

