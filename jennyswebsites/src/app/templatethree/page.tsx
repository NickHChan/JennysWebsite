'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import FirstArticle from '../components/ThirdTemplate/FirstArticle/FirstArticle'
import SecondArticle from '../components/ThirdTemplate/SecondArticle/SecondArticle'
import ThirdArticle from '../components/ThirdTemplate/ThirdArticle/ThirdArticle'
import FourthArticle from '../components/ThirdTemplate/FourthArticle/FourthArticle'

export default function TemplateThree() {
  const [firstScrolledAmount, setFirstScrolledAmount] = useState<number>(14);
  const [secondScrolledAmount, setSecondScrolledAmount] = useState<number>(70);

  useEffect(()=>{
    const handleOnScroll = () => {
      let yPosition = Math.floor((window.scrollY)/50)
      setFirstScrolledAmount(14 - yPosition)
      setSecondScrolledAmount(70 - yPosition)
    }
    window.addEventListener('scroll', handleOnScroll, {passive: true})
    return(()=>{
      window.removeEventListener('scroll', handleOnScroll)
    })
  },[setFirstScrolledAmount, firstScrolledAmount])

  useEffect(()=>{
    window.onbeforeunload = function(){
      window.scrollTo(0, 0);
    }

  },[])

  return (
    <>
      <div className={styles.firstImage}></div>
      <div style={{height: `${firstScrolledAmount}rem`}}></div>
      <FirstArticle/>  
      <SecondArticle/>
      <ThirdArticle/>
      <div className={styles.secondImage}></div>
      <div style={{height: `${secondScrolledAmount}rem`}}></div>
      <FourthArticle/>
    </>
  )
}
