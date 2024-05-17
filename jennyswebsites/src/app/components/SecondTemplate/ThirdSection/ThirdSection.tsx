'use client'
import React, {useState, useEffect} from 'react'
import styles from './ThirdSection.module.css'
import Image from 'next/image'
import thaiStickImg from '../../../../../images/thai-sticks.jpg'
import redCurryImg from '../../../../../images/red-curry.jpg'
import riceNoodleImg from '../../../../../images//rice-noodles.jpg'
import { reviews } from './reviews'

export default function ThirdSection() {

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if( currentIndex <= 5){
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0);
      }
    },5000)

    return(()=>{
      clearTimeout(timer)
    })
  })

  return (
    <div className={styles.thirdSectionContainer}>
        <div className={styles.reviewSection1}>
          <div className={styles.reviewContainer}>
            <h4>{reviews[currentIndex].name}</h4>
            <p>{reviews[currentIndex].review}</p>
          </div>
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
