import img1 from '../assets/booktour/explore/611b3ce642bbd31ca4dacda3e6a28109000e867f.webp'
import img2 from '../assets/booktour/explore/9482d519f53ca5bd09b157b6aa95855c2cd07e5b.webp'
import img3 from '../assets/booktour/explore/c21b4af8765b7f825a4c0c8da868838095b880ed.webp'
import img4 from '../assets/booktour/explore/29f82403599e54bbb384f8ec5cf851daf6a9b956.webp'
import img5 from '../assets/booktour/explore/97c8f7d79b7ec26052ba8c171215c6c1940b6ea1.webp'
import img6 from '../assets/booktour/explore/6e93a236e5bcb6930dc2bb7417538cb15147a38b.webp'
import img7 from '../assets/booktour/explore/3d75332aff769d6ba72a2a4c41137be3cf65c886.webp'
import img8 from '../assets/booktour/explore/ddc09b0235037d7a471fcb854bf909ecf4070382.webp'
import img9 from '../assets/booktour/explore/5eb3fb8c25fc0842e29a86dec59960f1cd353e84.webp'

export const EXPLORE_INTRO =
  'Dive into the vibrant world of global events with our Experiences blog! Explore the allure of renowned festivals, major sports competitions, and cultural gatherings.'

/** Each card can set titleColor, descriptionColor, statusColor independently. */
export const BOOKTOUR_EXPERIENCES = [
  {
    id: 'sands-of-gobi',
    column: 0,
    image: img8,
    title: 'Sands Of Gobi',
    description: 'Gobi Desert, Mongolia',
    status: 'Coming Soon',
    titleColor: '#FFF1DB',
    descriptionColor: '#D4BDAC',
    statusColor: '#FFF1DB',
  },
  {
    id: 'ferrari-museum',
    column: 1,
    image: img2,
    title: 'Ferrari Museum',
    description: 'Maranello, Italy',
    status: 'Coming Soon',
    titleColor: '#FFF1DB',
    descriptionColor: '#FFF1DB',
    statusColor: '#FFF1DB',
  },
  {
    id: 'lassos-pub',
    column: 2,
    image: img7,
    title: "Lasso's Favorite Pub",
    description: 'Greater London, United Kingdom',
    status: 'Sold Out',
    titleColor: '#FB773C',
    descriptionColor: '#EB3678',
    statusColor: '#FFF1DB',
  },
  {
    id: 'sahara-escape',
    column: 0,
    image: img3,
    title: 'Sahara Escape',
    description: 'Morocco, Africa',
    status: 'Starting at November',
    titleColor: '#FB773C',
    descriptionColor: '#536493',
    statusColor: '#EF5A6F',
  },
  {
    id: 'sushi-powder',
    column: 1,
    image: img4,
    title: 'Sushi Powder',
    description: 'Niseko, Japan',
    status: 'Coming Soon',
    titleColor: '#EF5A6F',
    descriptionColor: '#536493',
    statusColor: '#FFF1DB',
  },
  {
    id: 'paramotor-safari',
    column: 2,
    image: img1,
    title: 'Paramotor Safari',
    description: 'Skeleton bay, namibia',
    status: 'Coming Soon',
    titleColor: '#FFF1DB',
    descriptionColor: '#D4BDAC',
    statusColor: '#FFF1DB',
  },
  {
    id: 'musee-dorsay',
    column: 0,
    image: img5,
    title: "Musée D'Orsay",
    description: 'Paris, France',
    status: 'Coming Soon',
    titleColor: '#FFF1DB',
    descriptionColor: '#D4BDAC',
    statusColor: '#FFF1DB',
  },
  {
    id: 'shreks-swamp',
    column: 1,
    image: img9,
    title: "Shrek's Swamp",
    description: 'Highland County, United Kingdom',
    status: 'Coming Soon',
    titleColor: '#FFF1DB',
    descriptionColor: '#FB773C',
    statusColor: '#FFF1DB',
  },
  {
    id: 'surf-ranch',
    column: 2,
    image: img6,
    title: 'Surf Ranch',
    description: 'Leemore, California, USA',
    status: 'Starting At November',
    titleColor: '#EB3678',
    descriptionColor: '#FB773C',
    statusColor: '#FFF1DB',
  },
]

export const EXPLORE_COLUMNS = [
  BOOKTOUR_EXPERIENCES.filter((item) => item.column === 0),
  BOOKTOUR_EXPERIENCES.filter((item) => item.column === 1),
  BOOKTOUR_EXPERIENCES.filter((item) => item.column === 2),
]
