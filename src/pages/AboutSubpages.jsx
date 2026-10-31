import { useState } from 'react'
import { Link } from 'react-router-dom'
import { img, Icon, BookButton, PageHero, MapEmbed } from '../components/ui'
import { ReviewCard, contact } from '../components/sections'

const aboutCrumb = ['About Us', '/about-us']

/* ---------- shared bits ---------- */
// Review excerpts as shown in the Google reviews widget on the design — swap for the live widget embed when available.
export const moreReviews = [
  { name: 'Keema Jamieson', initial: 'KJ', text: 'What an amazing experience with Juli today. From the moment I walked in, I felt welcomed and at ease. She truly listened to my concerns and…' },
  { name: 'Petra Chiabi', initial: 'PC', text: 'Fabulous experience-Julitssa’s expertise, great personality and meticulous attention to my skin and what it needs definitely made the…' },
  { name: 'Melanie Crawford', initial: 'MC', text: 'Julitssa at Revive Skin Studio was amazing—professional, gentle, and attentive. My skin felt refreshed and glowing after my facial. Highly…' },
  { name: 'Mildred Bernal', initial: 'MB', text: 'Julitssa is the heart and soul of Revive. Not only do she treats you with kindness and warmth, but her experience makes you…' },
  { name: 'Marcia Dukes', initial: 'M', text: 'As a former service giver... I all I can say Bravo!!! Revive Skin Studio is truly a gem. From the moment you walk in, you can…' },
]

export function ReviewSlider({ items = moreReviews }) {
  const [start, setStart] = useState(0)
  const move = (d) => setStart((s) => (s + d + items.length) % items.length)
  const visible = [0, 1, 2].map((k) => items[(start + k) % items.length])
  return (
    <div className="review-slider">
      <button type="button" className="rs-arrow" onClick={() => move(-1)} aria-label="Previous reviews">‹</button>
      <div className="rs-track">
        {visible.map((r, k) => <ReviewCard r={r} key={`${r.name}-${k}`} />)}
      </div>
      <button type="button" className="rs-arrow" onClick={() => move(1)} aria-label="Next reviews">›</button>
    </div>
  )
}

export function Accordion({ items, numbered = false, variant = 'outline' }) {
  const [open, setOpen] = useState(0)
  return (
    <div className={`accordion ${variant}`}>
      {items.map(([q, a], i) => (
        <div className={open === i ? 'acc-item open' : 'acc-item'} key={q}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{numbered ? `${i + 1}. ` : ''}{q}</span>
            <i aria-hidden="true">{variant === 'boxed' ? (open === i ? '−' : '+') : '⌄'}</i>
          </button>
          <div className="acc-answer"><p>{a}</p></div>
        </div>
      ))}
    </div>
  )
}

// Q1's answer is from the design; answers 2–5 were written to fit — confirm with the studio.
export const skincareFaqs = [
  ['How do I prepare for my treatment?', 'Preparation depends on the service. For peels and microneedling, avoid retinol and exfoliants 3–5 days prior. For laser hair removal, shave the treatment area 24–48 hours before your appointment and avoid sun exposure.'],
  ['Is there downtime after chemical peels?', 'It depends on the peel. Light peels such as the Salicylic Peel have no downtime, while medium-depth peels like the Jessner, TCA or BioRePeel may cause light peeling for a few days. We’ll walk you through aftercare before you leave.'],
  ['Is laser hair removal safe for all skin types?', 'We use FDA-cleared laser technology and adjust settings to your skin type and hair. Your consultation confirms the safest approach for you.'],
  ['Do you offer personalized treatment plans?', 'Yes. Every client starts with a consultation, and we build a plan around your skin goals — acne, pigmentation, texture or aging.'],
  ['How soon will I see results from a facial?', 'Most clients see a fresher, brighter complexion right after a facial. Corrective results build over a series of treatments, which is why many of our packages include 3–6 sessions.'],
]

