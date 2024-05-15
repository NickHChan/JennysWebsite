import React from 'react'
import styles from './FifthArticle.module.css'
import Image from 'next/image'
import logoImg from '../../../../../images/logo.png'

export default function FifthArticle() {
  return (
    <div className={styles.fifthArticleContainer}>
        <div className={styles.leftPillar}></div>
        <div className={styles.middlePillar}>
            <Image
            src={logoImg}
            alt='Resturant Logo'
            height={200}
            />
            <h4 className={styles.logoText}>Authentic Thai Cuisine</h4>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
