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
                    <HomeFilled/> Начало
                </NavLink>
                <NavLink to={'/projects'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ScheduleFilled/> Проекти
                </NavLink>
                <NavLink to={'/products'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ShopFilled/> Продукти
                </NavLink>
                <NavLink to={'/services'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <ToolFilled/> Услуги
                </NavLink>
                <NavLink to={'/contacts'} 
                    activeClassName={'active'} 
                    className={styles.link}>
                    <PhoneFilled/> Контакти
                </NavLink>
            </nav>        
        </div>
    )
    }

export default Header
