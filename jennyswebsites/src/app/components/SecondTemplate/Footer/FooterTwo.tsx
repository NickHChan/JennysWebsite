import React from 'react'
import styles from './FooterTwo.module.css'
import Image from 'next/image'
import logoSvg from '../../../../../images/logo.png'
import yelpSvg from '../../../../../images/yelpSVG.svg'
import fbSvg from '../../../../../images/fbSVG.svg'
import instaSvg from '../../../../../images/instaSVG.svg'

export default function FooterTwo() {
  return (
    <div className={styles.footerTwoContainer}>
        <div className={styles.footerTwoImg}>
            <Image
            src={logoSvg}
            alt='Svg of resturant logo'
            height={250}
            />
        </div>
        <div className={styles.locationContainer}>
            <p className={styles.locationTitle}>Our Locations</p>
            <p className={styles.location}>8418 Park Rd Charlotte, NC 28210, USA</p>
            <p className={styles.location}>8418 Park Rd Charlotte, NC 28210, USA</p>
            <p className={styles.location}>8418 Park Rd Charlotte, NC 28210, USA</p>
        </div>
        <div className={styles.socialMediaContainer}>
            <p>Stay Conneceted</p>
            <div>
                <Image
                src={instaSvg}
                alt='Svg of Instagram logo'
                height={25}
                />
                <Image
                src={fbSvg}
                alt='Svg of Facebook logo'
                height={25}
                />
                <Image
                src={yelpSvg}
                alt='Svg of Yelo logo'
                height={25}
                />
            </div>
        </div>
    </div>
  )
}
