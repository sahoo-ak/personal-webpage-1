"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { personalInfo, socialLinks } from "@/data/profile"

// Add custom animation
import { useEffect } from "react"

export function HomeSection() {
  // Add animation to tailwind config
  useEffect(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style")
      style.innerHTML = `
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 1000s linear infinite;
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{personalInfo.name}</h1>
            <div className="space-y-2 text-muted-foreground md:text-xl">
              <p>{personalInfo.title}</p>
              <p>{personalInfo.institution}</p>
              <p>{personalInfo.description}</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
                <Link href="#research">Research Areas</Link>
              </Button>
              <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
                <a
                  href="https://iitracin-my.sharepoint.com/:b:/g/personal/aloka_s_ph_iitr_ac_in/ER0HxyGAAmxCstVylGTNGRMBhYasDBOwdnNFGQqDCssy4w?e=YtzWNW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" /> CV
                </a>
              </Button>
              <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
            <div className="flex gap-11">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <i className={`${link.iconClass} text-4xl`} aria-hidden="true"></i>
                  <span className="sr-only">{link.platform}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            {/* Animated circle */}
            <div className="absolute inset-0 rounded-full animate-spin-slow">
              <div className="h-full w-full rounded-full border-2 border-dashed border-primary"></div>
            </div>

            {/* Profile image */}
            <div className="absolute inset-2 overflow-hidden rounded-full bg-muted">
              <Image
                src={personalInfo.profileImage || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

