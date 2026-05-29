export function isLocalImage(src) {
  return src.startsWith("/") || src.startsWith("./")
}

export function resolveImage(src) {
  return src
}

export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = reject
    img.src = src
  })
}

export function prefetchImages(sources) {
  sources.forEach((src) => {
    if (document.querySelector(`link[rel="prefetch"][href="${src}"]`)) return
    const link = document.createElement("link")
    link.rel = "prefetch"
    link.as = "image"
    link.href = src
    document.head.appendChild(link)
  })
}

export function preloadImagesIdle(sources) {
  const run = () => sources.forEach((src) => preloadImage(src).catch(() => {}))
  if ("requestIdleCallback" in window) {
    requestIdleCallback(run, { timeout: 3000 })
  } else {
    setTimeout(run, 800)
  }
}
