import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { HERO_DESTINATIONS } from '../../data/booktourDestinations.js'
import { useBooktourSearch } from './BooktourSearchContext.jsx'
import { DestinationIcon } from './DestinationIcons.jsx'
import HeroDatePopup, {
  formatStayDate,
  formatStayDateRange,
} from './HeroDatePopup.jsx'
import HeroWhoPopup, { formatGuestSummary } from './HeroWhoPopup.jsx'
import { IconSearch } from './icons.jsx'

const DROPDOWN_TRANSITION = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
}

export default function BooktourSearchBar({ variant = 'hero' }) {
  const isHeader = variant === 'header'
  const prefix = isHeader ? 'bt-header-search' : 'bt-hero-search'
  const wrapClass = isHeader ? 'bt-header-search-wrap' : 'bt-hero-search-wrap'

  const {
    activeField,
    engaged,
    uiHost,
    whereQuery,
    setWhereQuery,
    selectedDestination,
    whereOpen,
    whoOpen,
    datesOpen,
    dateSelecting,
    checkIn,
    checkOut,
    checkInFlex,
    checkOutFlex,
    adults,
    setAdults,
    pets,
    setPets,
    childrenAges,
    setChildrenAges,
    selectField,
    dismiss,
    chooseDestination,
    handleCheckInChange,
    handleCheckOutChange,
    handleDateSelectingChange,
    handleFlexTagChange,
  } = useBooktourSearch()

  const isActiveHost = uiHost === variant
  const showPanels = isActiveHost && engaged
  const [highlightReady, setHighlightReady] = useState(false)

  const formRef = useRef(null)
  const wrapRef = useRef(null)
  const highlightRef = useRef(null)
  const whereRef = useRef(null)
  const whereInputRef = useRef(null)
  const checkInRef = useRef(null)
  const checkOutRef = useRef(null)
  const datesRef = useRef(null)
  const whoRef = useRef(null)

  const fieldRefs = {
    where: whereRef,
    'check-in': isHeader ? datesRef : checkInRef,
    'check-out': isHeader ? datesRef : checkOutRef,
    dates: datesRef,
    who: whoRef,
  }

  const filteredDestinations = useMemo(() => {
    const q = whereQuery.trim().toLowerCase()
    if (!q) return HERO_DESTINATIONS
    return HERO_DESTINATIONS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q),
    )
  }, [whereQuery])

  const openField = (fieldId) => {
    selectField(fieldId, variant)
    if (fieldId === 'where') {
      requestAnimationFrame(() => whereInputRef.current?.focus())
    }
  }

  const updateHighlight = () => {
    const form = formRef.current
    const highlight = highlightRef.current
    const target = fieldRefs[activeField]?.current
    if (!form || !highlight || !target) return

    const formRect = form.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()

    highlight.style.width = `${targetRect.width}px`
    highlight.style.transform = `translate3d(${targetRect.left - formRect.left}px, 0, 0)`

    if (!highlightReady) setHighlightReady(true)
  }

  useLayoutEffect(() => {
    updateHighlight()
  }, [
    activeField,
    selectedDestination,
    engaged,
    checkIn,
    checkOut,
    adults,
    pets,
    childrenAges,
    isActiveHost,
    variant,
  ])

  useEffect(() => {
    const onResize = () => updateHighlight()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeField, engaged])

  useEffect(() => {
    if (!showPanels) return undefined

    const onPointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) dismiss()
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') dismiss()
    }

    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [showPanels, dismiss])

  const whereDisplay = selectedDestination?.name
  const whereIsEditing = isActiveHost && activeField === 'where' && whereOpen
  const guestSummary = formatGuestSummary(adults, childrenAges, pets)
  const checkInLabel = formatStayDate(checkIn) || 'Add Dates'
  const checkOutLabel = formatStayDate(checkOut) || 'Add Dates'
  const datesLabel = formatStayDateRange(checkIn, checkOut) || 'Add Dates'
  const formEngaged = isActiveHost && engaged
  const highlightVisible = isHeader ? formEngaged && highlightReady : highlightReady
  const datesActive =
    formEngaged && (activeField === 'check-in' || activeField === 'check-out')

  const hideDivider = (left, right) => {
    const resolve = (field) => {
      if (!isHeader) return activeField === field
      if (field === 'dates') {
        return activeField === 'check-in' || activeField === 'check-out'
      }
      return activeField === field
    }
    const active = resolve(left) || resolve(right)
    return isHeader ? formEngaged && active : active
  }

  return (
    <div ref={wrapRef} className={wrapClass}>
      <form
        ref={formRef}
        className={`${prefix}${formEngaged ? ' is-engaged' : ''}`}
        onSubmit={(event) => event.preventDefault()}
        aria-label="Search stays"
      >
        <span
          ref={highlightRef}
          className={`${prefix}__highlight${highlightVisible ? ' is-ready' : ''}`}
          aria-hidden="true"
        />

        <div ref={whereRef} className={`${prefix}__slot ${prefix}__slot--where`}>
          <div
            className={`${prefix}__field${
              formEngaged && activeField === 'where' ? ' is-active' : ''
            }`}
            onClick={() => openField('where')}
          >
            <span className={`${prefix}__label`}>Where</span>
            {whereIsEditing ? (
              <input
                ref={whereInputRef}
                type="text"
                className={`${prefix}__input`}
                value={whereQuery}
                placeholder="Search Destinations"
                aria-label="Search destinations"
                onChange={(event) => setWhereQuery(event.target.value)}
                onClick={(event) => event.stopPropagation()}
              />
            ) : (
              <span className={`${prefix}__hint`}>
                {whereDisplay || 'Search Destinations'}
              </span>
            )}
          </div>
        </div>

        {isHeader ? (
          <>
            <span
              className={`${prefix}__divider${
                hideDivider('where', 'dates') ? ' is-hidden' : ''
              }`}
              aria-hidden="true"
            />

            <div
              ref={datesRef}
              className={`${prefix}__slot ${prefix}__slot--dates`}
            >
              <button
                type="button"
                className={`${prefix}__field${datesActive ? ' is-active' : ''}`}
                aria-pressed={datesActive}
                onClick={() => openField('check-in')}
              >
                <span className={`${prefix}__label`}>Dates</span>
                <span className={`${prefix}__hint`}>{datesLabel}</span>
              </button>
            </div>

            <span
              className={`${prefix}__divider${
                hideDivider('dates', 'who') ? ' is-hidden' : ''
              }`}
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            <span
              className={`${prefix}__divider${
                hideDivider('where', 'check-in') ? ' is-hidden' : ''
              }`}
              aria-hidden="true"
            />

            <div
              ref={checkInRef}
              className={`${prefix}__slot ${prefix}__slot--check-in`}
            >
              <button
                type="button"
                className={`${prefix}__field${
                  formEngaged && activeField === 'check-in' ? ' is-active' : ''
                }`}
                aria-pressed={formEngaged && activeField === 'check-in'}
                onClick={() => openField('check-in')}
              >
                <span className={`${prefix}__label`}>Check in</span>
                <span className={`${prefix}__hint`}>{checkInLabel}</span>
              </button>
            </div>

            <span
              className={`${prefix}__divider${
                hideDivider('check-in', 'check-out') ? ' is-hidden' : ''
              }`}
              aria-hidden="true"
            />

            <div
              ref={checkOutRef}
              className={`${prefix}__slot ${prefix}__slot--check-out`}
            >
              <button
                type="button"
                className={`${prefix}__field${
                  formEngaged && activeField === 'check-out' ? ' is-active' : ''
                }`}
                aria-pressed={formEngaged && activeField === 'check-out'}
                onClick={() => openField('check-out')}
              >
                <span className={`${prefix}__label`}>Check out</span>
                <span className={`${prefix}__hint`}>{checkOutLabel}</span>
              </button>
            </div>

            <span
              className={`${prefix}__divider${
                hideDivider('check-out', 'who') ? ' is-hidden' : ''
              }`}
              aria-hidden="true"
            />
          </>
        )}

        <div ref={whoRef} className={`${prefix}__who`}>
          <button
            type="button"
            className={`${prefix}__field${
              formEngaged && activeField === 'who' ? ' is-active' : ''
            }`}
            aria-pressed={formEngaged && activeField === 'who'}
            onClick={() => openField('who')}
          >
            <span className={`${prefix}__label`}>Who</span>
            <span className={`${prefix}__hint`}>
              {guestSummary || 'Add Guests'}
            </span>
          </button>

          <button type="submit" className={`${prefix}__submit`} aria-label="Search">
            <IconSearch color="#FFFFFF" />
          </button>
        </div>
      </form>

      <AnimatePresence>
        {showPanels && whereOpen ? (
          <motion.div
            key={`${variant}-where-dropdown`}
            className="bt-hero-where-dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={DROPDOWN_TRANSITION}
            role="listbox"
            aria-label="Suggested destinations"
          >
            <p className="bt-hero-where-dropdown__heading">Suggested Destinations</p>

            {filteredDestinations.length === 0 ? (
              <p className="bt-hero-where-dropdown__empty">No Result Found</p>
            ) : (
              <ul className="bt-hero-where-dropdown__list">
                {filteredDestinations.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="bt-hero-where-dropdown__item"
                      role="option"
                      onClick={() => chooseDestination(item)}
                    >
                      <DestinationIcon type={item.icon} />
                      <span className="bt-hero-where-dropdown__copy">
                        <span className="bt-hero-where-dropdown__name">
                          {item.name}
                        </span>
                        <span className="bt-hero-where-dropdown__desc">
                          {item.description}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showPanels && datesOpen ? (
          <HeroDatePopup
            key={`${variant}-dates-popup`}
            checkIn={checkIn}
            checkOut={checkOut}
            selecting={dateSelecting}
            flexTag={dateSelecting === 'check-out' ? checkOutFlex : checkInFlex}
            onFlexTagChange={handleFlexTagChange}
            onCheckInChange={handleCheckInChange}
            onCheckOutChange={handleCheckOutChange}
            onSelectingChange={handleDateSelectingChange}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showPanels && whoOpen ? (
          <HeroWhoPopup
            key={`${variant}-who-popup`}
            adults={adults}
            pets={pets}
            childrenAges={childrenAges}
            onAdultsChange={setAdults}
            onPetsChange={setPets}
            onChildrenChange={setChildrenAges}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
