
import styles from './ProductCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
      <div className={`${styles.card}`}>
        <div className={`${styles.card_image}`}>
            <Link to={`/product/${product.id}`}>
                <img src={product.image ? product.image : '/logo/dogramaLogoOnly.ico'} alt=''></img>
            </Link>
        </div>
        <div className={`${styles.card_description}`}>
            <p className={`${styles.text_title}`}>{product.name}</p>
            <p className={`${styles.text_body}`}>{product.description}</p>
        </div>
        </div>
  )
}

export default ProductCard
