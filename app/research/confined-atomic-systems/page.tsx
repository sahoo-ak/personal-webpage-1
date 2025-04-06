import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, BookOpen } from "lucide-react"
import { Footer } from "@/components/footer"

export default function QuantumInformationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold text-xl">
            Dr. Alex Chen
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Quantum Information</h1>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            I investigate the intersection of quantum information theory and condensed matter physics, particularly
            entanglement properties of many-body systems and their applications to quantum computing.
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image src="/placeholder.svg?height=400&width=800" alt="Quantum Information" fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <p>
            Quantum information theory provides powerful tools for understanding quantum many-body systems. My research
            explores the connections between quantum entanglement, quantum computation, and condensed matter physics.
          </p>

          <p>Key research directions include:</p>

          <ul>
            <li>Characterizing entanglement in quantum many-body systems</li>
            <li>Developing entanglement-based probes of quantum phase transitions</li>
            <li>Studying the relationship between entanglement and geometry in holographic systems</li>
            <li>Investigating quantum error correction in topological systems</li>
            <li>Exploring quantum algorithms for simulating condensed matter systems</li>
          </ul>

          <p>
            My recent work has focused on understanding how entanglement entropy scales at quantum critical points with
            emergent gauge fields, providing new insights into the structure of quantum correlations in these systems.
          </p>

          <h2>Entanglement in Many-Body Systems</h2>

          <p>
            A major focus of my research is understanding the structure of entanglement in quantum many-body systems.
            This includes:
          </p>

          <ul>
            <li>Developing new measures of entanglement for many-body systems</li>
            <li>Studying the scaling of entanglement entropy in critical systems</li>
            <li>Investigating the relationship between entanglement and quantum phase transitions</li>
            <li>Exploring the connection between entanglement and computational complexity</li>
          </ul>

          <h2>Quantum Computing Applications</h2>

          <p>I am also interested in applications of quantum information theory to quantum computing, particularly:</p>

          <ul>
            <li>Topological quantum computing using Majorana fermions</li>
            <li>Quantum error correction using topological codes</li>
            <li>Quantum algorithms for simulating strongly correlated systems</li>
            <li>Quantum machine learning for condensed matter problems</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" /> Key Collaborators
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-muted-foreground">Prof. David Miller (Caltech)</li>
            <li className="text-muted-foreground">Dr. Priya Kumar (University of Waterloo)</li>
            <li className="text-muted-foreground">Prof. Hiroshi Wang (University of Tokyo)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" /> Related Publications
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Quantum Entanglement and the Geometry of Spacetime</h3>
                <p className="text-sm text-muted-foreground mt-1">A. Chen, R. Patel, T. Rodriguez</p>
                <p className="text-sm italic mt-1">Nature, 563, 714-718 (2021)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">
                  Entanglement Entropy Scaling at Quantum Critical Points with Emergent Gauge Fields
                </h3>
                <p className="text-sm text-muted-foreground mt-1">A. Chen, T. Rodriguez, S. Kumar</p>
                <p className="text-sm italic mt-1">Nature Physics, 19, 245-251 (2023)</p>
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

