import { BOOKTOUR_HOT_DEALS_HOTELS, HOT_DEALS_INTRO } from '../../data/booktourHotels.js'
import HotelCard from './HotelCard.jsx'

/** Hot Deals hotels block — duplicated so it can diverge from the home HotelsSection. */
export default function HotDealsHotelsSection() {
  return (
    <section className="bt-hotels bt-hotels--deals" aria-labelledby="bt-deals-title">
      <div className="bt-deals-head">
        <h1 id="bt-deals-title" className="bt-deals-title">
          Experiences Unfold
        </h1>
        <p className="bt-deals-intro">{HOT_DEALS_INTRO}</p>
      </div>

      <div className="bt-hotels-grid">
        {BOOKTOUR_HOT_DEALS_HOTELS.map((hotel) => (
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
