import Link from 'next/link'
import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <Link href="tel:+61494039662">+61 494 039 662</Link>
        <span className={styles.divider} />
        <Link href="mailto:support@penantia.com">support@penantia.com</Link>
      </div>
      <div className={styles.right}>
        <span className={styles.pill}>Free AU shipping on orders $99+</span>
        <span className={styles.divider} />
        <Link href="/order-tracking">Track order</Link>
        <span className={styles.divider} />
        <Link href="/my-account">Login</Link>
      </div>
    </div>
  )
}
