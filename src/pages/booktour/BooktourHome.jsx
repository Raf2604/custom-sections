import Header from '../../components/booktour/Header.jsx'
import HeroSection from '../../components/booktour/HeroSection.jsx'
import HotelsSection from '../../components/booktour/HotelsSection.jsx'
import ExploreSection from '../../components/booktour/ExploreSection.jsx'
import InspirationSection from '../../components/booktour/InspirationSection.jsx'
import SubscribeSection from '../../components/booktour/SubscribeSection.jsx'
import Footer from '../../components/booktour/Footer.jsx'
import { BooktourSearchProvider } from '../../components/booktour/BooktourSearchContext.jsx'
import './booktour.css'

export default function BooktourHome() {
  return (
    <BooktourSearchProvider>
      <div className="booktour">
        <Header />
        <HeroSection />
        <HotelsSection />
        <ExploreSection />
        <InspirationSection />
        <SubscribeSection />
        <Footer />
      </div>
    </BooktourSearchProvider>
  )
}
