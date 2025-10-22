import React, { useEffect, useState } from 'react'

export default function Books() {

  const [books, SetBook] = useState([])

  useEffect(() => {
    async function getBoobs() {
      const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
      const data = await resp.json()
      SetBook(data)
      console.log(data)
    }
    getBoobs()
  }, [])
  const [isShowm, SetisShown] = useState(false)
  async function createBook(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "title": formData.get('title'),
        "description": formData.get('description'),
        "pageCount": formData.get('pageCount'),
        "excerpt": formData.get('excerpt'),
        "publishDate": formData.get('date')
      })
    })
    const data = await resp.json()
    console.log(data)
  }
  return (
    <div>
      <h1>Каталог книг</h1>
      <div>
        <div className='text-right'>
          <button onClick={() => SetisShown(!isShowm)}
            className='border border-amber-500 py-1 px-2'>{isShowm ? 'Отменить' : "Создать книгу"}</button>
        </div>
        {
          isShowm && (
            <div>
              <h2 className='text-center font-bold text-3xl'>Добавить книгу</h2>
              <form onSubmit={(e) => createBook(e)} className='flex flex-col max-w-[600px] mx-auto gap-5 mt-5'>
                <input name='title' className='border border-amber-500 py-1 px-2' type="text" placeholder='Заголовок' />
                <textarea name='description' className='border border-amber-500 py-1 px-2' placeholder='Описание'></textarea>
                <input name='pageCount' className='border border-amber-500 py-1 px-2' type="number" placeholder='Количество' />
                <textarea name='excerpt' className='border border-amber-500 py-1 px-2' placeholder='Отрывок'></textarea>
                <input name='date' className='border border-amber-500 py-1 px-2' type="datetime-local" />
                <button>Создать книгу</button>
              </form>
            </div>
          )
        }
      </div>

      {
        books.map((book) => (
          <div>
            <h3>{book.title}</h3>
            <p>{book.pageCount} страниц</p>
            <p>{book.description}</p>
          </div>
        ))
      }
    </div>
  )
}
