import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Presentation, School } from "lucide-react"
import { academicEvents } from "@/data/conferences"

export default function ConferencesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold text-xl">
            Aloka Kumar Sahoo
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#conferences" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-12 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Complete Conference & Academic Events List
          </h1>
          <p className="text-muted-foreground max-w-[700px]">
            A comprehensive list of all conferences, workshops, and academic events I have participated in.
          </p>
        </div>

        <div className="space-y-8">
          {academicEvents.map((event, index) => (
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

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
            <Link href="/#conferences" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Dr. Alex Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

