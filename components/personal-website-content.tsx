import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Download } from "lucide-react"
import { NavbarWithActiveSection } from "@/components/navbar-with-active-section"
import { SectionObserver } from "@/components/section-observer"

// Import data
import { personalInfo, socialLinks, navigationSections } from "@/data/profile"
import { educationData } from "@/data/education"
import { researchAreas, researchProjects } from "@/data/research"
import { recentPublications, selectedPublications } from "@/data/publications"
// Update the imports to include the new academicEvents data
import { academicEvents } from "@/data/conferences"
import { experienceData } from "@/data/experience"
import { awardsData } from "@/data/awards"
import { programmingSkills, skillCategories, specializedTools } from "@/data/skills"
import { contactInfo } from "@/data/contact"
import { MapPin, Presentation, GraduationCap } from "lucide-react"

export function PersonalWebsiteContent() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Static navbar that will be enhanced by client component */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold text-xl">
            {personalInfo.name}
          </Link>
          <NavbarWithActiveSection sections={navigationSections} />
        </div>
      </header>

      <main className="flex-1">
        {/* Wrap all sections with the observer component */}
        <SectionObserver sections={navigationSections}>
          <section id="home" className="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{personalInfo.name}</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {personalInfo.title} at {personalInfo.institution}, {personalInfo.description}
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
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.platform}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-full bg-muted">
                <Image
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          <section id="education" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Education</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {educationData.map((education, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-24 flex-shrink-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-12 w-12 text-primary"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{education.degree}</h3>
                        <div className="grid gap-1">
                          <p className="font-medium">
                            {education.institution} ({education.period})
                          </p>
                          {education.gpa && <p className="text-muted-foreground">CGPA: {education.gpa}</p>}
                          {education.thesis && (
                            <p className="text-muted-foreground">
                              <span className="font-medium">Thesis:</span> "{education.thesis}"
                            </p>
                          )}
                          {education.supervisor && (
                            <p className="text-muted-foreground">
                              <span className="font-medium">Supervisor:</span> {education.supervisor}
                            </p>
                          )}
                          {education.fellowship && (
                            <p className="text-muted-foreground">
                              <span className="font-medium">Fellowship:</span> {education.fellowship}
                            </p>
                          )}
                          {education.specialization && (
                            <p className="text-muted-foreground">
                              <span className="font-medium">Specialization:</span> {education.specialization}
                            </p>
                          )}
                          {education.advisor && (
                            <p className="text-muted-foreground">
                              <span className="font-medium">Advisor:</span> {education.advisor}
                            </p>
                          )}
                          {education.minor && (
                            <p className="text-muted-foreground">
                              <span className="font-medium">Minor:</span> {education.minor}
                            </p>
                          )}
                          {education.honors && (
                            <p className="text-muted-foreground">
                              <span className="font-medium">Honors:</span> {education.honors}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  {researchAreas.map((area, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                        <p className="text-muted-foreground">{area.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="projects" className="mt-6">
                <div className="space-y-8">
                  {researchProjects.map((project, index) => (
                    <div key={index} className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-8 items-start">
                      <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Funding: {project.funding}</p>
                      </div>
                    </div>
                  ))}
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
                  {recentPublications.map((publication, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold">{publication.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{publication.authors}</p>
                            <p className="text-sm italic mt-1">
                              {publication.journal} ({publication.year})
                            </p>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            {publication.links.pdf && (
                              <Link
                                href={publication.links.pdf}
                                className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4 mr-1"
                                >
                                  <path d="M2 3h6a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                                  <path d="M13 8h2" />
                                  <path d="M13 12h2" />
                                  <path d="M13 16h2" />
                                  <path d="M13 20h2" />
                                </svg>{" "}
                                PDF
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

                {/* Update the publications section to link to the complete publications page */}
                {/* Find the "View Complete Publication List" button and replace it with: */}
                <div className="mt-8 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/publications" className="flex items-center">
                      View Complete Publication List <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="selected" className="mt-6">
                <div className="space-y-6">
                  {selectedPublications.map((publication, index) => (
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
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4 mr-1"
                                >
                                  <path d="M2 3h6a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                                  <path d="M13 8h2" />
                                  <path d="M13 12h2" />
                                  <path d="M13 16h2" />
                                  <path d="M13 20h2" />
                                </svg>{" "}
                                PDF
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
              </TabsContent>
            </Tabs>
          </section>

          {/* Replace the entire conferences section with this combined view: */}
          <section
            id="conferences"
            className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
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

          <section id="experience" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
              Professional Experience
            </h2>

            <div className="space-y-10 max-w-4xl mx-auto">
              {experienceData.map((experience, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                    <p className="font-medium">{experience.company}</p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="awards" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
              Awards & Honors
            </h2>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {awardsData.map((award, index) => (
                <Card key={index} className={award.isWide ? "md:col-span-2" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-primary"
                        >
                          <path d="M12 2v8" />
                          <path d="M18.4 13a7.3 7.3 0 1 1-14.8 0" />
                          <path d="M12 22v-3" />
                          <path d="M8 22h8" />
                          <path d="M18 9a6 6 0 0 0-12 0" />
                          <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{award.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {award.organization}, {award.year}
                        </p>
                        <p className="mt-2 text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="skills" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
              Technical Skills
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                    <h3 className="text-xl font-bold">Programming Languages</h3>
                  </div>
                  <div className="space-y-4">
                    {programmingSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                    </svg>
                    <h3 className="text-xl font-bold">Software & Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {skillCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium">{category.name}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-2">Specialized Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {specializedTools.map((tool, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {tool.name}
                        </span>
                      ))}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mt-1 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <div>
                      <p>{contactInfo.address.department}</p>
                      <p>{contactInfo.address.university}</p>
                      <p>{contactInfo.address.street}</p>
                      <p>{contactInfo.address.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M12 2v8" />
                      <path d="M18.4 13a7.3 7.3 0 1 1-14.8 0" />
                      <path d="M12 22v-3" />
                      <path d="M8 22h8" />
                      <path d="M18 9a6 6 0 0 0-12 0" />
                      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <a
                      href="https://orcid.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      ORCID: {contactInfo.orcid}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
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
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.slice(0, 4).map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.platform}</span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

