import React from 'react'
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.Container}>
          <div className={styles.logo}>
              Logo
          </div>
          <div className={styles.optionsContainer}>
              <div>Home</div>
              <div>About</div>
              <div>Menu</div>
              <div>Contact</div>
          </div>
      </div>
    </div>
  )
}

export default Navbar