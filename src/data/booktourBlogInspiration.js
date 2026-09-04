import blogImg1 from '../assets/booktour/blog-ispiration/53be2380a89aecc15998a4c3c5eca0884769f3ba.webp'
import blogImg2 from '../assets/booktour/blog-ispiration/14ae7e27c68fa3197ecb5c5ca8d6fecd2243a7e5.webp'
import blogImg3 from '../assets/booktour/blog-ispiration/93cdcb377e12748f9fff1e01bfd294b7f93de2de.webp'
import explore1 from '../assets/booktour/explore/611b3ce642bbd31ca4dacda3e6a28109000e867f.webp'
import explore2 from '../assets/booktour/explore/9482d519f53ca5bd09b157b6aa95855c2cd07e5b.webp'
import explore3 from '../assets/booktour/explore/c21b4af8765b7f825a4c0c8da868838095b880ed.webp'
import explore4 from '../assets/booktour/explore/29f82403599e54bbb384f8ec5cf851daf6a9b956.webp'
import explore5 from '../assets/booktour/explore/97c8f7d79b7ec26052ba8c171215c6c1940b6ea1.webp'
import explore6 from '../assets/booktour/explore/6e93a236e5bcb6930dc2bb7417538cb15147a38b.webp'
import explore7 from '../assets/booktour/explore/3d75332aff769d6ba72a2a4c41137be3cf65c886.webp'
import explore8 from '../assets/booktour/explore/ddc09b0235037d7a471fcb854bf909ecf4070382.webp'
import explore9 from '../assets/booktour/explore/5eb3fb8c25fc0842e29a86dec59960f1cd353e84.webp'

export const BLOG_INSPIRATION_INTRO =
  'Let your imagination soar with our Dream Escapes. Every post is a portal to potential adventures, offering a peek into enchanting destinations and unique travel experiences.'

export const BLOG_INSPIRATION_DESCRIPTION =
  'Dreams of off-piste made real in a totally uninhabited environment somewhere in the middle of the Caucasian Mountains.'

const IMAGES = [
  blogImg1,
  blogImg2,
  blogImg3,
  explore1,
  explore2,
  explore3,
  explore4,
  explore5,
  explore6,
  explore7,
  explore8,
  explore9,
]

/** Color pairs aligned with BOOKTOUR_EXPERIENCES overlays. */
const COLORS = [
  { titleColor: '#FFF1DB', locationColor: '#FB773C' },
  { titleColor: '#EF5A6F', locationColor: '#536493' },
  { titleColor: '#FB773C', locationColor: '#EB3678' },
  { titleColor: '#FB773C', locationColor: '#536493' },
  { titleColor: '#EF5A6F', locationColor: '#536493' },
  { titleColor: '#FFF1DB', locationColor: '#D4BDAC' },
  { titleColor: '#FFF1DB', locationColor: '#FB773C' },
  { titleColor: '#EB3678', locationColor: '#FB773C' },
]

const PRICES = [
  'From $2,365',
  'From $1,890',
  'From $3,120',
  'From $2,450',
  'From $1,650',
  'From $2,980',
]

function buildCards(seed, places) {
  return places.map((place, index) => {
    const colors = COLORS[(index + seed) % COLORS.length]
    return {
      id: `${seed}-${index}`,
      image: IMAGES[(index + seed) % IMAGES.length],
      title: place.title,
      city: place.city,
      country: place.country,
      description: BLOG_INSPIRATION_DESCRIPTION,
      price: PRICES[(index + seed) % PRICES.length],
      titleColor: colors.titleColor,
      locationColor: colors.locationColor,
    }
  })
}

