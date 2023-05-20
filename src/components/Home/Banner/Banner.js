import React from 'react'
import styles from './Banner.module.css'


const Banner = () => {
  
  return (
    <div className={`${styles.banner}`}>
        <div className={`${styles.title}`}>Stil Komfort M13</div>
        <div className={`${styles.subtitle}`}>Доставка и Монтаж на Висококачествена Дограма </div>
        <div className={`${styles.pdiv}`}>
          <p>
                Stil Komfort M13  
            </p>
            <hr/>
        </div>
    </div>
  )
}

export default Banner
