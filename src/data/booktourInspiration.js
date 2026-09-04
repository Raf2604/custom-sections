import img1 from '../assets/booktour/ispiration/a429afcaf66eef359a11699e9209614ec88d1552.png'
import img2 from '../assets/booktour/ispiration/1eee7c01f5352af8f80c36e857dd3245c0a64cb9.png'
import img3 from '../assets/booktour/ispiration/1503d6d2867aa2e220e61019fd6017672c9131bf.png'
import img4 from '../assets/booktour/ispiration/27a88331852eb60ddee5e06ac310a2341188fc81.png'
import img5 from '../assets/booktour/ispiration/3023b0d13c24c73333eeee3ff1cbb0eea5c1df9a.png'
import img6 from '../assets/booktour/ispiration/7af0e032e3a522b9f53fc9e4a24750338d934914.jpg'

export const INSPIRATION_INTRO =
  'Let your imagination soar with our Dream Escapes. Every post is a portal to potential adventures, offering a peek into enchanting destinations and unique travel experiences.'

export const INSPIRATION_DESCRIPTION =
  'Andalusia is passion personified. Often portrayed as encapsulating the essence and spirit of Spain with its sun-dappled white villages and ...'

const IMAGES = [img1, img2, img3, img4, img5, img6]

function buildCards(seed, places) {
  return places.map((place, index) => ({
    id: `${seed}-${index}`,
    image: IMAGES[(index + seed) % IMAGES.length],
    country: place.country,
    city: place.city,
    description: INSPIRATION_DESCRIPTION,
  }))
}

export const INSPIRATION_TABS = [
  {
    id: 'food-wine',
    label: 'Food & Wine',
    cards: buildCards(0, [
      { country: 'Spain', city: 'Andalusia' },
      { country: 'Spain', city: 'Barcelona' },
      { country: 'Spain', city: 'Madrid' },
      { country: 'Italy', city: 'Tuscany' },
      { country: 'France', city: 'Bordeaux' },
    ]),
  },
  {
    id: 'culture',
    label: 'Culture',
    cards: buildCards(1, [
      { country: 'France', city: 'Paris' },
      { country: 'Italy', city: 'Rome' },
      { country: 'Japan', city: 'Kyoto' },
      { country: 'Austria', city: 'Vienna' },
      { country: 'Czechia', city: 'Prague' },
    ]),
  },
  {
    id: 'traditions',
    label: 'Traditions',
    cards: buildCards(2, [
      { country: 'India', city: 'Jaipur' },
      { country: 'Morocco', city: 'Marrakech' },
      { country: 'Mexico', city: 'Oaxaca' },
      { country: 'Peru', city: 'Cusco' },
      { country: 'Turkey', city: 'Istanbul' },
    ]),
  },
  {
    id: 'fashion-shopping',
    label: 'Fashion & Shopping',
    cards: buildCards(3, [
      { country: 'Italy', city: 'Milan' },
      { country: 'France', city: 'Paris' },
      { country: 'USA', city: 'New York' },
      { country: 'UK', city: 'London' },
      { country: 'Japan', city: 'Tokyo' },
    ]),
  },
  {
    id: 'nature',
    label: 'Nature',
    cards: buildCards(4, [
      { country: 'Iceland', city: 'Reykjavik' },
      { country: 'Canada', city: 'Banff' },
      { country: 'New Zealand', city: 'Queenstown' },
      { country: 'Norway', city: 'Bergen' },
      { country: 'Switzerland', city: 'Interlaken' },
    ]),
  },
  {
    id: 'surfing',
    label: 'Surfing',
    cards: buildCards(5, [
      { country: 'Portugal', city: 'Ericeira' },
      { country: 'Indonesia', city: 'Bali' },
      { country: 'Australia', city: 'Byron Bay' },
      { country: 'USA', city: 'Malibu' },
      { country: 'Morocco', city: 'Taghazout' },
    ]),
  },
  {
    id: 'safari',
    label: 'Safari',
    cards: buildCards(0, [
      { country: 'Kenya', city: 'Masai Mara' },
      { country: 'Tanzania', city: 'Serengeti' },
      { country: 'South Africa', city: 'Kruger' },
      { country: 'Botswana', city: 'Okavango' },
      { country: 'Namibia', city: 'Etosha' },
    ]),
  },
  {
    id: 'beaches',
    label: 'Beaches',
    cards: buildCards(2, [
      { country: 'Maldives', city: 'Male' },
      { country: 'Greece', city: 'Santorini' },
      { country: 'Thailand', city: 'Phuket' },
      { country: 'Mexico', city: 'Tulum' },
      { country: 'Croatia', city: 'Hvar' },
    ]),
  },
  {
    id: 'religious-heritage',
    label: 'Religious Heritage',
    cards: buildCards(3, [
      { country: 'Italy', city: 'Vatican' },
      { country: 'Israel', city: 'Jerusalem' },
      { country: 'India', city: 'Varanasi' },
      { country: 'Spain', city: 'Santiago' },
      { country: 'Japan', city: 'Nara' },
    ]),
  },
]
