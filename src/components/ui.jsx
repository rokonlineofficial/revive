import { Link } from 'react-router-dom'

export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
export const img = (name) => asset(`images/${name}`)

/* ---------- Small inline icons ---------- */
export const Sparkle = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" fill="currentColor" />
  </svg>
)

export const Flower = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="flower">
    {[0, 45, 90, 135].map((r) => (
      <ellipse key={r} cx="12" cy="12" rx="3.2" ry="10" fill="currentColor" transform={`rotate(${r} 12 12)`} />
    ))}
    <circle cx="12" cy="12" r="2.6" fill="var(--btn-center, #fff)" opacity=".35" />
  </svg>
)

export const Icon = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
      <path d="M15 3.5a5.5 5.5 0 0 1 5.5 5.5M15 7a2 2 0 0 1 2 2" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M16 2v4M8 2v4M3 10h9" />
      <circle cx="17.5" cy="17.5" r="4.5" /><path d="M17.5 15.5v2l1.3 1.3" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 15h26l-1.6 25.2a3 3 0 0 1-3 2.8H15.6a3 3 0 0 1-3-2.8z" /><path d="M18 20v-8a6 6 0 0 1 12 0v8" />
    </svg>
  ),
  face: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 22c0-9 6-15 14-15s14 6 14 15c0 9-6 16-14 16S10 31 10 22z" />
      <path d="M11 19c4-1 7-4 9-8M37 19c-4-1-7-4-9-8M19 11c2 2 8 2 10 0" />
      <path d="M17 23c1.5 1.4 3.5 1.4 5 0M26 23c1.5 1.4 3.5 1.4 5 0M20 30c2.5 2 5.5 2 8 0" />
      <path d="M14 38l-3 4m0-4h3v3M34 38l3 4m0-4h-3v3" />
    </svg>
  ),
  clinic: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 43V12h18v31M7 43V22h8M41 43V22h-8M4 43h40" />
      <path d="M24 15v8M20 19h8" strokeLinecap="round" />
      <path d="M19 27h3v3h-3zM26 27h3v3h-3zM19 34h3v3h-3zM26 34h3v3h-3zM10 27h2v3h-2zM10 34h2v3h-2zM36 27h2v3h-2zM36 34h2v3h-2zM22 43v-4h4v4" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10c6 0 10 2 13 6l3 6h22c-3 5-9 9-19 9" />
      <circle cx="17" cy="39" r="2.6" fill="currentColor" /><circle cx="31" cy="39" r="2.6" fill="currentColor" />
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>
  ),
}

const socials = [
  { name: 'Facebook', cls: 'fb', path: 'M14 8h2.5V4.5H14c-2.5 0-4 1.6-4 4V11H7.5v3.5H10V21h3.5v-6.5H16l.5-3.5h-3V9c0-.6.4-1 .5-1z' },
  { name: 'Instagram', cls: 'ig', path: 'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm4 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.2-1.6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z', stroke: true },
  { name: 'TikTok', cls: 'tt', path: 'M16.5 3c.4 2.3 1.8 3.7 4 4v3.2c-1.5 0-2.9-.5-4-1.2v6.3A5.7 5.7 0 1 1 11 9.6v3.3a2.5 2.5 0 1 0 2.3 2.5V3z' },
  { name: 'Pinterest', cls: 'pin', path: 'M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2.1 0-3l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.7 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.5-4.4a4.6 4.6 0 0 0-4.8 4.7c0 .9.3 1.9.8 2.4l.1.4-.3 1.1c0 .2-.2.3-.4.2-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.8-2.4 6.8-5.7 6.8-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.3 1-.9 2.2-1.4 2.9A10 10 0 1 0 12 2z' },
  { name: 'X', cls: 'x', path: 'M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z' },
]

export function SocialRow() {
  return (
    <div className="socials" aria-label="Social media">
      {socials.map((s) => (
        <a key={s.name} href="#" className={`social ${s.cls}`} aria-label={s.name}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {s.stroke
              ? <path d={s.path} fill="none" stroke="currentColor" strokeWidth="1.8" />
              : <path d={s.path} fill="currentColor" />}
          </svg>
        </a>
      ))}
    </div>
  )
}


export function BookButton({ className = '', to = '/contact', children = 'Book Now' }) {
  return (
    <Link className={`btn ${className}`} to={to}>
      <Flower /> {children}
    </Link>
  )
}

export function PageHero({ title, crumbs = [], bg = 'about-banner.jpg', dark = false }) {
  return (
    <section className={dark ? 'page-hero dark' : 'page-hero'} style={{ backgroundImage: `url(${img(bg)})` }}>
      <div className="page-hero-inner">
        <h1>{title}</h1>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map(([label, to]) => (
            <span key={label}>
              <span className="crumb-sep" aria-hidden="true">›</span>
              {to ? <Link to={to}>{label}</Link> : <span aria-current="page">{label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}

export function Marquee({ words }) {
  return (
    <section className="marquee" aria-label={words.join(', ')}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((dup) => (
          <div className="marquee-group" key={dup}>
            {words.map((w) => (
              <span key={w}><Sparkle className="marquee-star" />{w}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export function SplitHead({ eyebrow, title, children, id, className = '' }) {
  return (
    <section className={`container split-head reveal ${className}`} id={id}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display">{title}</h2>
      </div>
      <p className="muted">{children}</p>
    </section>
  )
}

const MAP_Q = 'Revive Skin Studio, 5 W 37th St, New York, NY 10018'
// Live Google map on the real site; the review-link build can't embed other sites, so it shows a link card instead.
export function MapEmbed({ zoom = 15, title = 'Revive Skin Studio location' }) {
  if (import.meta.env.VITE_HASH_ROUTER === '1') {
    return (
      <a className="map-fallback" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_Q)}`} target="_blank" rel="noreferrer">
        <span className="map-pin" aria-hidden="true">📍</span>
        <strong>Revive Skin Studio</strong>
        <span>5 W 37th St 7th floor, Suite 717, New York, NY 10018</span>
        <em>Open in Google Maps ↗</em>
      </a>
    )
  }
  return (
    <iframe
      title={title}
      src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_Q)}&z=${zoom}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
