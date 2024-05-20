import React from 'react'
import styles from './Stars.module.css'
import Image from 'next/image'
import starImg from '../../../../../images/starSVG.svg'

export default function Stars() {
  return (
    <div className={styles.starContainer}>
        <Image
        src={starImg}
        alt='Img of a star'
        height={50}
        />
        <Image
        src={starImg}
        alt='Img of a star'
        height={50}
        />
        <Image
        src={starImg}
        alt='Img of a star'
        height={50}
        />
        <Image
        src={starImg}
        alt='Img of a star'
        height={50}
        />
        <Image
        src={starImg}
        alt='Img of a star'
        height={50}
        />
    </div>
  )
}
