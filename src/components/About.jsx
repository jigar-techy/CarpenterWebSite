import { motion } from "framer-motion"
import { HiCheckCircle } from "react-icons/hi"
import { ABOUT_IMAGES } from "../data/siteData"
import { slideFromLeft, slideFromRight } from "../utils/motion"
import OptimizedImage from "./OptimizedImage"
import ScrollReveal from "./ScrollReveal"

const HIGHLIGHTS = [
  "Family-owned workshop since 2008",
  "Sustainable sourced hardwoods",
  "3-year workmanship warranty",
  "Free on-site consultation",
]

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-white dark:bg-wood-800 scroll-mt-24 border-t border-wood-100"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal variant={slideFromLeft}>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <OptimizedImage
              src={ABOUT_IMAGES.main}
              alt="Master carpenter at work in workshop"
              wrapperClassName="w-full aspect-[4/5] rounded-2xl shadow-2xl"
              className="w-full h-full object-cover rounded-2xl"
              motionProps={{
                initial: { clipPath: "inset(0 100% 0 0)" },
                whileInView: { clipPath: "inset(0 0% 0 0)" },
                viewport: { once: true },
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-4 sm:right-6 bg-accent text-wood-900 p-6 rounded-xl shadow-xl max-w-[200px]"
              initial={{ opacity: 0, y: 24, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            >
              <p className="font-display text-3xl font-bold">18+</p>
              <p className="text-sm font-medium mt-1">Years of Master Craftsmanship</p>
            </motion.div>
          </motion.div>
        </ScrollReveal>

        <div>
          <ScrollReveal variant={slideFromRight}>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-wood-800 dark:text-white mb-6">
              Where Tradition Meets Modern Design
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100} variant={slideFromRight}>
            <p className="text-wood-600 dark:text-wood-300 leading-relaxed mb-4">
              At Brahamani Furniture Shop, we believe every piece of wood has a story. Our team
              of skilled artisans combines time-honored joinery techniques with
              contemporary design to create furniture and interiors that last
              generations.
            </p>
            <p className="text-wood-600 dark:text-wood-300 leading-relaxed mb-8">
              From the first sketch to the final polish, we involve you at every
              step — ensuring your vision becomes reality with uncompromising
              quality and attention to detail.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} variant={slideFromRight}>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-2 text-wood-700 dark:text-wood-200"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.45 }}
                >
                  <HiCheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
            <OptimizedImage
              src={ABOUT_IMAGES.tools}
              alt="Woodworking tools and materials"
              wrapperClassName="w-full h-40 rounded-xl"
              className="w-full h-full object-cover rounded-xl"
              motionProps={{
                whileHover: { scale: 1.03 },
                transition: { duration: 0.35 },
              }}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
