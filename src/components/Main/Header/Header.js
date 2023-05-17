import styles from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'


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
                    <Link to={'/'} className={styles.link}>Home</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/projects'} className={styles.link}> Projects</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/products'} className={styles.link}> Products</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/services'} className={styles.link}> Services</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/contacts'} className={styles.link}> Contacts</Link>
                </li>
        </ul>
    </div>
  )
}

export default Header
