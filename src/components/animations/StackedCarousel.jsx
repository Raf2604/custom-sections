import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function StackedCarousel({ slides }) {
  const rootRef = useRef(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const cards = gsap.utils.toArray('.stacked-slide', root)
      const dots = gsap.utils.toArray('.carousel-dot', root)

      const setActive = (index) => {
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index)
        })
      }

      cards.forEach((card, index) => {
        gsap.set(card, {
          zIndex: index + 1,
          y: index === 0 ? 0 : 56,
          scale: 1 - Math.min(index, 3) * 0.045,
          opacity: index === 0 ? 1 : 0.28,
        })
      })

      setActive(0)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: () => `+=${window.innerHeight * slides.length}`,
          scrub: 0.65,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const next = Math.min(
              slides.length - 1,
              Math.round(self.progress * (slides.length - 1)),
            )
            setActive(next)
          },
        },
      })

      cards.forEach((card, index) => {
        if (index === 0) return
        const at = index - 1
        tl.to(
          card,
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          at,
        )
        tl.to(
          cards[index - 1],
          { y: -36, scale: 0.92, opacity: 0.35, duration: 1 },
          at,
        )
      })
    },
    { scope: rootRef, dependencies: [slides.length] },
  )

  return (
    <section ref={rootRef} className="stacked-carousel" aria-label="Stacked carousel">
      <div className="stacked-carousel-pin">
        {slides.map((slide, index) => (
          <article key={slide.id} className="stacked-slide">
            <p className="home-kicker">0{index + 1}</p>
            <h2>{slide.title}</h2>
            <p className="lede">{slide.body}</p>
          </article>
        ))}
      </div>
      <div className="carousel-dots" aria-hidden="true">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={index === 0 ? 'carousel-dot active' : 'carousel-dot'}
          />
        ))}
      </div>
    </section>
  )
}
