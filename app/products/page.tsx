import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Agricultural Products",
      category: "Agriculture",
      description: "Premium quality grains, spices, and organic produce sourced from certified farms worldwide.",
      image: "/agricultural-products-grains-spices-organic.jpg",
    },
    {
      id: 2,
      name: "Textiles & Fabrics",
      category: "Textiles",
      description: "High-quality cotton, silk, and synthetic fabrics for fashion and industrial applications.",
      image: "/textile-fabrics-cotton-silk-materials.jpg",
    },
    {
      id: 3,
      name: "Electronics Components",
      category: "Electronics",
      description: "Reliable electronic components and parts for manufacturing and assembly operations.",
      image: "/electronic-components-circuit-boards-technology.jpg",
    },
    {
      id: 4,
      name: "Machinery & Equipment",
      category: "Industrial",
      description: "Industrial machinery and equipment for manufacturing, construction, and processing.",
      image: "/industrial-machinery-equipment-manufacturing.jpg",
    },
    {
      id: 5,
      name: "Chemicals & Raw Materials",
      category: "Chemicals",
      description: "Industrial chemicals and raw materials meeting international safety and quality standards.",
      image: "/chemical-raw-materials-industrial-containers.jpg",
    },
    {
      id: 6,
      name: "Consumer Goods",
      category: "Consumer",
      description: "Wide range of consumer products including home goods, personal care, and lifestyle items.",
      image: "/consumer-goods-products-retail-items.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Products</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
            Discover our diverse range of quality products available for international export.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-3 bg-accent text-accent-foreground">{product.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            We work with a vast network of suppliers and can source custom products to meet your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
