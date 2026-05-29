import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HiArrowDown, HiPhone } from "react-icons/hi"
import { BRAND, HERO_IMAGES, HERO_PLACEHOLDERS } from "../data/siteData"
import { scrollToSection } from "../hooks/useScrollSpy"
import { ease, fadeUp } from "../utils/motion"
import { preloadImage } from "../utils/images"
import AnimatedText from "./AnimatedText"
import FloatingOrbs from "./FloatingOrbs"
import MagneticButton from "./MagneticButton"

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const [loadedSlides, setLoadedSlides] = useState({})

  useEffect(() => {
    HERO_IMAGES.forEach((src, i) => {
      preloadImage(src)
        .then(() => setLoadedSlides((prev) => ({ ...prev, [i]: true })))
        .catch(() => setLoadedSlides((prev) => ({ ...prev, [i]: true })))
    })
  }, [])

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
      <div className="absolute inset-0 bg-wood-800">
        {/* Instant LQIP — tiny local WebP (~400 bytes) */}
        <img
          src={HERO_PLACEHOLDERS[slide]}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-md"
        />

        {/* All slides kept in DOM — no re-fetch on slide change */}
        {HERO_IMAGES.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            aria-hidden
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding={i === 0 ? "sync" : "async"}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              opacity: slide === i && loadedSlides[i] ? 1 : 0,
              scale: slide === i ? 1 : 1.04,
            }}
            transition={{ duration: 0.7, ease }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-wood-800/70 via-wood-700/55 to-wood-100/30 z-10" />
        <div className="absolute inset-0 wood-grain z-[11] opacity-30" aria-hidden />
      </div>

      <FloatingOrbs />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent border border-accent/40 rounded-full bg-wood-900/40 shimmer-badge"
        >
          {BRAND.tagline}
        </motion.p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
          <AnimatedText text="Crafting Spaces With" delay={0.35} />
          <br />
          <AnimatedText
            text="Timeless Wood"
            className="text-accent"
            delay={0.7}
          />
        </h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 text-lg sm:text-xl text-wood-200 max-w-2xl mx-auto"
        >
          From bespoke furniture to full interior woodwork — precision,
          passion, and premium materials in every project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.1, ease }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-accent text-wood-900 font-bold rounded-lg shadow-lg shadow-accent/25 btn-glow"
          >
            Request Free Estimate
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection("gallery")}
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm"
          >
            View Our Work
          </MagneticButton>
        </motion.div>

        <motion.a
          href={`tel:+91${BRAND.phoneRaw}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex items-center gap-2 text-wood-200 hover:text-accent transition-colors"
        >
          <motion.span
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <HiPhone className="w-5 h-5" />
          </motion.span>
          {BRAND.phoneRaw}
        </motion.a>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 z-20 text-white/70 hover:text-accent"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <HiArrowDown className="w-8 h-8" />
      </motion.button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setSlide(i)}
            className={`h-1.5 rounded-full transition-all ${
              slide === i ? "w-8 bg-accent" : "w-2 bg-white/40"
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
