import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import logoSvg from '../../../../../images/logo.png'

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.Container}>
          <Image
          src={logoSvg}
          alt='Logo for resturant'
          height={120}
          width={120}
          />
          <div className={styles.optionsContainer}>
              <div>Home</div>
              <div>About</div>
              <div>Menu</div>
              <div>Gallery</div>
              <div>Contact</div>
          </div>
      </div>
    </div>
  )
}

export default Navbar