import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const FLEX_TAGS = [
  { id: 'exact', label: 'Exact Dates' },
  { id: '1', label: '± 1 Day' },
  { id: '2', label: '± 2 Day' },
  { id: '3', label: '± 3 Day' },
  { id: '7', label: '± 7 Day' },
  { id: '14', label: '± 14 Day' },
]

const MONTH_SLIDE = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function addMonths(date, count) {
  return new Date(date.getFullYear(), date.getMonth() + count, 1)
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function sameDay(a, b) {
  if (!a || !b) return false
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isBefore(a, b) {
  return startOfDay(a).getTime() < startOfDay(b).getTime()
}

function isAfter(a, b) {
  return startOfDay(a).getTime() > startOfDay(b).getTime()
}

function isBetween(date, start, end) {
  if (!start || !end) return false
  const t = startOfDay(date).getTime()
  return t > startOfDay(start).getTime() && t < startOfDay(end).getTime()
}

function buildMonthDays(monthDate) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDow = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = []

  for (let i = 0; i < firstDow; i += 1) {
    cells.push(null)
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day))
  }
  while (cells.length % 7 !== 0) {
    cells.push(null)
  }
  return cells
}

export function formatStayDate(date) {
  if (!date) return ''
  return `${date.getDate()}, ${MONTHS[date.getMonth()]}`
}

const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function formatShortStayDate(date) {
  if (!date) return ''
  const day = String(date.getDate()).padStart(2, '0')
  return `${day}, ${MONTHS_SHORT[date.getMonth()]}`
}

export function formatStayDateRange(checkIn, checkOut) {
  if (!checkIn) return ''
  if (!checkOut) return formatShortStayDate(checkIn)
  return `${formatShortStayDate(checkIn)} - ${formatShortStayDate(checkOut)}`
}

function MonthGrid({
  monthDate,
  checkIn,
  checkOut,
  hoverDate,
  selecting,
  today,
  onSelect,
  onHover,
}) {
  const days = useMemo(() => buildMonthDays(monthDate), [monthDate])

  return (
    <div className="bt-hero-dates-month">
      <div className="bt-hero-dates-month__weekdays">
        {WEEKDAYS.map((day) => (
          <span key={day} className="bt-hero-dates-month__weekday">
            {day}
          </span>
        ))}
      </div>
      <div className="bt-hero-dates-month__grid">
        {days.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="bt-hero-dates-day is-empty" />
          }

          const disabled = isBefore(date, today)
          const isStart = sameDay(date, checkIn)
          const isEnd = sameDay(date, checkOut)
          const previewEnd =
            selecting === 'check-out' &&
            checkIn &&
            hoverDate &&
            isAfter(hoverDate, checkIn)
              ? hoverDate
              : null
          const rangeEnd = previewEnd || checkOut
          const isPreviewEnd = Boolean(previewEnd && sameDay(date, previewEnd) && !sameDay(date, checkOut))
          const isSelected = isStart || isEnd || (previewEnd && sameDay(date, previewEnd))
          const inMiddle =
            Boolean(checkIn && rangeEnd) && isBetween(date, checkIn, rangeEnd)
          const showRange =
            Boolean(checkIn && rangeEnd) && !sameDay(checkIn, rangeEnd)
          const isRangeStart = showRange && isStart
          const isRangeEnd = showRange && (isEnd || isPreviewEnd)

          const className = [
            'bt-hero-dates-day',
            disabled ? 'is-disabled' : '',
            isSelected || isPreviewEnd ? 'is-selected' : '',
            isRangeStart ? 'is-range-start' : '',
            isRangeEnd ? 'is-range-end' : '',
            inMiddle ? 'is-in-range' : '',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <div key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`} className={className}>
              <span className="bt-hero-dates-day__range" aria-hidden="true" />
              <button
                type="button"
                className="bt-hero-dates-day__btn"
                disabled={disabled}
                onClick={() => onSelect(date)}
                onMouseEnter={() => onHover(date)}
                onMouseLeave={() => onHover(null)}
              >
                {date.getDate()}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function HeroDatePopup({
  checkIn,
  checkOut,
  selecting,
  flexTag,
  onFlexTagChange,
  onCheckInChange,
  onCheckOutChange,
  onSelectingChange,
}) {
  const today = useMemo(() => startOfDay(new Date()), [])
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(new Date()))
  const [direction, setDirection] = useState(0)
  const [hoverDate, setHoverDate] = useState(null)

  const leftMonth = viewMonth
  const rightMonth = addMonths(viewMonth, 1)

  const shiftMonths = (delta) => {
    setDirection(delta)
    setViewMonth((prev) => addMonths(prev, delta))
  }

  const handleSelect = (date) => {
    if (isBefore(date, today)) return

    if (selecting === 'check-in') {
      onCheckInChange(date)
      if (checkOut && !isAfter(checkOut, date)) {
        onCheckOutChange(null)
      }
      onSelectingChange('check-out')
      return
    }

    if (!checkIn || !isAfter(date, checkIn)) {
      onCheckInChange(date)
      onCheckOutChange(null)
      onSelectingChange('check-out')
      return
    }

    onCheckOutChange(date)
  }

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  }

  return (
    <motion.div
      className="bt-hero-dates-popup"
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-label="Select dates"
    >
      <div className="bt-hero-dates-popup__inner">
        <div className="bt-hero-dates-popup__nav">
          <button
            type="button"
            className="bt-hero-dates-popup__arrow"
            aria-label="Previous months"
            onClick={() => shiftMonths(-1)}
          >
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" aria-hidden="true">
              <path
                d="M6.07312 0.749883L1.18312 5.63988C0.60562 6.21738 0.60562 7.16238 1.18312 7.73988L6.07312 12.6299"
                stroke="#2E2E2E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="bt-hero-dates-popup__arrow bt-hero-dates-popup__arrow--next"
            aria-label="Next months"
            onClick={() => shiftMonths(1)}
          >
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" aria-hidden="true">
              <path
                d="M6.07312 0.749883L1.18312 5.63988C0.60562 6.21738 0.60562 7.16238 1.18312 7.73988L6.07312 12.6299"
                stroke="#2E2E2E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="bt-hero-dates-popup__months-clip">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={`${leftMonth.getFullYear()}-${leftMonth.getMonth()}`}
              className="bt-hero-dates-popup__months"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={MONTH_SLIDE}
            >
              <div className="bt-hero-dates-panel">
                <h3 className="bt-hero-dates-panel__title">
                  {MONTHS[leftMonth.getMonth()]} {leftMonth.getFullYear()}
                </h3>
                <MonthGrid
                  monthDate={leftMonth}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  hoverDate={hoverDate}
                  selecting={selecting}
                  today={today}
                  onSelect={handleSelect}
                  onHover={setHoverDate}
                />
              </div>

              <div className="bt-hero-dates-panel">
                <h3 className="bt-hero-dates-panel__title">
                  {MONTHS[rightMonth.getMonth()]} {rightMonth.getFullYear()}
                </h3>
                <MonthGrid
                  monthDate={rightMonth}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  hoverDate={hoverDate}
                  selecting={selecting}
                  today={today}
                  onSelect={handleSelect}
                  onHover={setHoverDate}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bt-hero-dates-tags">
          {FLEX_TAGS.map((tag) => (
            <button
              key={tag.id}
              type="button"
              className={`bt-hero-dates-tag${flexTag === tag.id ? ' is-active' : ''}`}
              onClick={() => onFlexTagChange(tag.id)}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
