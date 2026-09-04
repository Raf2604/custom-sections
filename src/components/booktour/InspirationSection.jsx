import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { INSPIRATION_INTRO, INSPIRATION_TABS } from '../../data/booktourInspiration.js'
import InspirationCard from './InspirationCard.jsx'
import DragCursor from './DragCursor.jsx'

const VISIBLE = 3

export default function InspirationSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [index, setIndex] = useState(0)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cardsRef = useRef(null)
  const cursorRef = useRef(null)
  const dragState = useRef({
    active: false,
    startX: 0,
    currentX: 0,
    width: 0,
  })

  const cards = INSPIRATION_TABS[activeTab].cards
  const maxIndex = Math.max(0, cards.length - VISIBLE)

  const getSlideWidth = () => {
    const track = trackRef.current
    if (!track) return 0
    return track.offsetWidth / VISIBLE
  }

  const goTo = (next) => {
    // Wrap: past the end → first, before start → last
    if (next > maxIndex) setIndex(0)
    else if (next < 0) setIndex(maxIndex)
    else setIndex(next)
  }

  useGSAP(
    () => {
      const track = trackRef.current
      if (!track) return

      const width = getSlideWidth()
      if (!width) return

      gsap.to(track, {
        x: -index * width,
        duration: 0.55,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    },
    { dependencies: [index], scope: sectionRef },
  )

  useEffect(() => {
    setIndex(0)
    const track = trackRef.current
    if (track) gsap.set(track, { x: 0 })
  }, [activeTab])

  useGSAP(
    () => {
      const root = cardsRef.current
      if (!root) return

      const slides = root.querySelectorAll('.bt-inspiration-slide')

      gsap.fromTo(
        slides,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: 'sine.out',
          overwrite: 'auto',
        },
      )
    },
    { dependencies: [activeTab], scope: sectionRef },
  )

  useEffect(() => {
    const slider = cardsRef.current
    const cursor = cursorRef.current
    if (!slider || !cursor) return

    const moveCursor = (event) => {
      gsap.to(cursor, {
        left: event.clientX,
        top: event.clientY,
        x: 0,
        y: 0,
        duration: 0.16,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const showCursor = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2, ease: 'power2.out' })
    }

    const hideCursor = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.16, ease: 'power2.in' })
    }

    slider.addEventListener('pointermove', moveCursor)
    slider.addEventListener('pointerenter', showCursor)
    slider.addEventListener('pointerleave', hideCursor)

    return () => {
      slider.removeEventListener('pointermove', moveCursor)
      slider.removeEventListener('pointerenter', showCursor)
      slider.removeEventListener('pointerleave', hideCursor)
    }
  }, [])

  const onPointerDown = (event) => {
    if (event.button !== 0) return
    const track = trackRef.current
    if (!track) return

    dragState.current = {
      active: true,
      startX: event.clientX,
      currentX: event.clientX,
      width: getSlideWidth(),
    }

    track.setPointerCapture?.(event.pointerId)
    gsap.killTweensOf(track)
  }

  const onPointerMove = (event) => {
    if (!dragState.current.active) return
    const track = trackRef.current
    if (!track) return

    dragState.current.currentX = event.clientX
    const delta = event.clientX - dragState.current.startX
    const base = -index * dragState.current.width
    gsap.set(track, { x: base + delta })
  }

  const endDrag = (event) => {
    if (!dragState.current.active) return
    dragState.current.active = false

    const delta = dragState.current.currentX - dragState.current.startX
    const threshold = Math.max(40, dragState.current.width * 0.16)

    if (delta <= -threshold) goTo(index + 1)
    else if (delta >= threshold) goTo(index - 1)
    else goTo(index)

    trackRef.current?.releasePointerCapture?.(event.pointerId)
  }

  const onTabChange = (tabIndex) => {
    if (tabIndex === activeTab) return
    setActiveTab(tabIndex)
  }

  return (
    <section
      ref={sectionRef}
      className="bt-inspiration"
      aria-labelledby="bt-inspiration-title"
    >
      <DragCursor ref={cursorRef} className="bt-inspiration-cursor" />

      <div className="bt-inspiration-head">
        <h2 id="bt-inspiration-title" className="bt-inspiration-title">
          Ignite Your Travel Desires
        </h2>
        <p className="bt-inspiration-intro">{INSPIRATION_INTRO}</p>
      </div>

      <div className="bt-inspiration-divider" aria-hidden="true" />

      <div className="bt-inspiration-tabs" role="tablist" aria-label="Inspiration categories">
        {INSPIRATION_TABS.map((tab, tabIndex) => {
          const isActive = tabIndex === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`bt-inspiration-tab${isActive ? ' is-active' : ''}`}
              onClick={() => onTabChange(tabIndex)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        ref={cardsRef}
        className="bt-inspiration-slider"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={trackRef} className="bt-inspiration-track">
          {cards.map((card) => (
            <div key={card.id} className="bt-inspiration-slide">
              <InspirationCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
