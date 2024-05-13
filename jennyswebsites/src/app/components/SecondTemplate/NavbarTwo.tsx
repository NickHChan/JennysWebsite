import React from 'react'
import styles from './NavbarTwo.module.css'
import Image from 'next/image'
import menuSvg from '../../../../images/menubar.svg'
import closeSvg from '../../../../images/close.svg'
import logoSvg from '../../../../images/logo.png'
import { log } from 'console'

export default function NavbarTwo() {
  return (
    <div className={styles.navbarTwoContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.logoContainer}>
          <Image
          src={logoSvg}
          alt='Resturants Logo'
          height={120}
          width={120}
          />
          <p className={styles.logoText}>Authentic Thai Kitchen</p>
        </div>

        <button className={styles.menuSvg}></button>
      </div>
    </div>
  )
}
