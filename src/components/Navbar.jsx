import { useEffect, useState } from "react"
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi"
import { BRAND, NAV_LINKS } from "../data/siteData"
import { scrollToSection, useScrollSpy } from "../hooks/useScrollSpy"

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navTo = (id) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wood-800/95 dark:bg-wood-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navTo("home")}
          className="flex items-center gap-3 group"
          aria-label={`${BRAND.name} home`}
        >
          <img
            src="/logo.png"
            alt=""
            className="h-10 w-10 rounded-lg object-cover ring-2 ring-wood-300/50 group-hover:ring-accent transition-all"
          />
          <div className="text-left hidden sm:block">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              {BRAND.name}
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-wood-300">
              Carpentry
            </span>
          </div>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => navTo(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? "bg-accent/20 text-accent"
                    : "text-wood-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2.5 rounded-lg text-wood-100 hover:bg-white/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={() => navTo("contact")}
            className="hidden sm:inline-flex px-5 py-2.5 bg-accent text-wood-900 font-semibold text-sm rounded-lg hover:bg-wood-200 transition-colors"
          >
            Get a Quote
          </button>
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-wood-800 border-t border-wood-600/50 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => navTo(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium ${
                    activeId === link.id
                      ? "bg-accent/20 text-accent"
                      : "text-wood-100"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
