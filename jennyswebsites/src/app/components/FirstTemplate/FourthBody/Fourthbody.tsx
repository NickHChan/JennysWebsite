import React from 'react'
import styles from './Fourthbody.module.css'
import Image from 'next/image'

export default function Fourthbody() {
  return (
    <div className={styles.fourthbodyContainer}>
        <h4 className={styles.title}>Featured Dishes</h4>
        <article className={styles.imageContainer}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </article>
        <button className={styles.button}>View Menu</button>
    </div>
  )
}
