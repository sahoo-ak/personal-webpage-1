"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { Section, DropdownSection } from "@/types"

interface NavbarProps {
  sections: (Section | DropdownSection)[]
}

export function NavbarWithActiveSection({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [sections])

  // Handle click on navigation links
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${sectionId}`)
      setActiveSection(sectionId)
      setOpenDropdown(null)
    }
  }

  // Handle mouse enter for dropdown
  const handleMouseEnter = (sectionId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(sectionId)
  }

  // Handle mouse leave for dropdown
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 100) // Small delay to prevent flickering when moving between button and dropdown
  }

  // Check if a section is active (including dropdown items)
  const isSectionActive = (section: Section | DropdownSection) => {
    if ("dropdown" in section) {
      return section.dropdown.some((item) => item.id === activeSection) || section.id === activeSection
    }
    return section.id === activeSection
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
      {sections.map((section) => {
        const isDropdown = "dropdown" in section
        const isActive = isSectionActive(section)

        return (
          <div
            key={section.id}
            className="relative"
            ref={(el) => {
              if (isDropdown) {
                dropdownRefs.current[section.id] = el
              }
            }}
            onMouseEnter={() => isDropdown && handleMouseEnter(section.id)}
            onMouseLeave={isDropdown ? handleMouseLeave : undefined}
          >
            {isDropdown ? (
              <>
                <button
                  className={`text-sm font-medium transition-colors relative group inline-flex items-center gap-1 p-0 border-0 bg-transparent ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {section.label}
                  <ChevronDown className="h-4 w-4" />
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
                {openDropdown === section.id && (
                  <div
                    className="absolute top-full left-0 mt-2 py-2 bg-background border rounded-md shadow-md min-w-[150px] z-50"
                    onMouseEnter={() => handleMouseEnter(section.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {section.dropdown.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block px-4 py-2 text-sm ${
                          activeSection === item.id
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-primary hover:bg-muted"
                        }`}
                        onClick={(e) => handleNavClick(e, item.id)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={`#${section.id}`}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(e, section.id)}
              >
                {section.label}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

