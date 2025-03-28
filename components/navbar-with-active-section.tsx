"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface NavbarProps {
  sections: { id: string; label: string }[]
}

export function NavbarWithActiveSection({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)

  // Only run on client side
  useEffect(() => {
    setMounted(true)

    // Get initial active section from URL hash if present
    if (window.location.hash) {
      setActiveSection(window.location.hash.substring(1))
    } else {
      // Default to first section if no hash
      setActiveSection(sections[0].id)
    }

    // Listen for the custom event from SectionObserver
    const handleSectionInView = (event: CustomEvent) => {
      setActiveSection(event.detail.sectionId)
    }

    // Add event listener for the custom event
    document.addEventListener("sectionInView", handleSectionInView as EventListener)

    // Clean up
    return () => {
      document.removeEventListener("sectionInView", handleSectionInView as EventListener)
    }
  }, [sections])

  // Handle click on navigation links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${sectionId}`)
      setActiveSection(sectionId)
    }
  }

  // If not mounted yet, render static links
  if (!mounted) {
    return (
      <nav className="hidden md:flex gap-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative"
          >
            {section.label}
          </Link>
        ))}
      </nav>
    )
  }

  return (
    <nav className="hidden md:flex gap-6">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`text-sm font-medium transition-colors relative group ${
            activeSection === section.id ? "text-primary" : "text-muted-foreground hover:text-primary"
          }`}
          onClick={(e) => handleNavClick(e, section.id)}
        >
          {section.label}
          <span
            className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out ${
              activeSection === section.id ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </nav>
  )
}

