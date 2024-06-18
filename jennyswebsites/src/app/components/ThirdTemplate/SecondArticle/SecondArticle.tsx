import React from 'react'
import styles from './SecondArticle.module.css'
import Image from 'next/image'
import foodImg from '../../../../../images/SEN-MEE-Thai-Logo-Dark-Mode.png'

export default function SecondArticle() {
  return (
    <div className={styles.secondArticleContainer}>
      <div className={styles.leftPillar}></div>
      <div className={styles.secondArticleTextContainer}>
        <h3 className={styles.secondArticleText}>
        Our mission is to provide delicious quality food at an affordable price, in a fast casual dining experience.
        <br/>
        Wowing your taste buds with salty, sweet, and spicy sour all in one bite. 
        <br/>
        Utilizing our authentic flavors from Southeast Asia, we aim to provide seasonal ingredients, imported herbs, and spices throughout our rotating menu.
        </h3>
        <button className={styles.button}>See Menu</button>
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
