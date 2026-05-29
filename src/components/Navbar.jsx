import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { BRAND, NAV_LINKS } from "../data/siteData"
import { scrollToSection, useScrollSpy } from "../hooks/useScrollSpy"
import { navItem } from "../utils/motion"

export default function Navbar({ dark }) {
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

  const onHero = !scrolled && activeId === "home"
  const brandText = onHero && !dark ? "text-white" : "text-wood-800 dark:text-white"
  const brandSub = onHero && !dark ? "text-wood-200" : "text-wood-500 dark:text-wood-300"
  const linkIdle =
    onHero && !dark
      ? "text-wood-100 hover:text-white hover:bg-white/10"
      : "text-wood-700 dark:text-wood-100 hover:text-wood-900 dark:hover:text-white hover:bg-wood-100 dark:hover:bg-white/10"
  const iconBtn =
    onHero && !dark
      ? "text-wood-100 hover:bg-white/10"
      : "text-wood-700 dark:text-wood-100 hover:bg-wood-100 dark:hover:bg-white/10"
  const menuIcon = onHero && !dark ? "text-white" : "text-wood-800 dark:text-white"

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? "bg-wood-900/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/95 backdrop-blur-md shadow-md border-b border-wood-200/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <motion.button
          type="button"
          onClick={() => navTo("home")}
          className="flex items-center gap-3 group"
          aria-label={`${BRAND.name} home`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src="/logo.svg"
            alt={`${BRAND.shortName} logo`}
            className="h-10 w-10 rounded-xl object-cover ring-2 ring-wood-300/50 group-hover:ring-accent transition-all"
          />
          <div className="text-left hidden sm:block">
            <span className={`font-display text-lg font-bold tracking-tight leading-tight ${brandText}`}>
              {BRAND.shortName}
            </span>
            <span className={`block text-[10px] uppercase tracking-widest ${brandSub}`}>
              {BRAND.subtitle}
            </span>
          </div>
        </motion.button>

        <motion.ul
          className="hidden lg:flex items-center gap-1"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {NAV_LINKS.map((link, i) => (
            <motion.li key={link.id} variants={navItem} custom={i}>
              <button
                type="button"
                onClick={() => navTo(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? "bg-accent/25 text-wood-800 dark:text-accent font-semibold"
                    : linkIdle
                }`}
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex items-center gap-2">
          <motion.a
            href="#"
            className={`p-2.5 rounded-lg transition-colors ${iconBtn}`}
            aria-label="Facebook"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebookF className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-lg transition-colors ${iconBtn}`}
            aria-label="Instagram — Brahamani Furniture Shop"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram className="w-4 h-4" />
          </motion.a>
          <motion.button
            type="button"
            onClick={() => navTo("contact")}
            className="hidden sm:inline-flex px-5 py-2.5 bg-accent text-wood-900 font-semibold text-sm rounded-lg hover:bg-wood-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.button>
          <button
            type="button"
            className={`lg:hidden p-2 ${menuIcon}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className={`lg:hidden border-t px-4 py-4 ${
            dark
              ? "bg-wood-900 border-wood-700"
              : "bg-white border-wood-200 shadow-lg"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => navTo(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium ${
                    activeId === link.id
                      ? "bg-accent/25 text-wood-800 dark:text-accent"
                      : dark
                        ? "text-wood-100"
                        : "text-wood-700 hover:bg-wood-50"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
