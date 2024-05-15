import React from 'react'
import styles from './SixthArticle.module.css'
import Image from 'next/image'
import instaSvg from '../../../../../images/instaSVG.svg'
import fbSvg from '../../../../../images/fbSVG.svg'
import yelpSvg from '../../../../../images/yelpSVG.svg'

export default function SixthArticle() {
  return (
    <div className={styles.sixthArticleContainer}>
        <div className={styles.leftPillar}></div>
        <div className={styles.middlePillar}>
            <div className={styles.addressContainer}>
                <h5>
                    Some Location
                    <br/>
                    Some Phone Number
                    <br/>
                    Some Email
                    <br/>
                </h5>
                <div className={styles.socialsContainer}>
                    <Image
                    src={instaSvg}
                    alt='SVG of the Instagram logo'
                    height={50}
                    />
                    <Image
                    src={yelpSvg}
                    alt='SVG of the Yelp logo'
                    height={50}
                    />
                    <Image
                    src={fbSvg}
                    alt='SVG of the Facebook logo'
                    height={50}
                    />
                </div>
            </div>
            <div className={styles.hoursContainer}>
                <h5>
                    Monday - Thursday: 9:00AM - 9:00PM
                    <br/>
                    Friday - Sunday: 12:00PM - 10:00PM
                </h5>
            </div>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
