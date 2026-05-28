import { useEffect, useState } from "react"
import { HiStar } from "react-icons/hi"
import { TESTIMONIALS } from "../data/siteData"
import ScrollReveal from "./ScrollReveal"

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
    <section className="py-24 px-4 sm:px-6 bg-wood-800 dark:bg-wood-900">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <blockquote className="relative min-h-[180px]">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <HiStar key={i} className="w-5 h-5 text-accent" />
              ))}
            </div>
            <p className="text-xl sm:text-2xl text-wood-100 leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <footer className="mt-8">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-wood-400 text-sm">{t.role}</p>
            </footer>
          </blockquote>

          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-accent" : "w-2 bg-wood-600"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
