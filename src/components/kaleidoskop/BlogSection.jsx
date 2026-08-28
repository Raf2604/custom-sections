import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import slide1 from '../../assets/kaleidoskop/blog-1.png'
import slide2 from '../../assets/kaleidoskop/blog-3.png'
import slide3 from '../../assets/kaleidoskop/blog-4.png'
import slide4 from '../../assets/kaleidoskop/blog-2.png'
import slide5 from '../../assets/kaleidoskop/blog-1.png'
import slide6 from '../../assets/kaleidoskop/blog-2.png'

gsap.registerPlugin(ScrollTrigger)

const SLIDES = [
  {
    id: 1,
    image: slide1,
    title: 'Gedanken, Geschichten, Gemeinschaft.',
    line: 'Wie sieht Mut aus, wenn niemand zuschaut?',
  },
  {
    id: 2,
    image: slide2,
    title: 'Gedanken, Geschichten, Gemeinschaft.',
    line: 'Was bleibt, wenn der Applaus verhallt?',
  },
  {
    id: 3,
    image: slide3,
    title: 'Gedanken, Geschichten, Gemeinschaft.',
    line: 'Wie sieht Mut aus, wenn niemand zuschaut?',
  },
  {
    id: 4,
    image: slide4,
    title: 'Gedanken, Geschichten, Gemeinschaft.',
    line: 'Räume, in denen Vielfalt wachsen darf.',
  },
  {
    id: 5,
    image: slide5,
    title: 'Gedanken, Geschichten, Gemeinschaft.',
    line: 'Begegnung, die bleibt.',
  },
  {
    id: 6,
    image: slide6,
    title: 'Gedanken, Geschichten, Gemeinschaft.',
    line: 'Wenn Jugendliche neugierig sein dürfen.',
  },
]

const DESIGN = {
  ref: 1440,
  cardW: 396,
  cardH: 248,
  gap: 30,
  padStart: 140,
  padEnd: 20,
}

/** Scale from 1440px artboard: 396×248 cards, proportional gap/padding. */
function computeLayout(isMobile) {
  const vw = window.innerWidth
  const scale = Math.min(vw / DESIGN.ref, 1)
  const ratio = DESIGN.cardH / DESIGN.cardW

  if (isMobile) {
    const gap = 16
    const padStart = 24
    const padEnd = 24
    const cardW = (vw - padStart - padEnd - gap * 0.15) / 1.15
    const cardH = cardW * ratio
    const maxX = Math.max(
      0,
      SLIDES.length * cardW + (SLIDES.length - 1) * gap + padEnd - vw,
    )
    return { gap, padStart, padEnd, cardW, cardH, maxX, vw, scale }
  }

  const gap = DESIGN.gap * scale
  const padStart = DESIGN.padStart * scale
  const padEnd = DESIGN.padEnd * scale
  const cardW = DESIGN.cardW * scale
  const cardH = DESIGN.cardH * scale
  const maxX = Math.max(
    0,
    SLIDES.length * cardW + (SLIDES.length - 1) * gap + padEnd - vw,
  )

  return { gap, padStart, padEnd, cardW, cardH, maxX, vw, scale }
}

function applyLayout(viewport, layout) {
  viewport.style.setProperty('--card-w', `${layout.cardW}px`)
  viewport.style.setProperty('--card-h', `${layout.cardH}px`)
  viewport.style.setProperty('--gap', `${layout.gap}px`)
  viewport.style.setProperty('--pad-end', `${layout.padEnd}px`)

  viewport.querySelectorAll('.kal-blog-card').forEach((card) => {
    card.style.width = `${layout.cardW}px`
    card.style.minWidth = `${layout.cardW}px`
    card.style.maxWidth = `${layout.cardW}px`
    card.style.height = `${layout.cardH}px`
    card.style.minHeight = `${layout.cardH}px`
    card.style.maxHeight = `${layout.cardH}px`
  })
}

function clamp01(value) {
  return gsap.utils.clamp(0, 1, value)
}

