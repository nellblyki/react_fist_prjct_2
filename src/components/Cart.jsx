import React, { useContext } from 'react'
import { CartContext } from './Store'

export default function Cart() {
    const [Cart,SetCart] = useContext(CartContext)
  return (
    <div>
        {
            Cart.map(book =>(
                <div>
                    <h3>{book.title}</h3>
                    <p>{book.pageCount} Страниц</p>
                </div>
            ))
        }
    </div>
  )
}
