import { STATS } from "../data/siteData"
import { useCountUp } from "../hooks/useCountUp"
import { useInView } from "../hooks/useInView"

function StatItem({ value, suffix, label, animate }) {
  const count = useCountUp(value, 2200, animate)

  return (
    <div className="text-center p-6">
      <p className="font-display text-4xl sm:text-5xl font-bold text-accent">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-wood-300 dark:text-wood-400">
        {label}
      </p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className="bg-wood-800 dark:bg-wood-900 border-y border-wood-600/30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-wood-600/30">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} animate={inView} />
        ))}
      </div>
    </div>
  )
}
