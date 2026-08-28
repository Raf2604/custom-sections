import hero from '../../assets/kaleidoskop/hero.png'
import MomentsSection from '../../components/kaleidoskop/MomentsSection.jsx'
import TeamSection from '../../components/kaleidoskop/TeamSection.jsx'
import BlogSection from '../../components/kaleidoskop/BlogSection.jsx'
import banner from '../../assets/kaleidoskop/blog-banner.png'

export default function KaleidoskopHome() {
  return (
    <main className="kal-home">
      <section className="kal-hero" aria-label="Kaleidoskop hero">
        <img src={hero} alt="Kaleidoskop dancers on stage" />
      </section>

      <MomentsSection />
      <TeamSection />
      <BlogSection />
      {/* <section className="kal-banner" aria-label="Kaleidoskop banner">
        <img src={banner} alt="" />
      </section> */}
    </main>
  )
}
