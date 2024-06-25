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
                <Image
                src={gpsImg}
                alt='Picture of yelp booking calender'
                height={400}
                />
            <section>
                <h4>Sen Mee Noodle House</h4>
                <article className={styles.info}>
                  <Image
                  src={locationImg}
                  alt='Location SVG'
                  />
                  <p>3718-B Central Ave. Charlotte, NC 28205</p>
                </article>
                <article className={styles.info}>
                <Image
                  src={phoneImg}
                  alt='Location SVG'
                  />
                  <p></p>
                </article>
                <article className={styles.info}>
                <Image
                  src={emailImg}
                  alt='Location SVG'
                  />
                  <p>Senmeenoodleclt@gmail.com</p>
                </article>
            </section>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
