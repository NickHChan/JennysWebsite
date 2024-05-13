import React from 'react'
import styles from './NavbarTwo.module.css'
import Image from 'next/image'
import menuSvg from '../../../../images/menubar.svg'
import closeSvg from '../../../../images/close.svg'

export default function NavbarTwo() {
  return (
    <div className={styles.navbarTwoContainer}>
      <div className={styles.infoContainer}>
        <div>
          <p>1</p>
          <p>Authentic Thai Kitchen</p>
        </div>

        <button className={styles.menuSvg}></button>
      </div>
    </div>
  )
}
