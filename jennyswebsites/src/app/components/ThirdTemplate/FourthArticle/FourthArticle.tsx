import React from 'react'
import styles from './FourthArticle.module.css'
import Image from 'next/image'
import bookingImg from '../../../../../images/bookingImg.png'
import foodImg from '../../../../../images/seafood-on-dinner-table-2023-11-27-04-56-23-utc.jpg'

export default function FourthArticle() {
  return (
    <div className={styles.fourthArticleContainer}>
        <div className={styles.leftPillar}></div>
        <div className={styles.middlePillar}>
          <div className={styles.calender}>
            <p>Book a Table</p>
            <Image
            src={bookingImg}
            alt='Picture of yelp booking calender'
            height={400}
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
            src={foodImg}
            alt='thai seafood'
            height={300}
            />
          </div>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
