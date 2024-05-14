import React from 'react'
import styles from './SecondArticle.module.css'
import Image from 'next/image'
import foodImg from '../../../../../images/woman-bringing-dish-to-table-2023-11-27-04-51-42-utc.jpg'

export default function SecondArticle() {
  return (
    <div className={styles.secondArticleContainer}>
      <div className={styles.leftPillar}></div>
      <div className={styles.secondArticleTextContainer}>
        <h3 className={styles.secondArticleText}>
          Inspired by traditional flavors,
          <br/>
          Jenny&apos;s Thai Food offers a fresh,
          <br/>
          creative and flavorful
          <br/>
          interpretation of Thai cruisine.
        </h3>
        <button className={styles.button}>See Menu</button>
        <Image
        src={foodImg}
        alt='woman bringing thai food to the table'
        height={300}
        width={450}
        />
      </div>
      <div className={styles.rightPillar}></div>
    </div>
  )
}
