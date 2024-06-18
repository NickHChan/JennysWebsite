'use client'
import React, {useContext, useState} from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logoSvg from '../../../../../images/SEN-MEE-Logo-Light-Mode.png'
import thaiLogoSvg from '../../../../../images/SEN-MEE-Thai-Logo-Light-Mode.png'
import { ScrollContext } from '@/app/helper/scrollToContext'

function Navbar() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const {scrolltoContact, scrolltoTop} = useContext(ScrollContext)

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
          onClick={scrolltoTop}
          />
          <div className={styles.optionsContainer}>
              <div className={styles.options} onClick={scrolltoTop}>Home</div>
              <div className={styles.options}>About</div>
              <div className={styles.options}>Menu</div>
              <div className={styles.options}>Gallery</div>
              <div className={styles.options} onClick={scrolltoContact}>Contact</div>
          </div>
      </div>
    </div>
  )
}

export default Navbar