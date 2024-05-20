import React from 'react'
import styles from './SecondSection.module.css'
import Image from 'next/image'
import foodImg from '../../../../../images/Gallery-6.png'

export default function SecondSection() {
  return (
    <div className={styles.secondSectionContainer}>
        <Image
        src={foodImg}
        alt='Picture of the menu'
        height={1000}
        priority
        className={styles.foodImage}
        />
    </div>
  )
}
