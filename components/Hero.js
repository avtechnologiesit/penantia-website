import Link from 'next/link'
import styles from './Hero.module.css'

const stats = [
  { val: '95.2', unit: '%',   label: 'Fulvic acid' },
  { val: '15K',  unit: ' ft', label: 'Harvest altitude' },
  { val: '84',   unit: '+',   label: 'Ionic minerals' },
  { val: '0.2',  unit: ' µm', label: 'Filtration grade' },
]
const specs = [
  { val: '95.2%',    key: 'Fulvic Acid' },
  { val: '84+',      key: 'Minerals' },
  { val: 'Triphala', key: 'Purification' },
  { val: 'Solar',    key: 'Extraction' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>Himalayan Shilajit Resin · Australian owned</span>
          </div>
          <h1 className={styles.h1}>
            We start with<br />the biology.<br />
            <span className={styles.h1Muted}>Not the product.</span>
          </h1>
          <p className={styles.sub}>
            Most people are mineral-depleted. Most supplements fail because the delivery
            mechanism is wrong. Ionic minerals. Fulvic acid transport. Resin form only.
          </p>
          <div className={styles.actions}>
            <Link href="/shop" className="btn btn--primary">Shop Shilajit Resin →</Link>
            <Link href="/blog" className="btn btn--outline">Read the science</Link>
          </div>
          <div className={styles.statsRow}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statVal}>{s.val}<span className={styles.statUnit}>{s.unit}</span></div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.badges}>
              <span className={styles.badgeDark}>In stock</span>
              <span className={styles.badgeOutline}>COA verified</span>
            </div>
            <div className={styles.priceWrap}>
              <div className={styles.price}>$120<sub> / 20g</sub></div>
              <div className={styles.priceNote}>~60 servings</div>
            </div>
          </div>
          <div className={styles.jarZone}>
            <div className={styles.jar}>
              <div className={styles.jarLid} />
              <div className={styles.jarBody}>
                <div className={"pf " + styles.jarName}>Pure Himalayan<br />Shilajit Resin</div>
                <div className={styles.jarDivider} />
                <div className={styles.jarSub}>20g · Ladakh, India</div>
                <div className={styles.jarMiniRow}>
                  <span className={styles.jarMini}>95.2% FA</span>
                  <span className={styles.jarMini}>Lab tested</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.specsGrid}>
            {specs.map(s => (
              <div key={s.key} className={styles.spec}>
                <div className={styles.specVal}>{s.val}</div>
                <div className={styles.specKey}>{s.key}</div>
              </div>
            ))}
          </div>
          <div className={styles.buyRow}>
            <div className={styles.shipping}>Free AU shipping · 30-day guarantee</div>
            <Link href="/shop" className="btn btn--primary btn--sm">Add to cart</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
