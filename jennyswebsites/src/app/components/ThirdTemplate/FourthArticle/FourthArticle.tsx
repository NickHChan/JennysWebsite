import React from 'react'
import styles from './FourthArticle.module.css'
import Image from 'next/image'
import bookingImg from '../../../../../images/bookingImg.png'
import foodImg from '../../../../../images/seafood-on-dinner-table-2023-11-27-04-56-23-utc.jpg'
import gpsImg from '../../../../../images/gps.png'
import locationImg from '../../../../../images/location.svg'
import phoneImg from '../../../../../images/phone.svg'
import emailImg from '../../../../../images/email.svg'
import clockImg from '../../../../../images/clock.svg'

export default function FourthArticle() {
  return (
    <div className={styles.fourthArticleContainer}>
        <div className={styles.leftPillar}></div>
        <div className={styles.middlePillar}>
          <div className={styles.calender}>
            <Image
            src={gpsImg}
            alt='Picture of yelp booking calender'
            height={400}
            />
          </div>
          <div className={styles.imgContainer}>
          <section>
        <article className={styles.info}>
          <Image
          src={locationImg}
          alt='Location SVG'
          />
          <p>Some Address</p>
        </article>
        <article className={styles.info}>
        <Image
          src={phoneImg}
          alt='Location SVG'
          />
          <p>Some Phone#</p>
        </article>
        <article className={styles.info}>
        <Image
          src={emailImg}
          alt='Location SVG'
          />
          <p>Some Email</p>
        </article>
      </section>
          </div>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
