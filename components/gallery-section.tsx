const galleryImages = [
  {
    src: "/spices-being-packaged-in-modern-facility.jpg",
    alt: "Spice packaging facility",
  },
  {
    src: "/agricultural-products-quality-inspection.jpg",
    alt: "Quality inspection",
  },
  {
    src: "/textile-manufacturing-traditional-looms.jpg",
    alt: "Textile manufacturing",
  },
  {
    src: "/shipping-containers-at-international-port.jpg",
    alt: "Export operations",
  },
  {
    src: "/artisan-crafting-traditional-handicrafts.jpg",
    alt: "Handicraft production",
  },
  {
    src: "/warehouse-with-organized-product-inventory.jpg",
    alt: "Warehouse operations",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Gallery</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A glimpse into our operations, products, and the journey from source to destination.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
