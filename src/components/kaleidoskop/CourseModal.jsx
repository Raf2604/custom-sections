import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  IconCalendar,
  IconCategory,
  IconClock,
  IconPerson,
} from './icons.jsx'
import {
  COURSE_DESCRIPTION_EXTRA,
  MODAL_GALLERY,
  SCHEDULE,
} from '../../data/kaleidoskopCourses.js'

function IconClose() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path
        d="M4.24268 12.7279L12.728 4.24265"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.728 12.7279L4.24268 4.24264"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ModalGallery() {
  const [a, b, c, d, e, f, g] = MODAL_GALLERY

  return (
    <div className="kal-modal-gallery">
      <div className="kal-modal-gallery-cell is-big">
        <img src={a} alt="" />
      </div>
      <div className="kal-modal-gallery-stack">
        <div className="kal-modal-gallery-cell is-small">
          <img src={b} alt="" />
        </div>
        <div className="kal-modal-gallery-cell is-small">
          <img src={c} alt="" />
        </div>
      </div>
      <div className="kal-modal-gallery-cell is-tall-top">
        <img src={d} alt="" />
      </div>
      <div className="kal-modal-gallery-cell is-bottom-left">
        <img src={e} alt="" />
      </div>
      <div className="kal-modal-gallery-cell is-bottom-mid">
        <img src={f} alt="" />
      </div>
      <div className="kal-modal-gallery-cell is-bottom-right">
        <img src={g} alt="" />
      </div>
    </div>
  )
}

function ModalSchedule({ selectedSlot, onSelectSlot }) {
  return (
    <div className="kal-modal-schedule">
      <h3>Dein Rhythmus. Dein Tag. Dein Kurs.</h3>
      <p>
        Hier findest du alle aktuellen Kurse sortiert nach Wochentagen, Altersgruppen und
        Themen. Wähle, was zu dir passt – und finde deinen Platz im Kaleidoskop.
      </p>
      <div className="kal-modal-schedule-grid">
        {SCHEDULE.map((row) => (
          <div className="kal-modal-schedule-row" key={row.day}>
            <div className="kal-modal-schedule-day">{row.day}</div>
            <div className="kal-modal-schedule-slots">
              {row.slots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  className={`kal-modal-slot${selectedSlot === slot.id ? ' is-selected' : ''}`}
                  onClick={() => onSelectSlot(slot.id)}
                >
                  <span className="kal-modal-slot-head">
                    <span className="kal-modal-slot-title">{slot.title}</span>
                    {slot.subtitle ? (
                      <span className="kal-modal-slot-subtitle">{slot.subtitle}</span>
                    ) : null}
                  </span>
                  <span className="kal-modal-slot-meta">
                    <span className="kal-modal-slot-room">{slot.room}</span>
                    <span className="kal-modal-slot-divider" aria-hidden="true" />
                    <span className="kal-modal-slot-time">{slot.time}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ModalContact() {
  return (
    <div className="kal-modal-contact">
      <div className="kal-modal-contact-card">
        <div className="kal-modal-contact-copy">
          <h3>Zögere Nicht – Schreib Uns Einfach.</h3>
          <p>
            Wir Sind Für Dich Da – Ob Du Mehr Über Unsere Programme Erfahren Möchtest,
            Unterstützung Brauchst Oder Einfach Nur Hallo Sagen Willst. Wir Melden Uns So
            Schnell Wie Möglich Zurück.
          </p>
        </div>
      </div>
      <div className="kal-modal-contact-card">
        <form
          className="kal-modal-form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="kal-modal-form-row">
            <label className="kal-modal-field">
              <span className="visually-hidden">Dein Name</span>
              <input type="text" name="name" placeholder="Dein Name Eingeben" />
            </label>
            <label className="kal-modal-field">
              <span className="visually-hidden">E-Mail</span>
              <input type="email" name="email" placeholder="Deine E-Mail-Adresse Eingeben" />
            </label>
          </div>
          <label className="kal-modal-field is-full">
            <span className="visually-hidden">Nachricht</span>
            <textarea name="message" rows={5} placeholder="Deine Nachricht Schreiben" />
          </label>
          <div className="kal-modal-form-footer">
            <button type="submit" className="kal-modal-submit">
              Nachricht Senden
            </button>
            <p className="kal-modal-legal">
              Alle Felder sind Pflichtfelder. Mit dem Absenden erklärst du dich mit unseren{' '}
              <a href="#agb">AGB</a> und{' '}
              <a href="#datenschutz">der Datenschutzerklärung einverstanden.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function CourseModal({ course, isOpen, onClose }) {
  const [tab, setTab] = useState('info')
  const [visible, setVisible] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('mo-1')
  const panelRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTab('info')
      setSelectedSlot('mo-1')
      requestAnimationFrame(() => setVisible(true))
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
    setVisible(false)
    document.body.style.overflow = ''
    return undefined
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen || !course) return null

  const handleClose = () => {
    setVisible(false)
    window.setTimeout(onClose, 320)
  }

  return createPortal(
    <div
      className={`kal-course-modal${visible ? ' is-visible' : ''}`}
      role="presentation"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        className={`kal-course-modal-panel${tab === 'schedule' ? ' is-schedule-tab' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="kal-course-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kal-course-modal-head">
          <div className="kal-course-modal-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'info'}
              className={`kal-modal-tab${tab === 'info' ? ' is-active' : ''}`}
              onClick={() => setTab('info')}
            >
              Kurzbeschreibung
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'schedule'}
              className={`kal-modal-tab${tab === 'schedule' ? ' is-active' : ''}`}
              onClick={() => setTab('schedule')}
            >
              Wann Findet Der Kurs Statt?
            </button>
          </div>
          <button
            type="button"
            className="kal-course-modal-close"
            aria-label="Schließen"
            onClick={handleClose}
          >
            <IconClose />
          </button>
        </div>

        <div className="kal-course-modal-rule is-header" aria-hidden="true" />

        <div className="kal-course-modal-body">
          <div
            className={`kal-course-modal-tabpanel${tab === 'info' ? ' is-active' : ''}`}
            role="tabpanel"
            aria-hidden={tab !== 'info'}
          >
            <h2 id="kal-course-modal-title" className="kal-course-modal-title">
              {course.title}
            </h2>
            <div className="kal-modal-text">
              <p>{course.description}</p>
              {COURSE_DESCRIPTION_EXTRA.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="kal-course-modal-rule is-soft" aria-hidden="true" />
            <ul className="kal-modal-meta">
              <li>
                <IconCalendar />
                <span>{course.day}</span>
              </li>
              <li>
                <IconClock />
                <span>{course.time}</span>
              </li>
              <li>
                <IconPerson />
                <span>{course.age}</span>
              </li>
              <li>
                <IconCategory />
                <span>{course.category}</span>
              </li>
            </ul>
            <div className="kal-course-modal-rule is-soft" aria-hidden="true" />
            <div className="kal-modal-gallery-wrap">
              <ModalGallery />
            </div>
          </div>

          <div
            className={`kal-course-modal-tabpanel${tab === 'schedule' ? ' is-active' : ''}`}
            role="tabpanel"
            aria-hidden={tab !== 'schedule'}
          >
            <ModalSchedule selectedSlot={selectedSlot} onSelectSlot={setSelectedSlot} />
          </div>
        </div>

        <div className="kal-course-modal-footer">
          <ModalContact />
        </div>
      </div>
    </div>,
    document.body,
  )
}
