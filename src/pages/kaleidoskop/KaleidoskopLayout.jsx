import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../../components/kaleidoskop/Footer.jsx'
import { IconNavChevron } from '../../components/kaleidoskop/icons.jsx'
import logo from '../../assets/kaleidoskop/logo.png'
import './kaleidoskop.css'

const links = [
  { to: '/kaleidoskop', label: 'Home', end: true },
  { to: '/kaleidoskop/about', label: 'About' },
  { to: '/kaleidoskop/courses', label: 'Courses' },
]

export default function KaleidoskopLayout() {
  return (
    <div className="kaleidoskop">
      <header className="kal-header">
        <nav className="kal-nav-left" aria-label="Kaleidoskop">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'kal-nav-link is-active' : 'kal-nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/kaleidoskop" className="kal-logo" end aria-label="Kaleidoskop home">
          <img src={logo} alt="Kaleidoskop" />
        </NavLink>

        <div className="kal-nav-right">
          <a href="#follow" className="kal-utility">
            <IconNavChevron />
            <span>Follow Us</span>
          </a>
          <span className="kal-divider" aria-hidden="true" />
          <button type="button" className="kal-utility kal-lang" aria-haspopup="listbox">
            <span>Ru</span>
            <IconNavChevron className="kal-icon-chevron-down" />
          </button>
          <span className="kal-divider" aria-hidden="true" />
          <a href="#kontakt" className="kal-utility">
            Kontakt
          </a>
        </div>
      </header>

      <Outlet />
      <Footer />
    </div>
  )
}
