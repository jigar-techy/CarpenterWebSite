import { useEffect, useState } from "react"
import { HiArrowDown, HiPhone } from "react-icons/hi"
import { BRAND, HERO_IMAGES } from "../data/siteData"
import { scrollToSection } from "../hooks/useScrollSpy"
import ScrollReveal from "./ScrollReveal"

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: slide === i ? 1 : 0,
            }}
            aria-hidden
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-900/85 via-wood-800/75 to-wood-900/90 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
        <ScrollReveal>
          <p className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent border border-accent/40 rounded-full bg-wood-900/40">
            {BRAND.tagline}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Crafting Spaces With{" "}
            <span className="text-accent">Timeless Wood</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-6 text-lg sm:text-xl text-wood-200 max-w-2xl mx-auto">
            From bespoke furniture to full interior woodwork — precision,
            passion, and premium materials in every project.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-accent text-wood-900 font-bold rounded-lg hover:bg-wood-200 transition-all shadow-lg shadow-accent/25"
            >
              Request Free Estimate
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("gallery")}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              View Our Work
            </button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <a
            href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
            className="mt-8 inline-flex items-center gap-2 text-wood-200 hover:text-accent transition-colors"
          >
            <HiPhone className="w-5 h-5" />
            {BRAND.phone}
          </a>
        </ScrollReveal>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-accent animate-float"
        aria-label="Scroll down"
      >
        <HiArrowDown className="w-8 h-8" />
      </button>
    </section>
  )
}
