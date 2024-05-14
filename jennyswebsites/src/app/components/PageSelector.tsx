'use client'
import React from 'react'
import { useState } from 'react'
import styles from './PageSelector.module.css'
import Link from 'next/link'

export default function PageSelector() {

const [isFirstLinkActive, setIsFirstLinkActive] = useState<boolean>(true);
const [isSecondLinkActive, setIsSecondLinkActive] = useState<boolean>(false);
const [isThirdLinkActive, setIsThirdLinkActive] = useState<boolean>(false);

const handleOnClick = (e:any) => {
  e.preventDefault();
  setIsFirstLinkActive(false)
  setIsSecondLinkActive(false)
  setIsThirdLinkActive(false)
  if(e.target.innerText === "1"){
    setIsFirstLinkActive(true)
  } else if (e.target.innerText === "2"){
    setIsSecondLinkActive(true)
  } else{
    setIsThirdLinkActive(true)
  }
}

  return (
    <div className={styles.selectorContainer}>
        <div className={ isFirstLinkActive ? styles.activeButton :styles.button} onClick={handleOnClick}> <Link href="/" className={styles.link}>1</Link></div>
        <div className={ isSecondLinkActive ? styles.activeButton :styles.button} onClick={handleOnClick}> <Link href="/templatetwo" className={styles.link}>2</Link></div>
        <div className={ isThirdLinkActive ? styles.activeButton :styles.button} onClick={handleOnClick}> <Link href="/templatethree" className={styles.link}>3</Link></div>
    </div>
  )
}
