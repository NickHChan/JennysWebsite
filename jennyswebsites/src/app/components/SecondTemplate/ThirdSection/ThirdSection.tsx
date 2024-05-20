'use client'
import React, {useState, useEffect} from 'react'
import styles from './ThirdSection.module.css'
import Image from 'next/image'
import thaiStickImg from '../../../../../images/thai-sticks.jpg'
import redCurryImg from '../../../../../images/red-curry.jpg'
import riceNoodleImg from '../../../../../images//rice-noodles.jpg'
import { reviews } from './reviews'
import Stars from './Stars'

export default function ThirdSection() {

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [secondCurrentIndex, setSecondCurrentIndex] = useState<number>(3)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if( currentIndex <= 4){
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0);
      }
    },5000)

    return(()=>{
      clearTimeout(timer)
    })
  })

  useEffect(()=>{
    const secondTimer = setTimeout(()=>{
      if( secondCurrentIndex <= 4){
        setSecondCurrentIndex(secondCurrentIndex + 1)
      } else {
        setSecondCurrentIndex(0);
      }
    },5000)

    return(()=>{
      clearTimeout(secondTimer)
    })
  })

  return (
    <div className={styles.thirdSectionContainer}>
        <div className={styles.reviewSection1}>
          <div className={styles.reviewContainer}>
            <Stars/>
            <h4>{reviews[currentIndex].name}</h4>
            <p>{reviews[currentIndex].review}</p>
          </div>
            <Image
            src={redCurryImg}
            alt='Picture of red curry'
            width={1000}
            height={500}
            />
        </div>
        <div className={styles.reviewSection2}>
            <Image
              src={thaiStickImg}
              alt='Picture of red curry'
              width={700}
              height={500}
            />
            <div className={styles.reviewContainer2}>
              <Stars/>
              <h4>{reviews[secondCurrentIndex].name}</h4>
              <p>{reviews[secondCurrentIndex].review}</p>
            </div>
            <Image
              src={riceNoodleImg}
              alt='Picture of red curry'
              width={700}
              height={500}
            />
        </div>
    </div>
  )
}
