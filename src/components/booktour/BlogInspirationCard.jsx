export default function BlogInspirationCard({
  image,
  title,
  city,
  country,
  description,
  price,
  titleColor,
  locationColor,
  href = '#',
}) {
  return (
    <article className="bt-blog-insp-card">
      <div className="bt-blog-insp-card__media">
        <img src={image} alt="" className="bt-blog-insp-card__image" draggable={false} />
        <div className="bt-blog-insp-card__overlay" aria-hidden="true" />
        <div className="bt-blog-insp-card__caption">
          <h3 className="bt-blog-insp-card__title" style={{ color: titleColor }}>
            {title}
          </h3>
          <p className="bt-blog-insp-card__location" style={{ color: locationColor }}>
            {city}, {country}
          </p>
        </div>
      </div>

      <p className="bt-blog-insp-card__description">{description}</p>

      <div className="bt-blog-insp-card__footer">
        <span className="bt-blog-insp-card__price">{price}</span>
        <span className="bt-blog-insp-card__separator" aria-hidden="true">
          |
        </span>
        <a href={href} className="bt-hotel-card__book bt-link-underline">
          Read More
        </a>
      </div>
    </article>
  )
}
