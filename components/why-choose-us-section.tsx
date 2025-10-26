import { Card } from "@/components/ui/card"
import { Award, Network, Leaf, Truck } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage, from sourcing to packaging. All products are certified and meet international standards.",
  },
  {
    icon: Network,
    title: "Global Network",
    description:
      "Established partnerships across 40+ countries with reliable distribution channels and local expertise.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description:
      "Committed to ethical and sustainable practices that support local communities and protect the environment.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Efficient supply chain management with timely delivery, proper documentation, and real-time tracking.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Our commitment to excellence and customer satisfaction sets us apart in the international export industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-accent">25+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-accent">40+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-accent">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
