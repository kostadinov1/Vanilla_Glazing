
import { Card, Col, Divider, Row, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './Contacts.module.css'
import { getCompanyInfo } from '../../api/companyInfo'
import SimpleMap from './Map'
import ContactsCard from '../Common/ContactsCard/ContactsCard'

function Contacts() {
  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)})
    .catch()
  }, [])

  return (
    <>
        <div className={`${styles.contacts}`}>
            <div className={`${styles.banner}`}>
				<h2 className={`${styles.title} section_title`}>Contacts</h2>
            </div>
			<div className={`${styles.info}`}>

			</div>
        </div>
        <SimpleMap></SimpleMap>
    </>
  )
}

export default Contacts
