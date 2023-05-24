import styles from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div className={`${styles.header}`}>
        <div className={styles.logo}>
            <Link to={'/'}>
                <img src='/logo/dogramaLogoOnly.png'  alt='' className={styles.logo_image} />
            </Link>
        </div>
        <ul className={styles.ul}>

               <li className={styles.li}>
                    {/* <NavLink
                        to="/"
                        className={`${({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "link"} ${styles.link}`}
                        >
                        Начало
                    </NavLink> */}
                    <Link to={'/'} className={styles.link}>Home</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/projects'} className={styles.link}> Проекти</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/products'} className={styles.link}> Продукти</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/services'} className={styles.link}> Услуги</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/contacts'} className={styles.link}> Контакти</Link>
                </li>
        </ul>

        
    </div>
  )
}

export default Header
