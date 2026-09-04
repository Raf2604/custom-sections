import { forwardRef } from 'react'
import { createPortal } from 'react-dom'

/** Fixed drag label — portaled so backdrop-filter isn't killed by parent transforms. */
const DragCursor = forwardRef(function DragCursor({ className }, ref) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div ref={ref} className={className} aria-hidden="true">
      Drag
    </div>,
    document.body,
  )
})

export default DragCursor
