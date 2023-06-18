import styles from './Workflow.module.css'
import React from 'react'
import FancyCard from '../../Common/FancyCard/FancyCard'

import { useTranslation } from 'react-i18next'
function Workflow() {

      const { t } = useTranslation();

  return (
    <div className={`${styles.workflow}`}>
      <div className={` ${styles.img} ${styles.img_1}`}>
            <img src='/images/placeholders/measuring-01.jpg' alt=''></img>
            <div className={`${styles.img_description}`}>
            <h2 className='section_title'>{t('h1')}</h2>
            <p>{t('p1')}</p>
            </div>
      </div>
      <div className={` ${styles.img} ${styles.img_2} `}>
            <img src='/images/placeholders/measuring-02.jpg' alt=''></img>
            <div className={`${styles.img_description}`}>
            <h2 className='section_title'>{t('h2')}</h2>
            <p>{t('p2')}</p>
            </div>
      </div>
      <div className={` ${styles.img} ${styles.img_3}`}>
            <img src='/images/placeholders/production.jpg' alt=''></img>
            <div className={`${styles.img_description}`}>
            <h2 className='section_title'>{t('h3')}</h2>
            <p>{t('p3')}</p>
            </div>
      </div>
      <div className={` ${styles.img} ${styles.img_4}`}>
            <div className={`${styles.img_description} ${styles.offers}`}>
            <h2 className={`${styles.offers_title} section_title`}>{t('whatWeOffer')}</h2>
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
