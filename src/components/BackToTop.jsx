import { useEffect, useState } from "react"
import { HiArrowUp } from "react-icons/hi"
import { scrollToSection } from "../hooks/useScrollSpy"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => scrollToSection("home")}
      className="fixed bottom-24 right-6 z-40 p-3 bg-wood-800 text-white rounded-full shadow-lg hover:bg-accent hover:text-wood-900 transition-all"
      aria-label="Back to top"
    >
      <HiArrowUp className="w-5 h-5" />
    </button>
  )
}
