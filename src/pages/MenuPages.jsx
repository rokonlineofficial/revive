import { useEffect, useState } from 'react'
import { img, Icon, Sparkle, BookButton, PageHero } from '../components/ui'
import { contact } from '../components/sections'

const Affirm = () => (
  <p className="affirm">Pay over time for orders of $50.00+ with <b>affirm</b></p>
)

function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => (
        <button key={t} type="button" role="tab" aria-selected={active === t} className={active === t ? 'tab active' : 'tab'} onClick={() => onChange(t)}>{t}</button>
      ))}
    </div>
  )
}

function LaserNote({ what }) {
  // TODO: the design does not show the Laser tab's contents — add the studio's laser price list here.
  return (
    <div className="laser-note">
      <h3>Laser {what}</h3>
      <p className="muted">Laser {what.toLowerCase()} pricing depends on the treatment area. Contact us or book a consultation and we’ll put together the right plan for you.</p>
      <BookButton className="btn-beige" to="/contact">Get a Quote</BookButton>
    </div>
  )
}

/* ================= Services ================= */
const skincare = [
  { t: 'Consultation', p: '$25.00', pts: 5, d: 'Your skin journey starts here. In this 20-minute consultation, we’ll assess your skin and create a personalized daily regimen and treatment plan tailored to your goals. Perfect for acne, pigmentation, aging, or glow-up support.', noAffirm: true },
  { t: 'Salicylic Peel', p: '$120.00', pts: 24, lead: 'Clarify. Calm. Control breakouts.', d: 'The Salicylic Peel is a light-to-medium strength BHA peel designed to deeply cleanse and purify acne-prone or congested skin. It penetrates into the pores to dissolve excess oil, minimize breakouts, and refine skin texture — all while calming inflammation. This no-downtime peel is ideal for active acne, blackheads, and oily skin types seeking a clear, matte, and smooth complexion.' },
  { t: 'Jessner Peel', p: '$275.00', pts: 55, d: 'Refine tone. Clear breakouts. Reveal fresh, radiant skin. A medium-depth peel that blends lactic acid, salicylic acid, and resorcinol to improve texture, reduce breakouts, and fade discoloration. Designed to resurface the skin, clear pores, and stimulate cell turnover for a smooth, radiant complexion. Visible peeling may occur for a few days post-treatment.' },
  { t: 'TCA Peel', p: '$300.00', pts: 60, d: 'Smooth. Brighten. Rejuvenate. The TCA Peel (Trichloroacetic Acid) is a powerful medium-depth peel that targets fine lines, sun damage, acne scarring, and pigmentation. This treatment stimulates deep exfoliation and collagen renewal, revealing brighter, tighter, and more even-toned skin. Mild to moderate peeling is expected as your skin undergoes cellular renewal. Ideal for clients looking for dramatic improvements in texture, tone, and clarity.' },
  { t: 'Revive Radiance Peel', p: '$395.00', pts: 79, d: 'Unveil your most radiant skin with our Revive Radiance Peel, a powerhouse blend of Jessner’s Solution, TCA (Trichloroacetic Acid), and Vitamin A (Retinoic Acid). This advanced, medium-depth peel targets multiple skin concerns simultaneously — including fine lines, pigmentation, acne, sun damage, and uneven texture — to dramatically rejuvenate and restore a youthful glow. Our expertly layered technique allows precise customization to your skin’s needs, delivering a comprehensive skin renewal without excessive downtime. Vitamin A enhances cellular turnover, while Jessner’s and TCA work together to refine pores, lift stubborn pigment, and stimulate collagen production for a smoother, more luminous complexion.' },
  { t: 'BioRePeelCl3 -Blue', p: '$250.00', pts: 50, d: 'BioRePeel Blue is an advanced 30% TCA medical-grade peel that employs innovative biphasic technology for effective exfoliation on the face, neck, and décolleté, ensuring minimal downtime. This treatment not only improves skin texture and tone but also diminishes fine lines and hyperpigmentation while promoting collagen production, making it an excellent option for all skin types and ideal for both pre-event preparation and ongoing skin correction.' },
  { t: 'BioRePeelCl3 Gold', p: '$295.00', pts: 55, d: 'BioRePeelCl3 Gold is a potent 50% TCA medical-grade peel designed for both the body and advanced facial protocols, offering deep exfoliation and skin rejuvenation. This treatment effectively smooths rough skin, reduces the appearance of scars and discoloration, and stimulates collagen production for firmer, youthful skin with minimal downtime.' },
  { t: 'Back Facial', p: '$195.00', pts: 39, d: 'A clarifying and purifying treatment for the back. Includes deep cleansing, exfoliation, extractions, high frequency, and a mask to target breakouts, smooth texture, and reveal clear, glowing skin.' },
  { t: 'Restore Clear Facial (Acne)', p: '$225.00', pts: 45, d: 'A deep-cleansing acne facial featuring a gentle peel, ultrasonic exfoliation, extractions, high frequency, oxygen infusion, and LED blue light to calm and clarify breakout-prone skin.' },
  { t: 'Essential Glow Facial (Brightening)', p: '$185.00', alt: '$185.00 or 1500 Points', pts: 37, d: 'A brightening facial that combines ultrasonic cleansing, a glow-boosting peel, dermaplaning, light extractions, high frequency, and a brightening mask for radiant, refreshed skin.' },
  { t: 'Revive Glow Facial (Anti-aging)', p: '$375.00', pts: 75, d: 'An advanced anti-aging facial that combines dermaplaning, light peel or enzyme exfoliation, microcurrent, and radiofrequency skin tightening to smooth, lift, and brighten the skin. Perfect for a radiant, youthful glow with no downtime' },
  { t: 'Renew Hydrafusion Facial (Hydrating)', p: '$185.00', pts: 37, d: 'A deeply hydrating treatment combining ultrasonic cleansing, a gentle peel, microdermabrasion, oxygen infusion, and a nourishing mask to restore moisture and reveal radiant, refreshed skin.' },
  { t: 'Microneedling', p: '$325.00', pts: 65, d: 'Reveal smoother, firmer skin with the EXCEED device—the only FDA-cleared microneedling system approved to treat both acne scars and wrinkles. This collagen-boosting treatment improves skin texture, tone, and elasticity with minimal downtime. Tiny, sterile needles create controlled micro-injuries, promoting the body’s natural healing process. This results in improved skin texture, reduced fine lines, and a rejuvenated complexion.' },
  { t: 'Microneedling with Purasomes', p: '$450.00', pts: 90, d: 'Microneedling with Purasomes combines the collagen-boosting effects of microneedling with regenerative exosomes, infusing growth factors and peptides deep into the skin for quicker healing and superior outcomes. The treatment is further enhanced with LED therapy to maximize results and rejuvenate the skin.' },
  { t: 'BioRePeel + Microneedling', p: '$395.00', pts: 79, d: 'Experience advanced skin renewal with FDA-cleared Candela Exceed® microneedling combined with the bi-phase power of BioRePeelCl3®. Perfect for treating:', list: ['Enlarged pores and smooths texture', 'Acne scars & hyperpigmentation', 'Fine lines and wrinkles', 'Uneven skin tone'] },
  { t: 'LED Light Therapy', p: '$50.00', alt: '$50.00 or 750 Points', pts: 10, d: 'LED Light Therapy Service, designed to rejuvenate and enhance your skin’s natural radiance. Our advanced LED technology harnesses the power of specific light wavelengths to stimulate cellular activity, promoting collagen production and accelerating skin healing. This non-invasive and painless therapy addresses a variety of skin concerns, from fine lines and wrinkles to acne and inflammation' },
]

