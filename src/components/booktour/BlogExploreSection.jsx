import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatePresence, motion } from 'motion/react'
import { EXPLORE_COLUMNS, EXPLORE_INTRO } from '../../data/booktourExperiences.js'
import ExperienceCard from './ExperienceCard.jsx'
import { IconFilterChevron, IconFilterPlus } from './icons.jsx'

gsap.registerPlugin(ScrollTrigger)

const COLUMN_OFFSET = 70
const SCRUB_SMOOTH = 1.2

const BLOG_FILTERS = [
  { id: 'concerts', label: 'Concerts' },
  { id: 'sports', label: 'World of Sports' },
  { id: 'museums', label: 'Museums' },
  { id: 'festivals', label: 'Festivals' },
  { id: 'celebrities', label: 'Celebrities' },
]

/** Blog page explore block — duplicated so it can diverge from the home ExploreSection. */
export default function BlogExploreSection() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const filterRef = useRef(null)
  const colRefs = useRef([])
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState(null)

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

  useGSAP(
    () => {
      const section = sectionRef.current
      const filter = filterRef.current
      if (!section || !filter) return

      gsap.set(filter, { autoAlpha: 0 })

      const showFilter = () => {
        gsap.to(filter, {
          autoAlpha: 1,
          duration: 0.45,
          ease: 'power1.out',
          overwrite: 'auto',
        })
      }

      const hideFilter = () => {
        setFilterOpen(false)
        gsap.to(filter, {
          autoAlpha: 0,
          duration: 0.35,
          ease: 'power1.in',
          overwrite: 'auto',
        })
      }

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 42%',
        end: 'bottom 25%',
        onEnter: showFilter,
        onLeave: hideFilter,
        onEnterBack: showFilter,
        onLeaveBack: hideFilter,
      })

      return () => trigger.kill()
    },
    { scope: sectionRef },
  )

  useEffect(() => {
    if (!filterOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setFilterOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [filterOpen])

  return (
    <section
      ref={sectionRef}
      className="bt-explore bt-explore--blog"
      aria-labelledby="bt-blog-explore-title"
    >
      <div className="bt-explore-head">
        <h2 id="bt-blog-explore-title" className="bt-explore-title">
          Experiences Unfold
        </h2>
        <p className="bt-explore-intro">{EXPLORE_INTRO}</p>
      </div>

      <div className="bt-explore-stage">
        <div className="bt-blog-filter-rail" aria-hidden={false}>
          <div className="bt-blog-filter-sticky">
            <div ref={filterRef} className="bt-blog-filter">
              <AnimatePresence initial={false}>
                {filterOpen ? (
                  <motion.div
                    key="bt-blog-filter-menu"
                    id="bt-blog-filter-menu"
                    className="bt-blog-filter-menu"
                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 8, x: '-50%' }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ul className="bt-blog-filter-menu__list">
                      {BLOG_FILTERS.map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            className={`bt-blog-filter-menu__item${
                              activeFilter === item.id ? ' is-active' : ''
                            }`}
                            onClick={() => setActiveFilter(item.id)}
                          >
                            <span>{item.label}</span>
                            <IconFilterChevron />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                className={`bt-blog-filter-btn${filterOpen ? ' is-open' : ''}`}
                aria-expanded={filterOpen}
                aria-controls="bt-blog-filter-menu"
                onClick={() => setFilterOpen((open) => !open)}
              >
                <span>Filter</span>
                <span className="bt-blog-filter-btn__icon" aria-hidden="true">
                  <IconFilterPlus />
                </span>
              </button>
            </div>
          </div>
        </div>

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
    </section>
  )
}
