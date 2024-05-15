'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import FirstArticle from '../components/ThirdTemplate/FirstArticle/FirstArticle'
import SecondArticle from '../components/ThirdTemplate/SecondArticle/SecondArticle'
import ThirdArticle from '../components/ThirdTemplate/ThirdArticle/ThirdArticle'
import FourthArticle from '../components/ThirdTemplate/FourthArticle/FourthArticle'
import FifthArticle from '../components/ThirdTemplate/FifthArticle/FifthArticle'
import SixthArticle from '../components/ThirdTemplate/SixthArticle/SixthArticle'
import ThirdTemplateFooter from '../components/ThirdTemplate/ThirdTemplateFooter/ThirdTemplateFooter'

export default function TemplateThree() {
  const [firstScrolledAmount, setFirstScrolledAmount] = useState<number>(11);
  const [secondScrolledAmount, setSecondScrolledAmount] = useState<number>(60);

  useEffect(()=>{
    const handleOnScroll = () => {
      let yPosition = Math.floor((window.scrollY)/50)
      setFirstScrolledAmount(11 - yPosition)
      setSecondScrolledAmount(60 - yPosition)
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
      <FifthArticle/>
      <SixthArticle/>
      <ThirdTemplateFooter/>
    </>
  )
}
