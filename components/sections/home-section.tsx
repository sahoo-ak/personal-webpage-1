import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { personalInfo, socialLinks } from "@/data/profile"

export function HomeSection() {
  return (
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
  )
}

