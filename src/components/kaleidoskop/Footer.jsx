import { Link } from 'react-router-dom'
import logo from '../../assets/kaleidoskop/logo.png'
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconTikTok,
  IconYouTube,
} from './icons.jsx'

const aboutLinks = [
  { label: 'Neues', href: '#neues' },
  { label: 'Über Uns', to: '/kaleidoskop/about' },
  { label: 'Media', href: '#media' },
  { label: 'Kontakt', href: '#kontakt' },
]

const programLinks = [
  { label: 'Kurse 01', to: '/kaleidoskop/courses' },
  { label: 'Projekte 02', href: '#projekte' },
  { label: 'Projekte 03', href: '#projekte' },
  { label: 'Kurse 04', to: '/kaleidoskop/courses' },
  { label: 'Projekte 05', href: '#projekte' },
]

export default function Footer() {
  return (
    <footer className="kal-footer" id="kontakt">
      <div className="kal-footer-main">
        <div className="kal-footer-brand">
          <Link to="/kaleidoskop" className="kal-footer-logo" aria-label="Kaleidoskop home">
            <img src={logo} alt="Kaleidoskop" />
          </Link>
          <p className="kal-footer-tagline">
            Kaleidoskop Ist Eine Internationale Bildungsplattform Für Junge Kreative
            Köpfe.
          </p>
          <ul className="kal-footer-contact">
            <li>
              <IconPin />
              <span>Tölzer Str. 1, 82031 Grünwald</span>
            </li>
            <li>
              <IconPhone />
              <a href="tel:+4989990099009">+49 89 990 099 009</a>
            </li>
            <li>
              <IconMail />
              <a href="mailto:info@kaleidoskop.de">Info@Kaleidoskop.De</a>
            </li>
          </ul>
          <div className="kal-footer-social" id="follow">
            <a href="#facebook" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="#tiktok" aria-label="TikTok">
              <IconTikTok />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <IconYouTube />
            </a>
          </div>
        </div>

        <div className="kal-footer-col">
          <h3>Mehr Über Uns</h3>
          <ul>
            {aboutLinks.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link to={link.to}>{link.label}</Link>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="kal-footer-col">
          <h3>Unsere Programme</h3>
          <ul>
            {programLinks.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link to={link.to}>{link.label}</Link>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="kal-footer-col kal-footer-newsletter">
          <h3>Newsletter Abonnieren</h3>
          <form
            className="kal-footer-form"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label className="visually-hidden" htmlFor="kal-newsletter-email">
              E-Mail-Adresse
            </label>
            <input
              id="kal-newsletter-email"
              type="email"
              name="email"
              placeholder="E-Mail-Adresse"
              autoComplete="email"
            />
            <button type="submit" className="kal-outline-btn">
              Jetzt Abonnieren
            </button>
          </form>
        </div>
      </div>

      <div className="kal-footer-bar">
        <p>Copyright © 2025, Designed By Owwwl Agency.</p>
        <p>
          <a href="#datenschutz">Datenschutzerklärung</a>
          <span aria-hidden="true"> | </span>
          <a href="#agb">Allgemeine Geschäftsbedingungen</a>
        </p>
      </div>
    </footer>
  )
}
