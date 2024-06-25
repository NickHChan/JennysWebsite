import React, {useContext} from 'react'
import styles from './SecondArticle.module.css'
import Image from 'next/image'
import logo from '../../../../../images/SEN-MEE-Thai-Logo-Dark-Mode.png'
import { ScrollContext } from '@/app/helper/scrollToContext'

export default function SecondArticle() {
  const {galleryRef} = useContext(ScrollContext);
  return (
    <div className={styles.secondArticleContainer}>
      <div className={styles.leftPillar}></div>
      <div className={styles.secondArticleTextContainer}>
        <button className={styles.button}>See Menu</button>
        <button className={styles.button}>Order Online</button>
        <Image
        src={logo}
        alt='Sen Mee Noodle Logo'
        height={300}
        width={300}
        ref={galleryRef}
        />
      </div>
      <div className={styles.rightPillar}></div>
    </div>
  )
}
