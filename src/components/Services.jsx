import {
  HiHome,
  HiOfficeBuilding,
  HiRefresh,
  HiCube,
  HiColorSwatch,
} from "react-icons/hi"
import { FaDoorOpen } from "react-icons/fa"
import { SERVICES } from "../data/siteData"
import { scrollToSection } from "../hooks/useScrollSpy"
import ScrollReveal from "./ScrollReveal"

const ICONS = {
  furniture: HiCube,
  kitchen: HiColorSwatch,
  interior: HiHome,
  doors: FaDoorOpen,
  repair: HiRefresh,
  commercial: HiOfficeBuilding,
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 bg-wood-50 dark:bg-wood-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Our Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-wood-800 dark:text-white">
            Complete Woodworking Solutions
          </h2>
          <p className="mt-4 text-wood-600 dark:text-wood-400">
            Residential or commercial — we deliver precision craftsmanship across
            every category.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon] ?? HiCube
            return (
              <ScrollReveal key={service.id} delay={index * 80}>
                <article className="group bg-white dark:bg-wood-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-wood-200/50 dark:border-wood-700/50 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 p-3 bg-wood-800/90 rounded-xl text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-wood-800 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-wood-600 dark:text-wood-400 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => scrollToSection("contact")}
                      className="mt-4 text-sm font-semibold text-accent hover:text-wood-500 dark:hover:text-wood-200 text-left transition-colors"
                    >
                      Get a quote →
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
