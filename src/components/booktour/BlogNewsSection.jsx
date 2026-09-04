import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { BLOG_NEWS_TABS } from '../../data/booktourBlogNews.js'
import BlogNewsCard from './BlogNewsCard.jsx'

export default function BlogNewsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  const posts = BLOG_NEWS_TABS[activeTab].posts

  useGSAP(
    () => {
      const grid = gridRef.current
      if (!grid) return

      const cards = grid.querySelectorAll('.bt-blog-news-card')
      gsap.killTweensOf(cards)

      gsap.fromTo(
        cards,
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          overwrite: 'auto',
          clearProps: 'filter,transform',
        },
      )
    },
    { dependencies: [activeTab], scope: sectionRef },
  )

  const onTabChange = (tabIndex) => {
    if (tabIndex === activeTab) return
    setActiveTab(tabIndex)
  }

  return (
    <section
      ref={sectionRef}
      className="bt-blog-news"
      aria-labelledby="bt-blog-news-title"
    >
      <h2 id="bt-blog-news-title" className="bt-blog-news__title">
        News By Topic
      </h2>

      <div className="bt-blog-news__divider" aria-hidden="true" />

      <div className="bt-blog-news-tabs" role="tablist" aria-label="News topics">
        {BLOG_NEWS_TABS.map((tab, tabIndex) => {
          const isActive = tabIndex === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`bt-inspiration-tab${isActive ? ' is-active' : ''}`}
              onClick={() => onTabChange(tabIndex)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div ref={gridRef} className="bt-blog-news-grid">
        {posts.map((post) => (
          <BlogNewsCard key={post.id} {...post} />
        ))}
      </div>

      <div className="bt-blog-news-more">
        <button type="button" className="bt-blog-news-more__btn">
          Load More
        </button>
      </div>
    </section>
  )
}
