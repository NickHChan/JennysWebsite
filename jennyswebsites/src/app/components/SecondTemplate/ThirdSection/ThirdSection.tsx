import React from 'react'
import styles from './ThirdSection.module.css'
import Image from 'next/image'
import thaiStickImg from '../../../../../images/thai-sticks.jpg'
import redCurryImg from '../../../../../images/red-curry.jpg'
import riceNoodleImg from '../../../../../images//rice-noodles.jpg'

export default function ThirdSection() {
  return (
    <div className={styles.thirdSectionContainer}>
        <div className={styles.reviewSection1}>
            <p>review</p>
            <Image
            src={redCurryImg}
            alt='Picture of red curry'
            width={1000}
            />
        </div>
        <div className={styles.reviewSection2}></div>
    </div>
  )
}
