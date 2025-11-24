import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../srores/cartSlice'

export default function ProductsPage() {
    const products = [
        { id: 1, title: "SiFon" },
        { id: 2, title: "SaSung" },
        { id: 3, title: "HyiWei" },
        { id: 4, title: "JopPa" },

    ]
    const dispatch = useDispatch()
    return (
        <div>
            {
                products.map(item => (
                    <div>
                        <div className='items-center border border-purple-600 rounded-2xl p-2 w-max m-3'>
                            <p className='p-1'>{item.title}</p>
                            <button
                                onClick={() => dispatch(addToCart(item))}
                                className='border cursor-pointer border-black rounded-2xl p-1'>Купить</button>
                        </div>

                    </div>

                ))
            }
            <button className='cursor-pointer border border-black rounded-2xl p-2 ml-2'>Сменить тему</button>
        </div>
    )
}
