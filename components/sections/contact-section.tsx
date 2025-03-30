import { Button } from "@/components/ui/button"
import { Mail, Users } from "lucide-react"
import { contactInfo } from "@/data/contact"
import { GoogleScholarIcon } from "@/components/icons/google-scholar-icon"
import { ResearchGateIcon } from "@/components/icons/researchgate-icon"
import { OrcidIcon } from "@/components/icons/orcid-icon"

export function ContactSection() {
  return (
    <section id="contact" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Contact</h2>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-muted-foreground">
            I'm interested in new collaborations and opportunities to discuss research. Please feel free to reach out if
            you have questions about my work or potential collaborations.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p>{contactInfo.address.department}</p>
                <p>{contactInfo.address.university}</p>
                <p>{contactInfo.address.street}</p>
                <p>{contactInfo.address.city}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <OrcidIcon className="h-5 w-5 text-primary" />
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
              <GoogleScholarIcon className="h-5 w-5 text-primary" />
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
              <ResearchGateIcon className="h-5 w-5 text-primary" />
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
  )
}

