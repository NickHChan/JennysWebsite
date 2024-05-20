import React from 'react'
import styles from './FourthSection.module.css'

export default function FourthSection() {
  return (
    <div className={styles.fourthSectionContainer}>
      <h5 className={styles.title}>Locations</h5>
      <div className={styles.locationContainer}>
        <div className={styles.location1}>
          <p>North Carolina</p>
          <button className={styles.button}>Order Online</button>
          <button  className={styles.button}>View Menu</button>
        </div>
      </div>
    </div>
  )
}
