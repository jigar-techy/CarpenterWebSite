import { BRAND } from "../data/siteData"

export default function Logo({ size = "h-11 w-11", title, className = "" }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full ${size} ${className}`}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      <img
        src={BRAND.logo}
        alt={title || `${BRAND.shortName} logo`}
        className="h-full w-full object-cover object-center"
        draggable={false}
      />
    </div>
  )
}
