import { BOOKTOUR_HOTELS } from '../../data/booktourHotels.js'
import HotelCard from './HotelCard.jsx'

export default function HotelsSection() {
  return (
    <section className="bt-hotels" aria-label="Hotels">
      <div className="bt-hotels-grid">
        {BOOKTOUR_HOTELS.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </div>

      <div className="bt-hotels-more-wrap">
        <button type="button" className="bt-hotels-more">
          View More
        </button>
      </div>
    </section>
  )
}
