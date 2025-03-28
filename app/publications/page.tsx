import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Download, ArrowLeft, BookOpen } from "lucide-react"
import { allPublications } from "@/data/all-publications"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold text-xl">
            Dr. Alex Chen
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-12 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Complete Publication List
          </h1>
          <p className="text-muted-foreground max-w-[700px]">
            A comprehensive list of all my academic publications, including journal articles, conference papers, and
            book chapters.
          </p>
        </div>

        <div className="space-y-6">
          {allPublications.map((publication, index) => (
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

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center">
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

