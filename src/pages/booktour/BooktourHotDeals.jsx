import Header from '../../components/booktour/Header.jsx'
import HotDealsHeroSection from '../../components/booktour/HotDealsHeroSection.jsx'
import HotDealsHotelsSection from '../../components/booktour/HotDealsHotelsSection.jsx'
import SubscribeSection from '../../components/booktour/SubscribeSection.jsx'
import Footer from '../../components/booktour/Footer.jsx'
import { BooktourSearchProvider } from '../../components/booktour/BooktourSearchContext.jsx'
import './booktour.css'

export default function BooktourHotDeals() {
  return (
    <BooktourSearchProvider>
      <div className="booktour">
        <Header />
        <HotDealsHeroSection />
        <HotDealsHotelsSection />
        <SubscribeSection />
        <Footer />
      </div>
    </BooktourSearchProvider>
  )
}
