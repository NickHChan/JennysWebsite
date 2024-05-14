import React from 'react'
import styles from './FirstArticle.module.css'
import Image from 'next/image'
import logoSvg from '../../../../../images/logo.png'
import menuSvg from '../../../../../images/menubar.svg'

export default function FirstArticle() {
  return (
    <div className={styles.firstArticle}>
      <div className={styles.firstArticleContainer}>
        <article className={styles.logoContainer}>
          <Image
          src={logoSvg}
          alt='Picture of Resturant Logo'
          height={200}
          />
          <section className={styles.reservationContainer}>
            <h2 className={styles.reservationText}>Reservation</h2>
            <Image
            src={menuSvg}
            alt='Menu hamburger icon'
            height={30}
            className={styles.menuSvg}
            />
          </section>
        </article>
      </div>
        <article className={styles.firstArticleSecondContainer}>
          <h3 className={styles.slogan}>Plates of
            <br/>
            Explosive Flavors
            <br/>
          </h3>
          <p className={styles.subslogan}>Authentic Thai Cuisine</p>
          <button className={styles.buttons}>See Menu</button>
          <button className={styles.buttons}>Order Online</button>
        </article>
    </div>
  )
}
