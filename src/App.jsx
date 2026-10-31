import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

// VITE_HASH_ROUTER=1 builds a single-file-friendly preview (used for the review link); normal builds use clean URLs.
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import { OurTeam, Testimonials, Contact, Faq, NotFound } from './pages/AboutSubpages'
import { Services, Packages, Memberships, Rewards, GiftCertificates, Gallery } from './pages/MenuPages'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="services" element={<Services />} />
          <Route path="packages" element={<Packages />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="rewards-program" element={<Rewards />} />
          <Route path="gift-certificates" element={<GiftCertificates />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
