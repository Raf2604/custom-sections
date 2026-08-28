import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CourseGallery from '../../components/kaleidoskop/CourseGallery.jsx'
import CourseModal from '../../components/kaleidoskop/CourseModal.jsx'
import {
  IconCalendar,
  IconCategory,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconPerson,
  IconSearch,
} from '../../components/kaleidoskop/icons.jsx'
import { COURSES } from '../../data/kaleidoskopCourses.js'
import heroBg from '../../assets/kaleidoskop/courses-hero-bg.png'

const CATEGORIES = ['Alle', 'Choreografie', 'Tanz', 'Theater', 'Street', 'Performance']
const AGES = ['Alle', '5–7', '10–14', '12–16', '14–18', '15–19']
const TOTAL_PAGES = 9

export default function KaleidoskopCourses() {
  const [category, setCategory] = useState('')
  const [categoryTwo, setCategoryTwo] = useState('')
  const [age, setAge] = useState('')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [activeCourse, setActiveCourse] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return COURSES.filter((course) => {
      const matchCat =
        (!category || category === 'Alle' || course.category === category) &&
        (!categoryTwo || categoryTwo === 'Alle' || course.category === categoryTwo)
      const matchAge =
        !age || age === 'Alle' || course.age.toLowerCase().includes(age.toLowerCase())
      const matchQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q)
      return matchCat && matchAge && matchQuery
    })
  }, [age, category, categoryTwo, query])

  const openCourse = (course) => {
    setActiveCourse(course)
    setModalOpen(true)
  }

  const closeCourse = () => {
    setModalOpen(false)
  }

  const stopBubble = (e) => {
    e.stopPropagation()
  }

  return (
    <main className="kal-courses">
      <section className="kal-courses-hero" aria-label="Kurse Hero">
        <div className="kal-courses-hero-media" aria-hidden="true">
          <img src={heroBg} alt="" className="kal-courses-hero-bg" />
          <div className="kal-courses-hero-overlay" />
        </div>

        <div className="kal-courses-hero-content">
          <h1>Finde Deinen Kurs. Und Vielleicht Auch Dich Selbst.</h1>
          <p>
            Bei Kaleidoskop Findest Du Kreative, Tänzerische Und Theatralische Kurse Für
            Alle Altersgruppen – Vom Ersten Tutu Bis Zur Großen Performance.
          </p>
          <nav className="kal-courses-breadcrumb" aria-label="Brotkrumen">
            <Link to="/kaleidoskop" className="kal-crumb-muted">
              Startseite
            </Link>
            <span className="kal-crumb-dot" aria-hidden="true">
              •
            </span>
            <span className="kal-crumb-current">Kurse</span>
          </nav>
        </div>

        <div className="kal-courses-hero-rule" aria-hidden="true" />
      </section>

      <section className="kal-courses-panel" aria-label="Kursliste">
        <form
          className="kal-courses-filters"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <label className="kal-filter-field">
            <span className="visually-hidden">Kurskategorie</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Kurskategorie"
            >
              <option value="">Kurskategorie</option>
              {CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </label>

          <label className="kal-filter-field">
            <span className="visually-hidden">Kurskategorie</span>
            <select
              value={categoryTwo}
              onChange={(e) => setCategoryTwo(e.target.value)}
              aria-label="Kurskategorie 2"
            >
              <option value="">Kurskategorie</option>
              {CATEGORIES.map((item) => (
                <option key={`b-${item}`} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </label>

          <label className="kal-filter-field">
            <span className="visually-hidden">Alter</span>
            <select value={age} onChange={(e) => setAge(e.target.value)} aria-label="Alter">
              <option value="">Alter</option>
              {AGES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </label>

          <label className="kal-filter-field is-search">
            <span className="visually-hidden">Suche</span>
            <input
              type="search"
              placeholder="Suche"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Suche"
            />
            <IconSearch />
          </label>
        </form>

        <ul className="kal-course-list">
          {filtered.map((course) => (
            <li
              className="kal-course-item is-clickable"
              key={course.id}
              onClick={() => openCourse(course)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openCourse(course)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${course.title} öffnen`}
            >
              <div className="kal-course-copy">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <ul className="kal-course-meta">
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
                <div className="kal-course-actions" onClick={stopBubble} onKeyDown={stopBubble}>
                  <button type="button" className="kal-filled-btn">
                    Mehr Zum Kurs
                  </button>
                  <button type="button" className="kal-outline-btn">
                    Zum Stundenplan
                  </button>
                </div>
              </div>

              <div onClick={stopBubble} onKeyDown={stopBubble} role="presentation">
                <CourseGallery images={course.images} title={course.title} />
              </div>
            </li>
          ))}
        </ul>

        <nav className="kal-pagination" aria-label="Seiten">
          <button
            type="button"
            className="kal-page-btn"
            aria-label="Vorherige Seite"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <IconChevronLeft />
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              type="button"
              className={`kal-page-btn${page === n ? ' is-active' : ''}`}
              aria-current={page === n ? 'page' : undefined}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}

          <span className="kal-page-btn is-gap" aria-hidden="true">
            -
          </span>

          <button
            type="button"
            className={`kal-page-btn${page === TOTAL_PAGES ? ' is-active' : ''}`}
            onClick={() => setPage(TOTAL_PAGES)}
          >
            {TOTAL_PAGES}
          </button>

          <button
            type="button"
            className="kal-page-btn"
            aria-label="Nächste Seite"
            disabled={page >= TOTAL_PAGES}
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          >
            <IconChevronRight />
          </button>
        </nav>
      </section>

      <CourseModal course={activeCourse} isOpen={modalOpen} onClose={closeCourse} />
    </main>
  )
}
