import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { HiCalculator } from "react-icons/hi"
import { PROJECT_TYPES, WOOD_TYPES } from "../data/siteData"
import { scrollToSection } from "../hooks/useScrollSpy"
import ScrollReveal from "./ScrollReveal"

export default function QuoteEstimator() {
  const [length, setLength] = useState(4)
  const [width, setWidth] = useState(3)
  const [wood, setWood] = useState("oak")
  const [project, setProject] = useState("furniture")

  const estimate = useMemo(() => {
    const area = length * width
    const woodRate = WOOD_TYPES.find((w) => w.id === wood)?.rate ?? 85
    const multiplier =
      PROJECT_TYPES.find((p) => p.id === project)?.multiplier ?? 1
    const labor = 350
    const base = area * woodRate * multiplier + labor
    const low = Math.round(base * 0.9)
    const high = Math.round(base * 1.25)
    return { low, high, area }
  }, [length, width, wood, project])

  return (
    <section className="py-24 px-4 sm:px-6 bg-wood-100 dark:bg-wood-900/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            <HiCalculator className="w-5 h-5" />
            Instant Quote Estimator
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-wood-800 dark:text-white">
            Get a Ballpark Estimate
          </h2>
          <p className="mt-3 text-wood-600 dark:text-wood-400 text-sm">
            Adjust dimensions and materials — final pricing confirmed after site visit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-white dark:bg-wood-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-wood-200/60 dark:border-wood-700">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-wood-700 dark:text-wood-300 mb-2">
                  Length (meters): {length}
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full accent-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-wood-700 dark:text-wood-300 mb-2">
                  Width (meters): {width}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full accent-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-wood-700 dark:text-wood-300 mb-2">
                  Wood Type
                </label>
                <select
                  value={wood}
                  onChange={(e) => setWood(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-wood-200 dark:border-wood-600 bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:ring-2 focus:ring-accent outline-none"
                >
                  {WOOD_TYPES.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-wood-700 dark:text-wood-300 mb-2">
                  Project Type
                </label>
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-wood-200 dark:border-wood-600 bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:ring-2 focus:ring-accent outline-none"
                >
                  {PROJECT_TYPES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-wood-800 dark:bg-wood-900 rounded-xl p-6 text-center">
              <p className="text-wood-300 text-sm mb-1">
                Estimated area: {estimate.area.toFixed(1)} m²
              </p>
              <motion.p
                key={`${estimate.low}-${estimate.high}`}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="font-display text-3xl sm:text-4xl font-bold text-accent"
              >
                ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
              </motion.p>
              <p className="text-wood-400 text-xs mt-2">USD · indicative range only</p>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-6 px-6 py-3 bg-accent text-wood-900 font-bold rounded-lg hover:bg-wood-200 transition-colors"
              >
                Request Accurate Quote
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
