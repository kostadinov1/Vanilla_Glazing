import styles from './Services.module.css'
import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../api/services'
import ServiceCard from '../Common/ServiceCard/ServiceCard'


const Services = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    getAllServices()
      .then((res) => {
        setServices(res)
        console.log('res', res);})
      .catch((res) => {console.log('res error', res);})
  }, [])

  return (
    <>
        <div className={`section_title`}>
          Услуги
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
