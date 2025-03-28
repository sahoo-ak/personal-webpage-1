"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface SectionObserverProps {
  sections: { id: string; label: string }[]
  children: React.ReactNode
}

export function SectionObserver({ sections, children }: SectionObserverProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Set up intersection observer to detect which section is in view
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-5% 0px -85% 0px", // Adjusted margins for better detection
      threshold: 0.05, // Lower threshold to detect sections earlier
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update URL without scrolling
          history.replaceState(null, null, `#${entry.target.id}`)

          // Dispatch a custom event that the navbar can listen to
          const event = new CustomEvent("sectionInView", {
            detail: { sectionId: entry.target.id },
          })
          document.dispatchEvent(event)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Function to handle hash links
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          // Add a small delay to ensure the element is in view
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }

    // Handle initial hash if present
    if (window.location.hash) {
      handleHashChange()
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Clean up
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      observer.disconnect()
    }
  }, [sections, mounted])

  return <>{children}</>
}

