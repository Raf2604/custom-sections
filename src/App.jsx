import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import KaleidoskopLayout from './pages/kaleidoskop/KaleidoskopLayout.jsx'
import KaleidoskopHome from './pages/kaleidoskop/KaleidoskopHome.jsx'
import KaleidoskopAbout from './pages/kaleidoskop/KaleidoskopAbout.jsx'
import KaleidoskopCourses from './pages/kaleidoskop/KaleidoskopCourses.jsx'
import EdelweissHome from './pages/edelweiss/EdelweissHome.jsx'
import BooktourHome from './pages/booktour/BooktourHome.jsx'
import BooktourHotDeals from './pages/booktour/BooktourHotDeals.jsx'
import BooktourBlog from './pages/booktour/BooktourBlog.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kaleidoskop" element={<KaleidoskopLayout />}>
          <Route index element={<KaleidoskopHome />} />
          <Route path="about" element={<KaleidoskopAbout />} />
          <Route path="courses" element={<KaleidoskopCourses />} />
        </Route>
        <Route path="/edelweiss" element={<EdelweissHome />} />
        <Route path="/booktour" element={<BooktourHome />} />
        <Route path="/booktour/hot-deals" element={<BooktourHotDeals />} />
        <Route path="/booktour/blog" element={<BooktourBlog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
