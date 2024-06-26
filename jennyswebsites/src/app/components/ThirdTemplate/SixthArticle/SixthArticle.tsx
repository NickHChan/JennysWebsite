import React from 'react'
import styles from './SixthArticle.module.css'
import Image from 'next/image'
import instaSvg from '../../../../../images/instaSVG.svg'
import fbSvg from '../../../../../images/fbSVG.svg'
import yelpSvg from '../../../../../images/yelpSVG.svg'
import tiktokSvg from '../../../../../images/tiktokSVG.svg'

export default function SixthArticle() {
  return (
    <div className={styles.sixthArticleContainer}>
        <div className={styles.leftPillar}></div>
        <div className={styles.middlePillar}>
            <div className={styles.addressContainer}>
                <div className={styles.socialsContainer}>
                    <Image
                    src={instaSvg}
                    alt='SVG of the Instagram logo'
                    height={50}
                    className={styles.socialIcons}
                    />
                    <Image
                    src={yelpSvg}
                    alt='SVG of the Yelp logo'
                    height={50}
                    className={styles.socialIcons}
                    />
                    <Image
                    src={fbSvg}
                    alt='SVG of the Facebook logo'
                    height={50}
                    className={styles.socialIcons}
                    />
                    <Image
                    src={tiktokSvg}
                    alt='SVG of the Tiktok logo'
                    height={50}
                    className={styles.socialIcons}
                    />
                </div>
            </div>
            <div className={styles.hoursContainer}>
                <h5>
                    Hours of Operation
                    <br/>
                    11:00AM - 9:00PM; Monday - Sunday
                </h5>
                <h5 className={styles.additionalInfo}>
                     Additional Parking In The Rear
                </h5>
            </div>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
