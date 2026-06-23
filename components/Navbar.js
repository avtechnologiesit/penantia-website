import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About us' },
  { href: '/shop', label: 'Shop' },
  { href: '/stockists', label: 'Stockists' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMark}><span className={styles.logoLeaf} /></span>
        <span className={styles.logoText}>Penantia</span>
      </Link>
      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className={`${styles.link} ${router.pathname === l.href ? styles.active : ''}`} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.right}>
        <Link href="/shop" className={`btn btn--primary btn--sm ${styles.shopBtn}`}>Shop now</Link>
        <button className={styles.burger} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
