import Link from "next/link"
import { socialLinks } from "@/data/profile"

interface FooterProps {
  showSocialIcons?: boolean
}

export function Footer({ showSocialIcons = true }: FooterProps) {
  // Format date for the footer
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground order-2 md:order-1">Last updated on {formattedDate}</p>
          <p className="text-sm text-foreground text-center order-1 md:order-2">
            © {new Date().getFullYear()} Dr. Alex Chen. All rights reserved.
          </p>
          <div className="flex gap-4 order-3 md:justify-end md:min-w-[200px]">
            {showSocialIcons
              ? socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-foreground/80 transition-colors"
                  >
                    <i className={`${link.iconClass} text-lg`} aria-hidden="true"></i>
                    <span className="sr-only">{link.platform}</span>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    </footer>
  )
}

