import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-[url('/ghost-ship-background.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative mx-auto mb-8 h-36 w-full">
            <Image src="/images/design-mode/radarlogo.png" alt="RADAR Logo" fill className="object-contain leading-7 px-0 border-0" priority />
          </div>
          <h1 className="text-6xl text-primary mb-6 md:text-4xl font-extralight leading-3 tracking-widest">KONSERLER &amp; BİLETLER  </h1>
          <p className="text-xl text-muted-foreground mb-8 uppercase leading-7 tracking-tight md:text-sm">
            YEDİ DENİZLERDEN KORSAN METALİ  
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg uppercase tracking-wider">
              Şimdi Dinle
            </Button>
            <Button size="lg" variant="outline" className="text-lg uppercase tracking-wider bg-transparent">
              Konser Tarihleri
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
