import { useState } from 'react'
import { motion } from 'motion/react'
import {
  TRUST_HEADING_LINES,
  TRUST_INTRO,
  TRUST_TABS,
} from '../../data/edelweissTrustTabs.js'

const TRUST_CORNER_ORIGIN = '100% 0%'

const TRUST_PANEL_ACTIVE = {
  opacity: 1,
  scale: 1,
  zIndex: 2,
}

const TRUST_PANEL_INACTIVE = {
  opacity: 0,
  scale: 0.58,
  zIndex: 1,
}

function getTrustPanelTransition(isActive) {
  if (isActive) {
    return {
      opacity: { duration: 0.34, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
      scale: {
        type: 'spring',
        stiffness: 240,
        damping: 22,
        mass: 0.88,
      },
      zIndex: { delay: 0 },
    }
  }

  return {
    opacity: { duration: 0.24, ease: [0.4, 0, 0.85, 1] },
    scale: { duration: 0.42, ease: [0.55, 0.06, 0.85, 0.35] },
    zIndex: { delay: 0.18 },
  }
}

export default function TrustSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="edw-trust" aria-labelledby="edw-trust-heading">
      <div className="edw-trust-header">
        <h2 id="edw-trust-heading" className="edw-trust-heading">
          {TRUST_HEADING_LINES.map((line) => (
            <span key={line} className="edw-trust-heading-line">
              {line}
            </span>
          ))}
        </h2>
        <p className="edw-trust-intro">{TRUST_INTRO}</p>
      </div>

      <div className="edw-trust-tabs">
        <div className="edw-trust-tabs-inner">
          <div className="edw-trust-tabs-list" role="tablist" aria-label="Edelweiss benefits">
            {TRUST_TABS.map((item, index) => {
              const isActive = index === activeTab

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`edw-trust-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`edw-trust-panel-${item.id}`}
                  className={`edw-trust-tab${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="edw-trust-tab-label">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
        <div className="edw-trust-tabs-divider" aria-hidden="true" />
      </div>

      <div className="edw-trust-panel-stage">
        {TRUST_TABS.map((item, index) => {
          const isActive = index === activeTab

          return (
            <motion.div
              key={item.id}
              id={`edw-trust-panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`edw-trust-tab-${item.id}`}
              aria-hidden={!isActive}
              className="edw-trust-panel"
              initial={false}
              animate={isActive ? TRUST_PANEL_ACTIVE : TRUST_PANEL_INACTIVE}
              transition={getTrustPanelTransition(isActive)}
              style={{
                transformOrigin: TRUST_CORNER_ORIGIN,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <div className={`edw-trust-images edw-trust-images--${item.imageLayout}`}>
                <img
                  src={item.images[0]}
                  alt={item.imageAlts[0]}
                  className="edw-trust-img edw-trust-img--main"
                  loading="eager"
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding={isActive ? 'sync' : 'async'}
                  draggable={false}
                />
                <img
                  src={item.images[1]}
                  alt={item.imageAlts[1]}
                  className="edw-trust-img edw-trust-img--stack-top"
                  loading="eager"
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding={isActive ? 'sync' : 'async'}
                  draggable={false}
                />
                <img
                  src={item.images[2]}
                  alt={item.imageAlts[2]}
                  className="edw-trust-img edw-trust-img--stack-bottom"
                  loading="eager"
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding={isActive ? 'sync' : 'async'}
                  draggable={false}
                />
              </div>

              <div className="edw-trust-copy">
                <h3 className="edw-trust-copy-title">{item.title}</h3>
                <p className="edw-trust-copy-desc">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
