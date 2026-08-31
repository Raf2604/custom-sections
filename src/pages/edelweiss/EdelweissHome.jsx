import '../../utils/preloadEdelweissTrustImages.js'
import Header from '../../components/edelweiss/Header.jsx'
import HeroCarousel from '../../components/edelweiss/HeroCarousel.jsx'
import NatureSection from '../../components/edelweiss/NatureSection.jsx'
import ServicesSection from '../../components/edelweiss/ServicesSection.jsx'
import TrustSection from '../../components/edelweiss/TrustSection.jsx'
import BlogSection from '../../components/edelweiss/BlogSection.jsx'
import ReviewsSection from '../../components/edelweiss/ReviewsSection.jsx'
import Footer from '../../components/edelweiss/Footer.jsx'
import './edelweiss.css'

export default function EdelweissHome() {
  return (
    <div className="edelweiss">
      <Header />
      <HeroCarousel />
      <NatureSection />
      <ServicesSection />
      <TrustSection />
      <BlogSection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}
