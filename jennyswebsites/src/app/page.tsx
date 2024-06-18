'use client'
import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import TemplateOneNav from './components/FirstTemplate/Navbar/Navbar'
import FirstArticle from './components/ThirdTemplate/FirstArticle/FirstArticle'
import SecondArticle from './components/ThirdTemplate/SecondArticle/SecondArticle'
import ThirdArticle from './components/ThirdTemplate/ThirdArticle/ThirdArticle'
import FourthArticle from './components/ThirdTemplate/FourthArticle/FourthArticle'
import FifthArticle from './components/ThirdTemplate/FifthArticle/FifthArticle'
import SixthArticle from './components/ThirdTemplate/SixthArticle/SixthArticle'
import ThirdTemplateFooter from './components/ThirdTemplate/ThirdTemplateFooter/ThirdTemplateFooter'
import { ScrollContext } from './helper/scrollToContext'

export default function TemplateThree() {
  const [firstScrolledAmount, setFirstScrolledAmount] = useState<number>(11);
  const [secondScrolledAmount, setSecondScrolledAmount] = useState<number>(60);
  const {contactRef, topRef} = useContext(ScrollContext);

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
      <TemplateOneNav/>
      <div ref={topRef} className={styles.firstImage}></div>
      <div style={{height: `${firstScrolledAmount}rem`}}></div>
      <FirstArticle/>  
      <SecondArticle/>
      <ThirdArticle/>
      <div className={styles.secondImage}></div>
      <div style={{height: `${secondScrolledAmount}rem`}}></div>
      <FourthArticle/>
      <SixthArticle/>
      <section ref={contactRef}></section>
      <ThirdTemplateFooter/>
    </>
  )
}
