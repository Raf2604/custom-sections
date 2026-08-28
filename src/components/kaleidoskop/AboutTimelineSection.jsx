import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import hero from '../../assets/kaleidoskop/hero.png'
import blog1 from '../../assets/kaleidoskop/blog-1.png'
import blog2 from '../../assets/kaleidoskop/blog-2.png'
import blog3 from '../../assets/kaleidoskop/blog-3.png'
import blog4 from '../../assets/kaleidoskop/blog-4.png'
import moment1 from '../../assets/kaleidoskop/moments-1.png'
import moment2 from '../../assets/kaleidoskop/moments-2.png'
import moment3 from '../../assets/kaleidoskop/moments-3.png'
import team3 from '../../assets/kaleidoskop/team-3.png'
import team4 from '../../assets/kaleidoskop/team-4.png'
import banner from '../../assets/kaleidoskop/blog-banner.png'

gsap.registerPlugin(ScrollTrigger)

const ENTRIES = [
  {
    year: 2001,
    image: hero,
    title: 'Der Erste Funke',
    subtitle: 'Als Eine Idee Zum Ersten Mal Form Annahm',
    body: 'Alles Begann Mit Einer Kleinen Gruppe Und Einer Großen Frage: Was Passiert, Wenn Junge Menschen Aus Unterschiedlichen Welten Gemeinsam Etwas Wagen Dürfen?',
  },
  {
    year: 2003,
    image: blog1,
    title: 'Erste Begegnungen',
    subtitle: 'Räume Für Austausch Und Neugier',
    body: 'Workshops, Proben Und Erste Gemeinsame Projekte Entstanden. Nicht Leistung Stand Im Vordergrund, Sondern Die Freude Am Ausprobieren Und Am Zuhören.',
  },
  {
    year: 2004,
    image: moment1,
    title: 'Gemeinschaft Wächst',
    subtitle: 'Mehr Stimmen, Mehr Geschichten',
    body: 'Neue Teilnehmer:Innen Brachten Neue Rhythmen Mit. Kaleidoskop Wurde Zum Ort, An Dem Herkunft Keine Grenze, Sondern Eine Stärke War.',
  },
  {
    year: 2007,
    image: blog3,
    title: 'Über Die Stadt Hinaus',
    subtitle: 'Projekte Mit Regionaler Strahlkraft',
    body: 'Aufführungen Und Kooperationen Trugen Die Idee Weiter. Kaleidoskop Wurde Sichtbarer – Und Die Gemeinschaft Fester.',
  },
  {
    year: 2009,
    image: moment2,
    title: 'Neue Formen',
    subtitle: 'Tanz, Theater Und Sprache Im Dialog',
    body: 'Formate Öffneten Sich. Zwischen Bühne Und Alltag Entstanden Räume, In Denen Junge Menschen Sich Neu Erfinden Durften.',
  },
  {
    year: 2010,
    image: blog2,
    title: 'Der Erste Applaus',
    subtitle: 'Als Eine Idee Auf Der Bühne Zum Leben Erwachte',
    body: 'Manchmal Beginnt Alles Mit Einem Tanz. Bei Einem Regionalen Wettbewerb In Stuttgart Standen Zum Ersten Mal „Unsere“ Jugendlichen Gemeinsam Auf Der Bühne – Jeder Mit Seiner Geschichte, Seiner Herkunft, Seinem Eigenen Rhythmus. Was Sie Zeigten, War Mehr Als Nur Choreografie: Jeder Schritt, Jede Bewegung Trug Ein Stück Zuhause In Sich.',
  },
  {
    year: 2012,
    image: moment3,
    title: 'Mentoring Beginnt',
    subtitle: 'Erfahrung Wird Weitergegeben',
    body: 'Ältere Teilnehmer:Innen Begleiteten Jüngere. Aus Einer Idee Wurde Ein Netzwerk Aus Verantwortung, Nähe Und Mutualem Lernen.',
  },
  {
    year: 2015,
    image: blog4,
    title: 'Internationale Impulse',
    subtitle: 'Begegnung Über Grenzen Hinweg',
    body: 'Austauschprogramme Und Gastprojekte Erweiterten Den Horizont. Kaleidoskop Wurde Internationaler – Und Bleib Doch Nahbar.',
  },
  {
    year: 2016,
    image: team3,
    title: 'Kreativkurse Blühen',
    subtitle: 'Vom Studio Bis Zur Performance',
    body: 'Regelmäßige Kurse Stärkten Das Fundament. Jede Woche Entstanden Neue Bewegungen, Texte Und Klänge – Und Neue Freundschaften.',
  },
  {
    year: 2017,
    image: team4,
    title: 'Bühnenmoment',
    subtitle: 'Mut Wird Sichtbar',
    body: 'Große Aufführungen Zeigten, Was Entsteht, Wenn Junge Menschen Vertrauen Bekommen. Applaus War Echo – Nicht Ziel.',
  },
  {
    year: 2020,
    image: banner,
    title: 'Neu Verbunden',
    subtitle: 'Nähe Trotz Distanz',
    body: 'Auch In Unsicheren Zeiten Blieb Kaleidoskop Ein Ort Der Begegnung – Digital, Hybrid Und Mit Demselben Glauben An Vielfalt Und Ausdruck.',
  },
]

