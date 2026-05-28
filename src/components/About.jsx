import { HiCheckCircle } from "react-icons/hi"
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
      className="py-24 px-4 sm:px-6 bg-white dark:bg-wood-800 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
              alt="Master carpenter at work in workshop"
              className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-accent text-wood-900 p-6 rounded-xl shadow-xl max-w-[200px]">
              <p className="font-display text-3xl font-bold">18+</p>
              <p className="text-sm font-medium mt-1">Years of Master Craftsmanship</p>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-wood-800 dark:text-white mb-6">
              Where Tradition Meets Modern Design
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-wood-600 dark:text-wood-300 leading-relaxed mb-4">
              At MasterWood, we believe every piece of wood has a story. Our team
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
          <ScrollReveal delay={200}>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-wood-700 dark:text-wood-200"
                >
                  <HiCheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <img
              src="https://images.unsplash.com/photo-1572981779304-38b01c2e5e0a?w=600&q=80"
              alt="Woodworking tools and materials"
              className="rounded-xl w-full h-40 object-cover"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
