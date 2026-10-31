import { Link } from 'react-router-dom'
import { img, Sparkle, BookButton, PageHero, Marquee } from '../components/ui'
import { GalleryStrip, aboutGallery } from '../components/sections'

function RotatingBadge() {
  return (
    <Link to="/services" className="badge" aria-label="Best services – natural beauty">
      <svg viewBox="0 0 200 200" className="badge-ring" aria-hidden="true">
        <defs><path id="badge-circle" d="M100 100m-72 0a72 72 0 1 1 144 0a72 72 0 1 1-144 0" /></defs>
        <text><textPath href="#badge-circle">BEST SERVICES • NATURAL BEAUTY • </textPath></text>
      </svg>
      <span className="badge-play" aria-hidden="true">▶</span>
    </Link>
  )
}

export default function About() {
  return (
    <>
      <PageHero title="About us" crumbs={[['About Us']]} />

      <section className="container about-intro">
        <div className="about-intro-copy reveal">
          <p className="about-kicker">About Revive Skin Studio</p>
          <h2 className="display big">Science-Backed <br />Skin, Real Results</h2>
          <p className="muted">Ready to glow? Revive Skin Studio, NYC’s trusted medical skincare clinic for over 15 years, uses customized, science-backed treatments to restore your skin’s health and natural beauty. See the real, lasting results, <Link to="/gallery" className="ink-link">check out</Link> now!</p>
          <ul className="spark-list two-col">
            <li><Sparkle />15+ Years Aesthetic Experience</li>
            <li><Sparkle />Medical-Grade Solutions</li>
            <li><Sparkle />Customized Skin Treatment Plans</li>
            <li><Sparkle />Professional Clinical Care</li>
            <li><Sparkle />Advanced Laser Technology</li>
            <li><Sparkle />Muscle Recovery</li>
          </ul>
          <BookButton className="btn-beige" />
        </div>
        <div className="about-intro-media reveal">
          <div className="arch"><img src={img('about-woman.jpg')} alt="Woman with glowing skin holding a green leaf" /></div>
          <RotatingBadge />
        </div>
      </section>

      <section className="ritual-band">
        <div className="ritual-inner">
          <div className="ritual-left reveal">
            <p className="eyebrow light">The Best Beauty Rituals</p>
            <h2>Discover the ultimate <br />beauty experience</h2>
            <img className="ritual-wide" src={img('ritual-wide.jpg')} alt="Esthetician giving a relaxing facial" />
          </div>
          <div className="ritual-right reveal">
            <div className="ritual-pair">
              <img src={img('ritual-tall-1.jpg')} alt="Laser facial treatment under a magnifying lamp" />
              <img src={img('ritual-tall-2.jpg')} alt="Microcurrent skincare treatment" />
            </div>
            <h3>An Exceptional Beauty <br />Experience</h3>
            <p>Dreaming of smoother, brighter skin? Our bespoke <Link to="/services" className="ink-link dark">aesthetic treatments</Link> use advanced tech and personalized care to rejuvenate, restore, and refine. See the difference. Love your skin.</p>
            <ul className="spark-list two-col light">
              <li><Sparkle />Consultation</li>
              <li><Sparkle />Blue glow skincare</li>
              <li><Sparkle />Facial treatment</li>
              <li><Sparkle />Laser hair removal</li>
              <li><Sparkle />Microcurrent skincare treatment</li>
              <li><Sparkle />Laser Genesis Facial</li>
            </ul>
          </div>
        </div>
        <span className="script ritual-script" aria-hidden="true">Feeling fabulous</span>
      </section>

      <Marquee words={['More Effective', 'Less Invasive', 'Natural Results', 'Expert Care']} />

      <GalleryStrip images={aboutGallery} tall more />
    </>
  )
}
