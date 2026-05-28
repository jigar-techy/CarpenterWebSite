import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HiStar } from "react-icons/hi"
import { TESTIMONIALS } from "../data/siteData"
import { ease } from "../utils/motion"
import ScrollReveal from "./ScrollReveal"

const slideVariants = {
  enter: { opacity: 0, x: 60, scale: 0.96 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -60, scale: 0.96 },
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <section className="py-24 px-4 sm:px-6 bg-wood-50 dark:bg-wood-900">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-wood-800 dark:text-white mb-12">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease }}
              className="bg-white dark:bg-wood-800 rounded-2xl p-8 sm:p-10 shadow-lg border border-wood-200/80 dark:border-wood-700"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, type: "spring" }}
                  >
                    <HiStar className="w-5 h-5 text-accent" />
                  </motion.span>
                ))}
              </div>
              <p className="text-xl sm:text-2xl text-wood-700 dark:text-wood-100 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="font-semibold text-wood-800 dark:text-white">{t.name}</p>
                <p className="text-wood-500 dark:text-wood-400 text-sm">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2 rounded-full ${
                i === active ? "bg-accent" : "bg-wood-300 dark:bg-wood-600"
              }`}
              animate={{ width: i === active ? 32 : 8 }}
              whileHover={{ scale: 1.2 }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
