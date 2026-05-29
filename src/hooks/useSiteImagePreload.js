import { useEffect } from "react"
import { ALL_IMAGES, HERO_IMAGES } from "../data/siteData"
import { preloadImagesIdle, prefetchImages } from "../utils/images"

export function useSiteImagePreload() {
  useEffect(() => {
    prefetchImages(HERO_IMAGES)
    const rest = ALL_IMAGES.filter((src) => !HERO_IMAGES.includes(src))
    preloadImagesIdle(rest)
  }, [])
}
