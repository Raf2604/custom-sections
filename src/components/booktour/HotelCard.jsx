import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { IconHeart, IconStar } from './icons.jsx'

const SLIDE_TRANSITION = {
  type: 'spring',
  stiffness: 320,
  damping: 32,
  mass: 0.85,
}

function dotScale(index, activeIndex) {
  const distance = Math.abs(index - activeIndex)
  if (distance <= 2) return 1
  if (distance === 3) return 4 / 6
  return 2 / 6
}

export default function HotelCard({
  images,
  location,
  rating,
  title,
  description,
  price,
  bookHref = '#',
}) {
  const mediaRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [liked, setLiked] = useState(false)

  const total = images.length

  useEffect(() => {
    const media = mediaRef.current
    if (!media) return undefined

    const updateWidth = () => setSlideWidth(media.offsetWidth)
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(media)

    return () => observer.disconnect()
  }, [])

  const goTo = useCallback(
    (index) => {
      if (index === activeSlide) return
      setActiveSlide(index)
    },
    [activeSlide],
  )

  const goNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + total) % total)
  }, [total])

  const handleDragEnd = (_, info) => {
    const threshold = 40
    if (info.offset.x <= -threshold || info.velocity.x <= -280) goNext()
    else if (info.offset.x >= threshold || info.velocity.x >= 280) goPrev()
  }

  return (
    <article className="bt-hotel-card">
      <div
        ref={mediaRef}
        className="bt-hotel-card__media"
        style={slideWidth ? { '--bt-slide-width': `${slideWidth}px` } : undefined}
      >
        <motion.div
          className="bt-hotel-card__carousel"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={handleDragEnd}
        >
          <motion.div
            className="bt-hotel-card__track"
            animate={{ x: -activeSlide * slideWidth }}
            transition={SLIDE_TRANSITION}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="bt-hotel-card__image"
                draggable={false}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          type="button"
          className={`bt-hotel-card__favorite${liked ? ' is-liked' : ''}`}
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={liked}
          onClick={() => setLiked((prev) => !prev)}
          whileTap={{ scale: 0.86 }}
          animate={{ scale: liked ? [1, 1.22, 1] : 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <IconHeart filled={liked} />
        </motion.button>

        <div className="bt-hotel-card__dots" aria-hidden="true">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`bt-hotel-card__dot${index === activeSlide ? ' is-active' : ''}`}
              style={{ '--bt-dot-scale': dotScale(index, activeSlide) }}
              aria-label={`Show image ${index + 1}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>

      <div className="bt-hotel-card__tags">
        <span className="bt-hotel-card__tag bt-hotel-card__tag--location">{location}</span>
        <span className="bt-hotel-card__tag bt-hotel-card__tag--rating">
          <IconStar />
          <span>{rating.toFixed(1)}</span>
        </span>
      </div>

      <h3 className="bt-hotel-card__title">{title}</h3>
      <p className="bt-hotel-card__description">{description}</p>

      <div className="bt-hotel-card__footer">
        <span className="bt-hotel-card__price">{price}</span>
        <span className="bt-hotel-card__separator" aria-hidden="true">
          |
        </span>
          <a href={bookHref} className="bt-hotel-card__book bt-link-underline">
            Book Now
          </a>
      </div>
    </article>
  )
}
