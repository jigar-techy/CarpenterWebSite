import { useMemo, useState } from "react"
import { HiX, HiChevronLeft, HiChevronRight, HiSearch } from "react-icons/hi"
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "../data/siteData"
import ScrollReveal from "./ScrollReveal"

export default function Gallery() {
  const [category, setCategory] = useState("All")
  const [lightbox, setLightbox] = useState(null)
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchCat = category === "All" || item.category === category
      const matchSearch =
        !search.trim() ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [category, search])

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)

  const goPrev = () =>
    setLightbox((i) => (i === 0 ? filtered.length - 1 : i - 1))
  const goNext = () =>
    setLightbox((i) => (i === filtered.length - 1 ? 0 : i + 1))

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 bg-white dark:bg-wood-800 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-wood-800 dark:text-white">
            Our Gallery
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center mb-8">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === cat
                      ? "bg-wood-800 dark:bg-accent text-white dark:text-wood-900"
                      : "bg-wood-100 dark:bg-wood-700 text-wood-700 dark:text-wood-200 hover:bg-wood-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative max-w-xs w-full mx-auto sm:mx-0">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-wood-400" />
              <input
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-wood-200 dark:border-wood-600 bg-wood-50 dark:bg-wood-900 text-wood-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </ScrollReveal>

        {filtered.length === 0 ? (
          <p className="text-center text-wood-500 py-12">No projects match your search.</p>
        ) : (
          <div className="gallery-masonry grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, index) => (
              <ScrollReveal key={item.id} delay={(index % 3) * 60}>
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-left">
                    <span className="text-xs text-accent font-semibold uppercase">
                      {item.category}
                    </span>
                    <span className="text-white font-display text-lg font-bold">
                      {item.title}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] bg-wood-900/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-accent z-10"
            aria-label="Close"
          >
            <HiX className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full"
            aria-label="Previous"
          >
            <HiChevronLeft className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={filtered[lightbox].image}
              alt={filtered[lightbox].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-white mt-4 font-display text-xl">
              {filtered[lightbox].title}
            </p>
          </div>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full"
            aria-label="Next"
          >
            <HiChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  )
}
