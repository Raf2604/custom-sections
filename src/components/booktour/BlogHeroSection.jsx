import heroImage from '../../assets/booktour/blog/hero.png'

export default function BlogHeroSection() {
  return (
    <section className="bt-blog-hero" aria-labelledby="bt-blog-hero-title">
      <div className="bt-blog-hero__inner">
        <div className="bt-blog-hero__copy">
          <p className="bt-blog-hero__date">October 2</p>
          <h1 id="bt-blog-hero-title" className="bt-blog-hero__title">
            To celebrate the highly anticipated third season of Ted Lasso, loveable pub
            owner Mae
          </h1>
          <button type="button" className="bt-blog-hero__btn">
            View More
          </button>
        </div>

        <div className="bt-blog-hero__media">
          <img src={heroImage} alt="" className="bt-blog-hero__image" />
        </div>
      </div>
    </section>
  )
}
