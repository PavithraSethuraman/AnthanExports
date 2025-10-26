import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check } from "lucide-react"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // Mock product data - in a real app, this would come from a database
  const product = {
    id,
    name: "Agricultural Products",
    category: "Agriculture",
    description: "Premium quality grains, spices, and organic produce sourced from certified farms worldwide.",
    longDescription:
      "Our agricultural products represent the finest selection of grains, spices, and organic produce available in the international market. We work directly with certified farms and cooperatives to ensure sustainable farming practices and the highest quality standards. Each product undergoes rigorous testing and quality control before being approved for export.",
    image: "/agricultural-products-grains-spices-organic.jpg",
    features: [
      "Certified organic and sustainable sourcing",
      "Rigorous quality control and testing",
      "Compliance with international food safety standards",
      "Flexible packaging options",
      "Competitive pricing for bulk orders",
      "Reliable supply chain and timely delivery",
    ],
    specifications: [
      { label: "Origin", value: "Multiple certified farms worldwide" },
      { label: "Certifications", value: "ISO 22000, HACCP, Organic" },
      { label: "Packaging", value: "Customizable based on requirements" },
      { label: "Minimum Order", value: "Contact for details" },
    ],
  }

  return (
    <main>
      {/* Breadcrumb */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">{product.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">{product.longDescription}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Specifications</h2>
            <Card>
              <CardContent className="pt-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-sm font-semibold text-muted-foreground mb-1">{spec.label}</span>
                      <span className="text-base">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
