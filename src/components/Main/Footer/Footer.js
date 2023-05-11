import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import FooterBanner from './FooterBanner/FooterBanner'


function Footer() {
  return (
    <section className={styles.footer}>
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/`}>Home</Link></li>
            <li className={styles.li}><Link to={`/projects`}>Projects</Link></li>
            <li className={styles.li}><Link to={'/products'}>Products</Link></li>
            <li className={styles.li}><Link to={'/contacts'}> Contacts</Link></li>
        </ul>
  
        <ul className={styles.ul} type='list'>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
            <li><a href='#'>Useful Link</a></li>
        </ul>
        <FooterBanner></FooterBanner>
    </section>
  )
}

export default Footer
