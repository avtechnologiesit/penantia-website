import Head from 'next/head'
import Link from 'next/link'
import Topbar from '../../components/Topbar'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import styles from '../../styles/Blog.module.css'

const BLOG_POSTS = [
  { slug:'shilajit-benefits-for-women', category:'Wellness', title:'Shilajit Benefits for Women: What the Research Actually Shows', date:'June 2026', excerpt:'Hormonal balance, energy, iron, and sleep — the cellular mechanisms explained.' },
  { slug:'shilajit-benefits-for-men', category:'Wellness', title:'Shilajit Benefits for Men: Testosterone, Energy, and Recovery Explained', date:'June 2026', excerpt:'Testosterone, workout recovery, ATP energy, and zinc absorption. No hype.' },
  { slug:'what-is-fulvic-acid', category:'Supplements', title:'What Is Fulvic Acid? The Cellular Transport Mechanism Most Supplements Skip', date:'June 2026', excerpt:'Fulvic acid is the molecular carrier that moves minerals into your cells.' },
  { slug:'how-to-take-shilajit', category:'Supplements', title:'How to Take Shilajit: Dosage, Timing, and What to Avoid', date:'June 2026', excerpt:'The correct way — exact dosage, best time, what not to mix it with.' },
  { slug:'shilajit-vs-ashwagandha', category:'Supplements', title:'Shilajit vs Ashwagandha: Which One Does Your Body Actually Need?', date:'June 2026', excerpt:'They work through entirely different biological mechanisms.' },
  { slug:'iron-deficiency-symptoms', category:'Wellness', title:'Iron Deficiency Symptoms: What Low Iron Does to Your Energy, Brain, and Immune System', date:'June 2026', excerpt:'Iron deficiency is the most common nutritional deficiency worldwide.' },
  { slug:'himalayan-shilajit-high-altitude-sourcing', category:'Supplements', title:'Himalayan Shilajit: What Makes High-Altitude Sourcing the Only Standard That Matters', date:'June 2026', excerpt:'Why altitude, ethical harvesting, and Triphala purification define quality.' },
  { slug:'vitamin-d-deficiency-symptoms-australia', category:'Wellness', title:'Vitamin D Deficiency Symptoms: Why Australians Are Still Deficient Despite Year-Round Sun', date:'June 2026', excerpt:'Despite year-round sunshine, deficiency is widespread. The hidden mechanism.' },
  { slug:'adrenal-fatigue-symptoms', category:'Wellness', title:'Adrenal Fatigue Symptoms: What Happens When Your Stress System Runs Out of Fuel', date:'June 2026', excerpt:'The mineral and HPA axis mechanisms behind the symptom cluster explained.' },
  { slug:'shilajit-side-effects', category:'Supplements', title:'Shilajit Side Effects: What Is Real, What Is a Myth, and What to Watch For', date:'June 2026', excerpt:'Most side effects trace back to impure product. What the evidence actually says.' },
]

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — Penantia | Shilajit and Mineral Health Research</title>
        <meta name="description" content="Science-backed articles on Shilajit benefits, mineral deficiencies, hormonal health, and cellular energy." />
        <link rel="canonical" href="https://penantia.com/blog/" />
      </Head>
      <Topbar /><Navbar />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <p className="section__eyebrow">Research articles</p>
            <h1 className={"pf " + styles.h1}>The biology behind every benefit.</h1>
            <p className={styles.sub}>30+ peer-reviewed articles on Shilajit, ionic minerals, hormonal health, and cellular energy.</p>
          </div>
        </div>
        <section className={styles.posts}>
          <div className="container">
            <div className={styles.grid}>
              {BLOG_POSTS.map(p => (
                <Link key={p.slug} href={"/blog/" + p.slug + "/"} className={styles.card}>
                  <div className={styles.cardImg}><span className={styles.catTag}>{p.category}</span></div>
                  <div className={styles.cardCat}>{p.category}</div>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <div className={styles.cardMeta}>Penantia Research Team · {p.date}</div>
                  <p className={styles.cardExcerpt}>{p.excerpt}</p>
                  <span className={styles.cardReadMore}>Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
