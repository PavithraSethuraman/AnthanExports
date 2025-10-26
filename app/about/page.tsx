import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/ceo-portrait.png",
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      image: "/professional-business-man-operations-director-port.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of International Trade",
      image: "/professional-business-woman-trade-director-portrai.jpg",
    },
    {
      name: "David Kumar",
      role: "Quality Assurance Manager",
      image: "/professional-business-man-quality-manager-portrait.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Anthan Exports</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
            Leading the way in international trade with integrity, innovation, and excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Anthan Exports has grown from a small trading company to a global leader in
                  international export services. Our journey began with a simple mission: to connect quality products
                  with markets worldwide.
                </p>
                <p>
                  Over the years, we've built strong relationships with manufacturers, suppliers, and clients across
                  more than 50 countries. Our commitment to excellence and customer satisfaction has made us a trusted
                  name in the export industry.
                </p>
                <p>
                  Today, we handle thousands of shipments annually, ensuring that every product meets the highest
                  standards of quality and arrives on time, every time.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/modern-office-building-international-business-head.jpg"
                alt="Anthan Exports headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To facilitate seamless international trade by providing reliable export services, maintaining the
                  highest quality standards, and building lasting partnerships that drive mutual growth and success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted export partner, recognized for our commitment to excellence, innovation
                  in logistics, and our role in connecting businesses across borders to create a more prosperous global
                  economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Experienced professionals dedicated to your success in international trade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6 pb-6 text-center">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
