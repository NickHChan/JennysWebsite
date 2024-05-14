import React from 'react'
import styles from './page.module.css'
import NavbarTwo from '../components/SecondTemplate/NavbarTwo'
import FirstSection from '../components/SecondTemplate/FirstSection/FirstSection'

export default function TemplateTwo() {
  return (
    <div className={styles.templateTwoContainer}>
    <NavbarTwo/>
    <FirstSection/>  
      page
    </div>
  )
}

