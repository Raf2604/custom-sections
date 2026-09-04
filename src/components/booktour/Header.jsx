import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import footerLogo from '../../assets/booktour/footer-logo.png'
import avatar from '../../assets/booktour/header/avatar.png'
import socialFacebook from '../../assets/booktour/social-facebook.png'
import socialInstagram from '../../assets/booktour/social-instagram.png'
import socialPinterest from '../../assets/booktour/social-pinterest.png'
import {
  BOOKTOUR_HEADER_USER,
  BOOKTOUR_MENU_PRIMARY,
  BOOKTOUR_MENU_SECONDARY,
} from '../../data/booktourHeader.js'
import { BOOKTOUR_FOOTER_SOCIALS } from '../../data/booktourFooter.js'
import HeaderSearchForm from './HeaderSearchForm.jsx'
import { useBooktourSearch } from './BooktourSearchContext.jsx'
import {
  IconBurger,
  IconClose,
  IconGlobe,
  IconHeaderHeart,
  IconSearch,
} from './icons.jsx'

const SOCIAL_ICONS = {
  facebook: socialFacebook,
  instagram: socialInstagram,
  pinterest: socialPinterest,
}

const MENU_EASE = [0.22, 1, 0.36, 1]
const SEARCH_EASE = [0.22, 1, 0.36, 1]

function isBooktourHome(pathname) {
  return pathname === '/booktour' || pathname === '/booktour/'
}

function HeaderMenu({ isOpen, onClose }) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div className="bt-menu" key="bt-menu">
          <motion.button
            type="button"
            className="bt-menu-backdrop"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={onClose}
          />

          <motion.aside
            className="bt-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: MENU_EASE }}
          >
            <div className="bt-menu-panel__top">
              <button
                type="button"
                className="bt-menu-close"
                aria-label="Close menu"
                onClick={onClose}
              >
                <IconClose />
              </button>

              <nav className="bt-menu-nav" aria-label="Primary">
                <ul className="bt-menu-nav__primary">
                  {BOOKTOUR_MENU_PRIMARY.map((item) => {
                    const isActive =
                      item.id === 'homepage'
                        ? pathname === '/booktour' || /\/booktour\/?$/.test(pathname)
                        : pathname.includes('/hot-deals')

                    return (
                      <li key={item.id}>
                        <Link
                          to={item.href}
                          className={`bt-menu-link${isActive ? ' is-active' : ''}`}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <div className="bt-menu-divider" aria-hidden="true" />

                <ul className="bt-menu-nav__secondary">
                  {BOOKTOUR_MENU_SECONDARY.map((item) => {
                    const isActive = pathname.includes('/blog')
                    return (
                      <li key={item.id}>
                        <Link
                          to={item.href}
                          className={`bt-menu-link-secondary${isActive ? ' is-active' : ''}`}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            <div className="bt-menu-panel__bottom">
              <div className="bt-menu-socials">
                {BOOKTOUR_FOOTER_SOCIALS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="bt-menu-social"
                    aria-label={social.label}
                  >
                    <img src={SOCIAL_ICONS[social.id]} alt="" />
                  </a>
                ))}
              </div>
              <p className="bt-menu-copy">Copyright © 2024 All right reserved.</p>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const { parkPanels, setUiHost } = useBooktourSearch()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const home = isBooktourHome(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setShowSearch(false)
    parkPanels()
    setUiHost(home ? 'hero' : 'header')

    if (!home) {
      const onScroll = () => setShowSearch(window.scrollY > 24)
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    let observer
    let tries = 0
    let lastHidden = null

    const attach = () => {
      const target = document.querySelector('.bt-hero-search-wrap')
      if (!target) {
        if (tries < 20) {
          tries += 1
          window.requestAnimationFrame(attach)
        }
        return
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          const hidden = !entry.isIntersecting
          if (lastHidden === hidden) return
          lastHidden = hidden
          setShowSearch(hidden)
          parkPanels()
          setUiHost(hidden ? 'header' : 'hero')
        },
        {
          root: null,
          threshold: 0,
          rootMargin: '-70px 0px 0px 0px',
        },
      )
      observer.observe(target)
    }

    attach()

    return () => {
      observer?.disconnect()
    }
  }, [home, pathname])

  return (
    <>
      <header
        className={`bt-header${scrolled ? ' is-scrolled' : ''}${
          showSearch ? ' has-search' : ''
        }`}
      >
        <Link to="/booktour" className="bt-header-logo" aria-label="Booktour home">
          <img src={footerLogo} alt="Booktour.am" />
        </Link>

        <div className="bt-header-right">
          <AnimatePresence mode="popLayout">
            {showSearch ? (
              <motion.div
                key="header-search"
                className="bt-header-search-slot"
                initial={
                  home
                    ? { opacity: 0, y: 28, scale: 0.96 }
                    : { opacity: 0, y: -12, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  home
                    ? { opacity: 0, y: 16, scale: 0.98 }
                    : { opacity: 0, y: -8, scale: 0.98 }
                }
                transition={{ duration: 0.38, ease: SEARCH_EASE }}
              >
                <HeaderSearchForm />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="bt-header-actions">
            <button type="button" className="bt-header-icon" aria-label="Language">
              <IconGlobe />
            </button>
            <button type="button" className="bt-header-icon" aria-label="Search">
              <IconSearch />
            </button>
            <button type="button" className="bt-header-icon" aria-label="Favorites">
              <IconHeaderHeart />
            </button>
          </div>

          <span className="bt-header-divider" aria-hidden="true" />

          <button type="button" className="bt-header-user" aria-label="Account">
            <span className="bt-header-user__meta">
              <span className="bt-header-user__name">{BOOKTOUR_HEADER_USER.name}</span>
              <span className="bt-header-user__tier">{BOOKTOUR_HEADER_USER.tier}</span>
            </span>
            <img
              src={avatar}
              alt=""
              className="bt-header-user__avatar"
              width={40}
              height={40}
            />
          </button>

          <span className="bt-header-divider" aria-hidden="true" />

          <button
            type="button"
            className="bt-header-burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <IconBurger />
          </button>
        </div>
      </header>

      <HeaderMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
