import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Download, BookOpen } from "lucide-react"
import { recentPublications, selectedPublications } from "@/data/publications"

export function PublicationsSection() {
  // Combine and filter publications to only show featured ones
  const featuredPublications = [...recentPublications, ...selectedPublications]
    .filter((pub) => pub.featured)
    // Remove duplicates (in case a publication is in both arrays)
    .filter((pub, index, self) => index === self.findIndex((p) => p.title === pub.title))

  return (
    <section id="publications" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Publications</h2>

      <div className="space-y-6">
        {featuredPublications.map((publication, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold">{publication.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{publication.authors}</p>
                  <p className="text-sm italic mt-1">
                    {publication.journal} ({publication.year})
                  </p>
                  {publication.citations && (
                    <p className="text-sm mt-2">
                      <span className="font-medium">Citations:</span> {publication.citations}
                    </p>
                  )}
                  {publication.description && (
                    <p className="text-sm mt-1 text-muted-foreground">{publication.description}</p>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  {publication.links.pdf && (
                    <Link
                      href={publication.links.pdf}
                      className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                    >
                      <BookOpen className="h-4 w-4 mr-1" /> PDF
                    </Link>
                  )}
                  {publication.links.bibtex && (
                    <Link
                      href={publication.links.bibtex}
                      className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                    >
                      <Download className="h-4 w-4 mr-1" /> BibTeX
                    </Link>
                  )}
                  {publication.links.journal && (
                    <Link
                      href={publication.links.journal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Journal
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/publications" className="flex items-center">
            View Complete Publication List <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

