import { Card, CardContent } from "@/components/ui/card"
import { Ship, Package, ClipboardCheck, Globe, Truck, FileCheck } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Ship,
      title: "International Shipping",
      description:
        "Comprehensive shipping solutions via sea, air, and land freight to destinations worldwide with real-time tracking.",
    },
    {
      icon: Package,
      title: "Packaging & Labeling",
      description:
        "Professional packaging services ensuring products are protected and comply with international shipping regulations.",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection",
      description:
        "Rigorous quality control and inspection services to ensure all products meet specified standards before shipment.",
    },
    {
      icon: Globe,
      title: "Customs Clearance",
      description:
        "Expert handling of customs documentation and clearance procedures to ensure smooth border crossings.",
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description:
        "End-to-end logistics coordination from supplier to destination, optimizing routes and reducing delivery times.",
    },
    {
      icon: FileCheck,
      title: "Documentation Services",
      description: "Complete assistance with export documentation, certificates of origin, and compliance paperwork.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
            Comprehensive export solutions designed to streamline your international trade operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A streamlined approach to ensure your products reach their destination safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understand your requirements and provide tailored solutions",
              },
              {
                step: "02",
                title: "Sourcing",
                description: "Connect with verified suppliers and negotiate best terms",
              },
              {
                step: "03",
                title: "Quality Check",
                description: "Inspect products to ensure they meet your standards",
              },
              { step: "04", title: "Delivery", description: "Ship products safely to your destination worldwide" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
