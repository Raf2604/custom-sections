import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IconGalleryArrow } from './icons.jsx'

const VISIBLE = 2

function CourseGallery({ images = [], title }) {
  const n = images.length
  const canSlide = n > VISIBLE
  const trackRef = useRef(null)
  const [index, setIndex] = useState(() => (n > VISIBLE ? n : 0))
  const [instant, setInstant] = useState(false)
  const [locked, setLocked] = useState(false)

  const slides = canSlide ? [...images, ...images, ...images] : images

  useEffect(() => {
    setIndex(canSlide ? n : 0)
    setInstant(false)
    setLocked(false)
  }, [n, canSlide])

  useLayoutEffect(() => {
    if (!instant) return undefined
    const id = requestAnimationFrame(() => {
      setInstant(false)
    })
    return () => cancelAnimationFrame(id)
  }, [instant, index])

  const go = (dir, e) => {
    e?.stopPropagation()
    if (!canSlide || locked) return
    setLocked(true)
    setInstant(false)
    setIndex((prev) => prev + dir)
  }

  const onGalleryClick = (e) => {
    e.stopPropagation()
  }

  const onTransitionEnd = (event) => {
    if (event.target !== trackRef.current) return
    if (!canSlide) return

    if (index >= n * 2) {
      setInstant(true)
      setIndex((prev) => prev - n)
    } else if (index < n) {
      setInstant(true)
      setIndex((prev) => prev + n)
    }

    setLocked(false)
  }

  if (!n) return null

  return (
    <div
      className={`kal-course-gallery${canSlide ? ' is-slider' : ''}`}
      onClick={onGalleryClick}
      onKeyDown={onGalleryClick}
      role="presentation"
    >
      <div className="kal-course-gallery-viewport">
        <div
          ref={trackRef}
          className={`kal-course-gallery-track${instant ? ' is-instant' : ''}`}
          style={{
            transform: canSlide
              ? `translateX(calc(-${index} * (var(--kal-course-img-w) + var(--kal-course-img-gap))))`
              : undefined,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((src, i) => (
            <div className="kal-course-gallery-slide" key={`${title}-${i}`}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {canSlide ? (
        <>
          <button
            type="button"
            className="kal-course-gallery-nav is-prev"
            aria-label="Vorherige Bilder"
            onClick={(e) => go(-1, e)}
          >
            <IconGalleryArrow className="is-left" />
          </button>
          <button
            type="button"
            className="kal-course-gallery-nav is-next"
            aria-label="Nächste Bilder"
            onClick={(e) => go(1, e)}
          >
            <IconGalleryArrow />
          </button>
        </>
      ) : null}
    </div>
  )
}

export { CourseGallery }
export default CourseGallery
