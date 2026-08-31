import { AnimatePresence, motion } from 'motion/react'
import {
  SERVICES_DROPDOWN_COLUMNS,
  SERVICES_DROPDOWN_DEFAULT_IMAGE,
} from '../../data/edelweissServicesDropdown.js'

const IMAGE_CROSSFADE = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

const MENU_FADE_TRANSITION = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
}

export default function ServicesDropdown({ isOpen, activeImage, onLinkHover, onLinkLeave }) {
  const previewImage = activeImage ?? SERVICES_DROPDOWN_DEFAULT_IMAGE

  if (!isOpen) return null

  return (
    <div className="edw-services-dropdown-slot">
      <div className="edw-services-dropdown">
        <motion.div
          className="edw-services-dropdown-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={MENU_FADE_TRANSITION}
        >
          {SERVICES_DROPDOWN_COLUMNS.map((column) => (
            <div key={column.id} className="edw-services-dropdown-col">
              <h3 className="edw-services-dropdown-title">{column.title}</h3>
              <ul className="edw-services-dropdown-list">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="edw-services-dropdown-link"
                      onMouseEnter={() => onLinkHover(link.image)}
                      onFocus={() => onLinkHover(link.image)}
                      onMouseLeave={onLinkLeave}
                      onBlur={onLinkLeave}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="edw-services-dropdown-media" aria-hidden="true">
            <AnimatePresence initial={false}>
              <motion.img
                key={previewImage}
                src={previewImage}
                alt=""
                className="edw-services-dropdown-image"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1, zIndex: 2 }}
                exit={{ opacity: 0, scale: 1, zIndex: 1 }}
                transition={IMAGE_CROSSFADE}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
