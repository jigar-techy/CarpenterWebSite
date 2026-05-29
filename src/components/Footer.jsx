import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { BRAND, NAV_LINKS } from "../data/siteData"
import { scrollToSection } from "../hooks/useScrollSpy"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-wood-900 text-wood-300 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" alt={`${BRAND.shortName} logo`} className="h-10 w-10 rounded-xl" />
            <span className="font-display text-lg font-bold text-white leading-tight">
              {BRAND.shortName}
            </span>
          </div>
          <p className="text-sm leading-relaxed">{BRAND.tagline}</p>
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="p-2.5 rounded-lg bg-wood-800 text-wood-300 hover:bg-accent hover:text-wood-900 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-wood-800 text-wood-300 hover:bg-accent hover:text-wood-900 transition-colors"
              aria-label="Instagram — Brahamani Furniture Shop"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:+91${BRAND.phoneRaw}`} className="hover:text-accent transition-colors">
                {BRAND.phoneRaw}
              </a>
            </li>
            <li>{BRAND.email}</li>
            <li>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {BRAND.address}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-3">Tips & project inspiration monthly.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks for subscribing!")
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-lg bg-wood-800 border border-wood-700 text-white text-sm focus:ring-2 focus:ring-accent outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-accent text-wood-900 font-semibold text-sm rounded-lg hover:bg-wood-200 transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-wood-800 text-center text-sm text-wood-500">
        © {year} {BRAND.name}. All rights reserved. Crafted with care.
      </div>
    </footer>
  )
}
