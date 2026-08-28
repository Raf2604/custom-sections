import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import KaleidoskopLayout from './pages/kaleidoskop/KaleidoskopLayout.jsx'
import KaleidoskopHome from './pages/kaleidoskop/KaleidoskopHome.jsx'
import KaleidoskopAbout from './pages/kaleidoskop/KaleidoskopAbout.jsx'
import KaleidoskopCourses from './pages/kaleidoskop/KaleidoskopCourses.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kaleidoskop" element={<KaleidoskopLayout />}>
        <Route index element={<KaleidoskopHome />} />
        <Route path="about" element={<KaleidoskopAbout />} />
        <Route path="courses" element={<KaleidoskopCourses />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
