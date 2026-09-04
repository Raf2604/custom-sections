import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  BLOG_INSPIRATION_INTRO,
  BLOG_INSPIRATION_TABS,
} from '../../data/booktourBlogInspiration.js'
import BlogInspirationCard from './BlogInspirationCard.jsx'
import DragCursor from './DragCursor.jsx'

function isCardMedia(target) {
  return Boolean(target?.closest?.('.bt-blog-insp-card__media'))
}

/** Blog page inspiration — 1.5-card drag carousel with progress bar. */
export default function BlogInspirationSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [index, setIndex] = useState(0)
  const [slideCount, setSlideCount] = useState(1)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cardsRef = useRef(null)
  const cursorRef = useRef(null)
  const progressFillRef = useRef(null)
  const maxIndexRef = useRef(0)
  const dragState = useRef({
    active: false,
    startX: 0,
    currentX: 0,
    width: 0,
    maxX: 0,
  })

  const cards = BLOG_INSPIRATION_TABS[activeTab].cards

  const getMetrics = () => {
    const slider = cardsRef.current
    const track = trackRef.current
    if (!slider || !track) return { step: 0, maxX: 0, maxIndex: 0 }

    const slide = track.querySelector('.bt-blog-insp-slide')
    if (!slide) return { step: 0, maxX: 0, maxIndex: 0 }

    const styles = getComputedStyle(track)
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0
    const step = slide.getBoundingClientRect().width + gap
    const maxX = Math.max(0, track.scrollWidth - slider.clientWidth)
    const maxIndex = step > 0 ? Math.max(0, Math.ceil(maxX / step)) : 0

    return { step, maxX, maxIndex }
  }

  const goTo = (next) => {
    const { maxIndex } = getMetrics()
    maxIndexRef.current = maxIndex

    if (next > maxIndex) setIndex(0)
    else if (next < 0) setIndex(maxIndex)
    else setIndex(next)
  }

  useGSAP(
    () => {
      const track = trackRef.current
      if (!track) return

      const { step, maxX, maxIndex } = getMetrics()
      if (!step) return

      maxIndexRef.current = maxIndex
      const clamped = Math.min(index, maxIndex)
      const x = Math.min(clamped * step, maxX)

      gsap.to(track, {
        x: -x,
        duration: 0.55,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    },
    { dependencies: [index], scope: sectionRef },
  )

  useEffect(() => {
    const { maxIndex } = getMetrics()
    maxIndexRef.current = maxIndex
    setSlideCount(Math.max(maxIndex + 1, 1))
  }, [activeTab, cards.length, index])

  useGSAP(
    () => {
      const fill = progressFillRef.current
      if (!fill) return

      const { maxIndex } = getMetrics()
      const steps = Math.max(maxIndex + 1, 1)
      const widthPct = ((Math.min(index, maxIndex) + 1) / steps) * 100

      gsap.to(fill, {
        width: `${widthPct}%`,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: true,
      })
    },
    { dependencies: [index, activeTab, cards.length], scope: sectionRef },
  )

  // Reset carousel + soft tab enter (keep track DOM stable so drag keeps working)
  useGSAP(
    () => {
      const track = trackRef.current
      if (!track) return

      setIndex(0)
      gsap.set(track, { x: 0 })

      const { maxIndex } = getMetrics()
      const steps = Math.max(maxIndex + 1, 1)
      setSlideCount(steps)

      const fill = progressFillRef.current
      if (fill) gsap.set(fill, { width: `${100 / steps}%` })

      gsap.fromTo(
        track,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.45,
          ease: 'power2.out',
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

    const onPointerMove = (event) => {
      if (!isCardMedia(event.target)) {
        hideCursor()
        return
      }
      moveCursor(event)
      showCursor()
    }

    slider.addEventListener('pointermove', onPointerMove)
    slider.addEventListener('pointerleave', hideCursor)

    return () => {
      slider.removeEventListener('pointermove', onPointerMove)
      slider.removeEventListener('pointerleave', hideCursor)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      const { maxIndex, step, maxX } = getMetrics()
      maxIndexRef.current = maxIndex
      setSlideCount(maxIndex + 1)
      const next = Math.min(index, maxIndex)
      if (next !== index) setIndex(next)
      else if (trackRef.current && step) {
        gsap.set(trackRef.current, { x: -Math.min(next * step, maxX) })
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [index, activeTab])

  const onPointerDown = (event) => {
    if (event.button !== 0) return
    if (!isCardMedia(event.target)) return

    const track = trackRef.current
    if (!track) return

    const { step, maxX } = getMetrics()
    if (!step) return

    dragState.current = {
      active: true,
      startX: event.clientX,
      currentX: event.clientX,
      width: step,
      maxX,
    }

    track.setPointerCapture?.(event.pointerId)
    gsap.killTweensOf(track)
  }

  const onPointerMoveDrag = (event) => {
    if (!dragState.current.active) return
    const track = trackRef.current
    if (!track) return

    dragState.current.currentX = event.clientX
    const delta = event.clientX - dragState.current.startX
    const base = -Math.min(index * dragState.current.width, dragState.current.maxX)
    const slack = dragState.current.width * 0.35
    const nextX = Math.min(slack, Math.max(-(dragState.current.maxX + slack), base + delta))
    gsap.set(track, { x: nextX })
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
    dragState.current.active = false
    setActiveTab(tabIndex)
  }

  return (
    <section
      ref={sectionRef}
      className="bt-inspiration bt-inspiration--blog"
      aria-labelledby="bt-blog-inspiration-title"
    >
      <DragCursor ref={cursorRef} className="bt-inspiration-cursor" />

      <div className="bt-inspiration-head">
        <h2 id="bt-blog-inspiration-title" className="bt-inspiration-title">
          Ignite Your Travel Desires
        </h2>
        <p className="bt-inspiration-intro">{BLOG_INSPIRATION_INTRO}</p>
      </div>

      <div className="bt-inspiration-divider" aria-hidden="true" />

      <div
        className="bt-inspiration-tabs bt-blog-insp-tabs"
        role="tablist"
        aria-label="Inspiration categories"
      >
        {BLOG_INSPIRATION_TABS.map((tab, tabIndex) => {
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
        className="bt-blog-insp-slider"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMoveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={trackRef} className="bt-blog-insp-track">
          {cards.map((card) => (
            <div key={`${activeTab}-${card.id}`} className="bt-blog-insp-slide">
              <BlogInspirationCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <div
        className="bt-blog-insp-progress"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={slideCount}
        aria-valuenow={index + 1}
        aria-label="Carousel progress"
      >
        <div ref={progressFillRef} className="bt-blog-insp-progress__fill" />
      </div>
    </section>
  )
}
