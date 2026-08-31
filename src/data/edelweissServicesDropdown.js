import serviceIndoor from '../assets/edelweiss/service-indoor.png'
import serviceOutdoor from '../assets/edelweiss/service-outdoor.png'
import serviceCommercial from '../assets/edelweiss/service-commercial.png'
import servicesWindowCleaning from '../assets/edelweiss/services-window-cleaning.png'
import hero1 from '../assets/edelweiss/hero-1.png'
import hero2 from '../assets/edelweiss/hero-2.png'
import hero3 from '../assets/edelweiss/hero-3.png'
import natureRoom from '../assets/edelweiss/nature-room.png'
import blogFeature from '../assets/edelweiss/blog-feature.png'
import tab1img1 from '../assets/edelweiss/tab/tab-1-img1.webp'
import tab2img1 from '../assets/edelweiss/tab/tab-2-img1.webp'
import tab3img1 from '../assets/edelweiss/tab/tab-3-img1.webp'
import tab4img1 from '../assets/edelweiss/tab/tab-4-img1.webp'

export const SERVICES_DROPDOWN_DEFAULT_IMAGE = serviceIndoor

export const SERVICES_DROPDOWN_COLUMNS = [
  {
    id: 'indoor',
    title: 'Indoor Services',
    links: [
      { id: 'apartment-cleaning', label: 'Apartment Cleaning', href: '#', image: serviceIndoor },
      { id: 'holiday-cleaning', label: 'Holiday Cleaning', href: '#', image: hero1 },
      { id: 'detailed-cleaning', label: 'Detailed Cleaning', href: '#', image: natureRoom },
      { id: 'house-cleaning', label: 'House Cleaning', href: '#', image: hero2 },
      { id: 'green-cleaning', label: 'Green Cleaning', href: '#', image: tab1img1 },
      { id: 'move-out-cleaning', label: 'Move Out Cleaning', href: '#', image: hero3 },
      { id: 'move-in-cleaning', label: 'Move In Cleaning', href: '#', image: tab2img1 },
      {
        id: 'post-construction-cleaning',
        label: 'Post - Construction Cleaning',
        href: '#',
        image: tab3img1,
      },
      { id: 'carpet-cleaning', label: 'Carpet Cleaning', href: '#', image: blogFeature },
      { id: 'upholstery-cleaning', label: 'Upholstery Cleaning', href: '#', image: tab4img1 },
    ],
  },
  {
    id: 'outdoor',
    title: 'Outdoor Services',
    links: [
      { id: 'gutter-cleaning', label: 'Gutter Cleaning Services', href: '#', image: serviceOutdoor },
      {
        id: 'window-cleaning',
        label: 'Window Cleaning Services',
        href: '#',
        image: servicesWindowCleaning,
      },
      { id: 'facade-cleaning', label: 'Facade Cleaning Service', href: '#', image: hero2 },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    links: [
      { id: 'factories', label: 'Factories', href: '#', image: serviceCommercial },
      { id: 'warehouses', label: 'Warehouses', href: '#', image: hero1 },
      { id: 'multi-tenant', label: 'Multi-Tenant Buildings', href: '#', image: hero3 },
      { id: 'single-tenant', label: 'Single-Tenant Buildings', href: '#', image: tab1img1 },
      {
        id: 'hospitals',
        label: 'Hospitals And Treatment Centres',
        href: '#',
        image: natureRoom,
      },
      { id: 'health-clinics', label: 'Health Clinics', href: '#', image: tab2img1 },
      { id: 'school-boards', label: 'School Boards', href: '#', image: blogFeature },
      { id: 'post-secondary', label: 'Post-Secondary And University', href: '#', image: tab3img1 },
      { id: 'vocational', label: 'Vocational', href: '#', image: hero2 },
      { id: 'municipalities', label: 'Municipalities', href: '#', image: tab4img1 },
      { id: 'research-labs', label: 'Research Labs', href: '#', image: serviceIndoor },
      { id: 'malls', label: 'Malls', href: '#', image: hero1 },
      { id: 'retail-banking', label: 'Retail Banking', href: '#', image: tab2img1 },
      { id: 'grocery-stores', label: 'Grocery Stores', href: '#', image: tab3img1 },
    ],
  },
]

export const SERVICES_DROPDOWN_LINKS = SERVICES_DROPDOWN_COLUMNS.flatMap((column) => column.links)
