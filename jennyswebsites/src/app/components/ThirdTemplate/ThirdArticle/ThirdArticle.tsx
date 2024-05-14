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
                <div>
                    <p className={styles.header}>
                        Your Perfect Destination
                        <br/>
                        for Any Occasion
                    </p>
                    <p className={styles.headerText}>
                        Jenny&apos;s Thai Food: authentic thai cuisine
                        <br/>
                        is your go-to spot for delicious and authentic
                        <br/>
                        Thai cuisine experience. Our chefs use only the
                        <br/>
                        freshest ingredients to craft an unforgettable
                        <br/>
                        journey of tanalizing Thai flavors
                    </p>
                    <button className={styles.button}>Order Online</button>
                </div>
            </div>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
