import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { STATS } from "../data/siteData"
import { useCountUp } from "../hooks/useCountUp"
import { ease, staggerContainer, staggerItem } from "../utils/motion"

function StatItem({ value, suffix, label, animate }) {
  const count = useCountUp(value, 2200, animate)

  return (
    <motion.div
      variants={staggerItem}
      className="text-center p-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <motion.p
        className="font-display text-4xl sm:text-5xl font-bold text-accent"
        key={count}
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {count}
        {suffix}
      </motion.p>
      <p className="mt-2 text-sm uppercase tracking-wider text-wood-600 dark:text-wood-400">
        {label}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px", amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="bg-wood-100 dark:bg-wood-900 border-y border-wood-200 dark:border-wood-600/30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-wood-200 dark:divide-wood-600/30">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} animate={inView} />
        ))}
      </div>
    </motion.div>
  )
}
