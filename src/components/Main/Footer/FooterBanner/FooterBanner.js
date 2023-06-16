import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterBanner.module.css'


const FooterBanner = ({companyInfo}) => {
  
  return (
    <div className={`${styles.footer_banner}`}>
        <div className={`${styles.title}`}>DogramaVarna.net &reg; created 2022</div>
        <div className={`${styles.title}`}>Made by  <a href='https://www.gencho.pro'>Me</a>&reg;</div>
          <hr/>
        <div className={`${styles.subtitle}`}>Address: Varna, Vladislav Varnenchik 101</div>
        <div className={`${styles.pdiv}`}>
          Where Can You Find Us?
        </div>
        <Link to={'/contacts'}>Go to Contacts</Link>
    </div>
  )
}

export default FooterBanner
