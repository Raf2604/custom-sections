import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { EXPLORE_COLUMNS, EXPLORE_INTRO } from '../../data/booktourExperiences.js'
import ExperienceCard from './ExperienceCard.jsx'

gsap.registerPlugin(ScrollTrigger)

const COLUMN_OFFSET = 70
const SCRUB_SMOOTH = 1.2

export default function ExploreSection() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const colRefs = useRef([])

  useGSAP(
    () => {
      const section = sectionRef.current
      const grid = gridRef.current
      if (!section || !grid) return

      const leftCol = colRefs.current[0]
      const centerCol = colRefs.current[1]
      const rightCol = colRefs.current[2]
      if (!leftCol || !centerCol || !rightCol) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 769px)', () => {
        gsap.set(centerCol, { y: -COLUMN_OFFSET, force3D: true })
        gsap.set(leftCol, { y: 0, force3D: true })
        gsap.set(rightCol, { y: 0, force3D: true })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top bottom+=220',
            end: 'bottom 20%',
            scrub: SCRUB_SMOOTH,
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(
          centerCol,
          { y: -COLUMN_OFFSET },
          { y: 0, ease: 'power2.inOut', duration: 1 },
          0,
        ).fromTo(
          leftCol,
          { y: 0 },
          { y: -COLUMN_OFFSET, ease: 'power2.inOut', duration: 1 },
          0,
        ).fromTo(
          rightCol,
          { y: 0 },
          { y: -COLUMN_OFFSET, ease: 'power2.inOut', duration: 1 },
          0,
        )

        return () => tl.scrollTrigger?.kill()
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="bt-explore"
      aria-labelledby="bt-explore-title"
    >
      <div className="bt-explore-head">
        <h2 id="bt-explore-title" className="bt-explore-title">
          Experiences Unfold
        </h2>
        <p className="bt-explore-intro">{EXPLORE_INTRO}</p>
      </div>

      <div className="bt-explore-stage">
        <div ref={gridRef} className="bt-explore-grid">
          {EXPLORE_COLUMNS.map((column, columnIndex) => (
            <div
              key={columnIndex}
              ref={(node) => {
                colRefs.current[columnIndex] = node
              }}
              className={`bt-explore-col${
                columnIndex === 1 ? ' bt-explore-col--center' : ' bt-explore-col--edge'
              }`}
            >
              {column.map((experience) => (
                <ExperienceCard key={experience.id} {...experience} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="bt-explore-foot">
        <p className="bt-explore-outro">{EXPLORE_INTRO}</p>
        <div className="bt-hotels-more-wrap">
          <button type="button" className="bt-hotels-more">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
