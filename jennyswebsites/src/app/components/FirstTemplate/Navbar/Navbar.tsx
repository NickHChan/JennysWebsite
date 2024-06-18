'use client'
import React, {use, useState} from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import logoSvg from '../../../../../images/SEN-MEE-Logo-Light-Mode.png'
import thaiLogoSvg from '../../../../../images/SEN-MEE-Thai-Logo-Light-Mode.png'

function Navbar() {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div className={styles.navContainer}>
      <div className={styles.Container}>
          <Image
          src={ isHovered ? logoSvg : thaiLogoSvg}
          alt='Logo for resturant'
          height={120}
          width={120}
          onMouseEnter={ () =>{ setIsHovered(true); console.log(isHovered)}}
          onMouseLeave={() =>{ setIsHovered(false); console.log(isHovered)}}
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