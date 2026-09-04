import img1 from '../assets/booktour/hotels/24414dd16d8558b95da2088a65b7370a536bf828.png'
import img1b from '../assets/booktour/hotels/24414dd16d8558b95da2088a65b7370a536bf828 (1).png'
import img2 from '../assets/booktour/hotels/3f3a0abdaab88a273194d47b388f83e1327de273.png'
import img2b from '../assets/booktour/hotels/3f3a0abdaab88a273194d47b388f83e1327de273 (1).png'
import img2c from '../assets/booktour/hotels/3f3a0abdaab88a273194d47b388f83e1327de273 (2).png'
import img3 from '../assets/booktour/hotels/104a3da478c9c4bc168047ef02e30ed9578783cb.png'
import img4 from '../assets/booktour/hotels/b8ecd7358c69b09c19bf0ab0e212e7973ecd327f.png'
import img5 from '../assets/booktour/hotels/ca34ff941c4043f13ac93090a494761522dbe7ae.png'
import img6 from '../assets/booktour/hotels/a0881cc4d9f40ebea1b133aa7d70ff0ab609cf9f.png'

const CAROUSEL_A = [img1, img2, img3, img4, img5]
const CAROUSEL_B = [img5, img6, img1b, img2b, img3]
const CAROUSEL_C = [img4, img2c, img6, img1, img2b]
const CAROUSEL_D = [img3, img5, img2, img6, img1b]
const CAROUSEL_E = [img6, img4, img1, img2c, img5]
const CAROUSEL_F = [img2b, img3, img6, img1, img4]
const CAROUSEL_G = [img1b, img6, img5, img2, img3]
const CAROUSEL_H = [img2c, img1, img4, img5, img6]

const HOTEL_DESCRIPTION =
  'Featuring elegant rooms with dramatic views of the Singapore skyline, a range of dining options and a mineral water pool,'

export const BOOKTOUR_HOTELS = [
  {
    id: 'marina-bay-sg',
    images: CAROUSEL_A,
    location: 'Singapore',
    rating: 4.9,
    title: 'Parkroyal Collection Marina Bay',
    description: HOTEL_DESCRIPTION,
    price: '$2,510 night',
  },
  {
    id: 'turim-lisbon',
    images: CAROUSEL_B,
    location: 'Lisbon, Portugal',
    rating: 4.6,
    title: 'TURIM Boulevard Hotel',
    description: HOTEL_DESCRIPTION,
    price: '$960 night',
  },
  {
    id: 'isokelo-finland',
    images: CAROUSEL_C,
    location: 'Salla, Finland',
    rating: 4.7,
    title: 'Isokelo Log Apartments',
    description: HOTEL_DESCRIPTION,
    price: '$1,100 night',
  },
  {
    id: 'marina-bay-sg-2',
    images: CAROUSEL_D,
    location: 'Singapore',
    rating: 4.9,
    title: 'Parkroyal Collection Marina Bay',
    description: HOTEL_DESCRIPTION,
    price: '$1,020 night',
  },
  {
    id: 'manili-greece',
    images: CAROUSEL_E,
    location: 'Archanes, Greece',
    rating: 4.9,
    title: 'Manili Boutique Suites & Villas',
    description: HOTEL_DESCRIPTION,
    price: '$1,250 night',
  },
  {
    id: 'parkroyal-brienz',
    images: CAROUSEL_F,
    location: 'Brienz, Switzerland',
    rating: 5.0,
    title: 'Parkroyal Collection Marina Bay',
    description: HOTEL_DESCRIPTION,
    price: '$2,060 night',
  },
  {
    id: 'cavo-zakynthos',
    images: CAROUSEL_G,
    location: 'Tragaki, Greece',
    rating: 4.9,
    title: 'Cavo Orient Beach Hotel & Suites',
    description: HOTEL_DESCRIPTION,
    price: '$1,330 night',
  },
  {
    id: 'palazzo-florence',
    images: CAROUSEL_H,
    location: 'Florence, Italy',
    rating: 4.8,
    title: 'Palazzo Niccolini Residenza',
    description: HOTEL_DESCRIPTION,
    price: '$2,365 night',
  },
]

const CAROUSEL_I = [img5, img1, img2c, img4, img6]
const CAROUSEL_J = [img2, img6, img1b, img3, img5]
const CAROUSEL_K = [img4, img3, img6, img2b, img1]
const CAROUSEL_L = [img6, img2c, img5, img1b, img4]

/** Extended list for Hot Deals page (12 cards). */
export const BOOKTOUR_HOT_DEALS_HOTELS = [
  ...BOOKTOUR_HOTELS,
  {
    id: 'amalfi-coast',
    images: CAROUSEL_I,
    location: 'Positano, Italy',
    rating: 4.9,
    title: 'Casa Angelina Lifestyle',
    description: HOTEL_DESCRIPTION,
    price: '$1,890 night',
  },
  {
    id: 'kyoto-ryokan',
    images: CAROUSEL_J,
    location: 'Kyoto, Japan',
    rating: 4.8,
    title: 'Hoshinoya Kyoto Riverside',
    description: HOTEL_DESCRIPTION,
    price: '$1,540 night',
  },
  {
    id: 'marrakech-riad',
    images: CAROUSEL_K,
    location: 'Marrakech, Morocco',
    rating: 4.7,
    title: 'Royal Mansour Gardens',
    description: HOTEL_DESCRIPTION,
    price: '$2,180 night',
  },
  {
    id: 'santorini-caldera',
    images: CAROUSEL_L,
    location: 'Oia, Greece',
    rating: 5.0,
    title: 'Canaves Oia Epitome',
    description: HOTEL_DESCRIPTION,
    price: '$2,740 night',
  },
]

export const HOT_DEALS_INTRO =
  'Dive into the vibrant world of global events with our Experiences blog! Explore the allure of renowned festivals, major sports competitions, and cultural gatherings.'
