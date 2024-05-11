import React from 'react'
import styles from './Thirdbody.module.css'
import Image from 'next/image'
import familyPic from '../../../../../images/woman-bringing-dish-to-table-2023-11-27-04-51-42-utc.jpg'

function Thirdbody() {
  return (
    <div className={styles.thirdbodyContainer}>
            <section className={styles.thirdbodyText}>
                <p className={styles.textTitle}>Our Story</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus aliquet purus, eget pulvinar mauris laoreet faucibus. 
                    Aenean ut ante nulla. Praesent lectus elit, viverra at orci et, vulputate tempus diam. Cras nisl libero, cursus ac hendrerit nec, 
                    varius nec dolor. Duis dictum tortor sed consequat viverra. In et sem quis mi consectetur scelerisque. Maecenas aliquam, ligula sed 
                    gravida finibus, ex quam suscipit orci, at vehicula tellus erat ut tellus. In eget diam quis arcu semper facilisis. Duis imperdiet euismod 
                    orci vel iaculis. In pulvinar gravida nulla id lacinia. Nulla facilisi. </p>
            </section>
            <Image 
            src={familyPic}
            alt= 'family eating thai food'
            height={400}
            width={600}
            className={styles.thirdbodyImage}
            />
    </div>
  )
}

export default Thirdbody