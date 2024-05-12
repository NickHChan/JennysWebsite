import React from 'react'
import styles from './Fifthbody.module.css'
import Image from 'next/image'
import gpsImg from '../../../../../images/gps.png'
import locationImg from '../../../../../images/location.svg'
import phoneImg from '../../../../../images/phone.svg'
import emailImg from '../../../../../images/email.svg'
import clockImg from '../../../../../images/clock.svg'

export default function Fifthbody() {
  return (
    <div className={styles.fifthbodyContainer}>
      <Image
      src={gpsImg}
      alt='picture of resturant location on google maps'
      height={500}
      />
      <section>
        <h5 className={styles.title}>Jenny Thai Restaurant</h5>
        <article className={styles.info}>
          <Image
          src={locationImg}
          alt='Location SVG'
          />
          <p>Some Address</p>
        </article>
        <article className={styles.info}>
        <Image
          src={phoneImg}
          alt='Location SVG'
          />
          <p>Some Phone#</p>
        </article>
        <article className={styles.info}>
        <Image
          src={emailImg}
          alt='Location SVG'
          />
          <p>Some Email</p>
        </article>
        <article className={styles.info}>
        <Image
          src={clockImg}
          alt='Location SVG'
          />
          <p>Hours of Operation:
            <br/>
            Mon - Sun 10:00 Am - 9:00 Pm
          </p>
        </article>
      </section>
    </div>
  )
}
