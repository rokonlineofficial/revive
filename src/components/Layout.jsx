import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { img, asset, Icon, BookButton, SocialRow, MapEmbed } from './ui'
import { contact } from './sections'

export const menu = [
  {
    label: 'About us',
    to: '/about-us',
    children: [
      ['Our Team', '/our-team'],
      ['Testimonials', '/testimonials'],
      ['Contact', '/contact'],
      ['FAQ', '/faq'],
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Memberships', to: '/memberships' },
  { label: 'Rewards Program', to: '/rewards-program' },
  { label: 'Gift Certificates', to: '/gift-certificates' },
  { label: 'Gallery', to: '/gallery' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  // After navigating, keep the desktop submenu closed until the mouse leaves the menu item
  const [subLocked, setSubLocked] = useState(false)
  const subRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setSubOpen(false)
    // Only matters if the mouse is still over the menu item when the page changes
    if (subRef.current?.matches(':hover')) setSubLocked(true)
    document.activeElement?.blur()
  }, [pathname])

  return (
    <header className="site-header">
      <Link className="logo" to="/" aria-label="Revive Skin Studio home">
        <img src={asset('revive-logo.png')} alt="Revive Skin Studio" />
      </Link>
      <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
        {menu.map((item) => {
          if (!item.children) {
            return <NavLink key={item.label} to={item.to}>{item.label}</NavLink>
          }
          const sectionActive = pathname === item.to || item.children.some(([, to]) => to === pathname)
          return (
            <div
              className={`has-sub ${subOpen ? 'sub-open' : ''} ${subLocked ? 'sub-locked' : ''}`}
              key={item.label}
              ref={subRef}
              onMouseLeave={() => setSubLocked(false)}
            >
              <div className="sub-row">
                <NavLink to={item.to} className={sectionActive ? 'active' : undefined}>{item.label}</NavLink>
                <button
                  type="button"
                  className="sub-toggle"
                  aria-expanded={subOpen}
                  aria-label={`Show ${item.label} submenu`}
                  onClick={() => setSubOpen((v) => !v)}
                >
                  <span aria-hidden="true">⌄</span>
                </button>
              </div>
              <div className="submenu">
                {item.children.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}
              </div>
            </div>
          )
        })}
        <BookButton className="btn-light nav-mobile-book" />
      </nav>
      <BookButton className="btn-light header-book" />
      <button
        className={open ? 'menu-toggle open' : 'menu-toggle'}
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="newsletter">
          <img className="newsletter-img" src={img('newsletter-woman.jpg')} alt="" aria-hidden="true" />
          <div className="newsletter-copy">
            <p className="eyebrow light">Join Our Newsletter</p>
            <h2>Join our newsletter for <br />exclusive deals!</h2>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <p>Sign up to hear about our latest sales, new arrivals &amp; more.</p>
            <div className="nl-field">
              <label className="sr-only" htmlFor="nl-email">Email address</label>
              <input id="nl-email" type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>

        <div className="footer-cols">
          <div className="f-brand">
            <Link className="f-logo" to="/"><img src={asset('revive-logo.png')} alt="Revive Skin Studio" /></Link>
            <p>At Revive Skin Studio, we offer customized facials, advanced treatments, and holistic therapies to rejuvenate your skin and boost your confidence.</p>
            <SocialRow />
          </div>
          <nav className="f-nav" aria-label="Footer navigation">
            <h4>Navigation</h4>
            <Link to="/about-us">About Us</Link>
            <Link to="/our-team">Our Team</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/memberships">Memberships</Link>
            <Link to="/testimonials">Testimonial</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
          <div className="f-cards">
            <div className="f-card">
              <div>
                <h4>Call Us Now</h4>
                <p>Phone: <a href={`tel:${contact.tel}`}>{contact.phone}</a></p>
                <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              </div>
              <span className="icon-circle">{Icon.phone}</span>
            </div>
            <div className="f-card">
              <div>
                <h4>Office Address</h4>
                <p className="address">{contact.address.map((l) => <span key={l}>{l}<br /></span>)}</p>
              </div>
              <span className="icon-circle">{Icon.pin}</span>
            </div>
          </div>
          <div className="f-map">
            <MapEmbed />
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2026 Revive Skin Studio NYC. All rights reserved</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <span>Powered by <a className="rok" href="https://rokonline.com" target="_blank" rel="noreferrer">Rok Online</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // New page: jump to top and re-arm the fade-in animations
  useEffect(() => {
    window.scrollTo(0, 0)
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return undefined
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return (
    <>
      <Header />
      <main id="top"><Outlet /></main>
      <Footer />
      <button type="button" className={showTop ? 'to-top show' : 'to-top'} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {Icon.chevron}<span>TOP</span>
      </button>
    </>
  )
}
