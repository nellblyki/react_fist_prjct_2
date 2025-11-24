import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../srores/cartSlice'

export default function CartPage() {
    const cart = useSelector(state =>{
        return state.cart
    })
    const dispatch = useDispatch()
  return (
    <div>
      {cart.map(item =>(
        <div className='items-center border border-purple-600 rounded-2xl p-2 w-max m-3'>
            <p className='p-1'>{item.title}</p>
            <p className='p-1'>Кол-во: {item.quantity}</p>
            <button className='border cursor-pointer border-black rounded-2xl p-1'
            onClick={()=> dispatch(deleteFromCart(item))}
            >Удалить</button>
        </div>
      ))}
    </div>
  )
}
