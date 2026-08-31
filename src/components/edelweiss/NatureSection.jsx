import roomImage from '../../assets/edelweiss/nature-room.png'

const TITLE_LINES = [
  'Edelweiss',
  'Immaculate by',
  'Nature,',
  'Perfected by Us.',
]

const BODY = [
  'Life moves fast—meetings, deadlines, responsibilities. Your time is precious, and cleaning shouldn’t take it away. At Edelweiss, we take care of your space so you can focus on what truly matters.',
  'With 15+ locations, 200+ professionally trained specialists, and a commitment to excellence, Edelweiss delivers immaculate results every time—whether at home, at work, or in hospitality spaces.',
  'Why spend your valuable time on tasks that take you away from what you love? Let us handle the cleaning while you enjoy life’s meaningful moments.',
]

export default function NatureSection() {
  return (
    <section className="edw-nature" aria-labelledby="edw-nature-title">
      <div className="edw-nature-grid">
        <div className="edw-nature-sticky">
          <h2 id="edw-nature-title" className="edw-nature-title">
            {TITLE_LINES.map((line) => (
              <span key={line} className="edw-nature-title-line">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="edw-nature-scroll">
          <img
            src={roomImage}
            alt="Minimal interior with floor-to-ceiling window overlooking a snowy forest"
            className="edw-nature-image"
          />

          <div className="edw-nature-copy">
            {BODY.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <a href="#contact" className="edw-nature-link">
              Contact your local Edelweiss today and experience pristine perfection.
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
