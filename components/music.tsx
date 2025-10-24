import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music2, ExternalLink } from "lucide-react"

const albums = [
  {
    title: "Seventh Rum of a Seventh Rum",
    year: "2024",
    cover: "/pirate-metal-album-cover-skull.jpg",
  },
  {
    title: "Curse of the Crystal Coconut",
    year: "2023",
    cover: "/pirate-metal-album-cover-ship.jpg",
  },
  {
    title: "No Grave But the Sea",
    year: "2022",
    cover: "/pirate-metal-album-cover-treasure.jpg",
  },
]

const streamingPlatforms = [
  { name: "Spotify", icon: Music2 },
  { name: "Apple Music", icon: Music2 },
  { name: "YouTube", icon: Music2 },
  { name: "Bandcamp", icon: Music2 },
]

export function Music() {
  return (
    <section id="music" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
          Discography
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {albums.map((album, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all group"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{album.title}</h3>
                <p className="text-muted-foreground mb-4">{album.year}</p>
                <Button variant="outline" className="w-full uppercase tracking-wider bg-transparent">
                  Listen Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground uppercase tracking-wider">Stream Our Music</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {streamingPlatforms.map((platform, index) => (
              <Button key={index} variant="outline" className="uppercase tracking-wider bg-transparent">
                <platform.icon className="w-4 h-4 mr-2" />
                {platform.name}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
