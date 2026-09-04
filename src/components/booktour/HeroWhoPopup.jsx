import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const AGES = Array.from({ length: 15 }, (_, i) => i)
const ITEM_H = 28
const MAX_CHILDREN = 3
const MAX_GUESTS = 6

function Counter({ value, onMinus, onPlus, minusDisabled, plusDisabled }) {
  return (
    <div className="bt-hero-who-counter">
      <button
        type="button"
        className={`bt-hero-who-counter__btn${minusDisabled ? ' is-disabled' : ''}`}
        aria-label="Decrease"
        disabled={minusDisabled}
        onClick={onMinus}
      >
        <span className="bt-hero-who-counter__glyph" aria-hidden="true">
          −
        </span>
      </button>
      <span className="bt-hero-who-counter__value">{value}</span>
      <button
        type="button"
        className={`bt-hero-who-counter__btn${plusDisabled ? ' is-disabled' : ''}`}
        aria-label="Increase"
        disabled={plusDisabled}
        onClick={onPlus}
      >
        <span className="bt-hero-who-counter__glyph" aria-hidden="true">
          +
        </span>
      </button>
    </div>
  )
}

function AgePicker({ value, onChange, onSubmit }) {
  const listRef = useRef(null)
  const offsetRef = useRef(value * ITEM_H)
  const dragRef = useRef(null)
  const velocityRef = useRef(0)
  const rafRef = useRef(0)
  const [, setTick] = useState(0)

  const maxOffset = (AGES.length - 1) * ITEM_H

  const clampOffset = (next) => Math.max(0, Math.min(maxOffset, next))

  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  const applyOffset = (next, { syncValue = false } = {}) => {
    const clamped = clampOffset(next)
    offsetRef.current = clamped
    const list = listRef.current
    if (list) list.style.transform = `translate3d(0, ${-clamped}px, 0)`
    if (syncValue) {
      onChangeRef.current(Math.round(clamped / ITEM_H))
    }
    setTick((n) => n + 1)
  }

  const snapTo = (index, { animate = true } = {}) => {
    const nextIndex = Math.max(0, Math.min(AGES.length - 1, index))
    const target = clampOffset(nextIndex * ITEM_H)
    cancelAnimationFrame(rafRef.current)
    onChangeRef.current(nextIndex)

    if (!animate) {
      applyOffset(target)
      return
    }

    const start = offsetRef.current
    const delta = target - start
    if (Math.abs(delta) < 0.5) {
      applyOffset(target)
      return
    }

    const duration = 220
    const started = performance.now()

    const step = (now) => {
      const t = Math.min(1, (now - started) / duration)
      const eased = 1 - (1 - t) ** 3
      applyOffset(start + delta * eased)
      if (t < 1) rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
  }

  const stopInertia = () => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
  }

  useEffect(() => {
    applyOffset(value * ITEM_H)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const runInertia = () => {
    stopInertia()
    let velocity = velocityRef.current

    const step = () => {
      if (Math.abs(velocity) < 0.15) {
        snapTo(Math.round(offsetRef.current / ITEM_H))
        return
      }

      applyOffset(offsetRef.current + velocity)
      velocity *= 0.92
      velocityRef.current = velocity

      if (
        offsetRef.current <= 0 ||
        offsetRef.current >= maxOffset
      ) {
        snapTo(Math.round(offsetRef.current / ITEM_H))
        return
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
  }

  const onPointerDown = (event) => {
    if (event.button != null && event.button !== 0) return
    stopInertia()
    const viewport = event.currentTarget
    viewport?.setPointerCapture?.(event.pointerId)
    dragRef.current = {
      pointerId: event.pointerId,
      startY: event.clientY,
      startOffset: offsetRef.current,
      lastY: event.clientY,
      lastTime: performance.now(),
      moved: false,
    }
    velocityRef.current = 0
  }

  const onPointerMove = (event) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    const now = performance.now()
    const dy = event.clientY - drag.startY
    if (Math.abs(dy) > 3) drag.moved = true

    const next = drag.startOffset - dy
    applyOffset(next)

    const dt = Math.max(1, now - drag.lastTime)
    velocityRef.current = (-(event.clientY - drag.lastY) / dt) * 14
    drag.lastY = event.clientY
    drag.lastTime = now
  }

  const endDrag = (event) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    dragRef.current = null

    try {
      event.currentTarget?.releasePointerCapture?.(event.pointerId)
    } catch {
      /* ignore */
    }

    if (!drag.moved) {
      const viewport = event.currentTarget
      if (viewport) {
        const rect = viewport.getBoundingClientRect()
        const localY = event.clientY - rect.top
        const center = rect.height / 2
        const current = Math.round(offsetRef.current / ITEM_H)
        const deltaItems = Math.round((localY - center) / ITEM_H)
        const next = Math.max(0, Math.min(AGES.length - 1, current + deltaItems))
        snapTo(next)
      }
      return
    }

    if (Math.abs(velocityRef.current) > 0.4) {
      runInertia()
    } else {
      snapTo(Math.round(offsetRef.current / ITEM_H))
    }
  }

  const visualIndex = Math.round(offsetRef.current / ITEM_H)

  return (
    <div className="bt-hero-who-picker">
      <div className="bt-hero-who-picker__frame" aria-hidden="true" />
      <div
        className="bt-hero-who-picker__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={listRef} className="bt-hero-who-picker__list">
          {AGES.map((age) => {
            const distance = Math.abs(age - visualIndex)
            const tone =
              distance === 0 ? 'is-active' : distance === 1 ? 'is-near' : 'is-far'
            return (
              <div
                key={age}
                className={`bt-hero-who-picker__item ${tone}`}
                aria-hidden={distance !== 0}
              >
                {age}
              </div>
            )
          })}
        </div>
      </div>
      <button type="button" className="bt-hero-who-picker__submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  )
}

export default function HeroWhoPopup({
  adults,
  pets,
  childrenAges,
  onAdultsChange,
  onPetsChange,
  onChildrenChange,
}) {
  const [picking, setPicking] = useState(false)
  const [pickerAge, setPickerAge] = useState(4)

  const canAddChild = childrenAges.length < MAX_CHILDREN

  const startPick = () => {
    if (!canAddChild || picking) return
    setPickerAge(4)
    setPicking(true)
  }

  const submitChild = () => {
    if (!canAddChild) return
    onChildrenChange([...childrenAges, pickerAge])
    setPicking(false)
  }

  const removeChild = (index) => {
    onChildrenChange(childrenAges.filter((_, i) => i !== index))
  }

  return (
    <motion.div
      className="bt-hero-who-popup"
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-label="Guests"
    >
      <div className="bt-hero-who-row">
        <div className="bt-hero-who-row__copy">
          <p className="bt-hero-who-row__title">Adults</p>
          <p className="bt-hero-who-row__desc">Age 14 or above</p>
        </div>
        <Counter
          value={adults}
          minusDisabled={adults <= 0}
          plusDisabled={adults >= MAX_GUESTS}
          onMinus={() => onAdultsChange(Math.max(0, adults - 1))}
          onPlus={() => onAdultsChange(Math.min(MAX_GUESTS, adults + 1))}
        />
      </div>

      {childrenAges.map((age, index) => (
        <div key={`child-${index}`} className="bt-hero-who-row">
          <div className="bt-hero-who-row__copy">
            <p className="bt-hero-who-row__title">Children</p>
            <p className="bt-hero-who-row__desc bt-hero-who-row__desc--age">
              Age {age}
            </p>
          </div>
          <button
            type="button"
            className="bt-hero-who-counter__btn"
            aria-label={`Remove child age ${age}`}
            onClick={() => removeChild(index)}
          >
            <span className="bt-hero-who-counter__glyph" aria-hidden="true">
              −
            </span>
          </button>
        </div>
      ))}

      {canAddChild ? (
        <div
          className={`bt-hero-who-row${picking ? ' bt-hero-who-row--picking' : ''}`}
        >
          <div className="bt-hero-who-row__copy">
            <p className="bt-hero-who-row__title">Children</p>
            <p className="bt-hero-who-row__desc">Age 0 – 14</p>
          </div>
          <button
            type="button"
            className="bt-hero-who-counter__btn"
            aria-label="Add child"
            onClick={startPick}
          >
            <span className="bt-hero-who-counter__glyph" aria-hidden="true">
              +
            </span>
          </button>
        </div>
      ) : null}

      <AnimatePresence initial={false}>
        {picking ? (
          <motion.div
            key="age-picker"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="bt-hero-who-picker-wrap"
          >
            <AgePicker
              value={pickerAge}
              onChange={setPickerAge}
              onSubmit={submitChild}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="bt-hero-who-row">
        <div className="bt-hero-who-row__copy">
          <p className="bt-hero-who-row__title">Pets</p>
          <a
            href="#"
            className="bt-hero-who-row__desc bt-hero-who-row__desc--link"
            onClick={(event) => event.preventDefault()}
          >
            Bringing a service animal?
          </a>
        </div>
        <Counter
          value={pets}
          minusDisabled={pets <= 0}
          plusDisabled={pets >= MAX_GUESTS}
          onMinus={() => onPetsChange(Math.max(0, pets - 1))}
          onPlus={() => onPetsChange(Math.min(MAX_GUESTS, pets + 1))}
        />
      </div>
    </motion.div>
  )
}

export function formatGuestSummary(adults, childrenAges, pets) {
  const parts = []
  if (adults > 0) parts.push(`Adults - ${adults}`)
  if (childrenAges.length > 0) parts.push(`Children - ${childrenAges.length}`)
  if (pets > 0) parts.push(`Pets - ${pets}`)
  return parts.join(', ')
}
