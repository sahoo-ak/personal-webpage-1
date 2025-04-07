import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, BookOpen } from "lucide-react"
import { personalInfo} from "@/data/profile"
import { Footer } from "@/components/footer"

export default function AtomicStructurePage() {
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Quantum Field Theory</h1>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            My work in atomic structure theory focuses on the theoretical and computational aspects of heavy and complex shell atomic systems.
          </p>
        </div>

        {/* <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image src="/placeholder.svg?height=400&width=800" alt="Quantum Field Theory" fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <p>
            Atomic structure calculations such as for heavy atoms and ions, complex shell atomic systems, and
            relativistic effects are crucial for understanding the fundamental interactions in atomic systems.
          </p>

          <p>Key aspects of my research include:</p>

          <ul>
            <li>Calculation of atomic energy levels, transition rates and life times etc. using MCDHF approach.</li>
            <li>
              Studying non-perturbative effects in quantum field theories using functional renormalization group methods
            </li>
            <li>Investigating dualities between seemingly different quantum field theories</li>
            <li>Applying QFT techniques to understand high-temperature superconductivity</li>
            <li>Exploring quantum criticality and scaling behavior near phase transitions</li>
          </ul>

          <p>
            My recent work has focused on understanding how gauge fields emerge in strongly correlated electron systems
            and their role in determining the low-energy physics of these systems.
          </p>

          <h2>Current Projects</h2>

          <p>I am currently working on several projects in this area:</p>

          <ul>
            <li>
              Developing a new theoretical framework for understanding non-Fermi liquid behavior in metals near quantum
              critical points
            </li>
            <li>Investigating the role of emergent gauge fields in strongly correlated electron systems</li>
            <li>Studying the interplay between topology and quantum criticality in twisted bilayer graphene</li>
          </ul>

          <h2>Methodology</h2>

          <p>My research combines analytical and numerical approaches, including:</p>

          <ul>
            <li>Analytical techniques from quantum field theory, such as renormalization group methods</li>
            <li>Numerical simulations of strongly correlated systems</li>
            <li>Collaboration with experimental groups to test theoretical predictions</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" /> Key Collaborators
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-muted-foreground">Prof. Robert Johnson (Princeton University)</li>
            <li className="text-muted-foreground">Dr. Maria Garcia (Stanford University)</li>
            <li className="text-muted-foreground">Prof. Tao Rodriguez (MIT)</li>
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
                <h3 className="font-bold">Emergent Gauge Fields in Strongly Correlated Electron Systems</h3>
                <p className="text-sm text-muted-foreground mt-1">A. Chen, P. Anderson</p>
                <p className="text-sm italic mt-1">Physical Review Letters, 125, 125701 (2020)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">
                  Quantum Phase Transitions in Disordered Systems: A Renormalization Group Approach
                </h3>
                <p className="text-sm text-muted-foreground mt-1">A. Chen, B. Smith, C. Johnson</p>
                <p className="text-sm italic mt-1">Physical Review B, 102, 134502 (2020)</p>
              </CardContent>
            </Card>
          </div>
        </div> */}

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

