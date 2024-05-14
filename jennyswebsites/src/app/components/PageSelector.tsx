import React from 'react'
import styles from './PageSelector.module.css'
import Link from 'next/link'

export default function PageSelector() {
  return (
    <div className={styles.selectorContainer}>
        <div> <Link href="/" className={styles.link}>1</Link></div>
        <div><Link href="/templatetwo" className={styles.link}>2</Link></div>
        <div><Link href="/templatethree" className={styles.link}>3</Link></div>
    </div>
  )
}
