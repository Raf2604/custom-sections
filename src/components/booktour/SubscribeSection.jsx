import subscribeBg from '../../assets/booktour/subscribe-bg.png'

export default function SubscribeSection() {
  return (
    <section className="bt-subscribe" aria-labelledby="bt-subscribe-title">
      <div className="bt-subscribe-banner">
        <img
          src={subscribeBg}
          alt=""
          className="bt-subscribe-banner__bg"
          aria-hidden="true"
        />

        <div className="bt-subscribe-banner__content">
          <p className="bt-subscribe-kicker">Join Our Community</p>

          <h2 id="bt-subscribe-title" className="bt-subscribe-title">
            <span className="bt-subscribe-title__bold">Be Notified With </span>
            <span className="bt-subscribe-title__light">New Trips,</span>
            <br />
            <span className="bt-subscribe-title__light">Gear Reviews &amp; </span>
            <span className="bt-subscribe-title__accent">Special Offers</span>
          </h2>

          <form
            className="bt-subscribe-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="bt-subscribe-form__field">
              <span className="sr-only">Your email</span>
              <input type="email" name="email" placeholder="Your Email*" required />
            </label>
            <button type="submit" className="bt-subscribe-form__btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
