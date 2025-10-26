"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Award, ArrowRight, TrendingUp, Package, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function CounterCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">{label}</div>
    </div>
  )
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    {
      url: "/modern-cargo-ship-with-containers-at-sea-sunset.jpg",
      alt: "Global shipping and logistics",
    },
    {
      url: "/warehouse-with-organized-products-and-inventory.jpg",
      alt: "Quality products and inventory",
    },
    {
      url: "/international-business-handshake-with-world-map-ba.jpg",
      alt: "International partnerships",
    },
    {
      url: "/modern-port-with-cranes-and-shipping-containers-ae.jpg",
      alt: "Export operations",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const stats = [
    { label: "Countries Served", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 500, suffix: "+" },
    { label: "Products Exported", value: 1000, suffix: "+" },
    { label: "Years Experience", value: 15, suffix: "+" },
  ]

  return (
    <main>
      {/* Hero Section with Carousel */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-primary/35" />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-background/30 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-background/30 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-accent w-8" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-up">
              Connecting the World with Quality Products
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Your trusted partner in international trade and export services, delivering excellence across borders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform"
              >
                <Link href="/products">
                  Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-transform"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-accent/30 rounded-full animate-float" />
        <div
          className="absolute top-20 right-20 w-16 h-16 border-2 border-accent/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <CounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Anthan Exports</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                We deliver excellence through our commitment to quality, reliability, and global partnerships.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Serving clients across 50+ countries with efficient logistics and reliable delivery networks.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={200}>
              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Trusted Partners</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building long-term relationships with verified suppliers and trusted business partners worldwide.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={300}>
              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rigorous quality control processes ensuring every product meets international standards.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Comprehensive export solutions tailored to your business needs
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Package,
                title: "Product Sourcing",
                desc: "Access to quality products from verified manufacturers",
              },
              { icon: TrendingUp, title: "Market Analysis", desc: "In-depth market research and trade insights" },
              { icon: Shield, title: "Quality Control", desc: "Comprehensive inspection and certification services" },
              { icon: Globe, title: "Logistics Support", desc: "End-to-end shipping and customs clearance" },
            ].map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="flex gap-4 p-6 rounded-lg bg-background hover:shadow-lg transition-all hover:scale-105 duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Trusted by businesses worldwide for quality and reliability
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Global Retail Inc.",
                text: "Anthan Exports has been instrumental in helping us source quality products. Their attention to detail and commitment to excellence is unmatched.",
              },
              {
                name: "Michael Chen",
                company: "Pacific Trading Co.",
                text: "Working with Anthan Exports has streamlined our international operations. Their expertise in logistics and quality control is exceptional.",
              },
              {
                name: "Priya Sharma",
                company: "Eastern Markets Ltd.",
                text: "The team at Anthan Exports goes above and beyond. They've helped us expand into new markets with confidence and reliability.",
              },
            ].map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 text-accent">
                          ★
                        </div>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How We Work</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                A streamlined process designed for your success
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Understand your requirements" },
              { step: "02", title: "Sourcing", desc: "Find the perfect products" },
              { step: "03", title: "Quality Check", desc: "Ensure standards are met" },
              { step: "04", title: "Delivery", desc: "Ship to your destination" },
            ].map((process, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="text-center group relative">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-accent rounded-full animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-40 h-40 border border-accent rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Expand Your Business?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Partner with us to access global markets and grow your international trade operations.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
