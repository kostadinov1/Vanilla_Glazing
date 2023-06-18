
import styles from './Product.module.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../api/products'

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(() => {
        getProduct(id)
            .then((res) => {
                setProduct(res)})
            .catch((res) => {})
    }, [id])
  return (
    <div className={`${styles.product}`}>
        <div className={`${styles.product_box}`}>
            <div className={`${styles.img_left}`}>
            <img src={product.image ? product.image : '/logo/dogramaLogoOnly.ico'} alt=''></img>

            </div>
            <div className={`${styles.info_right}`}>
                <div className={`${styles.right_card}`}>
                    <h2 className={`${styles.title} section_title`}>{product.name}</h2>
                    <div className={`${styles.info}`}>
                        <p>Цена: {product.price} лева</p>
                        <p>Описание: {product.description}</p>
                    </div>
			    </div>               
            </div>
        </div>
    </div>
  )
}

export default Product
