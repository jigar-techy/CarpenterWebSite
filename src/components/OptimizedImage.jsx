import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { resolveImage } from "../utils/images"

export default function OptimizedImage({
  src,
  alt,
  className = "",
  placeholder,
  priority = false,
  wrapperClassName = "",
  motionProps,
}) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(priority)
  const wrapperRef = useRef(null)
  const resolvedSrc = resolveImage(src)

  useEffect(() => {
    if (priority) return
    const el = wrapperRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "400px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [priority])

  const imgClassName = `${className} transition-opacity duration-200 ${
    loaded ? "opacity-100" : "opacity-0"
  }`

  const imgProps = {
    src: inView ? resolvedSrc : undefined,
    alt,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
    decoding: priority ? "sync" : "async",
    onLoad: () => setLoaded(true),
    className: imgClassName,
    ...motionProps,
  }

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${wrapperClassName}`}>
      {placeholder && !loaded && (
        <img
          src={placeholder}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover scale-110 blur-sm ${className}`}
        />
      )}
      {!loaded && !placeholder && (
        <div
          className="absolute inset-0 bg-wood-200 dark:bg-wood-700"
          aria-hidden
        />
      )}
      {inView &&
        (motionProps ? (
          <motion.img {...imgProps} />
        ) : (
          <img {...imgProps} />
        ))}
    </div>
  )
}
