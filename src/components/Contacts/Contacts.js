
import React, { useEffect, useState } from 'react'
import styles from './Contacts.module.css'
import { getCompanyInfo } from '../../api/companyInfo'
import SimpleMap from './Map'
import { useTranslation } from 'react-i18next'


function Contacts() {
    const { t } = useTranslation();

  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)})
    .catch()
  }, [])

  return (
    <>
        <div className={`${styles.contacts}`}>
            <div className={`${styles.banner}`}>
                <div className={`${styles.left_card}`}>
                    <img src={'./images/placeholders/contacts.jpg'} alt='' />
                </div>
                <div className={`${styles.right_card}`}>
                    <h2 className={`${styles.title} section_title`}>{t('contacts')}</h2>
                    <div className={`${styles.info}`}>
                        <p>{t('address')}: {companyInfo.address}</p>
                        <p>{t('email')}: {companyInfo.email}</p>
                        <p>{t('phone')}: {companyInfo.phone}</p>
                    </div>
			          </div>
            </div>
            <SimpleMap ></SimpleMap>
        </div>
    </>
  )
}

export default Contacts
