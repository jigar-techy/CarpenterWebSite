import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeUp } from "../utils/motion"

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = fadeUp,
  once = true,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: "-60px", amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variant}
      custom={delay / 1000}
    >
      {children}
    </motion.div>
  )
}
