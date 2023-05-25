import styles from './ServiceCard.module.css'
import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div style={{backgroundImage: `url(${service.image})`}} className={`${styles.card}`}>
        <div class="card">
            <div className={`${styles.card_content}`}>
                <p className={`${styles.card_title}`}>{service.name}</p>
                <p className={`${styles.card_para}`}>{service.description}</p>
        </div>
</div>

    </div>
  )
}

export default ServiceCard
