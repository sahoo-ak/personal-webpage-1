import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BookOpen,
  Users,
  Award,
  GraduationCap,
  Code,
  Globe,
  Database,
} from "lucide-react"
import { NavbarWithActiveSection } from "@/components/navbar-with-active-section"
import { SectionObserver } from "@/components/section-observer"

export function PersonalWebsiteContent() {
  const sections = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "conferences", label: "Conferences" },
    { id: "skills", label: "Skills" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Static navbar that will be enhanced by client component */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold text-xl">
            Dr. Alex Chen
          </Link>
          <NavbarWithActiveSection sections={sections} />
        </div>
      </header>

      <main className="flex-1">
        {/* Wrap all sections with the observer component */}
        <SectionObserver sections={sections}>
          <section className="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Dr. Alex Chen</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Postdoctoral Researcher in Theoretical Physics at University of Science & Technology, specializing in
                  quantum field theory and its applications to condensed matter systems.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="#research">Research Areas</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#publications">Publications</Link>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://scholar.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <BookOpen className="h-6 w-6" />
                    <span className="sr-only">Google Scholar</span>
                  </Link>
                  <Link
                    href="https://researchgate.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Users className="h-6 w-6" />
                    <span className="sr-only">ResearchGate</span>
                  </Link>
                  <Link
                    href="https://orcid.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Award className="h-6 w-6" />
                    <span className="sr-only">ORCID</span>
                  </Link>
                  <Link
                    href="https://webofscience.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="h-6 w-6" />
                    <span className="sr-only">Web of Science</span>
                  </Link>
                  <Link
                    href="mailto:achen@university.edu"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Alex Chen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          <section id="about" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">About Me</h2>
            <div className="text-muted-foreground max-w-3xl mx-auto">
              <p className="mb-4">
                I am a Postdoctoral Researcher in the Department of Physics at the University of Science & Technology.
                My research focuses on quantum field theory and its applications to condensed matter systems,
                particularly topological phases of matter and strongly correlated electron systems.
              </p>
              <p className="mb-4">
                I received my Ph.D. in Theoretical Physics from Princeton University in 2020, where I worked on
                developing theoretical frameworks for understanding exotic quantum phases in low-dimensional systems.
              </p>
              <p>
                Currently, I collaborate with both theoretical and experimental groups to bridge the gap between
                theoretical predictions and experimental realizations of novel quantum phenomena. My work aims to
                advance our understanding of quantum materials and their potential applications in quantum information
                processing.
              </p>
            </div>
          </section>

          <section id="education" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Education</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Ph.D. in Theoretical Physics</h3>
                      <div className="grid gap-1">
                        <p className="font-medium">Princeton University, USA (2016-2020)</p>
                        <p className="text-muted-foreground">CGPA: 3.95/4.0</p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Thesis:</span> "Topological Phases and Quantum Criticality in
                          Low-Dimensional Systems"
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Supervisor:</span> Prof. Robert Johnson
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Fellowship:</span> Princeton Presidential Fellowship
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">M.S. in Physics</h3>
                      <div className="grid gap-1">
                        <p className="font-medium">Princeton University, USA (2016-2017)</p>
                        <p className="text-muted-foreground">CGPA: 3.92/4.0</p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Specialization:</span> Condensed Matter Theory
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Advisor:</span> Prof. Robert Johnson
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">B.S. in Physics (Honors)</h3>
                      <div className="grid gap-1">
                        <p className="font-medium">Stanford University, USA (2011-2015)</p>
                        <p className="text-muted-foreground">CGPA: 3.89/4.0</p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Minor:</span> Mathematics
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Thesis:</span> "Numerical Studies of Quantum Phase Transitions
                          in Spin Systems"
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Supervisor:</span> Prof. Maria Garcia
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Honors:</span> Summa Cum Laude, Phi Beta Kappa
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="research" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Research</h2>

            <Tabs defaultValue="areas" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto">
                <TabsTrigger value="areas">Research Areas</TabsTrigger>
                <TabsTrigger value="projects">Current Projects</TabsTrigger>
              </TabsList>
              <TabsContent value="areas" className="mt-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Quantum Field Theory</h3>
                      <p className="text-muted-foreground">
                        My work in quantum field theory focuses on developing new mathematical frameworks for
                        understanding strongly correlated quantum systems. This includes applications to
                        high-temperature superconductivity and quantum criticality.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Topological Phases of Matter</h3>
                      <p className="text-muted-foreground">
                        I study topological phases in condensed matter systems, including topological insulators,
                        topological superconductors, and quantum spin liquids. My research aims to classify these phases
                        and understand their exotic properties.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Quantum Information</h3>
                      <p className="text-muted-foreground">
                        I investigate the intersection of quantum information theory and condensed matter physics,
                        particularly entanglement properties of many-body systems and their applications to quantum
                        computing.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Strongly Correlated Electron Systems</h3>
                      <p className="text-muted-foreground">
                        My research addresses the challenging problem of strongly interacting electrons in materials,
                        developing theoretical tools to understand phenomena like high-temperature superconductivity and
                        quantum magnetism.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="projects" className="mt-6">
                <div className="space-y-8">
                  <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-8 items-start">
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=225&width=400"
                        alt="Quantum Materials"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Novel Quantum Materials</h3>
                      <p className="text-muted-foreground mb-4">
                        Collaborating with experimental groups to design and characterize new quantum materials with
                        exotic properties. Current focus is on materials that could host Majorana fermions for
                        topological quantum computing.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          Topological Superconductivity
                        </span>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          Majorana Fermions
                        </span>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          Quantum Computing
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Funding: National Science Foundation, 2022-2025</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-8 items-start">
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=225&width=400"
                        alt="Quantum Entanglement"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Entanglement in Many-Body Systems</h3>
                      <p className="text-muted-foreground mb-4">
                        Developing new theoretical tools to characterize and measure quantum entanglement in many-body
                        systems, with applications to quantum phase transitions and quantum information processing.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          Quantum Entanglement
                        </span>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          Many-Body Physics
                        </span>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          Quantum Phase Transitions
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Funding: Department of Energy, 2021-2024</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section
            id="publications"
            className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
              Publications
            </h2>

            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto">
                <TabsTrigger value="recent">Recent Publications</TabsTrigger>
                <TabsTrigger value="selected">Selected Works</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">
                            Topological Order and Quantum Criticality in Twisted Bilayer Graphene
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            A. Chen, A. Johnson, L. Chen, R. Williams
                          </p>
                          <p className="text-sm italic mt-1">Physical Review Letters, 128, 176401 (2023)</p>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-medium flex items-center hover:text-primary transition-colors shrink-0"
                        >
                          <BookOpen className="h-4 w-4 mr-1" /> PDF
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">
                            Entanglement Entropy Scaling at Quantum Critical Points with Emergent Gauge Fields
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">A. Chen, T. Rodriguez, S. Kumar</p>
                          <p className="text-sm italic mt-1">Nature Physics, 19, 245-251 (2023)</p>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-medium flex items-center hover:text-primary transition-colors shrink-0"
                        >
                          <BookOpen className="h-4 w-4 mr-1" /> PDF
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">
                            Non-Fermi Liquid Behavior in Strongly Correlated Electron Systems: A Renormalization Group
                            Approach
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">A. Chen, P. Anderson, M. Zhang</p>
                          <p className="text-sm italic mt-1">Physical Review B, 105, 195132 (2022)</p>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-medium flex items-center hover:text-primary transition-colors shrink-0"
                        >
                          <BookOpen className="h-4 w-4 mr-1" /> PDF
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">
                            Majorana Zero Modes in Proximitized Semiconductor Nanowires: Beyond the Kitaev Model
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">A. Chen, H. Wang, K. Lee, D. Miller</p>
                          <p className="text-sm italic mt-1">Science, 375, 1234-1238 (2022)</p>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-medium flex items-center hover:text-primary transition-colors shrink-0"
                        >
                          <BookOpen className="h-4 w-4 mr-1" /> PDF
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" asChild>
                    <Link href="#" className="flex items-center">
                      View Complete Publication List <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="selected" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">Quantum Entanglement and the Geometry of Spacetime</h3>
                          <p className="text-sm text-muted-foreground mt-1">A. Chen, R. Patel, T. Rodriguez</p>
                          <p className="text-sm italic mt-1">Nature, 563, 714-718 (2021)</p>
                          <p className="text-sm mt-2">
                            <span className="font-medium">Citations:</span> 87
                          </p>
                          <p className="text-sm mt-1 text-muted-foreground">
                            This work established a connection between quantum entanglement in boundary theories and the
                            geometry of bulk spacetime, providing new insights into the AdS/CFT correspondence.
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-medium flex items-center hover:text-primary transition-colors shrink-0"
                        >
                          <BookOpen className="h-4 w-4 mr-1" /> PDF
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">Emergent Gauge Fields in Strongly Correlated Electron Systems</h3>
                          <p className="text-sm text-muted-foreground mt-1">A. Chen, P. Anderson</p>
                          <p className="text-sm italic mt-1">Physical Review Letters, 125, 125701 (2020)</p>
                          <p className="text-sm mt-2">
                            <span className="font-medium">Citations:</span> 102
                          </p>
                          <p className="text-sm mt-1 text-muted-foreground">
                            This paper introduced a novel theoretical framework for understanding emergent gauge fields
                            in strongly correlated electron systems, with applications to high-temperature
                            superconductivity.
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-medium flex items-center hover:text-primary transition-colors shrink-0"
                        >
                          <BookOpen className="h-4 w-4 mr-1" /> PDF
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section
            id="conferences"
            className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
              Conferences & Schools
            </h2>

            <Tabs defaultValue="conferences" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto">
                <TabsTrigger value="conferences">Conferences</TabsTrigger>
                <TabsTrigger value="schools">Summer Schools</TabsTrigger>
              </TabsList>
              <TabsContent value="conferences" className="mt-6">
                <div className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-[100px_1fr] items-start">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="APS March Meeting Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">APS March Meeting 2023</h3>
                      <p className="text-sm text-muted-foreground mt-1">Las Vegas, Nevada, USA • March 2023</p>
                      <p className="mt-2">
                        <span className="font-medium">Talk:</span> "Topological Order and Quantum Criticality in Twisted
                        Bilayer Graphene"
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Presented recent findings on the interplay between topology and quantum criticality in twisted
                        bilayer graphene, focusing on the emergence of novel quantum phases at magic angles.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[100px_1fr] items-start">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="ICTP Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">International Conference on Topological Quantum Matter</h3>
                      <p className="text-sm text-muted-foreground mt-1">ICTP, Trieste, Italy • September 2022</p>
                      <p className="mt-2">
                        <span className="font-medium">Poster:</span> "Entanglement Entropy Scaling at Quantum Critical
                        Points with Emergent Gauge Fields"
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Presented a poster on novel entanglement entropy scaling laws at quantum critical points
                        characterized by emergent gauge fields, with implications for quantum information theory.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[100px_1fr] items-start">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Quantum Matter Conference Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Quantum Matter Symposium</h3>
                      <p className="text-sm text-muted-foreground mt-1">ETH Zurich, Switzerland • June 2022</p>
                      <p className="mt-2">
                        <span className="font-medium">Invited Talk:</span> "Non-Fermi Liquid Behavior in Strongly
                        Correlated Electron Systems"
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Delivered an invited talk on recent advances in understanding non-Fermi liquid behavior using
                        renormalization group techniques, with applications to strange metal phases in high-temperature
                        superconductors.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schools" className="mt-6">
                <div className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-[100px_1fr] items-start">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Aspen Center for Physics Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Aspen Winter Conference on Quantum Matter</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Aspen Center for Physics, Colorado, USA • January 2023
                      </p>
                      <p className="mt-2">
                        <span className="font-medium">Role:</span> Participant
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Participated in intensive discussions and workshops on recent developments in quantum matter
                        research, focusing on topological phases and strongly correlated systems.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[100px_1fr] items-start">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Les Houches Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        Les Houches Summer School on Quantum Information and Quantum Matter
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Les Houches, France • July 2021</p>
                      <p className="mt-2">
                        <span className="font-medium">Role:</span> Participant
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Attended lectures and workshops on the intersection of quantum information theory and condensed
                        matter physics, with a focus on entanglement in many-body systems.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[100px_1fr] items-start">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="KITP Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">KITP Program on Quantum Matter</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Kavli Institute for Theoretical Physics, Santa Barbara, USA • September-December 2022
                      </p>
                      <p className="mt-2">
                        <span className="font-medium">Role:</span> Visiting Researcher
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Participated in a long-term research program on quantum matter, collaborating with leading
                        researchers in the field and presenting work on topological phases in non-Hermitian systems.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section id="skills" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
              Technical Skills
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Programming Languages</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Python</span>
                        <span className="text-sm text-muted-foreground">Expert</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">MATLAB</span>
                        <span className="text-sm text-muted-foreground">Advanced</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">C++</span>
                        <span className="text-sm text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Julia</span>
                        <span className="text-sm text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Fortran</span>
                        <span className="text-sm text-muted-foreground">Basic</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Software & Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Operating Systems</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Linux (Ubuntu, CentOS)</li>
                        <li>macOS</li>
                        <li>Windows</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Scientific Computing</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>NumPy, SciPy, Pandas</li>
                        <li>TensorFlow, PyTorch</li>
                        <li>Mathematica</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Version Control</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Git, GitHub</li>
                        <li>GitLab</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Visualization</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Matplotlib, Seaborn</li>
                        <li>Plotly, Bokeh</li>
                        <li>ParaView</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-2">Specialized Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                        VASP
                      </span>
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                        Quantum ESPRESSO
                      </span>
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                        COMSOL
                      </span>
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                        ANSYS
                      </span>
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                        LaTeX
                      </span>
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                        High-Performance Computing
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="contact" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Contact</h2>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-muted-foreground">
                  I'm interested in new collaborations and opportunities to discuss research. Please feel free to reach
                  out if you have questions about my work or potential collaborations.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:achen@university.edu" className="hover:text-primary transition-colors">
                      achen@university.edu
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div>
                      <p>Department of Physics</p>
                      <p>University of Science & Technology</p>
                      <p>123 University Avenue</p>
                      <p>Anytown, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://orcid.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      ORCID: 0000-0001-2345-6789
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://scholar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Google Scholar Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://researchgate.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      ResearchGate Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Research Collaboration"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message here..."
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </section>
        </SectionObserver>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Dr. Alex Chen. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span className="sr-only">Google Scholar</span>
            </Link>
            <Link
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Award className="h-5 w-5" />
              <span className="sr-only">ORCID</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

