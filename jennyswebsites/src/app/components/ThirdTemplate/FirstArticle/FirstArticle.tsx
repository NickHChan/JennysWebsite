import React from 'react'
import styles from './FirstArticle.module.css'
import Image from 'next/image'
import logoSvg from '../../../../../images/logo.png'
import menuSvg from '../../../../../images/menubar.svg'

export default function FirstArticle() {
  return (
    <div className={styles.firstArticle}>
        <article className={styles.firstArticleSecondContainer}>
          <h3 className={styles.slogan}>Plates of
            <br/>
            Explosive Flavors
            <br/>
          </h3>
          <p className={styles.subslogan}>Authentic Thai Cuisine</p>
        </article>
    </div>
  )
}

/*
          <button className={styles.buttons}>See Menu</button>
          <button className={styles.buttons}>Order Online</button>
*/