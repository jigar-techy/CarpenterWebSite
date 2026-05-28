import { motion } from "framer-motion"

const ORBS = [
  { size: 120, x: "12%", y: "20%", delay: 0 },
  { size: 80, x: "78%", y: "35%", delay: 0.4 },
  { size: 60, x: "65%", y: "72%", delay: 0.8 },
  { size: 100, x: "25%", y: "65%", delay: 1.2 },
]

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 z-[15] overflow-hidden pointer-events-none">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/10 blur-2xl"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{
            y: [0, -24, 0],
            x: [0, 12, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
