import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
            Hakkımızda
          </h2>

          <Card className="p-8 bg-card border-border">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                2008'den beri yedi denizlerde heavy metal gemimizi sürerken, insanlığın bildiği en epik korsan metal
                deneyimini size sunuyoruz. Halk enstrümanları, ezici rifler ve denizcilik maceralarının benzersiz
                karışımı dünya çapında dinleyicileri büyüledi.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Underground mekanlardaki mütevazı başlangıçlardan dünyanın dört bir yanındaki büyük festivallerde başrol
                oynamaya kadar yolculuğumuz efsanevi oldu. Birçok albüm ve sayısız tükenen konserle, korsan metalin
                sınırlarını zorlamaya devam ediyoruz.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Yeni toprakları fethettiğimiz ve açık denizlerin ruhunu her yerdeki metal hayranlarına getirdiğimiz bu
                epik yolculukta bize katılın. Kadehlerinizi kaldırın ve bir ömür boyu sürecek maceraya hazır olun!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