/* ================= Our Team ================= */
export function OurTeam() {
  return (
    <>
      <PageHero title="Our Team" crumbs={[['Our Team']]} />

      <section className="container founder">
        <div className="founder-head reveal">
          <div>
            <p className="eyebrow">Meet the Founder</p>
            <h2 className="display">The Professional Behind <br />Your Glow</h2>
            <p className="founder-text">With over 15 years of experience in advanced medical aesthetics, Julitssa Davis is known for delivering refined, results-driven skincare rooted in science and elevated by experience. As the founder of Revive Skin Studio, she specializes in corrective and age-defying treatments, including customized chemical peels, Microneedling, advanced facial therapies, skin tightening, and precision-based pigmentation correction.</p>
          </div>
          <div className="founder-text right">
            <p>Julitssa’s philosophy is simple: luxury should never replace results — it should enhance them. Every treatment is thoughtfully curated using clinical expertise, modern technology, and a deep understanding of skin physiology to create visible, lasting transformation.</p>
            <p>Her approach combines medical-grade protocols with a calm, restorative environment, offering clients an experience that feels both exclusive and intentional. She is especially sought after for her work in acne rehabilitation, textural refinement, and luminous skin restoration. At Revive Skin Studio, her mission is to deliver sophisticated skincare with integrity, precision, and uncompromising standards.</p>
          </div>
        </div>
        <div className="founder-person reveal">
          <div className="expert-oval"><img src={img('julitssa.jpg')} alt="Julitssa Davis (Julie)" /></div>
          <h3>Julitssa Davis (Julie)</h3>
          <p>LE Founder &amp; Lead Clinical Esthetician Corrective Skincare Specialist | Acne, Pigmentation &amp; Age Management</p>
        </div>
      </section>
    </>
  )
}

/* ================= Testimonials ================= */
export function Testimonials() {
  return (
    <>
      <PageHero title="Testimonials" crumbs={[['Testimonials']]} />

      <section className="container testi-page">
        <div className="center-head reveal">
          <p className="eyebrow">Discover Why Clients Choose Revive Skin Studio</p>
          <h2 className="display">Revive Skin Studio Reviews – Facials, Peels &amp; Laser NYC</h2>
        </div>
        <div className="testi-split">
          <div className="testi-copy reveal">
            <p className="eyebrow">Patient Testimonials</p>
            <h3 className="gold-title">What our clients say <br />about our services</h3>
            <p>At <Link to="/about-us" className="gold-link">Revive Skin Studio</Link>, client satisfaction is at the heart of everything we do. Our patients consistently share positive experiences about our personalized approach, advanced technology, and visible, long-lasting results. From rejuvenating facials and customized chemical peels to state-of-the-art laser treatments, every service is carefully tailored to meet individual skin goals.</p>
            <p>Clients appreciate our professional, welcoming environment where comfort and care come first. Many highlight the noticeable improvements in acne, hyperpigmentation, fine lines, and overall skin texture after just a few sessions. Our medical-grade treatments are designed not only to enhance appearance but also to improve long-term skin health.</p>
            <p>What truly sets Revive Skin Studio apart is our commitment to education and transparency. We take time to explain each procedure, recommend the most effective solutions, and create treatment plans that deliver real, transformative results. Patients often mention renewed confidence and glowing, healthier skin as the biggest rewards of their experience.</p>
            <p>Discover why so many NYC clients trust Revive Skin Studio for expert skincare solutions that combine science, artistry, and personalized attention.</p>
          </div>
          <div className="testi-photo reveal">
            <img src={img('testi-woman.jpg')} alt="Woman with radiant, glowing skin" />
            <span className="script ink testi-script" aria-hidden="true">Testimonials</span>
          </div>
        </div>
      </section>

      <section className="review-band reveal">
        <ReviewSlider />
      </section>
    </>
  )
}

