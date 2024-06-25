import React from 'react'
import styles from './SecondArticle.module.css'
import Image from 'next/image'
import foodImg from '../../../../../images/SEN-MEE-Thai-Logo-Dark-Mode.png'

export default function SecondArticle() {
  return (
    <div className={styles.secondArticleContainer}>
      <div className={styles.leftPillar}></div>
      <div className={styles.secondArticleTextContainer}>
        <button className={styles.button}>See Menu</button>
        <button className={styles.button}>Order Online</button>
        <Image
        src={foodImg}
        alt='woman bringing thai food to the table'
        height={300}
        width={300}
        />
      </div>
      <div className={styles.rightPillar}></div>
    </div>
  )
}
