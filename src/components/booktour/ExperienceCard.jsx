export default function ExperienceCard({
  image,
  title,
  description,
  status,
  titleColor,
  descriptionColor,
  statusColor,
  column,
}) {
  const columnClass =
    column === 0 ? 'is-edge-left' : column === 2 ? 'is-edge-right' : 'is-center'

  return (
    <article className={`bt-experience-card ${columnClass}`}>
      <img src={image} alt="" className="bt-experience-card__image" />
      <div className="bt-experience-card__overlay" aria-hidden="true" />

      <div className="bt-experience-card__content">
        <div className="bt-experience-card__head">
          <h3 className="bt-experience-card__title" style={{ color: titleColor }}>
            {title}
          </h3>
          <p
            className="bt-experience-card__description"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>

        <p className="bt-experience-card__status" style={{ color: statusColor }}>
          {status}
        </p>
      </div>
    </article>
  )
}
