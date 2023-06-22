import styles from './Services.module.css'
import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../api/services'
import ServiceCard from '../Common/ServiceCard/ServiceCard'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const {t} = useTranslation()
  const [services, setServices] = useState([])

  useEffect(() => {
    getAllServices()
      .then((res) => {
        setServices(res)})
      .catch((res) => {})
  }, [])

  return (
    <>
        <div className={`section_title`}>
        {t('services')}
        </div>
    <div className={`${styles.services}`}>
        {services ? services.map((service) => <ServiceCard 
                                                    key={service.id} 
                                                    service={service} />) : <p>NO SERVICES YET</p>}
        
    </div>
                                                    </>
  )
}

export default Services
