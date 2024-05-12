import React from 'react'
import styles from './PageSelector.module.css'
import Link from 'next/link'

export default function PageSelector() {
  return (
    <div className={styles.selectorContainer}>
        <div> <Link href="/">1</Link></div>
        <div><Link href="/templatetwo">2</Link></div>
        <div>3</div>
    </div>
  )
}
