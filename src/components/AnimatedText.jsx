import { motion } from "framer-motion"
import { ease } from "../utils/motion"

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
  splitBy = "word",
}) {
  const parts =
    splitBy === "char"
      ? text.split("")
      : text.split(" ").map((w, i, arr) => (i < arr.length - 1 ? `${w} ` : w))

  return (
    <Tag className={className} aria-label={text}>
      {parts.map((part, i) => (
        <motion.span
          key={`${part}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 28, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * (splitBy === "char" ? 0.03 : 0.08),
            ease,
          }}
        >
          {part}
        </motion.span>
      ))}
    </Tag>
  )
}
