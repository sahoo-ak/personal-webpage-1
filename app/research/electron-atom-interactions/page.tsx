import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, BookOpen } from "lucide-react"
import { personalInfo} from "@/data/profile"
import { Footer } from "@/components/footer"

export default function ElectronAtomInteractionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold text-xl">
            {personalInfo.name}
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#research" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Research
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-12 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Electron-Atom Interactions
          </h1>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            I study topological phases in condensed matter systems, including topological insulators, topological
            superconductors, and quantum spin liquids. My research aims to classify these phases and understand their
            exotic properties.
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Topological Phases of Matter"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <p>
            Topological phases of matter represent a new paradigm in condensed matter physics, characterized by global
            topological invariants rather than by local order parameters. My research in this area focuses on
            understanding, classifying, and predicting new topological phases.
          </p>

          <p>My work encompasses:</p>

          <ul>
            <li>Classification of topological phases using K-theory and group cohomology</li>
            <li>Study of protected boundary modes in topological insulators and superconductors</li>
            <li>Investigation of topological quantum phase transitions</li>
            <li>Research on quantum spin liquids and their excitations</li>
            <li>Exploration of experimental signatures of topological phases</li>
          </ul>

          <p>
            A significant focus of my recent work has been on twisted bilayer graphene and other moiré systems, which
            provide a versatile platform for realizing novel topological phases with tunable properties.
          </p>

          <h2>Current Projects</h2>

          <p>I am currently working on several projects in this area:</p>

          <ul>
            <li>Investigating topological phases in twisted bilayer graphene and other moiré systems</li>
            <li>Studying the interplay between topology and strong correlations in quantum materials</li>
            <li>Developing new theoretical tools to classify and characterize topological phases</li>
          </ul>

          <h2>Experimental Collaborations</h2>

          <p>
            I collaborate closely with experimental groups to test theoretical predictions and design new experiments to
            probe topological phases. These collaborations involve:
          </p>

          <ul>
            <li>Design of new materials with topological properties</li>
            <li>Development of experimental probes to detect topological invariants</li>
            <li>Analysis of experimental data to identify signatures of topological phases</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" /> Key Collaborators
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-muted-foreground">Prof. Sarah Kim (University of Tokyo)</li>
            <li className="text-muted-foreground">Dr. James Wilson (Harvard University)</li>
            <li className="text-muted-foreground">Prof. Lisa Chen (Berkeley)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" /> Related Publications
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Topological Order and Quantum Criticality in Twisted Bilayer Graphene</h3>
                <p className="text-sm text-muted-foreground mt-1">A. Chen, A. Johnson, L. Chen, R. Williams</p>
                <p className="text-sm italic mt-1">Physical Review Letters, 128, 176401 (2023)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">
                  Topological Insulators in Three Dimensions: Theoretical Predictions and Experimental Realizations
                </h3>
                <p className="text-sm text-muted-foreground mt-1">A. Chen, D. Wilson, E. Brown</p>
                <p className="text-sm italic mt-1">Nature Materials, 18, 723-731 (2019)</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
            <Link href="/#conferences" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </main>

      <Footer showSocialIcons={false} />
    </div>
  )
}

