import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Download, BookOpen } from "lucide-react"
import { publications } from "@/data/publications"

// Helper function to highlight author name
const formatAuthors = (authors: string) => {
  return authors.split(", ").map((author, index, array) => {
    const isLastAuthor = index === array.length - 1
    const separator = isLastAuthor ? "" : ", "

    if (author === "A. Chen" || author === "Ale Chen") {
      return (
        <span key={index} className="text-foreground font-medium">
          {author}
          {separator}
        </span>
      )
    }

    return (
      <span key={index}>
        {author}
        {separator}
      </span>
    )
  })
}

export function PublicationsSection() {
  // Get featured publications
  const featuredPublications = publications.filter((pub) => pub.featured)

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
                  <p className="text-sm text-muted-foreground mt-1">{formatAuthors(publication.authors)}</p>
                  <p className="text-sm mt-1">
                    <span className="italic">{publication.journal}</span>{" "}
                    {publication.volume && <span className="font-bold">{publication.volume}</span>}
                    {publication.issue && <span className="font-bold">({publication.issue})</span>}
                    {publication.pages && <span>: {publication.pages}</span>} ({publication.year})
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
                      className="text-sm font-medium flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <BookOpen className="h-4 w-4 mr-1 text-primary" /> PDF
                    </Link>
                  )}
                  {publication.links.bibtex && (
                    <Link
                      href={publication.links.bibtex}
                      className="text-sm font-medium flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-1 text-primary" /> BibTeX
                    </Link>
                  )}
                  {publication.links.journal && (
                    <Link
                      href={publication.links.journal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1 text-primary" /> Journal
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
          <Link href="/publications" className="flex items-center">
            View Complete Publication List <ExternalLink className="ml-2 h-4 w-4 text-primary" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

