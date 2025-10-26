import { Button } from "@/components/ui/button"
import { ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/international-shipping-containers-at-port-with-blu.jpg" alt="Global exports" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent-foreground border border-accent/30">
            <Globe size={16} />
            <span className="text-sm font-medium">Trusted Global Export Partner</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground text-balance leading-tight">
            Connecting Quality with the World
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Premium agricultural products, authentic spices, exquisite textiles, and handcrafted goods delivered
            globally with excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8">
              <Link href="#contact">
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-base px-8"
            >
              <Link href="#products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
