import { Link } from 'react-router-dom'
import AboutTeamSection from '../../components/kaleidoskop/AboutTeamSection.jsx'
import AboutTimelineSection from '../../components/kaleidoskop/AboutTimelineSection.jsx'
import heroBg from '../../assets/kaleidoskop/courses-hero-bg.png'

export default function KaleidoskopAbout() {
  return (
    <main className="kal-about-page">
      <section className="kal-courses-hero" aria-label="About Hero">
        <div className="kal-courses-hero-media" aria-hidden="true">
          <img src={heroBg} alt="" className="kal-courses-hero-bg" />
          <div className="kal-courses-hero-overlay" />
        </div>

        <div className="kal-courses-hero-content">
          <h1>Finde deinen Kurs. Und vielleicht auch dich selbst.</h1>
          <p>
            Bei Kaleidoskop findest du kreative, tänzerische und theatralische Kurse für alle
            Altersgruppen – vom ersten Tutu bis zur großen Performance.
          </p>
          <nav className="kal-courses-breadcrumb" aria-label="Brotkrumen">
            <Link to="/kaleidoskop" className="kal-crumb-muted">
              Startseite
            </Link>
            <span className="kal-crumb-dot" aria-hidden="true">
              •
            </span>
            <span className="kal-crumb-current">Kurse</span>
          </nav>
        </div>
      </section>

      <AboutTimelineSection />
      <AboutTeamSection />
    </main>
  )
}
