import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/packages" element={<Page><Packages /></Page>} />
          <Route path="/destinations" element={<Page><Destinations /></Page>} />
          <Route path="/destinations/:slug" element={<Page><DestinationDetail /></Page>} />
          <Route path="/gallery" element={<Page><Gallery /></Page>} />
          <Route path="/testimonials" element={<Page><Testimonials /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </>
  )
}
