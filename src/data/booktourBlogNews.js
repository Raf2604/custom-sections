import img1 from '../assets/booktour/blog-posts/bcd9631f158d065979bbb7459dc06ea039cf22df.webp'
import img2 from '../assets/booktour/blog-posts/8ab2487a1f81ce9f8af45d6e4178e24b4b2e21ea.webp'
import img3 from '../assets/booktour/blog-posts/bcc5c69f553d42ed48fd65ee89523bc4b6586e00.webp'
import img4 from '../assets/booktour/blog-posts/2d47e00bb47ee2745a034e2ddd2c2676752c0104.webp'
import img5 from '../assets/booktour/blog-posts/3023b0d13c24c73333eeee3ff1cbb0eea5c1df9a (1).webp'
import img6 from '../assets/booktour/blog-posts/cd28289bc1a71a573daa0bebb218dda709a8223f.webp'
import img7 from '../assets/booktour/blog-posts/27a88331852eb60ddee5e06ac310a2341188fc81 (1).webp'
import img8 from '../assets/booktour/blog-posts/afd2d1ff8876be3cb604e6816c6109c2805722dc.webp'
import img9 from '../assets/booktour/blog-posts/93cdcb377e12748f9fff1e01bfd294b7f93de2de.webp'

const IMAGES = [img3, img7, img8, img1, img5, img4, img6, img2, img9]

const BASE_POSTS = [
  {
    title: "NYC's rules one year later: Higher prices for travelers, no housing impact",
    date: 'October 1, 2024',
  },
  {
    title: '2024 fall trends: Shoulder season savings, leaf peeping, and event-cations',
    date: 'September 28, 2024',
  },
  {
    title: 'Paris 2024 countdown: Where to book last-minute',
    date: 'September 22, 2024',
  },
  {
    title: 'Chef Ferran Adrià unveils latest creation: An overnight stay at elBulli1846',
    date: 'September 18, 2024',
  },
  {
    title: "Stay up all night in the Hidden Library of St Paul's Cathedral",
    date: 'September 12, 2024',
  },
  {
    title: 'Make Sin City your playground with Christina Aguilera',
    date: 'September 5, 2024',
  },
  {
    title: 'New EU STR rules a step closer after European Parliament vote',
    date: 'August 30, 2024',
  },
  {
    title: 'Hit the slopes this winter: 10 of the most wishlisted ski-in/out stays',
    date: 'August 24, 2024',
  },
  {
    title: 'From Rio to San Diego, explore the top searched carnival destinations',
    date: 'August 16, 2024',
  },
]

const ALT_TITLES = [
  'Winter escapes worth the wait: Cabins, chalets, and aurora nights',
  'Culture weekends: Museums after dark and city walking trails',
  'Traditions remixed: Festivals travelers are booking now',
  'Fashion capitals for a long weekend: Where style meets stays',
  'Nature first: Quiet trails and design-forward eco lodges',
  'Surf calendars: Breaks, boards, and beachfront hideaways',
  'Safari season planner: Camps with the best game drives',
  'Beach weeks that feel longer: Soft sand and slow mornings',
  'Heritage routes: Temples, chapels, and sacred city walks',
  'City hotel report: Design stays under the radar',
  'Food pilgrimages: Tables worth a detour this month',
  'Last-minute luxury: Suites still open for peak season',
]

const ALT_DATES = [
  'October 1, 2024',
  'September 28, 2024',
  'September 22, 2024',
  'September 18, 2024',
  'September 12, 2024',
  'September 5, 2024',
  'August 30, 2024',
  'August 24, 2024',
  'August 16, 2024',
  'August 8, 2024',
  'July 29, 2024',
  'July 21, 2024',
]

function rotate(list, offset) {
  const len = list.length
  const start = ((offset % len) + len) % len
  return [...list.slice(start), ...list.slice(0, start)]
}

function buildPosts(seed) {
  const images = rotate(IMAGES, seed)
  const titles = seed === 0 ? BASE_POSTS.map((p) => p.title) : rotate(ALT_TITLES, seed)
  const dates = seed === 0 ? BASE_POSTS.map((p) => p.date) : rotate(ALT_DATES, seed * 2)

  return images.map((image, index) => ({
    id: `${seed}-${index}`,
    image,
    title: titles[index % titles.length],
    date: dates[index % dates.length],
  }))
}

export const BLOG_NEWS_TABS = [
  { id: 'winter-fun', label: 'Winter Fun', posts: buildPosts(0) },
  { id: 'culture', label: 'Culture', posts: buildPosts(1) },
  { id: 'traditions', label: 'Traditions', posts: buildPosts(2) },
  { id: 'fashion-shopping', label: 'Fashion & Shopping', posts: buildPosts(3) },
  { id: 'nature', label: 'Nature', posts: buildPosts(4) },
  { id: 'surfing', label: 'Surfing', posts: buildPosts(5) },
  { id: 'safari', label: 'Safari', posts: buildPosts(6) },
  { id: 'beaches', label: 'Beaches', posts: buildPosts(7) },
  { id: 'religious-heritage', label: 'Religious Heritage', posts: buildPosts(8) },
]
