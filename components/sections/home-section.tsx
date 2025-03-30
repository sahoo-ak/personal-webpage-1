import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { personalInfo, socialLinks } from "@/data/profile"

export function HomeSection() {
  return (
    <section id="home" className="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{personalInfo.name}</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            {personalInfo.title} at {personalInfo.institution}, {personalInfo.description}
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
              <Link href="#research">Research Areas</Link>
            </Button>
            <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
              <a href="https://iitracin-my.sharepoint.com/:b:/g/personal/aloka_s_ph_iitr_ac_in/ER0HxyGAAmxCstVylGTNGRMBhYasDBOwdnNFGQqDCssy4w?e=YtzWNW" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Download className="mr-2 h-4 w-4" /> CV
              </a>
            </Button>
            <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
          <div className="flex gap-14">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <link.icon className="h-9 w-9" />
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

