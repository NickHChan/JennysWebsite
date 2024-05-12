import React from 'react'
import styles from './Fourthbody.module.css'
import Image from 'next/image'
import foodImage1 from '../../../../../images/pad-thai-in-a-white-plate-with-lemon-eggs-and-sea-2023-11-27-05-06-17-utc.jpg'
import foodImage2 from '../../../../../images/seafood-on-dinner-table-2023-11-27-04-56-23-utc.jpg'
import foodImage3 from '../../../../../images/top-view-of-delicious-spicy-thai-noodles-with-shri-2023-11-27-05-26-56-utc.jpg'
import backArrowImg from '../../../../../images/arrowBack.png'
import frontArrowImg from '../../../../../images/arrowFront.svg'

export default function Fourthbody() {
  return (
    <div className={styles.fourthbodyContainer}>
        <h4 className={styles.title}>Featured Dishes</h4>
        <article className={styles.imageContainer}>
          <button className={styles.arrowButton}>
              <Image
                src={backArrowImg}
                alt='backArrow'
                height={50}
                width={50}
              />
          </button>
          <Image
                src={foodImage1}
                alt='pad thai in white plate'
                height={300}
                width={300}
                quality={90}
          />
          <Image
                src={foodImage2}
                alt='seafood on dinner table'
                height={300}
                width={300}
                quality={90}
          />
          <Image
                src={foodImage3}
                alt='spicy thai noodles'
                height={300}
                width={300}
                quality={90}
          />
          <button className={styles.arrowButton}>
              <Image
                src={frontArrowImg}
                alt='frontArrow'
                height={50}
                width={50}
              />
          </button>
        </article>
        <button className={styles.button}>View Menu</button>
    </div>
  )
}
