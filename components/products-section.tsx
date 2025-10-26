import { Card } from "@/components/ui/card"
import { Wheat, Flame, Shirt, Palette } from "lucide-react"

const products = [
  {
    icon: Wheat,
    title: "Agricultural Products",
    description:
      "Premium quality rice, wheat, pulses, and grains sourced from the finest farms. Our agricultural products meet international quality standards and are processed with utmost care.",
    image: "/agricultural-grains-rice-wheat-in-burlap-sacks.jpg",
  },
  {
    icon: Flame,
    title: "Spices",
    description:
      "Authentic Indian spices including turmeric, cardamom, black pepper, cumin, and more. Each spice is carefully selected, processed, and packaged to preserve its natural aroma and flavor.",
    image: "/colorful-indian-spices-in-wooden-bowls.jpg",
  },
  {
    icon: Shirt,
    title: "Textiles",
    description:
      "Exquisite fabrics, traditional garments, and modern apparel made from premium cotton, silk, and blended materials. Our textiles showcase the rich heritage of Indian craftsmanship.",
    image: "/colorful-indian-textile-fabrics-silk-cotton.jpg",
  },
  {
    icon: Palette,
    title: "Handicrafts",
    description:
      "Handcrafted goods including pottery, wooden artifacts, metalwork, and decorative items. Each piece tells a story of traditional artistry passed down through generations.",
    image: "/indian-handicrafts-pottery-wooden-artifacts.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Our Products</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Discover our diverse range of premium products, each carefully selected and quality-tested to meet
            international standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <product.icon className="text-accent-foreground" size={24} />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-primary">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
