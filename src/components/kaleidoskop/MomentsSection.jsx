import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import moment1 from '../../assets/kaleidoskop/moments-1.png'
import moment2 from '../../assets/kaleidoskop/moments-2.png'
import moment3 from '../../assets/kaleidoskop/moments-3.png'

gsap.registerPlugin(ScrollTrigger)

export default function MomentsSection() {
  const rootRef = useRef(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 961px)', () => {
        const item2 = root.querySelector('.kal-moments-item.is-2')
        const item3 = root.querySelector('.kal-moments-item.is-3')

        gsap.set(item2, { y: -150 })
        gsap.set(item3, { y: -300 })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: root,
              start: 'top+=200 50%',
              end: '+=420',
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          })
          .to(item2, { y: 0, ease: 'none', duration: 1 }, 0)
          .to(item3, { y: 0, ease: 'none', duration: 1 }, 0)
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="kal-moments"
      aria-label="Momente, Die Bleiben"
    >
      <div className="kal-moments-copy">
        <h2>Momente, Die Bleiben</h2>
        <p className="kal-subtitle">
          Unsere Veranstaltungen sind mehr als Aufführungen.
        </p>
        <p className="kal-body">
          Sie sind der Moment, in dem Jugendliche den Mut finden, ihre Stimme zu
          erheben – auf der Bühne, im Licht, im Applaus.
          <br />
          Konzerte, Performances, Theater und Tanz: organisiert, gestaltet und
          gelebt von unseren Teilnehmer:innen.
        </p>
      </div>

      <div className="kal-moments-stage">
        <div className="kal-moments-item is-1">
          <img className="kal-moments-ph" src={moment1} alt="" />
        </div>

        <div className="kal-moments-item is-2">
          <img className="kal-moments-ph" src={moment2} alt="" />
          <Link to="/kaleidoskop/about" className="kal-outline-btn">
            Mehr Über Uns Erfahren
          </Link>
        </div>

        <div className="kal-moments-item is-3">
          <img className="kal-moments-ph" src={moment3} alt="" />
        </div>
      </div>
    </section>
  )
}
