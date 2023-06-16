
import styles from './ContactsCard.module.css'
import React from 'react'

const ContactsCard = () => {
  return (
    <div className={`${styles.contacts_card}`}>  
      <div className={`${styles.contact_card_1}`}>    
        <div className={`${styles.d1}`}></div>
        <div className={`${styles.d2}`}> </div>
        <div className={`${styles.d3}`}>
            <div className='section_title'>Contact Us</div>    
        </div>
        <div className={`${styles.d4}`}> </div>
      </div>
    </div>
  )
}

export default ContactsCard
