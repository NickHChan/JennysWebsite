import React from 'react'
import styles from './Firstbody.module.css'
function Firstbody() {
  return (
    <div className={styles.firstbodyContainer}>
        <div className={styles.textContainer}>
            <h1>Jenny&apos;s Thai Food</h1>
            <section className={styles.description}>
                <h2>Thai Inspired <br></br>Fusion Cuisine</h2>
            </section>
        </div>
    </div>
  )
}

export default Firstbody