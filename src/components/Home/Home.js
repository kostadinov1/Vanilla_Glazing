import styles from './Home.module.css'

import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../api/services'
import ServiceCard from '../Common/ServiceCard/ServiceCard'
import Banner from './Banner/Banner'
import HeroCarousel from './HeroCarousel/HeroCarousel'
import Workflow from './Workflow/Workflow'


function Home() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getAllServices()
      .then((res) => {
        setServices(res)
        console.log('res', res);})
      .catch((res) => {console.log('res error', res);})
  }, [])
  
  return (
    <div>
      <Banner></Banner>
      <HeroCarousel></HeroCarousel>
      <Workflow></Workflow>
      <div className={`${styles.services}`}>
        {services ? services.map((service) => <ServiceCard 
                                                    key={service.id} 
                                                    service={service} />) : <p>NO SERVICES YET</p>}
        
    </div>
    </div>
  )
}

export default Home
