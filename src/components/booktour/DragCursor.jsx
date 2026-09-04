import { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'

/** Fade via --bt-cursor-fade so the element itself never has opacity < 1 (breaks backdrop-filter). */
export function fadeDragCursor(el, visible, duration = visible ? 0.2 : 0.16) {
  if (!el) return
  if (visible) el.style.visibility = 'visible'
  gsap.to(el, {
    '--bt-cursor-fade': visible ? 1 : 0,
    duration,
    ease: visible ? 'power2.out' : 'power2.in',
    overwrite: 'auto',
    force3D: false,
    onComplete: () => {
      if (!visible) el.style.visibility = 'hidden'
    },
  })
}

/**
 * Fixed drag label — portaled to body.
 * Blur lives on ::before; fade uses a CSS var so opacity/transform never kill backdrop-filter.
 */
const DragCursor = forwardRef(function DragCursor({ className }, ref) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div ref={ref} className={className} aria-hidden="true">
      <span className="bt-drag-cursor__label">Drag</span>
    </div>,
    document.body,
  )
})

export default DragCursor
