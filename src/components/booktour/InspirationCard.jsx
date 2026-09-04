import { IconArrowCircle } from './icons.jsx'

export default function InspirationCard({ image, country, city, description }) {
  return (
    <article className="bt-inspiration-card">
      <img src={image} alt="" className="bt-inspiration-card__image" draggable={false} />
      <div className="bt-inspiration-card__overlay" aria-hidden="true" />

      <div className="bt-inspiration-card__content">
        <div className="bt-inspiration-card__copy">
          <p className="bt-inspiration-card__country">{country}</p>
          <h3 className="bt-inspiration-card__city">{city}</h3>
          <p className="bt-inspiration-card__description">{description}</p>
        </div>

        <button type="button" className="bt-inspiration-card__arrow" aria-label={`Explore ${city}`}>
          <IconArrowCircle />
        </button>
      </div>
    </article>
  )
}
