import styles from './Workflow.module.css'
import React from 'react'
import FancyCard from '../../Common/FancyCard/FancyCard'
import { useTranslation } from 'react-i18next'


function Workflow() {
      
      const { t } = useTranslation();
      
      const offerCards = [
            {title: `${t('c1')}`, description: `${t('cd1')}`},
            {title: `${t('c2')}`, description: `${t('cd2')}`},
            {title: `${t('c3')}`, description: `${t('cd3')}`},
            {title: `${t('c4')}`, description: `${t('cd4')}`},
            {title: `${t('c5')}`, description: `${t('cd5')}`},

      ]

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
                  {offerCards.map((card) => <FancyCard card={card}/>)}
                </div>
            </div>
      </div>
    </div>
  )
}

export default Workflow
