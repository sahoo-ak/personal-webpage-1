"use client"

import { useEffect, useState } from "react"

export function DebugSections({ sections }) {
  const [sectionElements, setSectionElements] = useState([])

  useEffect(() => {
    const elements = sections.map((section) => {
      const element = document.getElementById(section.id)
      return {
        id: section.id,
        label: section.label,
        exists: !!element,
      }
    })

    setSectionElements(elements)
  }, [sections])

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-xs max-w-xs overflow-auto max-h-60">
      <h3 className="font-bold mb-2">Section IDs Debug:</h3>
      <ul>
        {sectionElements.map((section, i) => (
          <li key={i} className={section.exists ? "text-green-400" : "text-red-400"}>
            {section.id}: {section.exists ? "✓" : "✗"}
          </li>
        ))}
      </ul>
    </div>
  )
}

