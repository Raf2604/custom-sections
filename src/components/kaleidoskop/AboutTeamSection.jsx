import { useId, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import team1 from '../../assets/kaleidoskop/team-1.png'
import team2 from '../../assets/kaleidoskop/team-2.png'
import team3 from '../../assets/kaleidoskop/team-3.png'
import team4 from '../../assets/kaleidoskop/team-4.png'

const MEMBERS = [
  {
    id: 1,
    name: 'Kelsie',
    role: 'Choreographer',
    image: team1,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Anna',
    role: 'Illustrator',
    image: team3,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Marta',
    role: 'Vocalist',
    image: team4,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Lukas',
    role: 'Clay Artist',
    image: team2,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Jonas',
    role: 'Director',
    image: team1,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Emilia',
    role: 'Mentor',
    image: team3,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 7,
    name: 'Tarek',
    role: 'Musician',
    image: team2,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 8,
    name: 'Nora',
    role: 'Dance Coach',
    image: team4,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 9,
    name: 'Selin',
    role: 'Educator',
    image: team1,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 10,
    name: 'David',
    role: 'Producer',
    image: team2,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 11,
    name: 'Aylin',
    role: 'Performer',
    image: team3,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 12,
    name: 'Benjamin',
    role: 'Photographer',
    image: team2,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 13,
    name: 'Laura',
    role: 'Costume Designer',
    image: team4,
    instagram: '#',
    linkedin: '#',
  },
  {
    id: 14,
    name: 'Elena',
    role: 'Stage Manager',
    image: team1,
    instagram: '#',
    linkedin: '#',
  },
]

function IconInstagramAbout() {
  const clipId = useId()

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <g opacity="0.7" clipPath={`url(#${clipId})`}>
        <path
          d="M9 1.6207C11.4047 1.6207 11.6895 1.63125 12.6352 1.67344C13.5141 1.71211 13.9887 1.85977 14.3051 1.98281C14.7234 2.14453 15.0258 2.34141 15.3387 2.6543C15.6551 2.9707 15.8484 3.26953 16.0102 3.68789C16.1332 4.0043 16.2809 4.48242 16.3195 5.35781C16.3617 6.30703 16.3723 6.5918 16.3723 8.99297C16.3723 11.3977 16.3617 11.6824 16.3195 12.6281C16.2809 13.507 16.1332 13.9816 16.0102 14.298C15.8484 14.7164 15.6516 15.0187 15.3387 15.3316C15.0223 15.648 14.7234 15.8414 14.3051 16.0031C13.9887 16.1262 13.5105 16.2738 12.6352 16.3125C11.6859 16.3547 11.4012 16.3652 9 16.3652C6.59531 16.3652 6.31055 16.3547 5.36484 16.3125C4.48594 16.2738 4.01133 16.1262 3.69492 16.0031C3.27656 15.8414 2.97422 15.6445 2.66133 15.3316C2.34492 15.0152 2.15156 14.7164 1.98984 14.298C1.8668 13.9816 1.71914 13.5035 1.68047 12.6281C1.63828 11.6789 1.62773 11.3941 1.62773 8.99297C1.62773 6.58828 1.63828 6.30351 1.68047 5.35781C1.71914 4.47891 1.8668 4.0043 1.98984 3.68789C2.15156 3.26953 2.34844 2.96719 2.66133 2.6543C2.97773 2.33789 3.27656 2.14453 3.69492 1.98281C4.01133 1.85977 4.48945 1.71211 5.36484 1.67344C6.31055 1.63125 6.59531 1.6207 9 1.6207ZM9 0C6.55664 0 6.25078 0.0105469 5.29102 0.0527344C4.33477 0.0949219 3.67734 0.249609 3.10781 0.471094C2.51367 0.703125 2.01094 1.00898 1.51172 1.51172C1.00898 2.01094 0.703125 2.51367 0.471094 3.1043C0.249609 3.67734 0.0949219 4.33125 0.0527344 5.2875C0.0105469 6.25078 0 6.55664 0 9C0 11.4434 0.0105469 11.7492 0.0527344 12.709C0.0949219 13.6652 0.249609 14.3227 0.471094 14.8922C0.703125 15.4863 1.00898 15.9891 1.51172 16.4883C2.01094 16.9875 2.51367 17.2969 3.1043 17.5254C3.67734 17.7469 4.33125 17.9016 5.2875 17.9437C6.24727 17.9859 6.55312 17.9965 8.99648 17.9965C11.4398 17.9965 11.7457 17.9859 12.7055 17.9437C13.6617 17.9016 14.3191 17.7469 14.8887 17.5254C15.4793 17.2969 15.982 16.9875 16.4813 16.4883C16.9805 15.9891 17.2898 15.4863 17.5184 14.8957C17.7398 14.3227 17.8945 13.6687 17.9367 12.7125C17.9789 11.7527 17.9895 11.4469 17.9895 9.00352C17.9895 6.56016 17.9789 6.2543 17.9367 5.29453C17.8945 4.33828 17.7398 3.68086 17.5184 3.11133C17.2969 2.51367 16.991 2.01094 16.4883 1.51172C15.9891 1.0125 15.4863 0.703125 14.8957 0.474609C14.3227 0.253125 13.6688 0.0984375 12.7125 0.05625C11.7492 0.0105469 11.4434 0 9 0Z"
          fill="#080808"
        />
        <path
          d="M9 4.37695C6.44766 4.37695 4.37695 6.44766 4.37695 9C4.37695 11.5523 6.44766 13.623 9 13.623C11.5523 13.623 13.623 11.5523 13.623 9C13.623 6.44766 11.5523 4.37695 9 4.37695ZM9 11.9988C7.34414 11.9988 6.00117 10.6559 6.00117 9C6.00117 7.34414 7.34414 6.00117 9 6.00117C10.6559 6.00117 11.9988 7.34414 11.9988 9C11.9988 10.6559 10.6559 11.9988 9 11.9988Z"
          fill="#080808"
        />
        <path
          d="M14.8852 4.19404C14.8852 4.7917 14.4 5.27334 13.8059 5.27334C13.2082 5.27334 12.7266 4.78819 12.7266 4.19404C12.7266 3.59639 13.2117 3.11475 13.8059 3.11475C14.4 3.11475 14.8852 3.5999 14.8852 4.19404Z"
          fill="#080808"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function IconLinkedInAbout() {
  const clipId = useId()

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <g opacity="0.7" clipPath={`url(#${clipId})`}>
        <path
          d="M16.6676 0H1.32891C0.594141 0 0 0.580078 0 1.29727V16.6992C0 17.4164 0.594141 18 1.32891 18H16.6676C17.4023 18 18 17.4164 18 16.7027V1.29727C18 0.580078 17.4023 0 16.6676 0ZM5.34023 15.3387H2.66836V6.74648H5.34023V15.3387ZM4.0043 5.57578C3.14648 5.57578 2.45391 4.8832 2.45391 4.02891C2.45391 3.17461 3.14648 2.48203 4.0043 2.48203C4.85859 2.48203 5.55117 3.17461 5.55117 4.02891C5.55117 4.87969 4.85859 5.57578 4.0043 5.57578ZM15.3387 15.3387H12.6703V11.1621C12.6703 10.1672 12.6527 8.88398 11.2816 8.88398C9.89297 8.88398 9.68203 9.97031 9.68203 11.0918V15.3387H7.01719V6.74648H9.57656V7.9207H9.61172C9.9668 7.2457 10.8387 6.53203 12.1359 6.53203C14.8395 6.53203 15.3387 8.31094 15.3387 10.6242V15.3387Z"
          fill="#080808"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function TeamMemberRow({ member }) {
  const rowRef = useRef(null)
  const barRef = useRef(null)
  const nameRef = useRef(null)
  const photoRef = useRef(null)
  const roleRef = useRef(null)
  const socialsRef = useRef(null)
  const tweenRef = useRef(null)

  const show = () => {
    const row = rowRef.current
    const bar = barRef.current
    const name = nameRef.current
    const photo = photoRef.current
    const role = roleRef.current
    const socials = socialsRef.current
    if (!row || !bar || !name || !photo || !role || !socials) return

    tweenRef.current?.kill()
    row.classList.add('is-active')

    const icons = socials.querySelectorAll('.kal-about-team-social')

    tweenRef.current = gsap
      .timeline({ defaults: { ease: 'power3.out', overwrite: 'auto' } })
      .to(bar, { backgroundColor: '#efede8', duration: 0.45 }, 0)
      .to(name, { color: '#080808', duration: 0.4 }, 0)
      .fromTo(
        role,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.42 },
        0.06,
      )
      .fromTo(
        icons,
        { opacity: 0, y: 8, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.38,
          stagger: 0.06,
          ease: 'back.out(1.6)',
        },
        0.12,
      )
      .fromTo(
        photo,
        {
          opacity: 0,
          scale: 0.86,
          y: 28,
          rotate: -3.5,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          duration: 0.58,
          ease: 'power3.out',
        },
        0.02,
      )
  }

  const hide = () => {
    const row = rowRef.current
    const bar = barRef.current
    const name = nameRef.current
    const photo = photoRef.current
    const role = roleRef.current
    const socials = socialsRef.current
    if (!row || !bar || !name || !photo || !role || !socials) return

    const icons = socials.querySelectorAll('.kal-about-team-social')

    tweenRef.current?.kill()
    tweenRef.current = gsap
      .timeline({
        defaults: { ease: 'power2.inOut', overwrite: 'auto' },
        onComplete: () => row.classList.remove('is-active'),
      })
      .to(photo, {
        opacity: 0,
        scale: 0.92,
        y: 16,
        rotate: -1.5,
        duration: 0.32,
      }, 0)
      .to(role, { opacity: 0, y: 4, duration: 0.22 }, 0)
      .to(icons, { opacity: 0, y: 4, scale: 0.92, duration: 0.2, stagger: 0.03 }, 0)
      .to(name, { color: '#cfcfcfa6', duration: 0.3 }, 0.04)
      .to(bar, { backgroundColor: 'rgba(0,0,0,0)', duration: 0.35 }, 0.04)
  }

  useGSAP(() => {
    gsap.set(roleRef.current, { opacity: 0, y: 6 })
    gsap.set(socialsRef.current.querySelectorAll('.kal-about-team-social'), {
      opacity: 0,
      y: 8,
      scale: 0.85,
    })
    gsap.set(photoRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 24,
      rotate: -3,
    })
    gsap.set(barRef.current, { backgroundColor: 'rgba(0,0,0,0)' })
    gsap.set(nameRef.current, { color: '#cfcfcfa6' })
  }, [])

  return (
    <li
      ref={rowRef}
      className="kal-about-team-item"
      tabIndex={0}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <div ref={barRef} className="kal-about-team-item-bar">
        <div className="kal-about-team-item-copy">
          <span ref={nameRef} className="kal-about-team-item-name">
            {member.name}
          </span>
          <span ref={roleRef} className="kal-about-team-item-role">
            <span className="kal-about-team-item-sep" aria-hidden="true" />
            {member.role}
          </span>
        </div>

        <div ref={socialsRef} className="kal-about-team-item-socials">
          <a
            href={member.instagram}
            className="kal-about-team-social"
            aria-label={`${member.name} Instagram`}
            tabIndex={-1}
          >
            <IconInstagramAbout />
          </a>
          <a
            href={member.linkedin}
            className="kal-about-team-social"
            aria-label={`${member.name} LinkedIn`}
            tabIndex={-1}
          >
            <IconLinkedInAbout />
          </a>
        </div>
      </div>

      <div className="kal-about-team-item-photo" aria-hidden="true">
        <div ref={photoRef} className="kal-about-team-item-photo-inner">
          <img src={member.image} alt="" />
        </div>
      </div>
    </li>
  )
}

function AboutTeamSection() {
  return (
    <section className="kal-about-team" aria-label="Unser Team">
      <div className="kal-about-team-grid">
        <aside className="kal-about-team-sticky">
          <h2>
            Die Menschen Hinter <em>Kaleidoskop</em>: Pädagog:Innen, Künstler:Innen,
            Visionär:Innen.
          </h2>
          <p>
            Wir Sind Ein Internationales Team Aus Erfahrenen Pädagog:Innen,
            Leidenschaftlichen Künstler:Innen Und Kreativen Köpfen. Uns Verbindet Der
            Glaube Daran, Dass Bildung Durch Begegnung Entsteht – Und Dass Jeder Mensch
            Etwas Einzigartiges Zu Geben Hat.
          </p>
        </aside>

        <div className="kal-about-team-main">
          <header className="kal-about-team-heading">
            <h3>Unser Team – Vielfältig, Kreativ, Engagiert</h3>
            <p>Hinter Jedem Projekt Steht Ein Mensch Mit Herz Und Vision.</p>
          </header>

          <ul className="kal-about-team-list">
            {MEMBERS.map((member) => (
              <TeamMemberRow key={member.id} member={member} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutTeamSection

