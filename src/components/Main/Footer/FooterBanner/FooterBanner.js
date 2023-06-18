import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterBanner.module.css'
import { useTranslation } from 'react-i18next'

const FooterBanner = ({companyInfo}) => {
      const { t } = useTranslation();

  return (
    <div className={`${styles.footer_banner}`}>
        <div className={`${styles.title}`}>DogramaVarna.net &reg; created 2022</div>
        <div className={`${styles.title}`}>Made by  <a href='https://www.gencho.pro'>Me</a>&reg;</div>
          <hr/>
        <div className={`${styles.pdiv}`}>
          Where Can You Find Us?
        </div>
        <div className={`${styles.subtitle}`}>{t('address')}: {companyInfo.address} </div>
        <Link to={'/contacts'}>{t('contacts')}</Link>
    </div>
  )
}

export default FooterBanner
