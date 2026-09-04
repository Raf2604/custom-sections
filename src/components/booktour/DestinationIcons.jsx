import { useId } from 'react'

/** Destination list icons — rendered at 34×34. */

export function DestIconPalm() {
  const id = useId().replace(/:/g, '')
  const f0 = `palm_f0_${id}`
  const f1 = `palm_f1_${id}`

  return (
    <svg width="34" height="34" viewBox="0 4.8125 34 34" fill="none" aria-hidden="true">
      <rect y="4.8125" width="34" height="34" rx="4" fill="#EEEEEE" />
      <g filter={`url(#${f0})`}>
        <circle cx="16.5396" cy="12.1438" r="4.14375" fill="#20ADC4" fillOpacity="0.5" />
      </g>
      <g filter={`url(#${f1})`}>
        <circle cx="16.5396" cy="31.4813" r="5.98542" fill="#EF5A6F" fillOpacity="0.5" />
      </g>
      <path
        d="M12.8562 32.8625C12.0198 32.3049 10.9302 32.3049 10.0937 32.8625L9.9981 32.9262C9.20311 33.4562 8.18508 33.5196 7.3305 33.0923L6.87082 32.8625"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5896 27.3375C26.7532 26.7798 25.6635 26.7798 24.8271 27.3375L24.7314 27.4012C23.9364 27.9312 22.9184 27.9946 22.0638 27.5673L21.6042 27.3375"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.10834 31.0209L5.48959 30.1C6.32601 29.5424 7.41567 29.5424 8.25209 30.1C9.08851 30.6576 10.1782 30.6576 11.0146 30.1C11.851 29.5424 12.9407 29.5424 13.7771 30.1C14.6135 30.6576 15.7032 30.6576 16.5396 30.1C17.376 29.5424 18.4657 29.5424 19.3021 30.1C20.1385 30.6576 21.2282 30.6576 22.0646 30.1C22.901 29.5424 23.9907 29.5424 24.8271 30.1C25.6635 30.6576 26.7532 30.6576 27.5896 30.1L28.1142 29.7503C28.6439 29.3971 29.3222 29.3549 29.8917 29.6396"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2375 17.6688C12.2423 16.9014 8.71248 16.2875 6.4104 17.6688M14.2375 17.6688C15.3118 18.4361 16.5396 20.8917 16.5396 23.6542M14.2375 17.6688C15.7722 17.2084 18.8417 16.7479 20.2229 18.5896M14.2375 17.6688C14.6979 16.441 13.1325 13.4329 10.5542 13.0646M14.2375 17.6688C14.5444 16.441 17 14.9064 19.3021 15.3668M14.2375 17.6688C9.63332 22.7333 7.79165 29.8005 7.79165 29.8005M14.2375 17.6688C9.51896 19.8466 7.0955 26.376 6.43841 29.5031"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.2083 12.6042C26.5111 12.6042 26.8098 12.6747 27.0806 12.8101L27.5896 13.0646L28.0986 12.8101C28.3694 12.6747 28.6681 12.6042 28.9708 12.6042"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.87082 10.7625C7.1736 10.7625 7.47223 10.833 7.74305 10.9684L8.25207 11.2229L8.76109 10.9684C9.03191 10.833 9.33054 10.7625 9.63332 10.7625"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.4588 27.1533C27.3228 26.7685 27.1018 26.4149 26.8077 26.1208C26.2896 25.6027 25.587 25.3116 24.8543 25.3116C24.1217 25.3116 23.419 25.6027 22.9009 26.1208C22.6068 26.4149 22.3859 26.7685 22.2498 27.1533"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M24.8545 23.9304V22.0887"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.0494 25.3676L29.0261 24.3909"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.66 25.3676L20.6833 24.3909"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id={f0}
          x="4.39584"
          y="0"
          width="24.2875"
          height="24.2875"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={f1}
          x="2.55417"
          y="17.4958"
          width="27.9708"
          height="27.9708"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export function DestIconBoat() {
  const id = useId().replace(/:/g, '')
  const f0 = `boat_f0_${id}`
  const f1 = `boat_f1_${id}`

  return (
    <svg width="34" height="34" viewBox="5 0 34 34" fill="none" aria-hidden="true">
      <rect x="5.07907" width="34" height="34" rx="4" fill="#EEEEEE" />
      <g filter={`url(#${f0})`}>
        <circle cx="28.7211" cy="14.4326" r="5.98609" fill="#EF5A6F" fillOpacity="0.5" />
      </g>
      <g filter={`url(#${f1})`}>
        <circle cx="13.9861" cy="23.642" r="5.98609" fill="#20ADC4" fillOpacity="0.5" />
      </g>
      <path
        d="M30.563 22.296C31.0044 21.5867 31.3175 20.9181 31.4839 20.4188L16.2884 20.8793H9.84189C9.84184 23.6421 11.3768 25.3304 12.6047 26.4049C13.8326 26.4049 20.8931 26.4049 24.5769 26.4049C27.262 26.4049 29.3762 24.2031 30.563 22.296ZM16.2884 20.8793C16.6954 20.1467 16.6725 19.1812 17.2094 18.1164M17.2094 18.1164C18.053 14.8932 19.0512 11.4522 19.0512 9.828C20.5861 11.5164 21.3536 15.8141 22.2745 17.656C21.2517 18.1164 19.4344 18.1164 17.2094 18.1164ZM30.563 22.296C29.1816 22.4377 26.2346 22.7211 25.4978 22.7211"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1164 28.7072C23.2799 28.1495 22.1901 28.1495 21.3536 28.7072C20.5171 29.2649 19.4273 29.2649 18.5908 28.7072L18.5497 28.6798C17.7381 28.1387 16.6807 28.1387 15.8691 28.6798C15.0166 29.2481 13.8985 29.2171 13.0789 28.6024L12.6047 28.2467"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.2467 27.7863C33.4102 27.2286 32.3204 27.2286 31.4839 27.7863L31.3882 27.8501C30.5932 28.3801 29.575 28.4435 28.7204 28.0162L28.2606 27.7863"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id={f0}
          x="14.735"
          y="0.446533"
          width="27.9722"
          height="27.9722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={f1}
          x="0"
          y="9.65588"
          width="27.9722"
          height="27.9722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export function DestIconBalloon() {
  const id = useId().replace(/:/g, '')
  const f0 = `bal_f0_${id}`
  const f1 = `bal_f1_${id}`

  return (
    <svg width="34" height="34" viewBox="3 5 34 34" fill="none" aria-hidden="true">
      <rect x="3.23718" y="5.0791" width="34" height="34" rx="4" fill="#EEEEEE" />
      <g filter={`url(#${f0})`}>
        <ellipse cx="27.8002" cy="12.1442" rx="4.14422" ry="4.14422" fill="#20ADC4" fillOpacity="0.5" />
      </g>
      <g filter={`url(#${f1})`}>
        <circle cx="13.9861" cy="30.563" r="5.98609" fill="#EF5A6F" fillOpacity="0.5" />
      </g>
      <path
        d="M23.1955 9.84192C17.8233 9.84192 16.2884 13.9753 16.2884 16.0306C16.2884 20.9376 20.1257 26.0873 20.1257 26.0873M23.1955 9.84192C28.5676 9.84192 30.1025 13.9753 30.1025 16.0306C30.1025 20.9376 26.2652 26.0873 26.2652 26.0873M23.1955 9.84192C19.7419 10.6431 14.7535 14.9476 20.8931 26.0873M23.1955 9.84192C26.649 10.6155 31.6374 14.9476 25.4978 26.0873M23.1955 9.84192C25.1141 10.8734 28.1839 13.7099 24.7303 26.0873M23.1955 9.84192C21.2768 10.0998 18.207 13.7099 21.6606 26.0873M23.1955 9.84192V26.0873M20.1257 26.0873L21.0466 28.2607M20.1257 26.0873H20.8931M21.0466 28.2607H25.3443M21.0466 28.2607V31.0235H25.3443V28.2607M25.3443 28.2607L26.2652 26.0873M26.2652 26.0873H25.4978M20.8931 26.0873H21.6606M25.4978 26.0873H24.7303M24.7303 26.0873H23.1955M21.6606 26.0873H23.1955"
        stroke="#212121"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9753 27.3397L8 33.7863H19.9722L16.7489 27.8002L13.5256 21.8141L10.9753 27.3397ZM16.7489 27.8002L15.3675 27.3397L14.4466 28.2606L13.5256 27.3397L12.6047 28.2606L10.9753 27.3397"
        stroke="#212121"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.1025 10.7628C30.4053 10.7628 30.704 10.8333 30.9748 10.9687L31.4839 11.2233L31.993 10.9687C32.2638 10.8333 32.5625 10.7628 32.8653 10.7628"
        stroke="#212121"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id={f0}
          x="15.6559"
          y="0"
          width="24.2885"
          height="24.2885"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={f1}
          x="0"
          y="16.5769"
          width="27.9722"
          height="27.9722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export function DestIconSnow() {
  const id = useId().replace(/:/g, '')
  const f0 = `snow_f0_${id}`
  const f1 = `snow_f1_${id}`

  return (
    <svg width="34" height="34" viewBox="5 0 34 34" fill="none" aria-hidden="true">
      <rect x="5.07907" width="34" height="34" rx="4" fill="#EEEEEE" />
      <g filter={`url(#${f0})`}>
        <circle cx="28.7211" cy="14.4326" r="5.98609" fill="#20ADC4" fillOpacity="0.5" />
      </g>
      <g filter={`url(#${f1})`}>
        <circle cx="13.9861" cy="23.642" r="5.98609" fill="#EF5A6F" fillOpacity="0.5" />
      </g>
      <path
        d="M27.4541 5.19299L28.0299 6.27755M28.0299 6.27755L30.333 10.6158M28.0299 6.27755L26.4039 5.75053M28.0299 6.27755L28.5043 4.63546M30.333 10.6158L30.9088 11.7003M30.333 10.6158L29.8586 12.2578M30.333 10.6158L31.959 11.1428M31.0463 5.3713L30.4247 6.39642M30.4247 6.39642L27.9383 10.4969M30.4247 6.39642L30.0225 4.71082M30.4247 6.39642L32.07 6.03178M27.9383 10.4969L27.3167 11.522M27.9383 10.4969L26.2929 10.8615M27.9383 10.4969L28.3404 12.1825M32.7738 8.62482L31.5764 8.56539M31.5764 8.56539L26.7869 8.32765M31.5764 8.56539L32.8002 7.4068M31.5764 8.56539L32.7473 9.84284M26.7869 8.32765L25.5895 8.26821M26.7869 8.32765L25.616 7.05019M26.7869 8.32765L25.5631 9.48623"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6368 9.54075L17.9651 11.7429M17.9651 11.7429L15.2782 20.5516M17.9651 11.7429L16.5044 8.89031M17.9651 11.7429L20.7692 10.1912M15.2782 20.5516L14.6064 22.7538M15.2782 20.5516L12.474 22.1034M15.2782 20.5516L16.7388 23.4042M23.1693 14.5339L20.9867 15.0717M20.9867 15.0717L12.2565 17.2228M20.9867 15.0717L22.6849 12.3015M20.9867 15.0717L23.6538 16.7663M12.2565 17.2228L10.0739 17.7606M12.2565 17.2228L9.58943 15.5283M12.2565 17.2228L10.5584 19.993M21.1546 21.1405L19.6437 19.4761M19.6437 19.4761L13.6003 12.8186M19.6437 19.4761L22.8025 19.5586M19.6437 19.4761L19.5066 22.7224M13.6003 12.8186L12.0895 11.1542M13.6003 12.8186L13.7374 9.57225M13.6003 12.8186L10.4416 12.7361"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.7332 22.4423L27.0888 23.4562M27.0888 23.4562L28.5113 27.5117M27.0888 23.4562L25.7515 22.7867M27.0888 23.4562L27.715 22.098M28.5113 27.5117L28.8669 28.5255M28.5113 27.5117L27.8852 28.8699M28.5113 27.5117L29.8487 28.1812M29.8173 23.0685L29.1449 23.8736M29.1449 23.8736L26.4553 27.0942M29.1449 23.8736L29.0184 22.3626M29.1449 23.8736L30.6161 23.7743M26.4553 27.0942L25.7829 27.8994M26.4553 27.0942L24.984 27.1935M26.4553 27.0942L26.5817 28.6052M30.8843 26.11L29.8563 25.9013M29.8563 25.9013L25.7442 25.0664M29.8563 25.9013L31.0672 25.0598M29.8563 25.9013L30.7014 27.1602M25.7442 25.0664L24.7162 24.8577M25.7442 25.0664L24.8991 23.8075M25.7442 25.0664L24.5333 25.9079"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id={f0}
          x="14.735"
          y="0.446533"
          width="27.9722"
          height="27.9722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={f1}
          x="0"
          y="9.65588"
          width="27.9722"
          height="27.9722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

const ICONS = [DestIconPalm, DestIconBoat, DestIconBalloon, DestIconSnow]

export function DestinationIcon({ type = 0 }) {
  const Icon = ICONS[type % ICONS.length]
  return (
    <span className="bt-hero-dest-icon">
      <Icon />
    </span>
  )
}
