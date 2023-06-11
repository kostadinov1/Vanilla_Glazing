
import styles from './ProductCard.module.css'
import React from 'react'

const ProductCard = ({product}) => {
  return (
      <div className={`${styles.card}`}>
        <div className={`${styles.card_image}`}>
            <img src={product.image} alt=''></img>
        </div>
        <div className={`${styles.card_description}`}>
            <p className={`${styles.text_title}`}>{product.name}</p>
            <p className={`${styles.text_body}`}>{product.description}</p>
        </div>
        </div>
  )
}

export default ProductCard
