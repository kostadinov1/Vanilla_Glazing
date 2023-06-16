import styles from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { HomeFilled, PhoneFilled, ScheduleFilled, ShopFilled, ToolFilled } from '@ant-design/icons';


function Header() {
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
                    <HomeFilled className={`${styles.icon}`}/> Начало
                </NavLink>
                <NavLink to={'/projects'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ScheduleFilled className={`${styles.icon}`}/> Проекти
                </NavLink>
                <NavLink to={'/products'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ShopFilled className={`${styles.icon}`}/> Продукти
                </NavLink>
                <NavLink to={'/services'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ToolFilled className={`${styles.icon}`}/> Услуги
                </NavLink>
                <NavLink to={'/contacts'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <PhoneFilled className={`${styles.icon}`}/> Контакти
                </NavLink>
            </nav>        
        </div>
    )
    }

export default Header
