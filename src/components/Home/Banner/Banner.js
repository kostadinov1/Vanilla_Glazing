import React, { useEffect, useState } from 'react'
import { getCompanyInfo } from '../../../api/companyInfo'
import styles from './Banner.module.css'


const Banner = () => {

  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)})
    .catch()
  }, [])

  return (
    <div className={`${styles.banner}`}>
        <div className={`${styles.title}`}>Stil Komfort M13</div>
        <div className={`${styles.subtitle}`}>Доставка и Монтаж на Висококачествена Дограма </div>
        <div className={`${styles.pdiv}`}>
          <p>
            {companyInfo.description}
            </p>
            <hr/>
        </div>
    </div>
  )
}

export default Banner
