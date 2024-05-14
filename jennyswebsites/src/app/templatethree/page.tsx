'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import FirstArticle from '../components/ThirdTemplate/FirstArticle/FirstArticle'
import SecondArticle from '../components/ThirdTemplate/FirstArticle/SecondArticle/SecondArticle'

export default function TemplateThree() {
  const [scrolledAmount, setScrolledAmount] = useState<number>(35);

  useEffect(()=>{
    const handleOnScroll = () => {
      let yPosition = Math.floor((window.scrollY)/50)
      setScrolledAmount(35 - yPosition)
    }
    window.addEventListener('scroll', handleOnScroll, {passive: true})
    return(()=>{
      window.removeEventListener('scroll', handleOnScroll)
    })
  },[setScrolledAmount, scrolledAmount])

  useEffect(()=>{
    window.onbeforeunload = function(){
      window.scrollTo(0, 0);
    }

  },[])

  return (
    <>
      <div className={styles.firstHalfContainer}>
      </div>
      <div style={{height: `${scrolledAmount}rem`}}></div>
      <FirstArticle/>  
      <SecondArticle/>
    </>
  )
}
