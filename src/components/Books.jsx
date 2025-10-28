import { useContext, useEffect, useState } from "react"
import CreateBook from "../components/CreateBook"
import { NavLink } from "react-router"
import { CartContext } from "./Store"

export default function Books() {

  const [books, setBooks] = useState([])
  const [Cart, SetCart] = useContext(CartContext)
  console.log(Cart)
  useEffect(() => {


    async function getBooks() {
      const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
      const data = await resp.json()
      setBooks(data)
    }

    getBooks()

  }, [])
  function AddCart(item) {
    SetCart(
      [
        ...Cart,
        item
      ]
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Каталог книг</h1>


      <CreateBook />


      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 mt-10">
        {
          books.map((book) => (
            <div>
              <NavLink to={`/books/${book.id}`} className="flex flex-col gap-4"><h3 className="text-center font-bold text-xl">{book.title}</h3></NavLink>
              <p>{book.pageCount} страниц</p>
              <p>{book.description}</p>
              <p className="w-full truncate">{book.excerpt}</p>
              <button onClick={() => AddCart(book)} className="border border-amber-600 cursor-pointer">Купить</button>
            </div>
          ))
        }
      </div>



    </div>
  )
}