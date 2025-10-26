import { Card } from "@/components/ui/card"
import { Target, Eye, Globe2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">About Anthan Exports</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            With decades of experience in international trade, Anthan Exports has established itself as a trusted
            partner for businesses worldwide seeking premium quality products from India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To bridge the gap between quality Indian products and global markets, ensuring sustainable trade practices
              that benefit producers and consumers alike. We are committed to delivering excellence in every shipment.
            </p>
          </Card>

          <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Eye className="text-accent" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the world's most trusted export company, recognized for our unwavering commitment to quality,
              sustainability, and customer satisfaction. We envision a future where Indian craftsmanship reaches every
              corner of the globe.
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Globe2 size={32} />
            </div>
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">Global Presence</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-pretty">
                Operating across 40+ countries with a network of trusted partners, we ensure seamless logistics and
                timely delivery. Our strategic locations in major ports enable efficient shipping to North America,
                Europe, Middle East, Asia, and beyond.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
