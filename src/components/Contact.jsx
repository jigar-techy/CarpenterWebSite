import { useEffect, useState } from "react"
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiCheck,
} from "react-icons/hi"
import { BRAND, CONTACT_IMAGE } from "../data/siteData"
import OptimizedImage from "./OptimizedImage"
import ScrollReveal from "./ScrollReveal"

const STORAGE_KEY = "brahamani_contact_draft"

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "furniture",
  message: "",
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setForm(JSON.parse(saved))
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (!submitted) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
      } catch {
        /* ignore */
      }
    }
  }, [form, submitted])

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = "Name is required"
    if (!form.email.trim()) next.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email"
    if (!form.message.trim()) next.message = "Please describe your project"
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setSubmitted(true)
    localStorage.removeItem(STORAGE_KEY)
    setForm(initialForm)
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-wood-50 dark:bg-wood-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-wood-800 dark:text-white">
            Let&apos;s Build Something Together
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          <ScrollReveal className="lg:col-span-2 space-y-6">
            <OptimizedImage
              src={CONTACT_IMAGE}
              alt="Wood workshop"
              wrapperClassName="hidden lg:block w-full h-48 rounded-2xl"
              className="w-full h-full object-cover rounded-2xl"
            />
            {[
              { icon: HiPhone, label: "Phone", value: BRAND.phoneRaw, href: `tel:+91${BRAND.phoneRaw}` },
              { icon: HiMail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
              { icon: HiLocationMarker, label: "Address", value: BRAND.address, href: BRAND.mapsUrl },
              { icon: HiClock, label: "Hours", value: BRAND.hours },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 p-4 bg-white dark:bg-wood-800 rounded-xl border border-wood-200/60 dark:border-wood-700"
              >
                <div className="p-3 bg-accent/20 rounded-lg text-accent h-fit">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-wood-500 dark:text-wood-400">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-medium text-wood-800 dark:text-white hover:text-accent transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-wood-800 dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden h-48 border border-wood-200 dark:border-wood-700">
              <iframe
                title="Workshop location"
                src={BRAND.mapsEmbed}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white dark:bg-wood-800 rounded-2xl p-10 text-center border border-green-200 dark:border-green-800">
                <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 mb-4">
                  <HiCheck className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-wood-800 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-wood-600 dark:text-wood-400 mb-6">
                  Thank you for reaching out. We&apos;ll respond within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-accent font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-wood-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-wood-200/60 dark:border-wood-700 space-y-5"
              >
                <p className="text-xs text-wood-500 dark:text-wood-400">
                  Draft auto-saved as you type
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-wood-700 dark:text-wood-300">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:ring-2 focus:ring-accent outline-none ${
                        errors.name ? "border-red-500" : "border-wood-200 dark:border-wood-600"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-wood-700 dark:text-wood-300">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:ring-2 focus:ring-accent outline-none ${
                        errors.email ? "border-red-500" : "border-wood-200 dark:border-wood-600"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-wood-700 dark:text-wood-300">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-wood-200 dark:border-wood-600 bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:ring-2 focus:ring-accent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1.5 text-wood-700 dark:text-wood-300">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-wood-200 dark:border-wood-600 bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:ring-2 focus:ring-accent outline-none"
                    >
                      <option value="furniture">Custom Furniture</option>
                      <option value="kitchen">Kitchen Cabinets</option>
                      <option value="interior">Interior Woodwork</option>
                      <option value="repair">Restoration</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-wood-700 dark:text-wood-300">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about dimensions, materials, timeline..."
                    className={`w-full px-4 py-3 rounded-lg border bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:ring-2 focus:ring-accent outline-none resize-none ${
                      errors.message ? "border-red-500" : "border-wood-200 dark:border-wood-600"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-wood-800 dark:bg-accent text-white dark:text-wood-900 font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
