/**
 * Handles downloading a BibTeX file
 * @param bibtexUrl URL to the BibTeX file
 * @param filename Suggested filename for the download
 */
export async function downloadBibtex(bibtexUrl: string, filename: string) {
  try {
    const response = await fetch(bibtexUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch BibTeX: ${response.statusText}`)
    }

    const bibtexContent = await response.text()

    // Create a blob from the BibTeX content
    const blob = new Blob([bibtexContent], { type: "application/x-bibtex" })

    // Create a URL for the blob
    const url = URL.createObjectURL(blob)

    // Create a temporary anchor element
    const a = document.createElement("a")
    a.href = url
    a.download = filename || "reference.bib"

    // Append to the document, click, and remove
    document.body.appendChild(a)
    a.click()

    // Clean up
    setTimeout(() => {
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, 100)

    return true
  } catch (error) {
    console.error("Error downloading BibTeX:", error)
    return false
  }
}

/**
 * Generates a filename for a BibTeX download based on publication details
 * @param publication Publication object
 * @returns Suggested filename for the BibTeX file
 */
export function generateBibtexFilename(publication: {
  authors: string
  year: number
  title: string
}): string {
  // Get first author's last name
  const firstAuthor = publication.authors.split(",")[0].trim().split(" ")[0]

  // Get a simplified version of the title (first few words)
  const titleWords = publication.title.split(" ").slice(0, 3).join("_").toLowerCase()

  // Remove special characters
  const sanitizedTitle = titleWords.replace(/[^a-z0-9_]/g, "")

  return `${firstAuthor.toLowerCase()}_${publication.year}_${sanitizedTitle}.bib`
}

