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
    }
  }, [])

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
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
          className={`text-sm font-medium transition-colors ${
            activeSection === section.id ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
          }`}
          onClick={(e) => handleNavClick(e, section.id)}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  )
}

