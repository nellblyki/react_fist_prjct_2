import React, { useState } from 'react'

export default function kt3() {
    const [products, setProducts] = useState([])

    async function GetProducts() {
        const resp = await fetch("https://dummyjson.com/products")
        const data = await resp.json()
        setProducts(data.products)
    }
    GetProducts()

    return (
        <div>
            <header>
                <button className='cursor-pointer mb-5 ml-5 border border-amber-600 p-4' onClick={() => window.scrollTo({ top: 100000, behavior: "smooth" })}>Пролистнуть вниз</button>
            </header>
            <div div className='flex flex-wrap gap-10 justify-around items-stretch' >
                {
                    products.map(product => (

                        <div className='border-2 border-amber-600 rounded-2xl w-[300px]  ml-3 flex flex-col'>
                            <img className='w-[250px] h-[350px] mb-3' src={product.images[0]} alt="" />
                            <h3 className='mb-3 ml-3 font-bold text-[20px]'>Title: {product.title}</h3>
                            <p className='mb-3 ml-3 text mt-auto'>Description: {product.description}</p>
                            <p className='mb-3 ml-3'>Category: {product.category}</p>
                            <p className='mb-3 ml-3'>Price: {product.price}</p>
                        </div>

                    ))
                }
            </div>
            <footer>
                <button className='cursor-pointer mt-5 mb-5 ml-5 border border-amber-600 p-4' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Пролистнуть вверх</button>
            </footer>
        </div >
    )
}
