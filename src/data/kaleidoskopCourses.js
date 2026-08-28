import img1 from '../assets/kaleidoskop/courses/course-1.png'
import img2 from '../assets/kaleidoskop/courses/course-2.png'
import img3 from '../assets/kaleidoskop/courses/course-3.png'
import img4 from '../assets/kaleidoskop/courses/course-4.png'
import img5 from '../assets/kaleidoskop/courses/course-5.png'
import img6 from '../assets/kaleidoskop/courses/course-6.png'
import img7 from '../assets/kaleidoskop/courses/course-7.png'
import img8 from '../assets/kaleidoskop/courses/course-8.png'
import img9 from '../assets/kaleidoskop/courses/course-9.png'
import img10 from '../assets/kaleidoskop/courses/course-10.png'
import gallery1 from '../assets/kaleidoskop/courses/gallery-1.png'
import gallery2 from '../assets/kaleidoskop/courses/gallery-2.png'
import gallery3 from '../assets/kaleidoskop/courses/gallery-3.png'
import gallery4 from '../assets/kaleidoskop/courses/gallery-4.png'
import gallery5 from '../assets/kaleidoskop/courses/gallery-5.png'
import gallery6 from '../assets/kaleidoskop/courses/gallery-6.png'
import gallery7 from '../assets/kaleidoskop/courses/gallery-7.png'

export const COURSE_DESCRIPTION =
"Dieser Kurs ist für Kinder im Alter von 5 bis 7 Jahren, die mit Freude und Fantasie erste Schritte in die Welt des klassischen Tanzes machen möchten."
export const COURSE_DESCRIPTION_EXTRA = [
"In einer liebevollen und spielerischen Umgebung lernen die Kinder, sich zur Musik zu bewegen, ihre Körperwahrnehmung zu stärken und ein Gefühl für Rhythmus, Haltung und Ausdruck zu entwickeln.",  "Hier steht nicht Leistung im Vordergrund, sondern die Begeisterung an der Bewegung und das gemeinsame Erleben. Die Kinder tanzen, lachen, lernen – und wachsen ganz nebenbei über sich hinaus."]

export const MODAL_GALLERY = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7]

export const COURSES = [
  {
    id: 1,
    title: 'Ballett Für Kinder',
    description: COURSE_DESCRIPTION,
    day: 'Montag',
    time: '16:30–17:30',
    age: 'Von 5–7 Jahren',
    category: 'Choreografie',
    images: [img1, img2],
  },
  {
    id: 2,
    title: 'Modern Dance Youth',
    description: COURSE_DESCRIPTION,
    day: 'Dienstag',
    time: '17:00–18:15',
    age: 'Von 12–16 Jahren',
    category: 'Tanz',
    images: [img3, img5, img7],
  },
  {
    id: 3,
    title: 'Theater Improvisation',
    description: COURSE_DESCRIPTION,
    day: 'Mittwoch',
    time: '18:00–19:30',
    age: 'Von 14–18 Jahren',
    category: 'Theater',
    images: [img4, img6],
  },
  {
    id: 4,
    title: 'Hip-Hop Foundations',
    description: COURSE_DESCRIPTION,
    day: 'Donnerstag',
    time: '16:45–18:00',
    age: 'Von 10–14 Jahren',
    category: 'Street',
    images: [img9, img10, img8],
  },
  {
    id: 5,
    title: 'Kreatives Schreiben & Performance',
    description: COURSE_DESCRIPTION,
    day: 'Freitag',
    time: '17:30–19:00',
    age: 'Von 15–19 Jahren',
    category: 'Performance',
    images: [img8, img7],
  },
]

export const SCHEDULE = [
  {
    day: 'Montag',
    slots: [
      { id: 'mo-1', title: 'Ballett', subtitle: '5–7 J', room: 'Saal 3', time: '16:30–17:30' },
      { id: 'mo-2', title: 'Ballett', subtitle: 'Ab 14 J', room: 'Saal 3', time: '17:30–18:30' },
    ],
  },
  {
    day: 'Dienstag',
    slots: [
      { id: 'di-1', title: 'Akrobatik', subtitle: 'Bis 10J.', room: 'Saal 2', time: '16:30–17:30' },
      { id: 'di-2', title: 'Alpha Intensiv', room: 'Saal 3', time: '18:00–20:00' },
    ],
  },
  {
    day: 'Mittwoch',
    slots: [
      {
        id: 'mi-1',
        title: 'Theater Twister & Freestyle Jugendtreff',
        room: 'Saal 2',
        time: '17:00–18:00',
      },
      { id: 'mi-2', title: 'Hip-Hop', subtitle: '11–16J', room: 'Saal 3', time: '17:00–18:00' },
      { id: 'mi-3', title: 'Ballett', subtitle: '8–12 J', room: 'Saal 3', time: '18:00–19:00' },
      {
        id: 'mi-4',
        title: 'Theater Team Drive & Teenager Jugendtreff',
        room: 'Saal 3',
        time: '18:30–19:30',
      },
    ],
  },
  {
    day: 'Donnerstag',
    slots: [
      { id: 'do-1', title: 'Mini Alpha Intensiv', room: 'Saal 3', time: '17:00–18:00' },
      { id: 'do-2', title: 'Hip-Hop', subtitle: '8–10 J', room: 'Saal 3', time: '18:00–19:00' },
      { id: 'do-3', title: 'Modern Und Contemp', subtitle: 'Ab 14 J', room: 'Saal 3', time: '19:00–20:00' },
    ],
  },
  {
    day: 'Freitag',
    slots: [
      { id: 'fr-1', title: 'Maxi Voyage', room: 'Saal 3', time: '14:00–15:00' },
      { id: 'fr-2', title: 'Voyage Boys', room: 'Saal 3', time: '15:00–16:00' },
      { id: 'fr-3', title: 'Tanzen Team Drive', room: 'Saal 3', time: '16:00–17:30' },
      { id: 'fr-4', title: 'Probestunde', room: 'Saal 3', time: '17:30' },
      { id: 'fr-5', title: 'Modern Und Contemp Teenager', room: 'Saal 3', time: '18:30–19:45' },
    ],
  },
  {
    day: 'Sonntag',
    slots: [
      { id: 'so-1', title: 'Mini Voyage', room: 'Saal 3', time: '11:45–12:45' },
      { id: 'so-2', title: 'Tanzen Löwenzahn', room: 'Saal 1', time: '12:00–12:45' },
      { id: 'so-3', title: 'Tanzen Domino', room: 'Saal 2', time: '14:00–14:45' },
      { id: 'so-4', title: 'Tanzen Twister', room: 'Saal 1', time: '13:00–14:00' },
      { id: 'so-5', title: 'Tanzen Freestyle', room: 'Saal 1', time: '13:00–14:00' },
      { id: 'so-6', title: 'Kunst Löwenzahn Und Domino', room: 'Saal 1', time: '13:00–13:45' },
      { id: 'so-7', title: 'Twister Und Freestyle', room: 'Saal 1', time: '14:00–14:45' },
      { id: 'so-8', title: 'Voyage Gruppen Bis', room: 'Saal 3', time: '16:00' },
    ],
  },
]