function PriceTitle({ t, p }) {
  return (
    <div className="price-title">
      <h3>{t}</h3><span className="dots" aria-hidden="true" /><span className="price">{p}</span>
    </div>
  )
}

export function Services() {
  const [tab, setTab] = useState('Skincare')
  return (
    <>
      <PageHero title="Services" crumbs={[['Services']]} bg="services-hero.jpg" dark />
      <section className="container price-page">
        <div className="center-head reveal">
          <p className="eyebrow">Pricing Packages</p>
          <h2 className="display">Skincare &amp; Laser Services</h2>
        </div>
        <Tabs tabs={['Skincare', 'Laser']} active={tab} onChange={setTab} />
        <div className="price-box">
          {tab === 'Skincare' ? (
            <div className="price-grid">
              {skincare.map((s) => (
                <article className="price-item" key={s.t}>
                  <PriceTitle t={s.t} p={s.p} />
                  {s.alt && <p className="alt-price">{s.alt}</p>}
                  <p className="points">Earned Points: {s.pts}</p>
                  {!s.noAffirm && <Affirm />}
                  {s.lead && <p className="desc">{s.lead}</p>}
                  <p className="desc">{s.d}</p>
                  {s.list && <ul className="dot-list">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
                </article>
              ))}
            </div>
          ) : <LaserNote what="Services" />}
        </div>
        <div className="center-cta"><BookButton className="btn-beige" /></div>
      </section>
    </>
  )
}

/* ================= Packages ================= */
const packages = [
  { t: 'Revive Glow Facial', p: '$956.25', i: 'pkg-1.jpg', d: 'This corrective treatment is designed for clients experiencing loss of firmness, fine lines, and dull, aging skin. Each session includes dermaplaning, microcurrent to tone and lift facial muscles, and radiofrequency to stimulate collagen and improve skin firmness and elasticity. This facial helps improve: * Fine lines and wrinkles * Loss of firmness and skin laxity * Dull, tired-looking skin * Overall skin tone and texture For best results, treatments are performed once per month to maintain collagen production and visible skin firmness. * Includes 3 Revive Glow Facials * Treatment time: 90 minutes each * Series must be used within 6 months' },
  { t: 'Restore Clear Facial Series', p: '$637.50', i: 'pkg-2.jpg', d: 'This corrective treatment is designed for clients experiencing breakouts, excess oil, and congested pores. Each session includes deep cleansing, a customized exfoliating peel, thorough extractions, blue LED therapy, and oxygen infusion to calm inflammation, clear congestion, and support acne healing. This facial helps improve: * Active breakouts * Oily, congested skin * Blackheads and clogged pores * Post-acne marks For best results, treatments are performed every 3–4 weeks to keep acne under control and maintain clear, balanced skin. * Includes 3 Restore Clear Facials * Treatment time: 90 minutes each * Series must be used within 4 months' },
  { t: 'Renew Hydrafusion Facial', p: '$471.75', i: 'pkg-3.jpg', d: 'This treatment is ideal for clients with dry, dull, rough, or dehydrated skin who want a smoother, clearer, more radiant complexion. Each session combines advanced exfoliation, gentle pore refinement, and oxygen infusion to improve skin texture, restore hydration, and reveal healthy, glowing skin. This facial helps improve: * Dehydration and dryness * Dull, tired-looking skin * Rough texture and buildup * Mild congestion Performed once per month, this treatment keeps the skin smooth, clear, and optimally hydrated. * Includes 3 Renew Hydrafusion Facials * Treatment time: 60 minutes each * Series must be used within 4 months' },
  { t: 'Essential Glow Facial', p: '$471.75', i: 'pkg-4.jpg', d: 'This treatment is ideal for clients with dull skin, uneven tone, dark spots, or rough texture who want a smoother, brighter, more even complexion. Each session includes dermaplaning to remove dead skin buildup and peach fuzz, followed by a customized exfoliating peel, gentle extractions to clear congestion, and LED light therapy to support skin healing and improve overall clarity and radiance. This facial helps improve: * Dull, lackluster skin * Uneven skin tone and discoloration * Dark spots and post-acne marks * Rough texture and mild congestion For best results, treatments are performed every 4 weeks to support healthy skin renewal and maintain long-term results. * Includes 3 Essential Glow Facials * Dermaplaning, customized peel, extractions, and LED included * Treatment time: 60 minutes each * Series must be used within 6 months * Safe and effective for all skin tones' },
  { t: 'BioRePeelCl3 Blue Series (4 Sessions)', p: '$800', i: 'pkg-5.jpg', d: 'Reveal brighter, clearer, and smoother skin with our BioRePeelCl3 Blue Series—an advanced bi-phasic TCA treatment designed to dramatically improve pigmentation, acne, fine lines, and overall skin tone with minimal downtime. Unlike traditional peels, BioRePeel works beneath the surface to stimulate cellular turnover, refine texture, and restore radiance—without excessive peeling. This series is ideal for clients committed to achieving visible, corrective results. Package includes: * Four (4) BioRePeelCl3 Blue treatments * Each session lasts approximately 30–45 minutes * Improves pigmentation, acne, texture, and dullness * Stimulates collagen and accelerates skin renewal * Minimal downtime compared to traditional TCA peels Treatment schedule: For optimal results, sessions are performed every 7–10 days. Package policy: Series must be completed within 4 months of purchase.' },
  { t: '4 Jessner Chemical Peels', p: '$935', i: 'pkg-6.jpg', d: 'Refine your skin tone, improve texture, and target stubborn pigmentation with a series of four (4) Jessner chemical peels. This medium-depth peel is a powerful combination of salicylic acid, lactic acid, and resorcinol—ideal for clients struggling with acne, discoloration, sun damage, or uneven skin texture.• Each session is approximately 30 minutes• Recommended every 2–4 weeks for best results• Must be used within 4 months of purchase' },
  { t: '6 Microneedling Sessions', p: '$1658', i: 'pkg-7.jpg', d: 'Transform your skin with a series of six (6) professional microneedling treatments, designed to stimulate collagen, improve skin texture, reduce the appearance of fine lines, scars, and hyperpigmentation. This package is ideal for clients seeking long-term improvement in skin tone and texture.• Includes 6 microneedling sessions• Each session lasts 60–75 minutes• Best results seen with consistent monthly treatments• Must be used within 12 months of purchase• Post-treatment care instruction' },
  { t: '4 BioRePeelCl3 Blue + Microneedling', p: '$1,343', i: 'pkg-8.jpg', d: 'An advanced corrective series combining BioRePeelCl3 Blue with professional microneedling to improve hyperpigmentation, acne scars, fine lines, and uneven skin tone. This dual-modality treatment accelerates cellular turnover while stimulating collagen production, resulting in smoother, brighter, and stronger skin with minimal downtime. * Includes 4 BioRePeelCl3 Blue + Microneedling treatments * Each session is approximately 60–75 minutes * Treatments performed every 4–6 weeks for optimal results * Series must be completed within 12 months Series pricing includes preferred program savings.' },
  { t: '6 BioRePeelCl3 Blue + Microneedling', p: '$2,015', i: 'pkg-9.jpg', d: 'A comprehensive corrective series combining BioRePeelCl3 Blue with professional microneedling to target hyperpigmentation, acne scars, fine lines, and uneven skin tone. This advanced treatment stimulates collagen production while accelerating skin renewal, delivering progressive, long-term improvement in skin clarity, texture, and overall strength. * Includes 6 BioRePeelCl3 Blue + Microneedling treatments * Each session is approximately 60 minutes * Treatments performed every 4–6 weeks for optimal results * Series must be completed within 12 months Series pricing includes preferred program savings.' },
]

function InfoBand({ script }) {
  return (
    <section className="info-band" style={{ backgroundImage: `url(${img('trust.jpg')})` }}>
      <div className="info-inner">
        <div className="info-top">
          <div>
            <p className="eyebrow light">Join Our Skincare Community</p>
            <h2>Join Our Newsletter <br />for Exclusive <br />Skincare Offers &amp; <br />Beauty Updates</h2>
          </div>
          <p className="info-sub">Join Our Newsletter for Exclusive Skincare Offers &amp; Beauty Updates</p>
        </div>
        <div className="glass-row">
          <div className="glass">
            <span className="icon-circle">{Icon.phone}</span>
            <div><h4>Call Us Now</h4><a className="big" href={`tel:${contact.tel}`}>{contact.phone}</a><p>Email: {contact.email}</p></div>
          </div>
          <div className="glass">
            <span className="icon-circle">{Icon.pin}</span>
            <div><h4>Office Address</h4><p>5 West 37th St. 7th Fl Suite 717 New York, NY 10018</p></div>
          </div>
          <div className="glass tall">
            <span className="icon-circle">{Icon.calendar}</span>
            <div><h4>Opening Hours</h4><p>{contact.hours.map((h) => <span key={h}>{h}<br /></span>)}</p></div>
          </div>
        </div>
      </div>
      <span className="script info-script" aria-hidden="true">{script}</span>
    </section>
  )
}

export function Packages() {
  const [tab, setTab] = useState('Facial & Peel Packages')
  return (
    <>
      <PageHero title="Packages" crumbs={[['Packages']]} />
      <section className="container price-page">
        <div className="center-head reveal">
          <p className="eyebrow">Pricing Packages</p>
          <h2 className="display">Treatment Packages</h2>
        </div>
        <Tabs tabs={['Facial & Peel Packages', 'Laser Hair Removal Packages']} active={tab} onChange={setTab} />
        <div className="price-box">
          {tab === 'Facial & Peel Packages' ? (
            <div className="price-grid pkg">
              {packages.map((p) => (
                <article className="pkg-item" key={p.t}>
                  <img className="pkg-thumb" src={img(p.i)} alt="" />
                  <div>
                    <PriceTitle t={p.t} p={p.p} />
                    <p className="desc">{p.d}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : <LaserNote what="Hair Removal Packages" />}
        </div>
      </section>
      <InfoBand script="Packages" />
    </>
  )
}

/* ================= Memberships ================= */
export function Memberships() {
  const plans = [
    { t: 'Revive Glow Membership', p: '$165/Month', d: 'The Revive Glow Membership is ideal for clients seeking consistent skincare maintenance with one hydrating or brightening facial each month. Members enjoy exclusive benefits, including 10% off additional treatments and skincare products, a complimentary LED add-on monthly, and priority booking with access to member-only specials.' },
    { t: 'Revive Elite Membership', p: '$285/Month', d: 'The Revive Elite Membership is designed for individuals seeking advanced skin treatments and corrective care, offering one advanced treatment each month from options like chemical peels, microneedling, or skin tightening. Members enjoy 15% off additional services and skincare products, complimentary LED and microcurrent add-ons, VIP early access to new treatments, and a special birthday month bonus of a free dermaplaning or enzyme peel.' },
  ]
  return (
    <>
      <PageHero title="Memberships" crumbs={[['Memberships']]} />
      <section className="container memberships">
        <h2 className="display center reveal">Memberships</h2>
        <div className="member-grid">
          {plans.map((m) => (
            <article className="member-card reveal" key={m.t}>
              <PriceTitle t={m.t} p={m.p} />
              <p>{m.d}</p>
              <BookButton className="btn-light" to="/contact">Join Membership</BookButton>
            </article>
          ))}
        </div>
        <div className="terms reveal">
          <h3>Terms &amp; Conditions:</h3>
          <ul className="spark-list">
            <li><Sparkle />3-month minimum commitment</li>
            <li><Sparkle />Unused services roll over for up to 2 months</li>
            <li><Sparkle />Memberships are non-transferable</li>
          </ul>
        </div>
      </section>
    </>
  )
}

/* ================= Rewards Program ================= */
export function Rewards() {
  const List = ({ items }) => <ul className="spark-list tight">{items.map((t) => <li key={t}><Sparkle />{t}</li>)}</ul>
  return (
    <>
      <PageHero title="Rewards Program" crumbs={[['Rewards Program']]} />
      <section className="container rewards">
        <div className="reveal">
          <p className="eyebrow">Earn Points Every Time You Treat Your Skin!</p>
          <h2 className="display">Treat Your Skin</h2>
        </div>
        <div className="reward-grid">
          <article className="reward-card reveal">
            <h3 className="rule">How It Works:</h3>
            <List items={['$5 spent = 1 point', 'Includes services, skincare products, and memberships']} />
          </article>
          <article className="reward-card reveal">
            <img className="rw-icon" src={img('rw-icon-1.png')} alt="" />
            <h3>Bonus Point Opportunities:</h3>
            <List items={['Sign up for a Membership: +50 points', 'Birthday Month Visit: +50 points', 'Referral (when they book): +150 points', 'Pre-book your next appointment: +25 points', 'Leave a Google Review: +75 points']} />
          </article>
          <article className="reward-card reveal">
            <img className="rw-icon" src={img('rw-icon-2.png')} alt="" />
            <h3>Redeem Your Points:</h3>
            <List items={['250 points = $10 off', '500 points = $25 off', '750 points = Free LED Add-On', '1000 points = $50 off any service', '1500 points = Free Brightening Facial']} />
          </article>
          <article className="reward-card reveal">
            <img className="rw-icon" src={img('rw-icon-3.png')} alt="" />
            <h3>Simple Rules:</h3>
            <List items={['Points never expire', 'Cannot be combined with other promos', 'Redeem anytime at checkout']} />
          </article>
          <span className="script rewards-script" aria-hidden="true">Start Earning</span>
        </div>
      </section>
    </>
  )
}

/* ================= Gift Certificates ================= */
export function GiftCertificates() {
  const cards = ['Just Because', 'Birthday', 'Congratulations', 'Hair Removal', 'Skin Care']
  return (
    <>
      <PageHero title="Gift Certificates" crumbs={[['Gift Certificates']]} />
      <section className="container gifts">
        <h2 className="gift-title reveal">Gift Certificates</h2>
        <div className="gift-grid">
          {cards.map((c, i) => (
            // TODO: link each card to the studio's gift-card checkout when available
            <a className="gift-tile reveal" key={c} href={`mailto:${contact.email}?subject=${encodeURIComponent(`Gift Certificate – ${c}`)}`}>
              <img src={img(`gift-${i + 1}.jpg`)} alt={`${c} gift certificate`} />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

/* ================= Gallery ================= */
const galleryImages = Array.from({ length: 10 }, (_, i) => `g-${i + 1}.jpg`)

export function Gallery() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((a) => (a + 1) % galleryImages.length)
      if (e.key === 'ArrowLeft') setActive((a) => (a - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      <PageHero title="Gallery" crumbs={[['Gallery']]} />
      <section className="container results-head reveal">
        <h2 className="display">Our Results Gallery</h2>
        <p className="muted">Tangible client <strong>results</strong> achieve 180% greater clarity in acne healing, pigmentation balance, skin smoothness, and laser rejuvenation. Each transformation reflects our uncompromising commitment to elite technology, bespoke treatment, and beautifully authentic skin.</p>
      </section>
      <section className="results-grid">
        {galleryImages.map((f, i) => (
          <button type="button" className="results-item reveal" key={f} onClick={() => setActive(i)} aria-label={`Open image ${i + 1}`}>
            <img src={img(f)} alt="" />
          </button>
        ))}
      </section>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button type="button" className="lb-close" aria-label="Close">×</button>
          <img src={img(galleryImages[active])} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
