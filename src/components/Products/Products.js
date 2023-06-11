import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/products'
import ProductCard from '../Common/ProductCard/ProductCard'
import styles from './Products.module.css'


const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
		.then((res) => {
			setProducts(res)
			console.log(res, 'res in products ');
		})
		.catch((res) => {
			console.log(res, 'res in products error');
		})
  }, [])

  return (
    <div className={`${styles.products}`}>
      <div>
        Products
      </div>
        {products ? 
		products.map((product) => 
				<ProductCard 
					product={product} 
					key={product.id} />) 
		: <p>no products</p>}
    </div>
  )
}

export default Products
