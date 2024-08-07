'use client'
import React, {useState, useEffect, useRef, useContext} from 'react'
import styles from './ThirdArticle.module.css'
import Image from 'next/image'
import foodPics from './foodPics'


export default function ThirdArticle() {
    const [index, setIndex] = useState<number>(0);


    useEffect(()=>{
        const timer = setInterval(()=>{
            
            if(index <= 10){
                setIndex(index + 1);
            } else{
                setIndex(0)
            }
        }, 5000)
        console.log(index)

        return(()=>{
            clearInterval(timer)
        })

    })
  return (
    <div className={styles.thirdArticleContainer}>
        <div className={styles.leftPillar}></div>
        <div className={styles.centerPillar}>
            <div className={styles.centerPillarImageContainer}>
                <Image
                src={foodPics[index].picture}
                alt='Top view of a bunch of food served at the resturant'
                height={600}
                width={800}
                className={styles.pictures}
                quality={90}
                />
            </div>

            <div className={styles.centerPillarTextContainer}>
                <h3 className={styles.secondArticleText}>
                    Our mission is to provide delicious quality food at an affordable price, in a fast casual dining experience.
                    <br/>
                    <br/>
                    Wowing your taste buds with salty, sweet, and spicy sour all in one bite. 
                    <br/>
                    Utilizing our authentic flavors from Southeast Asia, we aim to provide seasonal ingredients, imported herbs, and spices throughout our rotating menu.
                </h3>
            </div>
        </div>
        <div className={styles.rightPillar}></div>
    </div>
  )
}
