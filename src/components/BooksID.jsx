import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function BooksID() {
    const [books,SetBooks] = useState([])
    const { id } = useParams()
    useEffect(() => {
        async function getBookId() {
            const Books = await (fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`))
            const data = await Books.json()
            SetBooks(data)
        }
        getBookId()
    },[])
    return (
        <div>
            <div>
                {
                    <div className=' pt-2 pb-2 pr-2 pl-2 w-150 m-auto border border-amber-500 gap-3 rounded-2xl'>
                        <h1 className='mb-3 mt-2'>Название: {books.title}</h1>
                        <p>{books.pageCount} страниц</p>
                        <p className='mb-2'>Описание: {books.description}</p>
                        <p>Отрывок: {books.excerpt}</p>
                        
                    </div>
                }
            </div>
        </div>
    )
}
