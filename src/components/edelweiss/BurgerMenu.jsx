import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import logo from '../../assets/edelweiss/logo.png'
import {
  MENU_COPYRIGHT,
  MENU_ITEMS,
  MENU_PANELS,
  MENU_SOCIALS,
} from '../../data/edelweissMenu.js'
import { IconDropdown, IconMenuClose, IconSearch } from './icons.jsx'

export default function BurgerMenu({ isOpen, onClose }) {
  const [activeId, setActiveId] = useState('about-us')
  const [hoveredId, setHoveredId] = useState(null)
  const displayId = hoveredId ?? activeId
  const panel = MENU_PANELS[displayId]

  const handleNavLeave = () => {
    setHoveredId(null)
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="edw-menu"
          className="edw-menu edelweiss"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="edw-menu-layout">
            <div className="edw-menu-col edw-menu-col--left">
              <div className="edw-menu-col-main edw-menu-col-main--left">
                <a href="/edelweiss" className="edw-menu-logo" onClick={onClose}>
                  <img src={logo} alt="Edelweiss — Elevating clean to an art form" />
                </a>

                <nav
                  className="edw-menu-nav"
                  aria-label="Fullscreen menu"
                  onMouseLeave={handleNavLeave}
                >
                  <ul className="edw-menu-nav-list">
                    {MENU_ITEMS.map((item) => {
                      const isVisualActive = item.id === displayId

                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            className={`edw-menu-nav-link${isVisualActive ? ' is-active' : ''}`}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onFocus={() => setHoveredId(item.id)}
                            onBlur={() => setHoveredId(null)}
                            onClick={() => setActiveId(item.id)}
                          >
                            {item.label}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>

              <div className="edw-menu-col-footer">
                <div className="edw-menu-footer-divider" aria-hidden="true" />
                <p className="edw-menu-footer-copy">{MENU_COPYRIGHT}</p>
              </div>
            </div>

            <div className={`edw-menu-center${panel ? '' : ' edw-menu-center--empty'}`}>
              <AnimatePresence mode="wait">
                {panel ? (
                  <motion.div
                    key={displayId}
                    className="edw-menu-center-inner"
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={panel.background}
                      alt=""
                      className="edw-menu-center-bg"
                      aria-hidden="true"
                    />
                    <div className="edw-menu-center-overlay" aria-hidden="true" />
                    <ul className="edw-menu-center-list">
                      {panel.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className="edw-menu-center-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="edw-menu-col edw-menu-col--right">
              <div className="edw-menu-col-main edw-menu-col-main--right">
                <div className="edw-menu-utilities">
                  <button type="button" className="edw-menu-icon-btn" aria-label="Search">
                    <IconSearch />
                  </button>
                  <span className="edw-menu-utility-divider" aria-hidden="true" />
                  <button type="button" className="edw-menu-lang-btn" aria-haspopup="listbox">
                    <span>En</span>
                    <IconDropdown />
                  </button>
                  <span className="edw-menu-utility-divider" aria-hidden="true" />
                  <button
                    type="button"
                    className="edw-menu-icon-btn edw-menu-close-btn"
                    aria-label="Close menu"
                    onClick={onClose}
                  >
                    <IconMenuClose />
                  </button>
                </div>

                <div className="edw-menu-form-wrap">
                  <h2 className="edw-menu-form-title">Get In Touch</h2>
                  <div className="edw-menu-form-divider" aria-hidden="true" />

                  <form
                    className="edw-menu-form"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <label className="edw-menu-field">
                      <span className="edw-menu-field-label">Subject</span>
                      <input type="text" name="subject" placeholder="Subject" />
                    </label>
                    <label className="edw-menu-field">
                      <span className="edw-menu-field-label">Name*</span>
                      <input type="text" name="name" placeholder="Name*" required />
                    </label>
                    <label className="edw-menu-field">
                      <span className="edw-menu-field-label">Email*</span>
                      <input type="email" name="email" placeholder="Email*" required />
                    </label>
                    <label className="edw-menu-field edw-menu-field--textarea">
                      <span className="edw-menu-field-label">Message</span>
                      <textarea name="message" placeholder="Message" rows={4} />
                    </label>
                    <button type="submit" className="edw-menu-send-btn">
                      Send
                    </button>
                  </form>
                </div>
              </div>

              <div className="edw-menu-col-footer">
                <div className="edw-menu-footer-divider" aria-hidden="true" />
                <div className="edw-menu-socials">
                  {MENU_SOCIALS.map((item) => (
                    <a key={item.id} href={item.href} className="edw-menu-social">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
