import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductsID() {
    const [product, setProduct] = useState()
    const { id } = useParams()
    useEffect(() => {
        async function GetProducts() {
            const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await resp.json()
            setProduct(data.product)
        }
        GetProducts()
    })
    return (
        <div>
            {
                <div className='border-2 border-amber-600 rounded-2xl w-[300px]  ml-3 flex flex-col'>
                    <img className='w-[250px] h-[350px] mb-3' src={product.images[0]} alt="" />
                    <h3 className='mb-3 ml-3 font-bold text-[20px]'>Title: {product.title}</h3>
                    <p className='mb-3 ml-3 text mt-auto'>Description: {product.description}</p>
                    <p className='mb-3 ml-3'>Category: {product.category}</p>
                    <p className='mb-3 ml-3'>Price: {product.price}</p>
                    <Stars rating={product.rating} />
                </div>
            }
        </div>
    )
}
