import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/edelweiss/logo.png'
import BurgerMenu from './BurgerMenu.jsx'
import ServicesDropdown from './ServicesDropdown.jsx'
import { IconBurger, IconDropdown, IconSearch } from './icons.jsx'

const NAV_ITEMS = [
  { id: 'industries', label: 'Industries We Support', hasDropdown: true },
  { id: 'services', label: 'Our Services', hasDropdown: true },
  { id: 'products', label: 'Our Products', hasDropdown: false },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [servicesImage, setServicesImage] = useState(null)

  const openServices = () => setIsServicesOpen(true)
  const closeServices = () => {
    setIsServicesOpen(false)
    setServicesImage(null)
  }

  return (
    <>
      <header className="edw-header">
        <div className="edw-header-shell" onMouseLeave={closeServices}>
          <div className={`edw-header-inner${isServicesOpen ? ' is-services-open' : ''}`}>
            <Link to="/edelweiss" className="edw-logo" aria-label="Edelweiss home">
              <img src={logo} alt="Edelweiss — Elevating clean to an art form" />
            </Link>

            <div className="edw-header-right">
              <nav className="edw-nav" aria-label="Main">
                {NAV_ITEMS.map((item) => {
                  if (item.id === 'services') {
                    return (
                      <div
                        key={item.id}
                        className="edw-nav-item"
                        onMouseEnter={openServices}
                      >
                        <button
                          type="button"
                          className={`edw-nav-link${isServicesOpen ? ' is-open' : ''}`}
                          aria-expanded={isServicesOpen}
                          aria-haspopup="true"
                        >
                          <span>{item.label}</span>
                          <span className="edw-nav-chevron" aria-hidden="true">
                            <IconDropdown />
                          </span>
                        </button>
                      </div>
                    )
                  }

                  return (
                    <button key={item.id} type="button" className="edw-nav-link">
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <span className="edw-nav-chevron" aria-hidden="true">
                          <IconDropdown />
                        </span>
                      ) : null}
                    </button>
                  )
                })}
              </nav>

              <span className="edw-header-divider edw-header-divider--nav" aria-hidden="true" />

              <button type="button" className="edw-icon-btn" aria-label="Search">
                <IconSearch />
              </button>

              <span className="edw-header-divider" aria-hidden="true" />

              <button type="button" className="edw-lang-btn" aria-haspopup="listbox">
                <span>En</span>
                <IconDropdown />
              </button>

              <span className="edw-header-divider" aria-hidden="true" />

              <button
                type="button"
                className="edw-icon-btn"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(true)}
              >
                <IconBurger />
              </button>
            </div>
          </div>

          <ServicesDropdown
            isOpen={isServicesOpen}
            activeImage={servicesImage}
            onLinkHover={setServicesImage}
            onLinkLeave={() => setServicesImage(null)}
          />
        </div>
      </header>

      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
