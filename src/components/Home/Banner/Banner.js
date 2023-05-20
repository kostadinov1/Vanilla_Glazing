import React from 'react'
import styles from './Banner.module.css'


const Banner = () => {
  
  return (
    <div className={`${styles.banner}`}>
        <div className={`${styles.title}`}>Stil Komfort M13</div>
        <div className={`${styles.subtitle}`}>Доставка и Монтаж на Висококачествена Дограма </div>
        <div className={`${styles.pdiv}`}>
          <p>Stil Komfort M13 Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr/>
        </div>
    </div>
  )
}

export default Banner
