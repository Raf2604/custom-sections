import { Link } from 'react-router-dom'
import footerLogo from '../../assets/edelweiss/footer-logo.png'
import subscribeImage from '../../assets/edelweiss/footer-subscribe.png'
import {
  FOOTER_LEGAL,
  FOOTER_MENUS,
  FOOTER_SOCIALS,
} from '../../data/edelweissFooter.js'

export default function Footer() {
  return (
    <footer className="edw-footer">
      <div className="edw-footer-main">
        <div className="edw-footer-top">
          <Link to="/edelweiss" className="edw-footer-logo" aria-label="Edelweiss home">
            <img src={footerLogo} alt="Edelweiss — Elevating clean to an art form" />
          </Link>

          <div className="edw-footer-socials">
            {FOOTER_SOCIALS.map((item) => (
              <a key={item.id} href={item.href} className="edw-footer-social">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="edw-footer-divider" aria-hidden="true" />

        <div className="edw-footer-menus">
          <div className="edw-footer-subscribe">
            <img
              src={subscribeImage}
              alt=""
              className="edw-footer-subscribe-bg"
              aria-hidden="true"
            />
            <div className="edw-footer-subscribe-overlay" aria-hidden="true" />
            <div className="edw-footer-subscribe-content">
              <h2 className="edw-footer-subscribe-title">
                <span>Stay Immaculate</span>
                <span>Stay Informed</span>
              </h2>
              <div className="edw-footer-subscribe-bottom">
                <p className="edw-footer-subscribe-desc">
                  Be the first to receive exclusive cleaning tips, special offers, and expert
                  advice tailored for your lifestyle.
                </p>
                <button type="button" className="edw-footer-subscribe-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {FOOTER_MENUS.map((menu) => (
            <nav key={menu.id} className="edw-footer-col" aria-label={menu.title}>
              <h3 className="edw-footer-col-title">{menu.title}</h3>
              <ul className="edw-footer-col-list">
                {menu.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="edw-footer-bar">
        <p className="edw-footer-copy">
          Copyright&copy; 2024, Designed By Words Agency
        </p>
        <div className="edw-footer-legal">
          {FOOTER_LEGAL.map((item, index) => (
            <span key={item.label} className="edw-footer-legal-item">
              {index > 0 ? <span className="edw-footer-legal-sep" aria-hidden="true">|</span> : null}
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