export default function BlogSection() {
  const rootRef = useRef(null)
  const scrollRef = useRef(null)
  const viewportRef = useRef(null)
  const layoutRef = useRef(computeLayout(false))
  const apiRef = useRef({ goTo: null })
  const [activeIndex, setActiveIndex] = useState(0)

  useLayoutEffect(() => {
    if (!viewportRef.current) return
    const isMobile = window.matchMedia('(max-width: 960px)').matches
    layoutRef.current = computeLayout(isMobile)
    applyLayout(viewportRef.current, layoutRef.current)
  }, [])

  useGSAP(
    () => {
      const root = rootRef.current
      const scroll = scrollRef.current
      const viewport = viewportRef.current
      if (!root || !scroll || !viewport) return

      const track = root.querySelector('.kal-blog-track')
      if (!track) return

      const last = Math.max(SLIDES.length - 1, 1)
      let scrollTrigger = null

      const updateLayout = () => {
        const isMobile = window.matchMedia('(max-width: 960px)').matches
        layoutRef.current = computeLayout(isMobile)
        applyLayout(viewport, layoutRef.current)
        return layoutRef.current
      }

      const mm = gsap.matchMedia()

      mm.add('(min-width: 961px)', () => {
        updateLayout()

        // Sticky track (no GSAP pin) — enter/exit stay in normal document flow,
        // so Team height changes and Banner handoff don't jump.
        const travelX = () =>
          layoutRef.current.maxX + layoutRef.current.padStart

        gsap.set(track, {
          paddingLeft: layoutRef.current.padStart,
          x: 0,
          force3D: true,
        })

        const segments = () => {
          const vh = window.innerHeight
          const mid = Math.max(travelX(), last * Math.round(vh * 0.42))
          const lead = Math.round(vh * 0.35)
          const trail = Math.round(vh * 0.5)
          return { lead, mid, trail, total: lead + mid + trail }
        }

        const syncScrollHeight = () => {
          scroll.style.height = `${window.innerHeight + segments().total}px`
        }

        const progressToSlide = (raw) => {
          const { lead, mid, total } = segments()
          const leadP = lead / total
          const midP = mid / total
          if (raw <= leadP) return 0
          if (raw >= leadP + midP) return 1
          return (raw - leadP) / midP
        }

        syncScrollHeight()

        scrollTrigger = ScrollTrigger.create({
          trigger: scroll,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.1,
          invalidateOnRefresh: true,
          onRefresh: syncScrollHeight,
          onUpdate(self) {
            const slide = progressToSlide(clamp01(self.progress))
            gsap.set(track, { x: -travelX() * slide })
            const next = Math.round(slide * last)
            setActiveIndex((prev) => (prev === next ? prev : next))
          },
        })

        apiRef.current.goTo = (index) => {
          if (!scrollTrigger) return
          const { lead, mid, total } = segments()
          const progress = (lead + clamp01(index / last) * mid) / total
          setActiveIndex(index)
          const y =
            scrollTrigger.start +
            (scrollTrigger.end - scrollTrigger.start) * progress
          window.scrollTo({ top: y, behavior: 'smooth' })
        }

        const onResize = () => {
          updateLayout()
          gsap.set(track, { paddingLeft: layoutRef.current.padStart })
          syncScrollHeight()
          ScrollTrigger.refresh()
        }

        window.addEventListener('resize', onResize)
        requestAnimationFrame(() => ScrollTrigger.refresh())

        return () => {
          window.removeEventListener('resize', onResize)
          scroll.style.height = ''
          scrollTrigger?.kill()
          scrollTrigger = null
          apiRef.current.goTo = null
        }
      })

      mm.add('(max-width: 960px)', () => {
        updateLayout()
        scroll.style.height = ''
        gsap.set(track, {
          paddingLeft: layoutRef.current.padStart,
          x: 0,
        })

        apiRef.current.goTo = (index) => {
          const { maxX, padStart } = layoutRef.current
          const progress = clamp01(index / last)
          setActiveIndex(index)
          gsap.to(track, {
            paddingLeft: padStart * (1 - progress),
            x: -maxX * progress,
            duration: 0.45,
            ease: 'power2.inOut',
          })
        }

        const onResize = () => updateLayout()
        window.addEventListener('resize', onResize)

        return () => {
          window.removeEventListener('resize', onResize)
          apiRef.current.goTo = null
        }
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section ref={rootRef} className="kal-blog" aria-label="Aus dem Kaleidoskop">
      <div ref={scrollRef} className="kal-blog-scroll">
        <div className="kal-blog-sticky">
          <div className="kal-blog-intro">
            <h2>Aus dem Kaleidoskop</h2>
            <p className="kal-subtitle">Gedanken, Geschichten, Gemeinschaft.</p>
            <p className="kal-body">
              In Unserem Blog Teilen Wir Erfahrungen, Perspektiven Und Ideen. Von
              Teilnehmer:innen, Mentor:innen, Eltern – Und Von Denen, Die
              Kaleidoskop Jeden Tag Gestalten.
            </p>
            <Link to="/kaleidoskop/about" className="kal-outline-btn">
              Mehr Über Uns Erfahren
            </Link>
          </div>

          <div ref={viewportRef} className="kal-blog-viewport">
            <div className="kal-blog-track">
              {SLIDES.map((slide) => (
                <article key={slide.id} className="kal-blog-card">
                  <img src={slide.image} alt="" draggable={false} />
                  <div className="kal-blog-hover">
                    <div className="kal-blog-hover-copy">
                      <p className="kal-blog-hover-title">{slide.title}</p>
                      <p className="kal-blog-hover-line">{slide.line}</p>
                    </div>
                    <span className="kal-blog-arrow" aria-hidden="true">
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 19L29 19M22 12L29 19L22 26"
                          stroke="#E8E8E8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="19.5" cy="19.5" r="19" stroke="#E8E8E8" />
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="kal-blog-dots" role="tablist" aria-label="Blog slides">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-label={`Slide ${index + 1}`}
                aria-selected={activeIndex === index}
                className={
                  activeIndex === index
                    ? 'kal-blog-dot is-active'
                    : 'kal-blog-dot'
                }
                onClick={() => apiRef.current.goTo?.(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
