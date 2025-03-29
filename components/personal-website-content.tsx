import Link from "next/link"
import { NavbarWithActiveSection } from "@/components/navbar-with-active-section"
import { SectionObserver } from "@/components/section-observer"
import { personalInfo, socialLinks, navigationSections } from "@/data/profile"

// Import section components
import { HomeSection } from "@/components/sections/home-section"
import { EducationSection } from "@/components/sections/education-section"
import { ResearchSection } from "@/components/sections/research-section"
import { PublicationsSection } from "@/components/sections/publications-section"
import { AcademicEventsSection } from "@/components/sections/academic-events-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { AwardsSection } from "@/components/sections/awards-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

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
          <HomeSection />
          <EducationSection />
          <ResearchSection />
          <PublicationsSection />
          <AcademicEventsSection />
          <ExperienceSection />
          <AwardsSection />
          <SkillsSection />
          <ContactSection />
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

