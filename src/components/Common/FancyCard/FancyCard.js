
import styles from './FancyCard.module.css'
import React from 'react'

function FancyCard({card}) {
  return (
    <div>
      <div className={`${styles.container}`}>
        <div className={`${styles.card}`}>
            <div className={`${styles.card__image_container}`}>
            </div>
            
            <svg className={`${styles.card__svg}`} viewBox="0 0 800 500">

                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
                <path className={`${styles.card__line}`} d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"></path>
            </svg>
            
            <div className={`${styles.card__content}`}>
				<p className={`${styles.card__title}`}>{card.title}</p>
				<p className={`${styles.card__description}`}>{card.description}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FancyCard
