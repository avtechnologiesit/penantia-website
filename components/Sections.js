import { useState } from 'react'
import Link from 'next/link'
import styles from './Sections.module.css'

const trustItems = ['Hand-harvested at 15,000ft','Batch COA verified','Heavy metal tested','Australian owned','GMP certified','No fillers or additives','Cruelty free']
export function TrustStrip() {
  const doubled = [...trustItems,...trustItems]
  return (
    <div className={styles.strip}>
      <div className={styles.stripInner}>
        {doubled.map((t,i) => (
          <span key={i} className={styles.stripGroup}>
            <span className={styles.stripItem}><span className={styles.stripCheck}>✓</span>{t}</span>
            <span className={styles.stripSep}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

const proofData = [
  { num:'95.2', unit:'%', title:'Lab-certified fulvic acid', body:'Verified per batch by accredited Australian laboratories. Certificate of analysis available on request for every batch released.' },
  { num:'84', unit:'+', title:'Ionic trace minerals', body:'Delivered in ionic state via fulvic acid transport — the form cells absorb directly, without a conversion step that degrades most supplements.' },
  { num:'0.2', unit:'µm', title:'Membrane filtration grade', body:'The same standard used in hospital-grade water purification. Removes microbes and nano-sized heavy metal particles in a clinical two-stage process.' },
]
export function ProofSection() {
  return (
    <section className={`${styles.section} ${styles.sectionOff}`}>
      <div className="container">
        <p className="section__eyebrow">By the numbers</p>
        <h2 className="section__h2">The science is not optional.</h2>
        <p className="section__sub">Every claim links to a peer-reviewed study or a batch certificate of analysis.</p>
        <div className={styles.proofGrid}>
          {proofData.map(p => (
            <div key={p.title} className={styles.proofCell}>
              <div className={styles.proofNum}>{p.num}<span className={styles.proofUnit}>{p.unit}</span></div>
              <div className={styles.proofTitle}>{p.title}</div>
              <div className={styles.proofBody}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const mechSteps = [
  { title:'Ionic mineral state', body:'Minerals in ionic form carry an electrical charge, which means the gut wall can transport them actively. Mineral oxides and carbonates absorb at 4–22% at best. Ionic minerals skip the conversion step that causes those losses.', panel:{ title:'Ionic mineral absorption', f1:'4–22%', f2:'Direct', f3:'0.2µm', f4:'2-step' } },
  { title:'Fulvic acid as the carrier', body:'Fulvic acid chelates ionic minerals and actively transports them across the intestinal membrane. This is a fundamentally different pathway that bypasses the bottlenecks where most supplements are lost.', panel:{ title:'Fulvic acid transport', f1:'Chelation', f2:'Active', f3:'84+ min', f4:'Ionic' } },
  { title:'Resin form only', body:'Capsule and powder equivalents introduce a dissolution step before absorption begins. That step degrades active compounds. Resin delivers everything in solution with zero degradation between the jar and the gut wall.', panel:{ title:'Resin bioavailability', f1:'Zero loss', f2:'Resin only', f3:'No caps', f4:'Solar ext' } },
  { title:'Mitochondrial ATP support', body:'Peer-reviewed clinical studies (PMID 23439107, 30850811) demonstrate that purified Shilajit increases mitochondrial ATP output by supplying the mineral substrate the cell requires to produce energy at the source.', panel:{ title:'Mitochondrial ATP support', f1:'ATP+', f2:'Clinical', f3:'2 PMIDs', f4:'Peer rev' } },
]
export function MechanismSection() {
  const [active, setActive] = useState(0)
  const p = mechSteps[active].panel
  return (
    <section className={`${styles.section} ${styles.sectionWhite}`}>
      <div className="container">
        <p className="section__eyebrow">The mechanism</p>
        <h2 className="section__h2">Why the delivery form changes everything.</h2>
        <div className={styles.mechGrid}>
          <div className={styles.mechSteps}>
            {mechSteps.map((s,i) => (
              <div key={i} className={`${styles.mstep} ${active===i ? styles.mstepOn : ''}`} onClick={() => setActive(i)}>
                <div className={styles.mstepNum}>{String(i+1).padStart(2,'0')}</div>
                <div className={styles.mstepInner}>
                  <div className={styles.mstepTitle}>{s.title}</div>
                  {active===i && <div className={styles.mstepBody}>{s.body}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.mechPanel}>
            <div className={styles.mechPanelTitle}>{p.title}</div>
            <div className={styles.mechDiagram}>
              <div className={styles.mRing} style={{width:120,height:120,top:20,left:'50%',transform:'translateX(-50%)'}} />
              <div className={styles.mRing} style={{width:72,height:72,top:44,left:'50%',transform:'translateX(-50%)'}} />
              <div className={styles.mDot} style={{top:60,left:'calc(50% - 3.5px)'}} />
              <div className={styles.mDotSm} style={{top:76,left:'calc(50% + 24px)'}} />
              <div className={styles.mDotSm} style={{top:76,left:'calc(50% - 30px)'}} />
            </div>
            <div className={styles.mechFacts}>
              {[[p.f1,'Standard absorption'],[p.f2,'Ionic pathway'],[p.f3,'Filtration grade'],[p.f4,'Purification']].map(([val,lab]) => (
                <div key={lab} className={styles.mfact}>
                  <div className={styles.mfactVal}>{val}</div>
                  <div className={styles.mfactLab}>{lab}</div>
                </div>
              ))}
            </div>
            <div className={styles.mechRef}>Peer-reviewed: PMID 23439107, 30850811. Not evaluated by the TGA.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const bentos = [
  { wide:true, icon:'⚡', tag:'Energy & stamina', href:'/blog/why-am-i-always-tired-cellular-energy-explained/', title:'Cellular energy. Not borrowed stimulation.', body:'Ionic minerals support ATP production in mitochondria directly — not by stimulating the system but by supplying what it needs to generate energy properly.' },
  { icon:'🌙', tag:'Deeper sleep', href:'/blog/magnesium-glycinate-for-sleep-why-this-one-mineral-form-changes-how-you-sleep-at-the-cellular-level/', title:'Ionic magnesium for sleep architecture.', body:'Magnesium governs GABA receptor function and melatonin production. Shilajit delivers ionic magnesium via fulvic acid — the form that actually reaches the cell.' },
  { icon:'📈', tag:'Stress & recovery', href:'/blog/high-cortisol-symptoms-why-your-body-is-stuck-in-a-stress-cycle-and-what-actually-breaks-it/', title:'Every cortisol spike burns minerals.', body:'High cortisol depletes magnesium and zinc. Shilajit replenishes what stress burns through and supports HPA axis regulation as a clinically studied adaptogen.' },
  { icon:'🛡', tag:'Immune function', href:'/blog/weak-immune-system-symptoms-why-you-keep-getting-sick-and-what-your-body-is-actually-missing/', title:'Zinc drives T-cell production.', body:'Zinc oxide supplements absorb at around 20%. Ionic zinc delivered via fulvic acid reaches the cell at a fundamentally different absorption rate.' },
  { icon:'🌿', tag:'Coming soon', href:'/ashwagandha-coming-soon/', title:'Ashwagandha Resin.', body:'Cortisol regulation at the HPA axis level. In resin form for the same bioavailability reason as Shilajit. Join the waitlist to be first.' },
]
export function BentoSection() {
  return (
    <section className={`${styles.section} ${styles.sectionOff}`}>
      <div className="container">
        <p className="section__eyebrow">Why people take Shilajit</p>
        <h2 className="section__h2">Most people come for one reason. Most stay for four.</h2>
        <div className={styles.bentoGrid}>
          {bentos.map((b,i) => (
            <Link key={i} href={b.href} className={`${styles.bcard} ${b.wide ? styles.bcardWide : ''}`}>
              <span className={styles.bcardIcon}>{b.icon}</span>
              <span className={styles.bcardTag}>{b.tag}</span>
              <h3 className={"pf " + styles.bcardTitle}>{b.title}</h3>
              <p className={styles.bcardBody}>{b.body}</p>
              <span className={styles.bcardLink}>Read the research →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const processSteps = [
  { num:'01', title:'Ethical wild harvest', body:'Hand-collected from licensed micro-lots in Ladakh at 15,000ft. Seasonal, low-impact, fair-wage. No industrial extraction.' },
  { num:'02', title:'Solar heat extraction', body:'Slow extraction using natural sunlight. No industrial ovens or chemical solvents. Preserves the fulvic acid chains that make the resin biologically active.' },
  { num:'03', title:'Dual purification', body:'Stage 1: Triphala gravity sedimentation. Stage 2: 0.2µm membrane filtration — pharmaceutical grade. Both, in sequence.' },
  { num:'04', title:'Batch laboratory testing', body:'Every batch tested by accredited Australian labs before release. Heavy metals, fulvic acid, microbial contamination. COA on request.' },
]
export function ProcessSection() {
  return (
    <section className={`${styles.section} ${styles.sectionWhite}`}>
      <div className="container">
        <p className="section__eyebrow">From mountain to jar</p>
        <h2 className="section__h2">Our process has four steps. None are shortcuts.</h2>
        <div className={styles.processStrip}>
          {processSteps.map((s,i) => (
            <div key={s.num} className={styles.pstep}>
              <div className={styles.pstepNum}>{s.num}</div>
              <div className={styles.pstepTitle}>{s.title}</div>
              <div className={styles.pstepBody}>{s.body}</div>
              {i < processSteps.length-1 && <div className={styles.pstepArrow}>›</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ethicsData = [
  { icon:'🐾', title:'No animal harm', body:'100% cruelty-free across every stage. Testing and sourcing involve no harm to animals, without exception.' },
  { icon:'🌱', title:'Responsible sourcing', body:'Direct partnerships with ethical harvesters in Ladakh. Fair wages, seasonal harvesting, minimal ecological footprint.' },
  { icon:'♥', title:'Community support', body:'A portion of every purchase funds NGO-backed programs providing food, shelter, and employment for disabled individuals in India.' },
]
export function EthicsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionOff}`}>
      <div className="container">
        <p className="section__eyebrow">Ethics in every step</p>
        <h2 className="section__h2">We measure our impact beyond the jar.</h2>
        <p className="section__sub">Purity is the minimum. How we source, who we work with, and what we give back matters as much as what is in the product.</p>
        <div className={styles.ethicsGrid}>
          {ethicsData.map(e => (
            <div key={e.title} className={styles.ecard}>
              <div className={styles.ecardIcon}>{e.icon}</div>
              <div className={styles.ecardTitle}>{e.title}</div>
              <div className={styles.ecardBody}>{e.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviews = [
  { stars:5, text:'"Feeling noticeably better after one month. Energy levels are different in a way that is hard to attribute to anything else I changed."', author:'Sam · Verified buyer · November 2025' },
  { stars:5, text:'"Impressed by the quality and transparency. The COA documentation shows Penantia actually means what they say about purity."', author:'Winston · Verified buyer · November 2025' },
  { stars:5, text:'"Was skeptical. This Shilajit completely won me over. Started for immunity support and it exceeded every expectation."', author:'Amazon AU · Verified purchase' },
]
export function ReviewsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionWhite}`}>
      <div className="container">
        <div className={styles.reviewsHeader}>
          <div>
            <p className="section__eyebrow">Customer reviews</p>
            <h2 className="section__h2" style={{marginBottom:0}}>What people say.</h2>
          </div>
          <div className={styles.ratingBig}>
            <span className={styles.ratingNum}>4.5</span>
            <div><div className={styles.stars}>★★★★½</div><div className={styles.ratingCount}>Based on verified purchases</div></div>
          </div>
        </div>
        <div className={styles.reviewsGrid}>
          {reviews.map((r,i) => (
            <div key={i} className={styles.rcard}>
              <div className={styles.rcardStars}>{"★".repeat(r.stars)}</div>
              <div className={styles.rcardText}>{r.text}</div>
              <div className={styles.rcardAuthor}>{r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const blogPosts = [
  { cat:'Cellular energy', href:'/blog/why-am-i-always-tired-cellular-energy-explained/', title:'Always tired despite sleeping? Here is what is actually happening.', meta:'Penantia Research Team · May 2026', excerpt:'Chronic fatigue that does not respond to rest is almost always cellular. Ionic mineral depletion and ATP production explained.', icon:'⚡' },
  { cat:'Cortisol & stress', href:'/blog/high-cortisol-symptoms-why-your-body-is-stuck-in-a-stress-cycle-and-what-actually-breaks-it/', title:'High cortisol symptoms: why your body is stuck in a stress cycle.', meta:'Penantia Research Team · March 2026', excerpt:'Every cortisol spike depletes magnesium and zinc. The cycle, and what actually breaks it.', icon:'📈' },
  { cat:'Sleep science', href:'/blog/magnesium-glycinate-for-sleep-why-this-one-mineral-form-changes-how-you-sleep-at-the-cellular-level/', title:'Magnesium glycinate for sleep: why the mineral form changes everything.', meta:'Penantia Research Team · March 2026', excerpt:'Ionic magnesium is critical for deep sleep architecture. Why form determines whether it reaches your cells.', icon:'🌙' },
]
export function BlogSection() {
  return (
    <section className={`${styles.section} ${styles.sectionOff}`}>
      <div className="container">
        <div className={styles.blogHeader}>
          <div>
            <p className="section__eyebrow">Research articles</p>
            <h2 className="section__h2" style={{marginBottom:0}}>The biology behind every benefit.</h2>
          </div>
          <Link href="/blog" className={styles.blogAllLink}>View all 30 articles →</Link>
        </div>
        <div className={styles.blogGrid}>
          {blogPosts.map(p => (
            <Link key={p.href} href={p.href} className={styles.blcard}>
              <div className={styles.blcardImg}>
                <span className={styles.blcardCatTag}>{p.cat}</span>
                <span className={styles.blcardIcon}>{p.icon}</span>
              </div>
              <div className={styles.blcardCat}>{p.cat}</div>
              <div className={styles.blcardTitle}>{p.title}</div>
              <div className={styles.blcardMeta}>{p.meta}</div>
              <div className={styles.blcardExc}>{p.excerpt}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const ctaTrust = [{ icon:'🚚', text:'Free AU shipping $99+' },{ icon:'↩', text:'30-day guarantee' },{ icon:'🔒', text:'Secure checkout' },{ icon:'✓', text:'Batch COA verified' }]
export function CTABand() {
  return (
    <section className={styles.ctaBand}>
      <div className="container-sm" style={{textAlign:'center'}}>
        <p className={styles.ctaEyebrow}>Start today</p>
        <h2 className={"pf " + styles.ctaH2}>Biology first.<br />Form second. Proof third.</h2>
        <p className={styles.ctaSub}>Pure Himalayan Shilajit Resin — 20g, ~60 servings. $120. Free shipping on Australian orders over $99.</p>
        <div className={styles.ctaBtns}>
          <Link href="/shop" className="btn btn--white">Shop Shilajit Resin — $120</Link>
          <Link href="/blog" className="btn btn--ghost">Read the research</Link>
        </div>
        <div className={styles.ctaTrust}>
          {ctaTrust.map(t => <span key={t.text} className={styles.ctaTrustItem}><span>{t.icon}</span> {t.text}</span>)}
        </div>
      </div>
    </section>
  )
}

const footerLinks = {
  'Quick links': [['Home','/'],['About us','/about-us'],['Shop','/shop'],['Stockists','/stockists'],['Contact us','/contact-us']],
  'Explore': [['Blog','/blog'],['Ashwagandha waitlist','/ashwagandha-coming-soon'],['Track order','/order-tracking'],['B2B wholesale','https://b2b.penantia.com']],
  'Legal': [['Shipping policy','/penantia-shipping-policy'],['Refund & returns','/refund_returns'],['Privacy policy','/privacy-policy-2'],['Terms & conditions','/penantia-terms-and-conditions']],
}
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerCols}>
          <div className={styles.footerBrand}>
            <div className={"pf " + styles.footerLogo}>Penantia</div>
            <div className={styles.footerTagline}>Health over profit. Every product reflects our commitment to purity, transparency, and integrity. Australian owned.</div>
            <div className={styles.footerSocials}>
              <a href="https://www.instagram.com/penantia_official/" target="_blank" rel="noopener noreferrer" className={styles.fsoc} aria-label="Instagram">IG</a>
              <a href="https://www.facebook.com/PenantiaOfficial/" target="_blank" rel="noopener noreferrer" className={styles.fsoc} aria-label="Facebook">FB</a>
              <a href="https://x.com/penantiaglobal" target="_blank" rel="noopener noreferrer" className={styles.fsoc} aria-label="X">X</a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading,links]) => (
            <div key={heading}>
              <div className={styles.footerColH}>{heading}</div>
              <div className={styles.footerLinks}>
                {links.map(([label,href]) => <Link key={href} href={href} className={styles.footerLink}>{label}</Link>)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerCopy}>© 2026 Penantia. All rights reserved.</div>
          <div className={styles.footerCerts}>
            {['GMP Certified','AU Lab Tested','Heavy Metal Free'].map(c => <span key={c} className={styles.fcert}>{c}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
