import { type NextRequest, NextResponse } from "next/server"
import path from "path"
import fs from "fs/promises"

// This is the base directory where we'll store our publication files
// In a real app, this would be outside the app directory or in a database
const PUBLICATIONS_DIR = path.join(process.cwd(), "data-files", "publications")

export async function GET(request: NextRequest, { params }: { params: { type: string; id: string } }) {
  const { type, id } = params

  // Validate the type parameter
  if (type !== "bibtex" && type !== "pdf") {
    return NextResponse.json({ error: "Invalid file type requested" }, { status: 400 })
  }

  // Sanitize the id to prevent directory traversal attacks
  const sanitizedId = id.replace(/[^a-zA-Z0-9_-]/g, "")

  try {
    // Determine the file extension and content type
    const fileExtension = type === "bibtex" ? ".bib" : ".pdf"
    const contentType = type === "bibtex" ? "application/x-bibtex" : "application/pdf"

    // Construct the file path
    const filePath = path.join(PUBLICATIONS_DIR, type, `${sanitizedId}${fileExtension}`)

    // Try to read the file
    const fileData = await fs.readFile(filePath)

    // Return the file with appropriate headers
    return new NextResponse(fileData, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${sanitizedId}${fileExtension}"`,
      },
    })
  } catch (error) {
    console.error(`Error serving ${type} file:`, error)
    return NextResponse.json({ error: "File not found" }, { status: 404 })
  }
}

