import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = (props) => {
   
    
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(props.products.find(product => product.id == id))
    }, [props])
    return (
        <div>
            <h1>Product Detail</h1>
            <h3>{product?.name}</h3>
            <h3>{product?.price}</h3>
            <h3>{product?.desc}</h3>
            <h3>{product?.category}</h3>
        </div>
    )
}

export default ProductDetailPage