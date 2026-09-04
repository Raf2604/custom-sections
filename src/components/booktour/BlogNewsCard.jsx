export default function BlogNewsCard({ image, title, date }) {
  return (
    <article className="bt-blog-news-card">
      <img src={image} alt="" className="bt-blog-news-card__image" />
      <h3 className="bt-blog-news-card__title">{title}</h3>
      <p className="bt-blog-news-card__date">{date}</p>
    </article>
  )
}