export const BLOG_INSPIRATION_TABS = [
  {
    id: 'winter-fun',
    label: 'Winter Fun',
    cards: buildCards(0, [
      { title: 'Jetskiing In Georgia', city: 'Bakhmaro', country: 'Georgia' },
      { title: 'Sushi Powder', city: 'Niseko', country: 'Japan' },
      { title: 'Alpine Glow', city: 'Chamonix', country: 'France' },
      { title: 'Powder Trails', city: 'Whistler', country: 'Canada' },
      { title: 'Ice Cathedral', city: 'Reykjavik', country: 'Iceland' },
      { title: 'Frozen Lakes', city: 'Banff', country: 'Canada' },
    ]),
  },
  {
    id: 'culture',
    label: 'Culture',
    cards: buildCards(1, [
      { title: "Musée D'Orsay", city: 'Paris', country: 'France' },
      { title: 'Eternal City', city: 'Rome', country: 'Italy' },
      { title: 'Temple Paths', city: 'Kyoto', country: 'Japan' },
      { title: 'Waltz Quarter', city: 'Vienna', country: 'Austria' },
      { title: 'Old Town Lights', city: 'Prague', country: 'Czechia' },
    ]),
  },
  {
    id: 'traditions',
    label: 'Traditions',
    cards: buildCards(2, [
      { title: 'Pink City Rituals', city: 'Jaipur', country: 'India' },
      { title: 'Souk Nights', city: 'Marrakech', country: 'Morocco' },
      { title: 'Mole & Markets', city: 'Oaxaca', country: 'Mexico' },
      { title: 'Andean Echoes', city: 'Cusco', country: 'Peru' },
    ]),
  },
  {
    id: 'fashion-shopping',
    label: 'Fashion & Shopping',
    cards: buildCards(3, [
      { title: 'Galleria Walks', city: 'Milan', country: 'Italy' },
      { title: 'Left Bank Style', city: 'Paris', country: 'France' },
      { title: 'Fifth Avenue', city: 'New York', country: 'USA' },
      { title: 'Bond Street', city: 'London', country: 'UK' },
      { title: 'Shibuya Pulse', city: 'Tokyo', country: 'Japan' },
      { title: 'Canal Couture', city: 'Amsterdam', country: 'Netherlands' },
    ]),
  },
  {
    id: 'nature',
    label: 'Nature',
    cards: buildCards(4, [
      { title: 'Northern Lights', city: 'Tromsø', country: 'Norway' },
      { title: 'Fjords & Mist', city: 'Bergen', country: 'Norway' },
      { title: 'Alpine Meadows', city: 'Interlaken', country: 'Switzerland' },
      { title: 'Valley Floor', city: 'Queenstown', country: 'New Zealand' },
      { title: 'Sands Of Gobi', city: 'Gobi Desert', country: 'Mongolia' },
    ]),
  },
  {
    id: 'surfing',
    label: 'Surfing',
    cards: buildCards(5, [
      { title: 'Surf Ranch', city: 'Lemoore', country: 'USA' },
      { title: 'Atlantic Breaks', city: 'Ericeira', country: 'Portugal' },
      { title: 'Reef Mornings', city: 'Bali', country: 'Indonesia' },
      { title: 'Byron Swell', city: 'Byron Bay', country: 'Australia' },
    ]),
  },
  {
    id: 'safari',
    label: 'Safari',
    cards: buildCards(6, [
      { title: 'Paramotor Safari', city: 'Skeleton Bay', country: 'Namibia' },
      { title: 'Masai Dawn', city: 'Masai Mara', country: 'Kenya' },
      { title: 'Serengeti Drift', city: 'Serengeti', country: 'Tanzania' },
      { title: 'Kruger Trails', city: 'Kruger', country: 'South Africa' },
      { title: 'Delta Light', city: 'Okavango', country: 'Botswana' },
    ]),
  },
  {
    id: 'beaches',
    label: 'Beaches',
    cards: buildCards(7, [
      { title: 'Atoll Quiet', city: 'Male', country: 'Maldives' },
      { title: 'Caldera Blue', city: 'Santorini', country: 'Greece' },
      { title: 'Andaman Shores', city: 'Phuket', country: 'Thailand' },
      { title: 'Cenote Coast', city: 'Tulum', country: 'Mexico' },
      { title: 'Adriatic Hide', city: 'Hvar', country: 'Croatia' },
      { title: 'Sahara Escape', city: 'Morocco', country: 'Africa' },
    ]),
  },
  {
    id: 'religious-heritage',
    label: 'Religious Heritage',
    cards: buildCards(8, [
      { title: 'Vatican Steps', city: 'Vatican', country: 'Italy' },
      { title: 'Old City Paths', city: 'Jerusalem', country: 'Israel' },
      { title: 'Ganges Dawn', city: 'Varanasi', country: 'India' },
      { title: 'Pilgrim Road', city: 'Santiago', country: 'Spain' },
      { title: 'Deer Park Temples', city: 'Nara', country: 'Japan' },
    ]),
  },
]
