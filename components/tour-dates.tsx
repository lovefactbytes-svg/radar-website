import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { concerts } from "@/data/concerts"

export function TourDates() {
  return (
    <section id="tour" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-12 text-primary uppercase md:text-5xl font-semibold tracking-widest leading-7 text-center">
          {"konser taRİHLERİ"}
        </h2>

        <div className="max-w-4xl mx-auto mb-8">
          <Card className="p-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/50">
            <div className="flex items-center justify-center gap-4 text-center">
              <GraduationCap className="w-8 h-8 text-primary hidden sm:block" />
              <div>
                <p className="text-lg md:text-xl font-bold text-primary mb-1">ULSA Öğrenci İndirimi</p>
                <p className="text-sm md:text-base text-foreground">
                  Bilet alırken <span className="font-bold text-primary">"Öğrenci"</span> seçeneğini seçip ID kartı
                  görseli yollayanlara <span className="font-bold text-primary">%50 indirim!</span>
                </p>
              </div>
              <GraduationCap className="w-8 h-8 text-primary hidden sm:block" />
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {concerts.map((show) => (
            <Card key={show.id} className="p-6 bg-card border-border hover:border-primary transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Calendar className="w-4 h-4" />
                    <span className="uppercase tracking-wider">{show.date}</span>
                  </div>
                  <div className="text-lg font-semibold">{show.venue}</div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{show.city}</span>
                  </div>
                </div>

                <Button
                  variant={show.status === "sold out" ? "secondary" : "default"}
                  disabled={show.status === "sold out"}
                  className="uppercase tracking-wider w-full md:w-auto"
                  asChild={show.status === "tickets" && show.ticketLink ? true : false}
                >
                  {show.status === "tickets" && show.ticketLink ? (
                    <a href={show.ticketLink} target="_blank" rel="noopener noreferrer">
                      Bilet Al
                    </a>
                  ) : (
                    <span>{show.status === "sold out" ? "Tükendi" : "Bilet Al"}</span>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
