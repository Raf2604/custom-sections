import Header from '../../components/booktour/Header.jsx'
import BlogHeroSection from '../../components/booktour/BlogHeroSection.jsx'
import BlogExploreSection from '../../components/booktour/BlogExploreSection.jsx'
import BlogInspirationSection from '../../components/booktour/BlogInspirationSection.jsx'
import BlogNewsSection from '../../components/booktour/BlogNewsSection.jsx'
import Footer from '../../components/booktour/Footer.jsx'
import { BooktourSearchProvider } from '../../components/booktour/BooktourSearchContext.jsx'
import './booktour.css'

export default function BooktourBlog() {
  return (
    <BooktourSearchProvider>
      <div className="booktour">
        <Header />
        <BlogHeroSection />
        <BlogExploreSection />
        <BlogInspirationSection />
        <BlogNewsSection />
        <Footer />
      </div>
    </BooktourSearchProvider>
  )
}
