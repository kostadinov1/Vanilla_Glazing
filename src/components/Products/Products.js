import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/products'
import ProductCard from '../Common/ProductCard/ProductCard'
import styles from './Products.module.css'
import { useTranslation } from 'react-i18next'


const Products = () => {
	const {t} = useTranslation()
 	const [products, setProducts] = useState([])

	useEffect(() => {
		getAllProducts()
			.then((res) => {setProducts(res)})
			.catch((res) => {})
	}, [])

	return (
		<div className={`${styles.products}`}>
			<div className={`section_title`}>{t('products')}</div>
			<div className={`${styles.products_list}`}>
				{products ? 
				products.map((product) => 
						<ProductCard 
							product={product} 
							key={product.id} />) 
				: <p>no products</p>}
			</div>
		</div>
	)
}

export default Products
