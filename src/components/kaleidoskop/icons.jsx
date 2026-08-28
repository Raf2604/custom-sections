export function IconNavChevron({ className }) {
  return (
    <svg
      className={className}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.46108 0.191017C5.71577 0.445707 5.71577 0.858641 5.46108 1.11333L1.57441 5L5.46108 8.88667C5.71577 9.14136 5.71577 9.55429 5.46108 9.80898C5.20639 10.0637 4.79346 10.0637 4.53877 9.80898L0.190943 5.46116C0.0686362 5.33885 -7.46127e-05 5.17297 -7.46052e-05 5C-7.45976e-05 4.82703 0.0686362 4.66115 0.190943 4.53884L4.53877 0.191017C4.79346 -0.0636725 5.20639 -0.0636725 5.46108 0.191017Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconChevronDown({ size = 12 }) {
  return (
    <svg width={size} height={size * (7 / 12)} viewBox="0 0 12 7" fill="none" aria-hidden="true">
      <path
        d="M1 1.25L6 5.75L11 1.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconSearch({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12.25 12.25L15.75 15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconCalendar({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 2v2M11 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 6.5h12" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4.25" y="8.75" width="1.5" height="1.5" rx="0.25" fill="currentColor" />
      <rect x="7.25" y="8.75" width="1.5" height="1.5" rx="0.25" fill="currentColor" />
      <rect x="10.25" y="8.75" width="1.5" height="1.5" rx="0.25" fill="currentColor" />
    </svg>
  )
}

export function IconClock({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 4.5V8L10.75 10.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconPerson({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="8" cy="12" rx="4" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconCategory({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="5" cy="5" r="1.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="5" r="1.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="11" r="1.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="11" r="1.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconGalleryArrow({ className }) {
  return (
    <svg
      className={className}
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0.749881 0.749999L6.6062 6.29809C7.43888 7.08695 7.43888 8.41305 6.6062 9.2019L0.749881 14.75"
        stroke="#CFCFCF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconChevronLeft({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M8.5 3.5 5 7l3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5.5 3.5 9 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPin({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.75a4.25 4.25 0 0 0-4.25 4.25c0 3.1 4.25 8.25 4.25 8.25s4.25-5.15 4.25-8.25A4.25 4.25 0 0 0 8 1.75Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="6" r="1.35" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function IconPhone({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4.4 2.5h2.1l1 2.7-1.3 1.3a8.5 8.5 0 0 0 3.3 3.3l1.3-1.3 2.7 1v2.1a1.4 1.4 0 0 1-1.4 1.4A9.6 9.6 0 0 1 3 3.9 1.4 1.4 0 0 1 4.4 2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconMail({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="m3.25 5.25 4.75 3.5 4.75-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconFacebook({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 8.5V7.2c0-.66.1-1.03 1.06-1.03H17V4h-2.1C12.2 4 11 5.35 11 7.5v1H9.5V10.8H11V20h3.5v-9.2H16.7l.4-2.3h-2.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconInstagram({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconTikTok({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.2 4v9.15a3.35 3.35 0 1 1-2.4-3.22V7.6a5.55 5.55 0 1 0 4.55 5.45V8.55A5.8 5.8 0 0 0 20 9.7V7.15A5.8 5.8 0 0 1 14.2 4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconYouTube({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21.2 8.2a2.6 2.6 0 0 0-1.83-1.84C17.7 6 12 6 12 6s-5.7 0-7.37.36A2.6 2.6 0 0 0 2.8 8.2 27 27 0 0 0 2.4 12a27 27 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.83 1.84C6.3 18 12 18 12 18s5.7 0 7.37-.36a2.6 2.6 0 0 0 1.83-1.84A27 27 0 0 0 21.6 12a27 27 0 0 0-.4-3.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M10.4 14.6V9.4L14.8 12l-4.4 2.6Z" fill="currentColor" />
    </svg>
  )
}
