import { useState } from 'react'
import { SERVICE_PANELS } from '../../data/edelweissServices.js'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section
      className={`edw-services${activeIndex !== null ? ' has-active' : ''}`}
      aria-label="Edelweiss cleaning services"
      onMouseLeave={() => setActiveIndex(null)}
    >
      {SERVICE_PANELS.map((panel, index) => {
        const isActive = activeIndex === index
        const isCompact = activeIndex !== null && !isActive

        return (
          <article
            key={panel.id}
            className={`edw-service-panel${isActive ? ' is-active' : ''}${isCompact ? ' is-compact' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="edw-service-media" aria-hidden="true">
              <img src={panel.image} alt="" />
              <div className="edw-service-gradient" />
            </div>

            <div className="edw-service-content">
              <h3 className="edw-service-heading">
                <span>{panel.line1}</span>
                <span>{panel.line2}</span>
              </h3>

              {panel.description ? (
                <p className="edw-service-desc" aria-hidden={!isActive}>
                  {panel.description}
                </p>
              ) : null}

              <a href="#services" className="edw-service-more">
                View More
              </a>
            </div>
          </article>
        )
      })}
    </section>
  )
}
