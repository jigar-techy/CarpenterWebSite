import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import About from "./components/About"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import QuoteEstimator from "./components/QuoteEstimator"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import WhatsAppButton from "./components/WhatsAppButton"
import { BRAND } from "./data/siteData"
import { useSiteImagePreload } from "./hooks/useSiteImagePreload"

function App() {
  useSiteImagePreload()
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false
    return (
      localStorage.getItem("brahamani_theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  })

  useEffect(() => {
    document.body.classList.toggle("dark", dark)
    localStorage.setItem("brahamani_theme", dark ? "dark" : "light")
  }, [dark])

  useEffect(() => {
    document.title = `${BRAND.name} | ${BRAND.tagline}`
  }, [])

  return (
    <>
      <Navbar dark={dark} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Gallery />
        <QuoteEstimator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}

export default App
