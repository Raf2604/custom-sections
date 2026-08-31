import menuAboutBg from '../assets/edelweiss/menu-about-bg.png'

export const MENU_COPYRIGHT = '©2025 Edelweiss, Designed By Words Agency'

export const MENU_SOCIALS = [
  { id: 'behance', label: 'Be', href: '#' },
  { id: 'dribbble', label: 'Db', href: '#' },
  { id: 'linkedin', label: 'In', href: '#' },
  { id: 'facebook', label: 'Fb', href: '#' },
]

export const MENU_ITEMS = [
  { id: 'about-us', label: 'About Us' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'cleaning-tips', label: 'Cleaning Tips' },
  { id: 'before-after', label: 'Before & After' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact-us', label: 'Contact Us' },
]

export const MENU_PANELS = {
  'about-us': {
    background: menuAboutBg,
    links: [
      { label: 'Company History', href: '#' },
      { label: 'Vision and Mission', href: '#' },
      { label: 'Testimonials', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
}
