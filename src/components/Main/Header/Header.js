import styles from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { HomeFilled, PhoneFilled, ScheduleFilled, ShopFilled, ToolFilled } from '@ant-design/icons';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'

import { useTranslation } from 'react-i18next'
 
  
function Header() {
    const { t } = useTranslation();

    return (
        
        <div className={`${styles.header}`}>
            <div className={styles.logo}>
                <Link to={'/'}>
                    <img src='/logo/dogramaLogoOnly.png'  alt='' className={styles.logo_image} />
                </Link>
            </div>
            <nav className={styles.ul}>
                <NavLink to={'/'} 
                    activeClassName={'active'} 
                    className={styles.link}> 
                    <HomeFilled className={`${styles.icon}`}/> {t('home')}
                </NavLink>
                <NavLink to={'/projects'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ScheduleFilled className={`${styles.icon}`}/> {t('projects')}
                </NavLink>
                <NavLink to={'/products'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ShopFilled className={`${styles.icon}`}/> {t('products')}
                </NavLink>
                <NavLink to={'/services'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ToolFilled className={`${styles.icon}`}/> {t('services')}

                </NavLink>
                <NavLink to={'/contacts'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <PhoneFilled className={`${styles.icon}`}/> {t('contacts')}
                </NavLink>
            </nav>    
            <LanguageSwitcher></LanguageSwitcher>
        </div>
    )
    }

export default Header