function TimelineKnobIcon() {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden="true">
      <path
        d="M6 1.25L9.25 4.5M6 1.25L2.75 4.5M6 1.25V6.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14.75L9.25 11.5M6 14.75L2.75 11.5M6 14.75V9.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AboutTimelineSection() {
  const rootRef = useRef(null)
  const stageRef = useRef(null)
  const yearsRef = useRef(null)
  const knobRef = useRef(null)
  const copyRef = useRef(null)
  const indexRef = useRef(0)
  const syncKnobRef = useRef(() => {})
  const [activeIndex, setActiveIndex] = useState(0)

  useLayoutEffect(() => {
    syncKnobRef.current()
  }, [activeIndex])

  useGSAP(
    () => {
      const root = rootRef.current
      const stage = stageRef.current
      const yearsWrap = yearsRef.current
      const knob = knobRef.current
      const copy = copyRef.current
      if (!root || !stage || !yearsWrap || !knob || !copy) return

      const last = ENTRIES.length - 1

      const syncKnob = () => {
        const activeYear = yearsWrap.querySelector('.kal-timeline-year.is-active')
        if (!activeYear) return
        const wrapTop = yearsWrap.getBoundingClientRect().top
        const yearBox = activeYear.getBoundingClientRect()
        const top = yearBox.top - wrapTop + yearBox.height / 2
        gsap.set(knob, { top })
      }
      syncKnobRef.current = syncKnob

      const applyIndex = (next, animate) => {
        const clamped = gsap.utils.clamp(0, last, next)
        if (clamped === indexRef.current) return

        indexRef.current = clamped
        setActiveIndex(clamped)

        if (animate) {
          gsap.fromTo(
            copy,
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out', overwrite: true },
          )
        } else {
          gsap.set(copy, { autoAlpha: 1, y: 0 })
        }
      }

      gsap.set(knob, { top: 0, xPercent: -50, yPercent: -50 })
      gsap.set(copy, { autoAlpha: 1, y: 0 })
      applyIndex(0, false)
      syncKnob()

      const st = ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: () => `+=${last * window.innerHeight * 0.35}`,
        pin: stage,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 0,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / last,
          duration: { min: 0.1, max: 0.3 },
          ease: 'power1.inOut',
        },
        onUpdate(self) {
          applyIndex(Math.round(self.progress * last), true)
        },
        onRefresh() {
          syncKnob()
        },
      })

      const onResize = () => {
        syncKnob()
        ScrollTrigger.refresh()
      }
      window.addEventListener('resize', onResize)

      return () => {
        window.removeEventListener('resize', onResize)
        syncKnobRef.current = () => {}
        st.kill()
      }
    },
    { scope: rootRef },
  )

  const active = ENTRIES[activeIndex]

  return (
    <section ref={rootRef} className="kal-timeline" aria-label="Kaleidoskop Timeline">
      <div ref={stageRef} className="kal-timeline-stage">
        <div className="kal-timeline-bgs" aria-hidden="true">
          {ENTRIES.map((entry, index) => (
            <img
              key={entry.year}
              src={entry.image}
              alt=""
              className={
                index === activeIndex ? 'kal-timeline-bg is-active' : 'kal-timeline-bg'
              }
            />
          ))}
          <div className="kal-timeline-veil" />
        </div>

        <div className="kal-timeline-ui">
          <div className="kal-timeline-nav">
            <div ref={yearsRef} className="kal-timeline-years">
              {ENTRIES.map((entry, index) => (
                <span
                  key={entry.year}
                  className={
                    index === activeIndex
                      ? 'kal-timeline-year is-active'
                      : 'kal-timeline-year'
                  }
                >
                  {entry.year}
                </span>
              ))}
            </div>

            <div className="kal-timeline-rail" aria-hidden="true">
              <div className="kal-timeline-line" />
              <div ref={knobRef} className="kal-timeline-knob">
                <TimelineKnobIcon />
              </div>
            </div>
          </div>

          <div ref={copyRef} className="kal-timeline-copy">
            <h2>{active.title}</h2>
            <p className="kal-timeline-subtitle">{active.subtitle}</p>
            <p className="kal-timeline-body">{active.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
