import { Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const socialLinks = [
    {
      icon: Youtube,
      href: "https://www.youtube.com/@R.A.D.A.R_official",
      label: "YouTube",
      type: "lucide" as const,
    },
    {
      icon: "/facebrowser-icon.png",
      href: "https://facebrowser-tr.gta.world/pages/R.A.D.A.R",
      label: "Facebrowser",
      type: "image" as const,
    },
    {
      icon: "/soundloop-icon.png",
      href: "https://soundloop.app/artist/17/radar",
      label: "Soundloop",
      type: "image" as const,
    },
  ]

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {social.type === "lucide" ? (
                  <social.icon className="w-6 h-6" />
                ) : (
                  <Image
                    src={(social.icon as string) || "/placeholder.svg"}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {/* Additional content can be added here */}
          </div>

          <div className="text-sm text-muted-foreground text-center">{"© 2025 R.A.D.A.R —\nAll rights reserved."}</div>
        </div>
      </div>
    </footer>
  )
}