/* ================= Contact ================= */
export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-img"><img src={img('contact-hero.jpg')} alt="Woman cleansing her skin with a cotton pad" /></div>
        <div className="contact-hero-copy">
          <p className="eyebrow">Contact Us</p>
          <h1 className="display">Experience the Revive <br />Skin Difference</h1>
          <p className="muted">Revive Skin Studio delivers advanced Skin Tightening NYC trusts, pairing 15+ years of expertise with medical-grade tech for radiant, long-lasting <strong>results</strong>.</p>
          <div className="contact-hero-cols">
            <div>
              <h4>Contact Us</h4>
              <p>Call us: <a className="gold-link" href={`tel:${contact.tel}`}>{contact.phone}</a><br />Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
            <div>
              <h4>Our Office</h4>
              <p>5 West 37th St. 7th Fl Suite 717, New York, NY 10018</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container estimate">
        <form className="estimate-form reveal" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          {/* TODO: connect to Web3Forms / booking system — this form does not send anywhere yet */}
          <h2 className="display">Get Your Estimate &amp; Book <br />Now</h2>
          <p className="muted">Have questions about our treatments or want to begin your skin transformation? Our team is here to assist with appointments, consultations, and personalized guidance, including expert Skin Tightening NYC. Reach out by phone, email, or <strong>visit</strong> our studio. We look forward to helping you achieve healthy, radiant skin.</p>
          <div className="pill-row">
            <label>Your name <em>*</em><input required placeholder="e.g. John Smith" /></label>
            <label>Email address <em>*</em><input type="email" required placeholder="e.g. john@youremail.com" /></label>
          </div>
          <div className="pill-row">
            <label>Phone number <em>*</em><input type="tel" required placeholder="e.g. +01 2356 678" /></label>
            <label>Date <em>*</em><input type="date" required /></label>
          </div>
          <label>Service <em>*</em>
            <select required defaultValue="">
              <option value="" disabled>Select service that fits you best</option>
              <option>Consultation</option>
              <option>Chemical Peel</option>
              <option>Facial</option>
              <option>Microneedling</option>
              <option>LED Light Therapy</option>
              <option>Laser Hair Removal</option>
            </select>
          </label>
          <label>Additional information<textarea rows="3" placeholder="Type here..." /></label>
          <button type="submit" className="btn btn-beige">Book Now</button>
          {sent && <p className="form-note" role="status">Thank you! We’ll contact you to confirm your appointment.</p>}
        </form>
        <div className="estimate-photo reveal"><img src={img('testi-woman.jpg')} alt="Woman with glowing skin" /></div>
      </section>

      <section className="map-full reveal">
        <MapEmbed />
      </section>

      <section className="container faq-split">
        <div className="reveal">
          <p className="eyebrow">Customers Frequently Ask</p>
          <h2 className="display">The most common <br />questions</h2>
          <p className="muted">Before your appointment, find fast answers about chemical peels, micro needling, laser services, and Skin Tightening NYC options. We break down personalized skin <strong>treatments</strong> to help you feel confident, prepared, and excited for your transformative results.</p>
        </div>
        <div className="reveal"><Accordion items={skincareFaqs} numbered /></div>
      </section>
    </>
  )
}

/* ================= FAQ ================= */
export function Faq() {
  return (
    <>
      <PageHero title="FAQs" crumbs={[aboutCrumb, ['FAQs']]} />
      <section className="container faq-split">
        <div className="reveal">
          <p className="eyebrow">Customers Frequently Ask</p>
          <h2 className="display">The most common <br />questions</h2>
          <p className="muted">Before your appointment, find quick answers about our treatments, what to expect, and how to prepare — so you can relax and enjoy your visit.</p>
          <div className="faq-contact">
            <div className="fc-row">
              <span className="icon-circle">{Icon.phone}</span>
              <div>
                <h4>Contact Us</h4>
                <p>Call us: <a className="coral" href={`tel:${contact.tel}`}>+{contact.phone}</a><br />Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              </div>
            </div>
            <div className="fc-row">
              <span className="icon-circle">{Icon.calendar}</span>
              <div>
                <h4>Opening Hours</h4>
                <p>{contact.hours.map((h) => <span key={h}>{h}<br /></span>)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal"><Accordion items={skincareFaqs} variant="boxed" /></div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <>
      <PageHero title="Page not found" crumbs={[['404']]} />
      <section className="container center-block">
        <p className="muted">Sorry, this page doesn’t exist.</p>
        <BookButton className="btn-brown" to="/">Back to Home</BookButton>
      </section>
    </>
  )
}
