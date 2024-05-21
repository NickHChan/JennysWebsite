import React from 'react'
import styles from './page.module.css'
import NavbarTwo from '../components/SecondTemplate/NavbarTwo'
import FirstSection from '../components/SecondTemplate/FirstSection/FirstSection'
import SecondSection from '../components/SecondTemplate/SecondSection/SecondSection'
import ThirdSection from '../components/SecondTemplate/ThirdSection/ThirdSection'
import FourthSection from '../components/SecondTemplate/FourthSection/FourthSection'
import FooterTwo from '../components/SecondTemplate/Footer/FooterTwo'

export default function TemplateTwo() {
  return (
    <div className={styles.templateTwoContainer}>
    <NavbarTwo/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FooterTwo/>  
    </div>
  )
}

