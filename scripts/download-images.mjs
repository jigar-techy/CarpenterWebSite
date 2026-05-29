/**
 * Downloads optimized WebP images into public/images/.
 * Run once: npm run images:download
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dest = path.join(__dirname, "../public/images")

/** [filename, unsplash photo id, width, quality, blur?] */
const downloads = [
  ["hero-1", "photo-1504148455328-c376907d081c", 1280, 75],
  ["hero-1-tiny", "photo-1504148455328-c376907d081c", 64, 40],
  ["hero-2", "photo-1519710164239-da123dc03ef4", 1280, 75],
  ["hero-2-tiny", "photo-1519710164239-da123dc03ef4", 64, 40],
  ["hero-3", "photo-1558618666-fcd25c85cd64", 1280, 75],
  ["hero-3-tiny", "photo-1558618666-fcd25c85cd64", 64, 40],
  ["about-main", "photo-1504328345606-18bbc8c9d7d1", 640, 70],
  ["about-tools", "photo-1533090161767-e6ffed986c88", 480, 70],
  ["contact", "photo-1504148455328-c376907d081c", 480, 70],
  ["service-furniture", "photo-1555041469-a586c61ea9bc", 640, 70],
  ["service-kitchen", "photo-1556911220-bff31c812dba", 640, 70],
  ["service-interior", "photo-1616486338812-3dadae4b4ace", 640, 70],
  ["service-doors", "photo-1600585154340-be6161a56a0c", 640, 70],
  ["service-repair", "photo-1533090161767-e6ffed986c88", 640, 70],
  ["service-commercial", "photo-1497366216548-37526070297c", 640, 70],
  ["gallery-1", "photo-1617806118233-18e1de247200", 800, 70],
  ["gallery-2", "photo-1556911220-bff31c812dba", 800, 70],
  ["gallery-3", "photo-1600210492486-724fe5c67fb0", 800, 70],
  ["gallery-4", "photo-1592078615290-033ee584e267", 800, 70],
  ["gallery-5", "photo-1594620302200-9a762244a156", 800, 70],
  ["gallery-6", "photo-1616486338812-3dadae4b4ace", 800, 70],
  ["gallery-7", "photo-1600607687939-ce8a6c25118c", 800, 70],
  ["gallery-8", "photo-1441986300917-64674bd600d8", 800, 70],
  ["gallery-9", "photo-1631889993959-41b4e9c6e3c5", 800, 70],
]

function buildUrl(photoId, width, quality, blur) {
  const params = new URLSearchParams({
    url: `https://images.unsplash.com/${photoId}`,
    w: String(width),
    q: String(quality),
    output: "webp",
    fit: "cover",
  })
  if (blur) params.set("blur", String(blur))
  return `https://wsrv.nl/?${params}`
}

fs.mkdirSync(dest, { recursive: true })

let ok = 0
let fail = 0

for (const [name, photoId, width, quality, blur] of downloads) {
  const url = buildUrl(photoId, width, quality, blur)
  const outPath = path.join(dest, `${name}.webp`)
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "BrahamaniFurnitureShop/1.0" },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 100) throw new Error("File too small")
    fs.writeFileSync(outPath, buf)
    console.log(`✓ ${name} (${Math.round(buf.length / 1024)} KB)`)
    ok++
  } catch (err) {
    console.error(`✗ ${name}: ${err.message}`)
    fail++
  }
}

console.log(`\nDone: ${ok} saved, ${fail} failed → ${dest}`)
process.exit(fail > 0 ? 1 : 0)
