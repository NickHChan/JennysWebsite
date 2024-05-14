'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import FirstArticle from '../components/ThirdTemplate/FirstArticle/FirstArticle'
import SecondArticle from '../components/ThirdTemplate/FirstArticle/SecondArticle/SecondArticle'

export default function TemplateThree() {
  const [scrolledAmount, setScrolledAmount] = useState<number>();

  useEffect(()=>{
    const handleOnScroll = () => {
      let yPosition = Math.floor((window.scrollY)/50)
      setScrolledAmount(45 - yPosition)
    }
    window.addEventListener('scroll', handleOnScroll, {passive: true})
    return(()=>{
      window.removeEventListener('scroll', handleOnScroll)
    })
  },[setScrolledAmount, scrolledAmount])

  return (
    <>
      <div className={styles.firstHalfContainer}>
      <FirstArticle/>  
      </div>
      <div style={{height: `${scrolledAmount}rem`}}></div>
      <SecondArticle/>
    </>
  )
}
