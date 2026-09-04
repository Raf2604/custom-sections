import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import heroBg from '../../assets/booktour/hot-deals-hero.png'
import { HOT_DEALS_HERO_CARDS } from '../../data/booktourHotDealsHero.js'
import HotDealsHeroCard from './HotDealsHeroCard.jsx'
import DragCursor from './DragCursor.jsx'

export default function HotDealsHeroSection() {
  const [index, setIndex] = useState(0)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cardsRef = useRef(null)
  const cursorRef = useRef(null)
  const maxIndexRef = useRef(0)
  const dragState = useRef({
    active: false,
    startX: 0,
    currentX: 0,
    width: 0,
    maxX: 0,
  })

  const cards = HOT_DEALS_HERO_CARDS

  const getMetrics = () => {
    const slider = cardsRef.current
    const track = trackRef.current
    if (!slider || !track) return { step: 0, maxX: 0, maxIndex: 0 }

    const slide = track.querySelector('.bt-deals-hero-slide')
    if (!slide) return { step: 0, maxX: 0, maxIndex: 0 }

    const styles = getComputedStyle(track)
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0
    const step = slide.getBoundingClientRect().width + gap
    const maxX = Math.max(0, track.scrollWidth - slider.clientWidth)
    const maxIndex = step > 0 ? Math.ceil(maxX / step) : 0

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
      const x = Math.min(index * step, maxX)

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
    const onResize = () => {
      const { maxIndex } = getMetrics()
      maxIndexRef.current = maxIndex
      if (index > maxIndex) setIndex(maxIndex)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [index])

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

    const { step, maxX } = getMetrics()

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

  const onPointerMove = (event) => {
    if (!dragState.current.active) return
    const track = trackRef.current
    if (!track) return

    dragState.current.currentX = event.clientX
    const delta = event.clientX - dragState.current.startX
    const base = -Math.min(index * dragState.current.width, dragState.current.maxX)
    const nextX = Math.min(0, Math.max(-dragState.current.maxX, base + delta))
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

  return (
    <section
      ref={sectionRef}
      className="bt-deals-hero"
      aria-labelledby="bt-deals-hero-title"
    >
      <DragCursor ref={cursorRef} className="bt-deals-hero-cursor" />

      <div className="bt-deals-hero__banner">
        <img src={heroBg} alt="" className="bt-deals-hero__bg" />
        <div className="bt-deals-hero__veil" aria-hidden="true" />

        <div className="bt-deals-hero__copy">
          <h1 id="bt-deals-hero-title" className="bt-deals-hero__title">
            Discover The <em>Luxury</em> Of Traveling With Us
          </h1>
          <p className="bt-deals-hero__subtitle">Discover the nature new travel</p>
        </div>
      </div>

      <div
        ref={cardsRef}
        className="bt-deals-hero-slider"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={trackRef} className="bt-deals-hero-track">
          {cards.map((card) => (
            <div key={card.id} className="bt-deals-hero-slide">
              <HotDealsHeroCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
