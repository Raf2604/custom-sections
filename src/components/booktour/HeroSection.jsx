import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import heroImage from '../../assets/booktour/hero.png'
import { useBooktourSearch } from './BooktourSearchContext.jsx'
import BooktourSearchBar from './BooktourSearchBar.jsx'

const RAISE_TOP = 95

export default function HeroSection() {
  const { engaged, uiHost } = useBooktourSearch()
  const heroEngaged = engaged && uiHost === 'hero'

  const mediaRef = useRef(null)
  const stackRef = useRef(null)

  const updateStackPosition = (animate = true) => {
    const media = mediaRef.current
    const stack = stackRef.current
    if (!media || !stack) return

    const mediaHeight = media.clientHeight
    const stackHeight = stack.offsetHeight
    const centeredTop = Math.max(RAISE_TOP, (mediaHeight - stackHeight) / 2)
    const targetY = heroEngaged ? RAISE_TOP : centeredTop

    if (animate) {
      gsap.to(stack, {
        y: targetY,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    } else {
      gsap.set(stack, { y: targetY })
    }
  }

  useLayoutEffect(() => {
    updateStackPosition(false)
  }, [])

  useLayoutEffect(() => {
    updateStackPosition(true)
  }, [heroEngaged])

  useEffect(() => {
    const onResize = () => updateStackPosition(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [heroEngaged])

  return (
    <section className="bt-hero" aria-label="Hero">
      <div ref={mediaRef} className="bt-hero-media">
        <img src={heroImage} alt="" className="bt-hero-media__image" />

        <div className="bt-hero-content">
          <div ref={stackRef} className="bt-hero-content__stack">
            <h1 className="bt-hero-title">Enjoy the best moments of life</h1>
            <BooktourSearchBar variant="hero" />
            <p className="bt-hero-subtitle">Discover the nature new travel</p>
          </div>
        </div>
      </div>
    </section>
  )
}
