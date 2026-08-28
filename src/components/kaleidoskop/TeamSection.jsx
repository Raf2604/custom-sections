import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import team1 from '../../assets/kaleidoskop/team-1.png'
import team2 from '../../assets/kaleidoskop/team-2.png'
import team3 from '../../assets/kaleidoskop/team-3.png'
import team4 from '../../assets/kaleidoskop/team-4.png'

gsap.registerPlugin(ScrollTrigger)

const TEAM_LEFT_OFFSET = 130
const TEAM_CARDS_TRAVEL = 370

function getTeamCopyTravel(cards, copy) {
  const leftCol = cards.querySelector('.kal-team-col.is-left')
  const button = copy.querySelector('.kal-outline-btn')
  if (!leftCol || !button) return 0

  const leftBottom = leftCol.offsetTop + leftCol.offsetHeight + TEAM_LEFT_OFFSET
  const copyBottom = button.offsetTop + button.offsetHeight

  return leftBottom - copyBottom - TEAM_CARDS_TRAVEL
}

const leftMembers = [
  {
    id: 1,
    name: 'Kelsie',
    role: 'Choreographer',
    image: team1,
    body: 'Etiam at orci id purus ullamcorper tincidunt. Integer vel ante sit amet nisl vestibulum.',
  },
  {
    id: 2,
    name: 'Lukas',
    role: 'Clay Artist',
    image: team2,
    body: 'Etiam at orci id purus ullamcorper tincidunt. Integer vel ante sit amet nisl vestibulum.',
  },
]

const rightMembers = [
  {
    id: 3,
    name: 'Anna',
    role: 'Illustrator',
    image: team3,
    body: 'Etiam at orci id purus ullamcorper tincidunt. Integer vel ante sit amet nisl vestibulum.',
  },
  {
    id: 4,
    name: 'Marta',
    role: 'Vocalist',
    image: team4,
    body: 'Etiam at orci id purus ullamcorper tincidunt. Integer vel ante sit amet nisl vestibulum.',
  },
]

function TeamCard({ member }) {
  return (
    <article className="kal-team-card">
      <h3 className="kal-team-name">{member.name}</h3>
      <div className="kal-team-photo">
        <img src={member.image} alt="" />
      </div>
      <p className="kal-team-role">{member.role}</p>
      <p className="kal-team-desc">{member.body}</p>
    </article>
  )
}

export default function TeamSection() {
  const rootRef = useRef(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 961px)', () => {
        const cards = root.querySelector('.kal-team-cards')
        const copy = root.querySelector('.kal-team-copy')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top 90%',
            end: '+=1100',
            scrub: 0.8,
            invalidateOnRefresh: true,
            // Blog uses sticky scroll distance — refresh after Team finishes
            // collapsing so Blog start/end match the final layout.
            onLeave: () => ScrollTrigger.refresh(),
            onEnterBack: () => ScrollTrigger.refresh(),
          },
        })

        tl.fromTo(
          cards,
          { y: 0, marginBottom: 0 },
          {
            y: -TEAM_CARDS_TRAVEL,
            marginBottom: -TEAM_CARDS_TRAVEL,
            ease: 'none',
          },
          0,
        )

        tl.fromTo(
          copy,
          { y: 0, marginBottom: 0 },
          {
            y: () => getTeamCopyTravel(cards, copy),
            marginBottom: () => getTeamCopyTravel(cards, copy),
            ease: 'none',
          },
          0,
        )
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section ref={rootRef} className="kal-team" aria-label="Unser Team">
      <div className="kal-team-layout">
        <div className="kal-team-cards">
          <div className="kal-team-col is-left">
            {leftMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          <div className="kal-team-col is-right">
            {rightMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="kal-team-copy">
          <h2>Unser Team</h2>
          <p className="kal-subtitle">
            Lerne die Menschen kennen, die aus Visionen Wirklichkeit machen.
          </p>
          <p className="kal-body">
            Unser Team besteht aus Künstler:innen, Pädagog:innen und
            Organisator:innen mit ganz unterschiedlichen Hintergründen – vereint
            durch die Leidenschaft, junge Menschen zu begeistern und Räume für
            Ausdruck zu schaffen.
          </p>
          <Link to="/kaleidoskop/about" className="kal-outline-btn">
            Mach Mit Bei Kaleidoskop
          </Link>
        </div>
      </div>
    </section>
  )
}
