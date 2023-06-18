
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
                setProduct(res)
                console.log(res, 'res in product');
            })
            .catch((res) => {
                console.log(res, 'res in product');
            })
    }, [id])
  return (
    <div className={`${styles.product}`}>
        <div className={`${styles.product_box}`}>
            <div className={`${styles.img_left}`}>
            <img src={product.image ? product.image : '/logo/dogramaLogoOnly.ico'} alt=''></img>

            </div>
            <div className={`${styles.info_right}`}>

            </div>
        </div>
    </div>
  )
}

export default Product
