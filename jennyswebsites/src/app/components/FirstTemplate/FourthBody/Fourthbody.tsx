import React from 'react'
import styles from './Fourthbody.module.css'
import Image from 'next/image'
import foodImage1 from '../../../../../images/pad-thai-in-a-white-plate-with-lemon-eggs-and-sea-2023-11-27-05-06-17-utc.jpg'
import foodImage2 from '../../../../../images/seafood-on-dinner-table-2023-11-27-04-56-23-utc.jpg'
import foodImage3 from '../../../../../images/top-view-of-delicious-spicy-thai-noodles-with-shri-2023-11-27-05-26-56-utc.jpg'

export default function Fourthbody() {
  return (
    <div className={styles.fourthbodyContainer}>
        <h4 className={styles.title}>Featured Dishes</h4>
        <article className={styles.imageContainer}>
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
        </article>
        <button className={styles.button}>View Menu</button>
    </div>
  )
}
