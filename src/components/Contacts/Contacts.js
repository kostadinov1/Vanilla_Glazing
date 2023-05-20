
import { Card, Col, Divider, Row, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './Contacts.module.css'
import { getCompanyInfo } from '../../api/companyInfo'
import SimpleMap from './Map'

function Contacts() {
  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)})
    .catch()
  }, [])

  console.log(companyInfo, 'company info');
  return (
    <>
        <div className={`${styles.contacts}`}>
            <div className={`${styles.left_card}`}>
                <img alt='' src={'/images/placeholders/contacts.jpg'}></img>
            </div>
            <div className={`${styles.right_card}`}>
                <h1>Contact Us</h1>
                <h2>Address: {companyInfo.address}</h2>
                <h2>Email: {companyInfo.email}</h2>
                <h2>Phone: {companyInfo.phone}</h2>
            </div>
        </div>

        <SimpleMap></SimpleMap>
    </>
  )
}

export default Contacts
