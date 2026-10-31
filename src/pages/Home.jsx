import { Link } from 'react-router-dom'
import { img, Sparkle, BookButton, Marquee, SplitHead } from '../components/ui'
import {
  AppointmentSection, MissionSection, ServicesBand, TrustSection, StatsSection,
  TestimonialsBand, PortfolioCards, ExpertSection, GalleryStrip, homeGallery,
} from '../components/sections'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow light">Advanced Skincare in New York City</p>
          <h1>Personalized Treatments. Proven Results.</h1>
          <p className="hero-lead">Experience customized facials and advanced aesthetic treatments backed by 15+ years of medical skincare expertise.</p>
          <ul className="hero-links">
            <li><Sparkle /><Link to="/contact">Book an Appointment</Link></li>
            <li><Sparkle /><Link to="/services">View Our Services</Link></li>
            <li><Sparkle /><Link to="/our-team">Meet Our Team</Link></li>
            <li><Sparkle /><Link to="/contact">Contact Us</Link></li>
          </ul>
          <BookButton className="btn-brown" />
        </div>
        <div className="hero-media">
          <img src={img('hero-women.jpg')} alt="Two smiling women with glowing skin" />
        </div>
        <span className="script hero-script" aria-hidden="true">Natural beauty</span>
      </section>

      <AppointmentSection />

      <SplitHead eyebrow="Welcome to Revive Skin Studio" title={<>Exceptional Care. <br />Advanced Skincare <br />Technology.</>}>
        Ready to experience advanced, <strong>results-driven</strong> skincare in NYC, backed by 15+ years of medical aesthetics expertise, modern technology, and personalized treatment plans, all delivered in a welcoming, professional setting for naturally radiant, confident skin?
      </SplitHead>

      <MissionSection />
      <ServicesBand />
      <TrustSection />
      <StatsSection />
      <Marquee words={['Natural Glow', 'Expert Care', 'Radiant Skin', 'Proven Results']} />
      <TestimonialsBand />

      <SplitHead eyebrow="Our Portfolio" title={<>Radiant Results. Proven <br />Transformations.</>}>
        Experience exclusively at Revive Skin Studio: clinical-grade laser rejuvenation, acne and pigmentation correction, plus advanced skin maintenance protocols, delivering naturally beautiful, lasting transformations. Medical technology meets authentic care.
      </SplitHead>
      <PortfolioCards />

      <ExpertSection />
      <GalleryStrip images={homeGallery} />
    </>
  )
}
