import styles from './Workflow.module.css'
import React from 'react'
import FancyCard from '../../Common/FancyCard/FancyCard'

function Workflow

() {
  return (
    <div className={`${styles.workflow}`}>
      <div className={` ${styles.img} ${styles.img_1}`}>
            <img src='/images/placeholders/measuring-01.jpg' alt=''></img>
            <div className={`${styles.img_description}`}>
            <h2 className='section_title'>Оглед и Оценка</h2>
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                       irure dolor in reprehenderit in voluptate velit esse cillum 
                       dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                       cupidatat non proident, sunt in culpa qui officia deserunt 
                       mollit anim id est laborum.
            </p>
            </div>
      </div>
      <div className={` ${styles.img} ${styles.img_2} `}>
            <img src='/images/placeholders/measuring-02.jpg' alt=''></img>
            <div className={`${styles.img_description}`}>
            <h2 className='section_title'>Планиране и Подготовка</h2>
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                       irure dolor in reprehenderit in voluptate velit esse cillum 
                       dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                       cupidatat non proident, sunt in culpa qui officia deserunt 
                       mollit anim id est laborum.
            </p>
            </div>
      </div>
      <div className={` ${styles.img} ${styles.img_3}`}>
            <img src='/images/placeholders/production.jpg' alt=''></img>
            <div className={`${styles.img_description}`}>
            <h2 className='section_title'>Монтаж</h2>
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                       irure dolor in reprehenderit in voluptate velit esse cillum 
                       dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                       cupidatat non proident, sunt in culpa qui officia deserunt 
                       mollit anim id est laborum.
            </p>
            </div>
      </div>
      <div className={` ${styles.img} ${styles.img_4}`}>
            <div className={`${styles.img_description} ${styles.offers}`}>
            <h2 className={`${styles.offers_title} section_title`}>Какво Предлагаме</h2>
                <div className={`${styles.fancy_cards}`} >
                    <FancyCard></FancyCard>
                    <FancyCard></FancyCard>
                    <FancyCard></FancyCard>
                    <FancyCard></FancyCard>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Workflow
