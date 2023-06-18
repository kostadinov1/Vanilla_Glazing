import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import FooterBanner from './FooterBanner/FooterBanner'

import { useTranslation } from 'react-i18next'
import { getCompanyInfo } from '../../../api/companyInfo'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'

function Footer() {

      const { t } = useTranslation();
      const [companyInfo, setCompanyInfo] = useState({})
      useEffect(() => {
        getCompanyInfo()
        .then((res) => { 
          setCompanyInfo(res)})
        .catch()
      }, [])

  return (
    <section className={styles.footer}>
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/`}>{t('home')}</Link></li>
            <li className={styles.li}><Link to={`/projects`}>{t('projects')}</Link></li>
            <li className={styles.li}><Link to={'/products'}>{t('products')}</Link></li>
            <li className={styles.li}><Link to={'/contacts'}> {t('contacts')}</Link></li>
            <LanguageSwitcher></LanguageSwitcher>
        </ul>
  
        <ul className={`${styles.ul} ${styles.useful_links}`} type='list'>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
        </ul>

        <FooterBanner companyInfo={companyInfo}></FooterBanner>
    </section>
  )
}

export default Footer
