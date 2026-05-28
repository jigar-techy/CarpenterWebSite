import { useInView } from "../hooks/useInView"

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
