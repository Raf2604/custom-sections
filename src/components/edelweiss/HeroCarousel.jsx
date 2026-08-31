import { useCallback, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatePresence, motion } from 'motion/react'
import { HERO_SLIDES } from '../../data/edelweissHeroSlides.js'
import {
  IconCtaArrow,
  IconHeroArrowDown,
  IconHeroArrowUp,
} from './icons.jsx'

gsap.registerPlugin(ScrollTrigger)

const SLIDE_EASE = [0.32, 0.72, 0, 1]
const SLIDE_DURATION = 1.05

function formatSlideNumber(index) {
  return String(index + 1).padStart(2, '0')
}

function slideProgressPerViewport() {
  return 0.65
}

function progressToIndex(raw, total) {
  if (total <= 1) return 0
  return Math.min(Math.round(raw * (total - 1)), total - 1)
}

function indexToProgress(index, total) {
  if (total <= 1) return 0
  return index / (total - 1)
}

export default function HeroCarousel() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState(1)
  const activeIndexRef = useRef(0)
  const scrollTriggerRef = useRef(null)

  useGSAP(
    () => {
      const scroll = scrollRef.current
      if (!scroll) return

      const total = HERO_SLIDES.length
      const steps = Math.max(total - 1, 1)

      const syncHeight = () => {
        const vh = window.innerHeight
        scroll.style.height = `${vh + Math.round(vh * slideProgressPerViewport() * steps)}px`
      }

      syncHeight()

      const st = ScrollTrigger.create({
        trigger: scroll,
        start: 'top top',
        end: 'bottom bottom',
        invalidateOnRefresh: true,
        snap: {
          snapTo: (value) => Math.round(value * steps) / steps,
          duration: { min: 0.18, max: 0.55 },
          delay: 0.02,
          ease: 'power3.out',
        },
        onRefresh: syncHeight,
        onUpdate(self) {
          const raw = self.progress
          setProgress(raw)
          const next = progressToIndex(raw, total)
          if (next !== activeIndexRef.current) {
            setDirection(next > activeIndexRef.current ? 1 : -1)
          }
          activeIndexRef.current = next
          setActiveIndex((prev) => (prev === next ? prev : next))
        },
      })

      scrollTriggerRef.current = st

      const onResize = () => {
        syncHeight()
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', onResize)
      requestAnimationFrame(() => ScrollTrigger.refresh())

      return () => {
        window.removeEventListener('resize', onResize)
        scroll.style.height = ''
        st.kill()
        scrollTriggerRef.current = null
      }
    },
    { scope: scrollRef },
  )

  const goTo = useCallback((index) => {
    const st = scrollTriggerRef.current
    if (!st) return

    const total = HERO_SLIDES.length
    const next = ((index % total) + total) % total
    const y = st.start + (st.end - st.start) * indexToProgress(next, total)
    window.scrollTo({ top: y, behavior: 'smooth' })
  }, [])

  const goNext = useCallback(() => goTo(activeIndexRef.current + 1), [goTo])
  const goPrev = useCallback(() => goTo(activeIndexRef.current - 1), [goTo])

  return (
    <div ref={scrollRef} className="edw-hero-scroll">
      <section className="edw-hero" aria-label="Edelweiss hero">
        <div className="edw-hero-stack" aria-live="polite">
          {HERO_SLIDES.map((item, index) => (
            <motion.div
              key={item.id}
              className="edw-hero-slide"
              initial={false}
              animate={{
                y: index > activeIndex ? '100%' : '0%',
              }}
              transition={{
                duration: SLIDE_DURATION,
                ease: SLIDE_EASE,
              }}
              style={{ zIndex: index + 1 }}
              aria-hidden={index !== activeIndex}
            >
              <img
                src={item.image}
                alt=""
                className="edw-hero-slide-bg"
              />
              <div className="edw-hero-shade" />
              <div className="edw-hero-slide-copy">
                <div className="edw-hero-slide-copy-inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <a href="#contact" className="edw-hero-cta">
                    <span>{item.cta}</span>
                    <IconCtaArrow />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="edw-hero-layout">
          <div className="edw-hero-nav-col">
            <button
              type="button"
              className="edw-hero-arrow-btn"
              aria-label="Previous slide"
              onClick={goPrev}
            >
              <IconHeroArrowUp />
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeIndex}
                className="edw-hero-index"
                initial={{ opacity: 0, y: direction >= 0 ? 14 : -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction >= 0 ? -14 : 14 }}
                transition={{ duration: 0.4, ease: SLIDE_EASE }}
              >
                {formatSlideNumber(activeIndex)}
              </motion.span>
            </AnimatePresence>

            <button
              type="button"
              className="edw-hero-arrow-btn"
              aria-label="Next slide"
              onClick={goNext}
            >
              <IconHeroArrowDown />
            </button>
          </div>

          <div className="edw-hero-copy-spacer" aria-hidden="true" />

          <div className="edw-hero-progress" aria-hidden="true">
            <div className="edw-hero-progress-track">
              <div
                className="edw-hero-progress-fill"
                style={{
                  transform: `scaleY(${progress})`,
                  transformOrigin: 'top center',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
