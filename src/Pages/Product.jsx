import React, { useContext } from 'react'
import { ShopeContext } from '../Context/ShopeContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProducDisplay/ProductDisplay'
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
    const {all_product} = useContext(ShopeContext)
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id===Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product ={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
