import React, { useEffect, useState } from 'react'
import { getCompanyInfo } from '../../../api/companyInfo'
import styles from './Banner.module.css'
import { useTranslation } from 'react-i18next'


const Banner = () => {

  const {t} = useTranslation()
  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)})
    .catch()
  }, [])

  return (
    <div className={`${styles.banner}`}>
        <div className={`${styles.subtitle}`}>{t('companyMoto')} </div>
        <div className={`${styles.title_box}`}>
            <div className={styles.logo}>
                <img src='/logo/dogramaLogoOnly.png'  alt='' className={styles.logo_image} />
            </div>
            <div className={`${styles.title}`}>Stil Komfort M13</div>
        </div>
        <div className={`${styles.pdiv}`}>
          	<p>{t('companyDescription')}</p>
            <hr/>
        </div>
    </div>
  )
}

export default Banner
