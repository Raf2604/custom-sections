import { IconArrowCircle } from './icons.jsx'

export default function HotDealsHeroCard({ image, city, description }) {
  return (
    <article className="bt-deals-hero-card">
      <img src={image} alt="" className="bt-deals-hero-card__image" draggable={false} />
      <div className="bt-deals-hero-card__overlay" aria-hidden="true" />

      <div className="bt-deals-hero-card__content">
        <div className="bt-deals-hero-card__copy">
          <h3 className="bt-deals-hero-card__city">{city}</h3>
          <p className="bt-deals-hero-card__description">{description}</p>
        </div>

        <button
          type="button"
          className="bt-deals-hero-card__arrow"
          aria-label={`Explore ${city}`}
        >
          <IconArrowCircle />
        </button>
      </div>
    </article>
  )
}
