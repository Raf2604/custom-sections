import tab1img1 from '../assets/edelweiss/tab/tab-1-img1.webp'
import tab1img2 from '../assets/edelweiss/tab/tab-1-img2.webp'
import tab1img3 from '../assets/edelweiss/tab/tab-1-img3.webp'
import tab2img1 from '../assets/edelweiss/tab/tab-2-img1.webp'
import tab2img2 from '../assets/edelweiss/tab/tab-2-img2.webp'
import tab2img3 from '../assets/edelweiss/tab/tab-2-img3.webp'
import tab3img1 from '../assets/edelweiss/tab/tab-3-img1.webp'
import tab3img2 from '../assets/edelweiss/tab/tab-3-img2.webp'
import tab3img3 from '../assets/edelweiss/tab/tab-3-img3.webp'
import tab4img1 from '../assets/edelweiss/tab/tab-4-img1.webp'
import tab4img2 from '../assets/edelweiss/tab/tab-4-img2.webp'
import tab4img3 from '../assets/edelweiss/tab/tab-4-img3.webp'

export const TRUST_HEADING_LINES = [
  'Experience',
  'You Can',
  'Trust. Cleanliness ',
  'You Can See.',
]

export const TRUST_INTRO ="For those who demand nothing but the best, Edelweiss delivers an unparalleled cleaning experience. Our commitment to perfection is reflected in every detail, ensuring your space radiates pristine purity and timeless elegance."

export const TRUST_TABS = [
  {
    id: 'trusted',
    label: 'Trusted by Thousands',
    title: 'Trusted by Thousands',
    description:"With over 10,000 hours of cleaning annually, 15 locations, and a team of 200 professionally trained experts, we have earned the trust of discerning clients across Germany.",
    imageLayout: 'standard',
    images: [tab1img1, tab1img2, tab1img3],
    imageAlts: [
      'Edelweiss professional cleaning team in a modern office',
      'Modern glass skyscrapers',
      'Team collaboration in a bright workspace',
    ],
  },
  {
    id: 'guarantee',
    label: 'Our Worry-Free Guarantee',
    title: 'Our Worry-Free Guarantee',
    description:"We stand behind our work with absolute confidence. Our Worry-Free Guarantee ensures that every service meets the highest standards of precision, care, and professionalism. If something isn’t perfect, we’ll make it right—because your satisfaction is our commitment.",
    imageLayout: 'alt',
    images: [tab2img1, tab2img2, tab2img3],
    imageAlts: [
      'Cleaner preparing professional equipment',
      'Spotless modern interior',
      'Detail-focused cleaning service',
    ],
  },
  {
    id: 'tailored',
    label: 'Tailored for You',
    title: 'Tailored for You',
    description:"No two spaces are the same, and neither are their cleaning needs. Whether you require regular upkeep, deep cleaning, or specialized care, we design our services to fit your schedule, preferences, and unique environment. Luxury cleaning, exactly the way you want it.",
    imageLayout: 'alt',
    images: [tab3img1, tab3img2, tab3img3],
    imageAlts: [
      'Custom cleaning consultation',
      'Personalized service planning',
      'Specialized cleaning approach',
    ],
  },
  {
    id: 'expertise',
    label: 'Decades of Expertise',
    title: 'Decades of Expertise',
    description:"With years of experience in high-end residential, commercial, and industrial cleaning, we’ve refined our craft to deliver flawless results, advanced techniques, and unparalleled efficiency. Edelweiss isn’t just a cleaning service—it’s the industry benchmark for excellence.",
    imageLayout: 'standard',
    images: [tab4img1, tab4img2, tab4img3],
    imageAlts: [
      'Experienced Edelweiss specialists at work',
      'Professional training and standards',
      'Long-standing cleaning excellence',
    ],
  },
]

export const TRUST_TAB_IMAGE_URLS = TRUST_TABS.flatMap((tab) => tab.images)
