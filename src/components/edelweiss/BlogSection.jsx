import { BLOG_CARDS, BLOG_FEATURE } from '../../data/edelweissBlog.js'
import { IconBlogCardArrow, IconBlogFeatureArrow } from './icons.jsx'

export default function BlogSection() {
  return (
    <section className="edw-blog" aria-labelledby="edw-blog-feature-title">
      <div className="edw-blog-grid">
        <article className="edw-blog-feature">
          <img
            src={BLOG_FEATURE.image}
            alt={BLOG_FEATURE.imageAlt}
            className="edw-blog-feature-img"
          />
          <div className="edw-blog-feature-gradient" aria-hidden="true" />
          <div className="edw-blog-feature-body">
            <h2 id="edw-blog-feature-title" className="edw-blog-feature-title">
              {BLOG_FEATURE.title}
            </h2>
            <p className="edw-blog-feature-desc">{BLOG_FEATURE.description}</p>
            <a
              href={BLOG_FEATURE.href}
              className="edw-blog-feature-arrow"
              aria-label={`Read more: ${BLOG_FEATURE.title}`}
            >
              <IconBlogFeatureArrow />
            </a>
          </div>
        </article>

        <div className="edw-blog-cards">
          {BLOG_CARDS.map((card) => (
            <article key={card.id} className="edw-blog-card">
              <h3 className="edw-blog-card-title">{card.title}</h3>
              <div className="edw-blog-card-footer">
                <p className="edw-blog-card-desc">{card.description}</p>
                <a
                  href={card.href}
                  className="edw-blog-card-arrow"
                  aria-label={`Read more: ${card.title}`}
                >
                  <IconBlogCardArrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
