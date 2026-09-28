import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Music from './pages/Music'
import Album from './pages/Album'
import GalleryPage from './pages/Gallery'
import About from './pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/music/:albumId" element={<Album />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
