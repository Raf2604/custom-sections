import { useCallback, useState } from 'react'
import { motion } from 'motion/react'
import sideImage from '../../assets/edelweiss/reviews-side.png'
import {
  REVIEW_CARD_THEMES,
  REVIEWS,
  REVIEWS_TITLE_LINES,
} from '../../data/edelweissReviews.js'
import { IconReviewNavArrow } from './icons.jsx'

const FLIP_MS = 420
const FLIP_EASE = [0.42, 0, 0.18, 1]

/** Each step is smaller than the last — cards pack tighter deeper in the stack */
function buildSideStack(sign) {
  const xGaps = [26, 22, 19]
  const yGaps = [-10, -8, -7]
  const zGaps = [-72, -58, -48]
  const rotGaps = [1.7, 1.45, 1.25]

  let x = 0
  let y = 0
  let z = 0
  let rotateZ = 0

  return xGaps.map((xGap, index) => {
    x += xGap * sign
    y += yGaps[index]
    z += zGaps[index]
    rotateZ += rotGaps[index] * sign
    return { x, y, z, rotateZ }
  })
}

const RIGHT_STACK = buildSideStack(1)
const LEFT_STACK = buildSideStack(-1)

function getCardTransform(cardIndex, activeIndex) {
  if (cardIndex === activeIndex) {
    return { x: 0, y: 0, z: 0, rotateZ: 0, zIndex: 40, origin: '50% 50%' }
  }

  if (cardIndex < activeIndex) {
    const slot = activeIndex - cardIndex - 1
    const preset = LEFT_STACK[slot] ?? LEFT_STACK[LEFT_STACK.length - 1]
    return {
      ...preset,
      zIndex: 22 - slot,
      origin: '100% 50%',
    }
  }

  const slot = cardIndex - activeIndex - 1
  const preset = RIGHT_STACK[slot] ?? RIGHT_STACK[RIGHT_STACK.length - 1]
  return {
    ...preset,
    zIndex: 36 - slot,
    origin: '0% 50%',
  }
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragX, setDragX] = useState(0)

  const canGoPrev = activeIndex > 0
  const canGoNext = activeIndex < REVIEWS.length - 1

  const paginate = useCallback((direction) => {
    setDragX(0)
    setActiveIndex((index) => {
      const next = index + direction
      if (next < 0 || next >= REVIEWS.length) return index
      return next
    })
  }, [])

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x
    setDragX(0)

    if (offset < -72 || info.velocity.x < -450) {
      paginate(1)
      return
    }
    if (offset > 72 || info.velocity.x > 450) {
      paginate(-1)
    }
  }

  return (
    <section className="edw-reviews" aria-labelledby="edw-reviews-title">
      <img
        src={sideImage}
        alt=""
        className="edw-reviews-side"
        aria-hidden="true"
      />

      <div className="edw-reviews-inner">
        <h2 id="edw-reviews-title" className="edw-reviews-title">
          {REVIEWS_TITLE_LINES.map((line) => (
            <span key={line} className="edw-reviews-title-line">
              {line}
            </span>
          ))}
        </h2>

        <div className="edw-reviews-carousel">
          <button
            type="button"
            className="edw-reviews-nav"
            aria-label="Previous review"
            disabled={!canGoPrev}
            onClick={() => paginate(-1)}
          >
            <IconReviewNavArrow direction="left" disabled={!canGoPrev} />
          </button>

          <div className="edw-reviews-stack">
            {REVIEWS.map((review, cardIndex) => {
              const isFront = cardIndex === activeIndex
              const theme = REVIEW_CARD_THEMES[cardIndex]
              const transform = getCardTransform(cardIndex, activeIndex)

              return (
                <motion.article
                  key={review.id}
                  className="edw-review-card"
                  style={{
                    zIndex: transform.zIndex,
                    background: theme.background,
                    borderColor: theme.border,
                    transformOrigin: transform.origin,
                    pointerEvents: isFront ? 'auto' : 'none',
                  }}
                  animate={{
                    x: transform.x + (isFront ? dragX : 0),
                    y: transform.y,
                    z: transform.z,
                    rotateZ: transform.rotateZ + (isFront ? dragX * 0.015 : 0),
                    scale: 1,
                  }}
                  transition={{
                    duration: FLIP_MS / 1000,
                    ease: FLIP_EASE,
                  }}
                  drag={isFront ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.08}
                  onDrag={(_, info) => {
                    if (isFront) setDragX(info.offset.x)
                  }}
                  onDragEnd={handleDragEnd}
                >
                  <time className="edw-review-date" dateTime={review.date}>
                    {review.date}
                  </time>
                  <p className="edw-review-text">&ldquo;{review.text}&rdquo;</p>
                  <div className="edw-review-divider" aria-hidden="true" />
                  <p className="edw-review-name">─ {review.name}</p>
                </motion.article>
              )
            })}
          </div>

          <button
            type="button"
            className="edw-reviews-nav"
            aria-label="Next review"
            disabled={!canGoNext}
            onClick={() => paginate(1)}
          >
            <IconReviewNavArrow direction="right" disabled={!canGoNext} />
          </button>
        </div>
      </div>
    </section>
  )
}
