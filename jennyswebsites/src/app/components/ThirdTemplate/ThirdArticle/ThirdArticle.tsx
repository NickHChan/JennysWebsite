import React from 'react'
import styles from './ThirdArticle.module.css'
import Image from 'next/image'
import foodImg from '../../../../../images/top-view-of-delicious-spicy-thai-noodles-with-shri-2023-11-27-05-26-56-utc.jpg'

export default function ThirdArticle() {
  return (
    <div className={styles.thirdArticleContainer}>
        <div className={styles.leftPillar}></div>
        <div className={styles.centerPillar}>
            <div className={styles.centerPillarImageContainer}>
                <Image
                src={foodImg}
                alt='top view of spicy thai noodles'
                height={300}
                />
            </div>

            <div className={styles.centerPillarTextContainer}>
                <h3 className={styles.secondArticleText}>
                    Our mission is to provide delicious quality food at an affordable price, in a fast casual dining experience.
                    <br/>
                    Wowing your taste buds with salty, sweet, and spicy sour all in one bite. 
                    <br/>
                    Utilizing our authentic flavors from Southeast Asia, we aim to provide seasonal ingredients, imported herbs, and spices throughout our rotating menu.
                </h3>
            </div>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
