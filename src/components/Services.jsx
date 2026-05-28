import { motion } from "framer-motion"
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
import { cardHover, imageZoom, staggerContainer, staggerItem } from "../utils/motion"
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
      className="py-24 px-4 sm:px-6 bg-wood-50/80 dark:bg-wood-900 scroll-mt-24"
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

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? HiCube
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group bg-white dark:bg-wood-800 rounded-2xl overflow-hidden shadow-md border border-wood-200/50 dark:border-wood-700/50 h-full flex flex-col"
              >
                <motion.div variants={cardHover} className="h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      variants={imageZoom}
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute top-4 left-4 p-3 bg-wood-800/90 rounded-xl text-accent"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-wood-800 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-wood-600 dark:text-wood-400 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <motion.button
                      type="button"
                      onClick={() => scrollToSection("contact")}
                      className="mt-4 text-sm font-semibold text-accent text-left"
                      whileHover={{ x: 6 }}
                    >
                      Get a quote →
                    </motion.button>
                  </div>
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
