import React from 'react'
import styles from './FourthSection.module.css'

export default function FourthSection() {
  return (
    <div className={styles.fourthSectionContainer}>
      <h5 className={styles.title}>Locations</h5>
      <p className={styles.underscore}>___________________</p>
      <div className={styles.locationContainer}>
        <div className={styles.location1}>
          <p className={styles.locationName}>North Carolina</p>
          <button className={styles.button}>Order Online</button>
          <button  className={styles.button}>View Menu</button>
        </div>
        <div className={styles.location2}>
          <p className={styles.locationName}>Las Vegas</p>
          <button className={styles.button}>Order Online</button>
          <button  className={styles.button}>View Menu</button>
        </div>
        <div className={styles.location3}>
          <p className={styles.locationName}>Toronto</p>
          <button className={styles.button}>Order Online</button>
          <button  className={styles.button}>View Menu</button>
        </div>
      </div>
    </div>
  )
}
