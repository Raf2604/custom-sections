import { Link } from 'react-router-dom'
import footerLogo from '../../assets/booktour/footer-logo.png'
import socialFacebook from '../../assets/booktour/social-facebook.png'
import socialInstagram from '../../assets/booktour/social-instagram.png'
import socialPinterest from '../../assets/booktour/social-pinterest.png'
import {
  BOOKTOUR_FOOTER_CONTACTS,
  BOOKTOUR_FOOTER_LINKS,
  BOOKTOUR_FOOTER_SOCIALS,
} from '../../data/booktourFooter.js'

const SOCIAL_ICONS = {
  facebook: socialFacebook,
  instagram: socialInstagram,
  pinterest: socialPinterest,
}

function isAppRoute(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')
}

function FooterNavLink({ href, className, children }) {
  if (isAppRoute(href)) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function FooterLinkColumn({ title, links }) {
  return (
    <div className="bt-footer-col">
      <h3 className="bt-footer-col__title">{title}</h3>
      <ul className="bt-footer-col__list">
        {links.map((link) => (
          <li key={link.label}>
            <FooterNavLink href={link.href} className="bt-footer-link bt-link-underline">
              {link.label}
            </FooterNavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bt-footer">
      <div className="bt-footer-main">
        <div className="bt-footer-nav">
          <div className="bt-footer-col">
            <h3 className="bt-footer-col__title">{BOOKTOUR_FOOTER_CONTACTS.title}</h3>
            <ul className="bt-footer-col__list">
              {BOOKTOUR_FOOTER_CONTACTS.items.map((item) => (
                <li key={item.label}>
                  {item.type === 'text' ? (
                    <span className="bt-footer-contact">{item.label}</span>
                  ) : (
                    <a href={item.href} className="bt-footer-link bt-link-underline">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {BOOKTOUR_FOOTER_LINKS.map((column) => (
            <FooterLinkColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>

        <div className="bt-footer-subscribe">
          <h3 className="bt-footer-col__title">Get News &amp; Updates</h3>
          <form
            className="bt-footer-subscribe__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="bt-footer-subscribe__field">
              <span className="sr-only">Email</span>
              <input type="email" name="email" placeholder="Email" required />
            </label>
            <button type="submit" className="bt-footer-subscribe__btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bt-footer-bar">
        <Link to="/booktour" className="bt-footer-bar__logo" aria-label="Booktour home">
          <img src={footerLogo} alt="Booktour.am" />
        </Link>

        <p className="bt-footer-bar__copy">
          © Booktour.am 2024 Designed By Words Agency
        </p>

        <div className="bt-footer-bar__socials">
          {BOOKTOUR_FOOTER_SOCIALS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="bt-footer-social"
              aria-label={social.label}
            >
              <img src={SOCIAL_ICONS[social.id]} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
