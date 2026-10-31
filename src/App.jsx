import { useEffect, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Facial Treatments',
    text: 'Personalized facials designed to nourish, restore, and reveal your natural glow.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    title: 'Skin Rejuvenation',
    text: 'Advanced treatments that support texture, tone, and long-term skin health.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    title: 'Body Rituals',
    text: 'Restorative body care to soften, sculpt, and bring you back to balance.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=700&q=85',
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=90',
      eyebrow: 'Advanced Skin Rejuvenation',
      title: <>Advanced Skin<br />Rejuvenation</>,
      copy: 'Stimulate collagen, improve skin texture, reduce acne scars, and restore a youthful glow with science-backed treatments tailored to your skin goals.',
    },
    {
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=90',
      eyebrow: 'Restore & Rebalance',
      title: <>Natural Beauty<br /><em>begins within.</em></>,
      copy: 'Thoughtful treatments, honest care, and modern skin solutions designed around you.',
    },
    {
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=90',
      eyebrow: 'Expert Skin Care',
      title: <>Feel refreshed.<br /><em>Look radiant.</em></>,
      copy: 'Personalized skin care plans that support healthy texture, tone, and long-term radiance.',
    },
    {
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=90',
      eyebrow: 'Your Personal Ritual',
      title: <>Care for the<br /><em>skin you are in.</em></>,
      copy: 'Calming, restorative rituals created to bring balance back to your skin and your day.',
    },
  ]

  const closeMenu = () => setMenuOpen(false)
  const nextSlide = () => setActiveSlide((slide) => (slide + 1) % slides.length)
  const previousSlide = () => setActiveSlide((slide) => (slide - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 5500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Revive Skin Studio home">
          <img className="header-logo" src="/revive-logo.png" alt="Revive Skin Studio" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#packages" onClick={closeMenu}>Packages</a>
          <a href="#membership" onClick={closeMenu}>Membership</a>
          <a href="#rewards" onClick={closeMenu}>Rewards</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="book-button" href="#contact">Book now <Arrow /></a>
      </header>

      <main>
        <section className="hero" id="top">
          {slides.map((slide, index) => (
            <div
              className={index === activeSlide ? 'hero-slide active' : 'hero-slide'}
              key={slide.image}
              style={{ backgroundImage: `linear-gradient(90deg, rgba(231,221,206,.3), transparent 48%, rgba(0,0,0,.08)), url(${slide.image})` }}
              aria-hidden={index !== activeSlide}
            />
          ))}
          <div className="hero-panel" key={`slide-${activeSlide}`}>
            <p className="eyebrow">{slides[activeSlide].eyebrow}</p>
            <h1>{slides[activeSlide].title}</h1>
            <p className="hero-copy">{slides[activeSlide].copy}</p>
            <a className="text-link hero-book" href="#contact">✺ &nbsp; Book Now</a>
          </div>
          <div className="hero-script" aria-label={activeSlide === 0 ? 'Natural Beauty' : slides[activeSlide].title}>Natural Beauty</div>
          <div className="slider-controls">
            <button type="button" onClick={previousSlide} aria-label="Previous slide">← PREV</button>
            <div className="slider-dots" aria-label="Choose slide">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  className={index === activeSlide ? 'active' : ''}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  key={slide.image}
                />
              ))}
            </div>
            <button type="button" onClick={nextSlide} aria-label="Next slide">NEXT →</button>
          </div>
        </section>

        <section className="appointment" aria-labelledby="appointment-title">
          <div className="appointment-inner">
            <h2 id="appointment-title">Book Your Appointment</h2>
            <p>Claim your appointment today and set off on the path to healthier, more radiant skin. After booking, Revive Skin Studio will verify your visit and ensure you receive specialized, attentive care that's tailored to your skin's distinct condition.</p>
            <div className="appointment-grid">
              <article className="appointment-card">
                <div className="appointment-icon" aria-hidden="true">☎</div>
                <h3>Contact Us</h3>
                <a href="tel:+6462728605">Call us: (646) 272-8605</a>
                <a href="mailto:info@reviveskinstudio.nyc">Email: info@reviveskinstudio.nyc</a>
                <div className="social-links" aria-label="Social media">
                  <a href="#gallery" aria-label="Facebook">f</a>
                  <a href="#gallery" aria-label="Instagram">◎</a>
                  <a href="#gallery" aria-label="TikTok">♪</a>
                  <a href="#gallery" aria-label="Pinterest">p</a>
                  <a href="#gallery" aria-label="X">X</a>
                </div>
              </article>
              <article className="appointment-card">
                <div className="appointment-icon" aria-hidden="true">▣</div>
                <h3>Opening Hours</h3>
                <ul>
                  <li>Sunday closed</li>
                  <li>Monday 11am-7pm</li>
                  <li>Tuesday closed</li>
                  <li>Wed-Fri 11am-7pm</li>
                  <li>Saturday 11:30- 3pm</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="care-section">
          <div className="care-heading">
            <h2><span>Exceptional Care.</span><br />Advanced Skincare Technology.</h2>
            <p>Ready to experience advanced, <strong>results-driven</strong> skincare in NYC, backed by 15+ years of medical aesthetics expertise, modern technology, and personalized treatment plans, all delivered in a welcoming, professional setting for naturally radiant, confident skin?</p>
          </div>

          <div className="care-grid">
            <article className="care-column">
              <h3>Our Mission</h3>
              <div className="care-rule" />
              <p>Science-led corrective peels, microneedling, skin tightening, and pigmentation correction in NYC. Age-defying medical aesthetics at Revive Skin Studio, precision results, never one-size-fits-all.</p>
              <ul>
                <li>Personalized Skin Transformation</li>
                <li>Improved Confidence &amp; Skin Wellness</li>
                <li>Advanced Aesthetic Technology</li>
                <li>Safe, Results-Focused Care</li>
              </ul>
            </article>

            <div className="care-portrait" role="img" aria-label="Medical aesthetic facial treatment">
              <div className="care-message">We can talk about your life and give you the best version of your skin.</div>
              <span>Let us care</span>
            </div>

            <article className="care-column care-column-right">
              <p>For Julissa, luxury exists to elevate results, not replace them. Each treatment is personally developed and performed using clinical expertise, modern tools, and a deep understanding of how skin functions, delivering visible, long-term transformation.</p>
              <p>Her practice combines medical-grade techniques with a calm, healing environment, so every client enjoys focused, personalized care. Acne recovery, skin texture, and luminous restoration are her trademarks.</p>
              <ul>
                <li>Client Care &amp; Long-Term Skin Health</li>
                <li>Clinical Innovation &amp; Professional Standards</li>
                <li>Ongoing Education &amp; Advanced Training</li>
                <li>Recognized for Personalized Expertise</li>
              </ul>
              <h3>Our Vision</h3>
            </article>
          </div>
        </section>

        <section className="services-showcase">
          <div className="services-showcase-copy">
            <p className="eyebrow">Our Best Services</p>
            <h2>We Turn Your Skin<br />Goals Into Reality</h2>
            <p>At Revive Skin Studio, we deliver advanced medical-grade aesthetic treatments designed to restore confidence, enhance natural beauty, and improve long-term skin health. Our expert team performs a full spectrum of corrective, rejuvenating, and laser-based treatments using FDA-cleared technologies and clinically proven protocols.</p>
          </div>
          <div className="services-showcase-collage" role="img" aria-label="Advanced skin treatment services">
            <div className="showcase-image showcase-top" />
            <div className="showcase-image showcase-bottom-left" />
            <div className="showcase-image showcase-bottom-right" />
            <span className="showcase-script">Our service</span>
          </div>
        </section>

        <section className="intro" id="about">
          <div className="section-label"><span>01</span><p>About our studio</p></div>
          <div className="intro-copy">
            <h2>Confidence begins with feeling <em>comfortable</em> in your skin.</h2>
            <div>
              <p>At Revive, we believe great skin is personal. Our expert-led studio combines considered treatments, clinical knowledge, and a calming experience to help you feel renewed.</p>
              <a className="text-link dark" href="#contact">Meet the studio <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="vision-grid">
          <div className="vision-card">
            <p className="eyebrow">Our vision</p>
            <h3>Skin wellness,<br />beautifully <em>simple.</em></h3>
          </div>
          <div className="vision-image" role="img" aria-label="Woman enjoying a spa treatment" />
          <div className="mission-card">
            <p className="eyebrow">Our mission</p>
            <p>To create meaningful, results-focused treatments in a space where every client feels listened to, cared for, and completely at ease.</p>
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-heading">
            <div className="section-label"><span>02</span><p>Our services</p></div>
            <h2>Treatments for<br /><em>every skin story.</em></h2>
            <a className="circle-link" href="#packages" aria-label="View all services"><Arrow /></a>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="service-body">
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stats">
          <div><strong>12+</strong><span>Years of experience</span></div>
          <div><strong>8k</strong><span>Glowing clients</span></div>
          <div><strong>24</strong><span>Expert treatments</span></div>
          <div><strong>98%</strong><span>Client satisfaction</span></div>
        </section>

        <section className="testimonial" id="membership">
          <div className="testimonial-image" role="img" aria-label="Relaxed client at Revive" />
          <div className="quote-card">
            <p className="eyebrow">Kind words</p>
            <blockquote>“From the moment I walked in, I felt cared for. My skin has never looked healthier, and the whole experience felt wonderfully calm.”</blockquote>
            <p className="client">Sophie M. <span>— Revive client</span></p>
          </div>
        </section>

        <section className="expert" id="rewards">
          <div className="expert-copy">
            <div className="section-label"><span>03</span><p>Meet your expert</p></div>
            <h2>Care you can<br /><em>feel confident in.</em></h2>
            <p>Led by senior skin therapist Amelia Hart, our team brings warmth, knowledge, and careful attention to every appointment.</p>
            <a className="text-link dark" href="#contact">Book a consultation <Arrow /></a>
          </div>
          <div className="expert-image" role="img" aria-label="Skin therapist Amelia Hart" />
          <div className="expert-name">
            <strong>Amelia Hart</strong>
            <span>Founder & Skin Therapist</span>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">Follow our journey</p>
              <h2>@reviveskinstudio</h2>
            </div>
            <a className="text-link dark" href="#top">Follow us <Arrow /></a>
          </div>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div key={image} style={{ backgroundImage: `url(${image})` }} aria-label={`Studio gallery image ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="trust-section">
          <div className="trust-content">
            <div className="trust-heading">
              <p className="eyebrow">Why choose us</p>
              <h2>Why Trust Revive Skin<br />Studio</h2>
            </div>
            <div className="trust-grid">
              <article className="trust-card">
                <span className="trust-check">✓</span>
                <h3>Personalized<br />Treatment Plans</h3>
                <p>Every visit is personalized. We design treatment plans tailored to your skin goals and concerns.</p>
              </article>
              <article className="trust-card">
                <span className="trust-check">✓</span>
                <h3>15+ Years of<br />Experience</h3>
                <p>Extensive background in medical aesthetics and advanced skin care treatments.</p>
              </article>
              <article className="trust-card">
                <span className="trust-check">✓</span>
                <h3>Professional<br />Clinical Treatment</h3>
                <p>Modern, safe, FDA-cleared technology and the safest standards for skin care.</p>
              </article>
              <article className="trust-card">
                <span className="trust-check">✓</span>
                <h3>Results-Focused<br />Care</h3>
                <p>We combine long-term skin health and visible, natural-looking results you can trust.</p>
              </article>
            </div>
            <p className="trust-summary">At Revive Skin Studio, we combine medical-grade technology with expertise to create safe, effective, and natural-looking treatment plans. Our FDA-cleared methods deliver real progress without pressure, so your confidence can stay natural.</p>
            <a className="trust-button" href="#contact">Book Now <Arrow /></a>
          </div>
          <div
            className="trust-image"
            role="img"
            aria-label="Client receiving a personalized facial treatment"
          />
        </section>

        <section className="newsletter" id="contact">
          <div>
            <p className="eyebrow">Stay in the glow</p>
            <h2>Notes on skin, wellness,<br />and <em>feeling renewed.</em></h2>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe <Arrow /></button>
          </form>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><img className="footer-logo" src="/revive-logo.png" alt="Revive Skin Studio" /></a>
        <p>Thoughtful skin care for your natural glow.</p>
        <div><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Instagram</a></div>
        <span>© 2026 Revive Skin Studio</span>
      </footer>
    </>
  )
}
