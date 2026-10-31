import { useState } from 'react'
import { Link } from 'react-router-dom'
import { img, Icon, Sparkle, BookButton, SocialRow } from './ui'

/* ---------- Shared content ---------- */
export const contact = {
  phone: '(646) 272-6605',
  tel: '+16462726605',
  email: 'info@reviveskinstudio.nyc',
  address: ['5 W 37th St 7th floor', 'Suite 717, New York, NY', '10018, United States'],
  hours: ['Sunday closed', 'Monday 11am-7pm', 'Tuesday closed', 'Wed-Frid 11am-7pm', 'Saturday 11:30- 3pm'],
}

// Excerpts as shown on the studio's Google reviews widget — replace with the live widget embed if you have one.
export const reviews = [
  { name: 'Mildred Bernal', text: 'Julitssa is the heart and soul of Revive. Not only do she treats you with kindness and warmth, but her experience makes you…', initial: 'MB' },
  { name: 'Marcia Dukes', text: 'As a former service giver... I all I can say Bravo!!! Revive Skin Studio is truly a gem. From the moment you walk in, you can…', initial: 'M' },
]

/* ---------- Book appointment ---------- */
export function AppointmentSection({ standalone = false }) {
  return (
    <section className={standalone ? 'appointment standalone' : 'appointment'} id="book">
      <div className="appointment-inner reveal">
        <h2>Book Your Appointment</h2>
        <p>Claim your appointment today and set off on the path to healthier, more radiant skin. After booking, Revive Skin Studio will verify your visit and ensure you receive specialized, attentive care that’s tailored to your skin’s distinct condition.</p>
        <div className="appointment-cards">
          <article className="info-card">
            <span className="icon-circle">{Icon.phone}</span>
            <h3>Contact Us</h3>
            <p>Call us: <a className="accent" href={`tel:${contact.tel}`}>{contact.phone}</a></p>
            <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <SocialRow />
          </article>
          <article className="info-card">
            <span className="icon-circle">{Icon.calendar}</span>
            <h3>Opening Hours</h3>
            <ul>{contact.hours.map((h) => <li key={h}>{h}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ---------- Mission / about columns ---------- */
export function MissionSection() {
  return (
    <section className="container about-grid">
      <div className="about-col reveal">
        <h3 className="col-title">Our Mission</h3>
        <p className="muted">Science-led corrective peels, microneedling, skin tightening, and pigmentation correction in NYC. Age-defying medical aesthetics at Revive Skin Studio, precision results, never one-size-fits-all.</p>
        <ul className="spark-list">
          <li><Sparkle />Personalized Skin Transformation</li>
          <li><Sparkle />Improved Confidence &amp; Skin Wellness</li>
          <li><Sparkle />Advanced Aesthetic Technology</li>
          <li><Sparkle />Safe, Results-Focused Care</li>
        </ul>
      </div>
      <div className="about-oval reveal">
        <img src={img('about-oval.jpg')} alt="Facial treatment at Revive Skin Studio" />
        <span className="script about-script" aria-hidden="true">About us</span>
      </div>
      <div className="about-col right reveal">
        <p className="muted">For Julitssa, luxury exists to elevate results, not replace them. Each treatment is personally developed and performed using clinical expertise, modern tools, and a <strong>deep understanding</strong> of how skin functions, delivering visible, long-term transformation.</p>
        <p className="muted">Her practice combines medical-grade techniques with a calm, healing environment, so every client enjoys focused, personalized care. Acne recovery, skin texture, and luminous restoration are her trademarks. At Revive Skin Studio, she pursues sophisticated skincare with integrity, precision, and unwavering standards, an exclusive, elevated journey.</p>
        <ul className="spark-list">
          <li><Sparkle />Client Care &amp; Long-Term Skin Health</li>
          <li><Sparkle />Clinical Innovation &amp; Professional Standards</li>
          <li><Sparkle />Ongoing Education &amp; Advanced Training</li>
          <li><Sparkle />Recognized for Personalized Expertise</li>
        </ul>
        <h3 className="col-title vision">Our Vision</h3>
      </div>
    </section>
  )
}

/* ---------- Services band ---------- */
export function ServicesBand() {
  return (
    <section className="services-band">
      <div className="services-copy reveal">
        <p className="eyebrow light">Our Best Services</p>
        <h2>We Turn Your Skin <br />Goals Into Reality</h2>
        <p>At Revive Skin Studio, we deliver advanced medical-grade aesthetic treatments designed to restore confidence, enhance natural beauty, and improve long-term skin health. Our expert team performs a full spectrum of corrective, rejuvenating, and laser-based treatments using FDA-cleared technologies and clinically proven protocols.</p>
      </div>
      <div className="services-media">
        <img src={img('services-collage.jpg')} alt="Laser and facial treatments in the studio" />
        <span className="script services-script" aria-hidden="true">Our services</span>
      </div>
    </section>
  )
}

/* ---------- Why trust ---------- */
const trustCards = [
  ['Personalized Treatment Plans', 'Every skin type is different. We design treatment plans specific to your goals.'],
  ['15+ Years of Experience', 'Extensive background in medical aesthetics and advanced skincare.'],
  ['Professional Clinical Environment', 'Modern, clean, and welcoming studio designed for comfort and safety.'],
  ['Results-Focused Care', 'We prioritize long-term skin improvement—not temporary fixes.'],
]

export function TrustSection() {
  return (
    <>
      <section className="container split-head reveal">
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="display">Why Trust Revive Skin <br />Studio</h2>
        </div>
        <p className="muted">We combine medical-grade technology, FDA-cleared devices, and expert-led treatments to deliver safe, customized, and results-driven skincare in a luxury clinical environment focused on your confidence and long-term skin health.</p>
      </section>
      <section className="container trust-grid">
        <div className="trust-left">
          <div className="trust-cards">
            {trustCards.map(([title, text]) => (
              <article className="trust-card reveal" key={title}>
                <svg className="check" viewBox="0 0 60 60" aria-hidden="true"><path d="M4 33c5-2 9 0 13 9C26 22 39 9 58 2 41 16 29 34 20 58h-6C11 46 8 38 4 33z" fill="currentColor" /></svg>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="muted trust-summary">At Revive Skin Studio, we combine medical-grade technology with expert-led care to deliver safe, customized, and results-driven treatments. Using FDA-cleared devices and advanced clinical protocols, we focus on enhancing your natural beauty while prioritizing long-term skin health, comfort, and confidence in a luxury setting.</p>
          <BookButton className="btn-beige" />
        </div>
        <div className="trust-right reveal">
          <img src={img('trust.jpg')} alt="Close-up of a professional facial treatment" />
          <span className="script trust-script" aria-hidden="true">More effective</span>
        </div>
      </section>
    </>
  )
}

/* ---------- Stats ---------- */
const stats = [
  { value: '100', sup: '', label: 'Personalized Treatments', icon: Icon.bag },
  { value: '200', sup: '+', label: 'Happy Patients', icon: Icon.face },
  { value: '15', sup: '+', label: 'Years Experience', icon: Icon.clinic },
  { value: '100', sup: '%', label: 'Client-Focused Approach', icon: Icon.cart },
]

export function StatsSection() {
  return (
    <section className="stats">
      {stats.map((s, i) => (
        <div className={`stat stat-${i + 1} reveal`} key={s.label}>
          <strong>{s.value}{s.sup && <sup>{s.sup}</sup>}</strong>
          <span>{s.label}</span>
          <i className="stat-icon">{s.icon}</i>
        </div>
      ))}
    </section>
  )
}

/* ---------- Reviews ---------- */
function GoogleLogo() {
  return (
    <svg className="g-logo" viewBox="0 0 24 24" aria-label="Google review">
      <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.5z" />
      <path fill="#34A853" d="M12 23.5c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A11.5 11.5 0 0 0 12 23.5z" />
      <path fill="#FBBC05" d="M5.6 14.2a6.9 6.9 0 0 1 0-4.4v-3H1.8a11.5 11.5 0 0 0 0 10.4z" />
      <path fill="#EA4335" d="M12 5.1c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.5 11.5 0 0 0 1.8 6.8l3.8 3C6.5 7.1 9 5.1 12 5.1z" />
    </svg>
  )
}

export function ReviewCard({ r }) {
  return (
    <figure className="review">
      <div className="review-bubble">
        <div className="review-top">
          <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
          <span className="verified" aria-hidden="true">✓</span>
          <GoogleLogo />
        </div>
        <blockquote>{r.text}</blockquote>
        <a className="read-more" href="#">Read more</a>
      </div>
      <figcaption><span className="avatar">{r.initial}</span>{r.name}</figcaption>
    </figure>
  )
}

export function TestimonialsBand({ id }) {
  const [i, setI] = useState(0)
  const move = (d) => setI((v) => (v + d + reviews.length) % reviews.length)
  return (
    <section className="dark-band testimonials" id={id}>
      <div className="dark-inner">
        <div className="testi-left reveal">
          <p className="eyebrow light">Patient Testimonials</p>
          <h2>Advanced Care. Visible <br />Skin Results.</h2>
          <p className="testi-lead">At Revive Skin Studio NYC, experience medical-grade, customized facial treatments that restore clarity, health, and radiance, delivering lasting transformation and renewed confidence</p>
          <div className="reviews">
            <button type="button" className="rev-arrow prev" onClick={() => move(-1)} aria-label="Previous review">‹</button>
            <div className="reviews-track" style={{ '--i': i }}>
              {reviews.map((r) => <ReviewCard r={r} key={r.name} />)}
            </div>
            <button type="button" className="rev-arrow next" onClick={() => move(1)} aria-label="Next review">›</button>
          </div>
        </div>
        <div className="testi-media reveal">
          <img src={img('clients.jpg')} alt="Woman applying facial serum" />
          <span className="script clients-script" aria-hidden="true">Our clients say</span>
        </div>
      </div>
    </section>
  )
}

/* ---------- Portfolio ---------- */
export const portfolio = [
  ['Medium-Depth Chemical Peel (TCA)', 'portfolio-1.jpg'],
  ['Deep Cleansing & Skin Clarifying Treatment', 'portfolio-2.jpg'],
  ['Non-Invasive Laser Rejuvenation', 'portfolio-3.jpg'],
  ['Personalized Skin Consultation', 'portfolio-4.jpg'],
]

export function PortfolioCards() {
  return (
    <section className="portfolio">
      {portfolio.map(([title, file]) => (
        <Link className="portfolio-card reveal" to="/services" key={title}>
          <img src={img(file)} alt={title} />
          <div className="portfolio-text">
            <span>Revive Skin Studio</span>
            <h3>{title}</h3>
          </div>
        </Link>
      ))}
    </section>
  )
}

/* ---------- Expert ---------- */
export function ExpertSection({ compact = false }) {
  return (
    <section className={compact ? 'dark-band expert compact' : 'dark-band expert'}>
      <div className="dark-inner expert-head reveal">
        <div>
          <p className="eyebrow light">Meet Our Expert</p>
          <h2>Where Advanced <br />Expertise Meets <br />Beautiful, Lasting Results</h2>
        </div>
        <div className="expert-text">
          <p>At Revive Skin Studio, our licensed aesthetic professionals combine advanced clinical training with a personalized <strong>approach</strong> to deliver safe, results-driven treatments.</p>
          <p>With expertise in medical-grade skincare and laser technology, our team is committed to enhancing your natural beauty while prioritizing long-term skin health and comfort.</p>
        </div>
      </div>
      <div className="expert-person reveal">
        <div className="expert-oval"><img src={img('julitssa.jpg')} alt="Julitssa Davis, founder of Revive Skin Studio" /></div>
        <h3>Julitssa Davis (Julie)</h3>
        <p>LE Founder &amp; Lead Clinical Esthetician Corrective Skincare Specialist | Acne, Pigmentation &amp; Age Management</p>
      </div>
      <span className="script team-script" aria-hidden="true">Professional team</span>
    </section>
  )
}

/* ---------- Gallery strip ---------- */
export function GalleryStrip({ images, tall = false, more = false }) {
  const left = images.slice(0, 3)
  const right = images.slice(3, 6)
  return (
    <section className={tall ? 'gallery tall' : 'gallery'}>
      {left.map((f) => <img key={f} src={img(f)} alt="" className="reveal" />)}
      <Link className="gallery-label" to="/gallery" aria-label="Our gallery">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" /></svg>
        <span>Our Gallery</span>
      </Link>
      {right.map((f) => <img key={f} src={img(f)} alt="" className="reveal" />)}
      {more && (
        <Link className="btn btn-beige load-more" to="/gallery">
          Load More Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 1-15.4 6.4L3 16M3 12a9 9 0 0 1 15.4-6.4L21 8M21 3v5h-5M3 21v-5h5" /></svg>
        </Link>
      )}
    </section>
  )
}

export const homeGallery = [1, 2, 3, 4, 5, 6].map((n) => `gallery-${n}.jpg`)
export const aboutGallery = [1, 2, 3, 4, 5, 6].map((n) => `about-gal-${n}.jpg`)
