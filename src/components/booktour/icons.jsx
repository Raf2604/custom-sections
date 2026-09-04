export function IconHeart({ filled = false }) {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" aria-hidden="true">
      <path
        d="M11 18.35L9.55 17.03C4.4 12.36 1 9.28 1 5.5C1 2.42 3.42 0 6.5 0C8.24 0 9.91 0.81 11 2.09C12.09 0.81 13.76 0 15.5 0C18.58 0 21 2.42 21 5.5C21 9.28 17.6 12.36 12.45 17.04L11 18.35Z"
        fill={filled ? '#EF5A6F' : 'transparent'}
        stroke={filled ? '#EF5A6F' : '#FFFFFF'}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconStar() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M5 0.5L6.18 3.68L9.5 3.82L7.02 5.98L7.82 9.22L5 7.55L2.18 9.22L2.98 5.98L0.5 3.82L3.82 3.68L5 0.5Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function IconArrowCircle() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" stroke="#FFFFFF" strokeWidth="1" />
      <path
        d="M21 16L29 24L21 32"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconGlobe() {
  return (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75Z" stroke="#6B6F7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.75004 1.75H7.75004C5.80004 7.59 5.80004 13.91 7.75004 19.75H6.75004" stroke="#6B6F7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.75 1.75C15.7 7.59 15.7 13.91 13.75 19.75" stroke="#6B6F7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 14.75V13.75C7.59 15.7 13.91 15.7 19.75 13.75V14.75" stroke="#6B6F7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 7.74998C7.59 5.79998 13.91 5.79998 19.75 7.74998" stroke="#6B6F7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export function IconSearch({ color = '#6B6F7B' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M9.58342 17.5C13.9557 17.5 17.5001 13.9555 17.5001 9.58329C17.5001 5.21104 13.9557 1.66663 9.58342 1.66663C5.21116 1.66663 1.66675 5.21104 1.66675 9.58329C1.66675 13.9555 5.21116 17.5 9.58342 17.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3334 18.3334L16.6667 16.6667"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconHeaderHeart() {
  return (
<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 5.75C20.75 12.6882 10.7504 18.5278 10.7504 18.5278C10.7504 18.5278 0.75 12.6019 0.75 5.76406C0.75 2.97222 2.97222 0.749999 5.75 0.749999C8.52778 0.749999 10.75 4.08333 10.75 4.08333C10.75 4.08333 12.9722 0.749999 15.75 0.749999C18.5278 0.749999 20.75 2.97222 20.75 5.75Z" fill="#EF5A6F" stroke="#EF5A6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export function IconBurger() {
  return (
<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.75C-1.81059e-08 7.33579 0.335786 7 0.75 7L16.7496 7C17.1638 7 17.4996 7.33579 17.4996 7.75C17.4996 8.16421 17.1638 8.5 16.7496 8.5H0.75C0.335786 8.5 1.81059e-08 8.16421 0 7.75ZM3.28307 14.75C3.28307 14.3358 3.61886 14 4.03307 14L16.75 14C17.1642 14 17.5 14.3358 17.5 14.75C17.5 15.1642 17.1642 15.5 16.75 15.5L4.03307 15.5C3.61886 15.5 3.28307 15.1642 3.28307 14.75ZM8.97186 0.75C8.97186 0.335787 9.30765 3.25315e-07 9.72186 3.0721e-07L16.75 0C17.1642 -1.81058e-08 17.5 0.335787 17.5 0.75C17.5 1.16421 17.1642 1.5 16.75 1.5L9.72186 1.5C9.30765 1.5 8.97186 1.16421 8.97186 0.75Z" fill="#141414"/>
</svg>

  )
}

export function IconClose() {
  return (
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5627 14.563C13.8556 14.2701 14.3305 14.2701 14.6233 14.563L25.9368 25.8764C26.2297 26.1693 26.2297 26.6441 25.9368 26.937C25.6439 27.2299 25.169 27.2299 24.8761 26.937L13.5627 15.6236C13.2698 15.3307 13.2698 14.8558 13.5627 14.563Z" fill="#141414"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.8972 14.5237C26.192 14.8147 26.195 15.2896 25.904 15.5844L14.6627 26.9695C14.3717 27.2642 13.8968 27.2672 13.6021 26.9762C13.3073 26.6852 13.3043 26.2103 13.5953 25.9156L24.8366 14.5305C25.1276 14.2357 25.6025 14.2327 25.8972 14.5237Z" fill="#141414"/>
</svg>

  )
}

export function IconFilterPlus() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
      <rect
        x="19"
        y="9"
        width="1"
        height="19"
        rx="0.5"
        transform="rotate(90 19 9)"
        fill="currentColor"
      />
      <rect x="9" width="1" height="19" rx="0.5" fill="currentColor" />
    </svg>
  )
}

export function IconFilterChevron() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" aria-hidden="true">
      <path
        d="M0.500001 7.5L19.5 7.5M12.5 0.500001L19.5 7.5L12.5 14.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
