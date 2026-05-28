import { FaWhatsapp } from "react-icons/fa"
import { BRAND } from "../data/siteData"

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi ${BRAND.name}! I'd like to inquire about a carpentry project.`
  )
  const url = `https://wa.me/${BRAND.whatsapp}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pl-4 pr-5 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 transition-transform animate-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold">Chat Now</span>
    </a>
  )
}
