import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { BRAND } from "../data/siteData"

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi ${BRAND.name}! I'd like to inquire about a carpentry project.`
  )
  const url = `https://wa.me/${BRAND.whatsapp}?text=${message}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pl-4 pr-5 py-3 bg-[#25D366] text-white rounded-full shadow-lg"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <FaWhatsapp className="w-6 h-6 relative z-10" />
      <span className="hidden sm:inline text-sm font-semibold relative z-10">
        Chat Now
      </span>
    </motion.a>
  )
}
