import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function UserID() {
  const [User, SetUser] = useState([])
  const { id } = useParams()
  useEffect(() => {
    async function getUserID() {
      const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Users/${id}`)
      const data = await resp.json()
      SetUser(data)

    }
    getUserID()
  }, [])
  async function DeleteUser(bb){
    const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Users/${id}`,{
      method: 'delete',
    })
    if(resp.ok){
      alert("Пользователь удален")
      SetUser([
        ...User.filter((e) => e.id != bb)
      ])
    }else{
      alert("Не удалось удалить пользователя")
    }
  }

  return (
    <div className='flex justify-center '>
      {
        <div className=' m-auto text-center border border-amber-600 w-xs '>
          <h3 className='mt-3'>Айди пользователя: {User.id}</h3>
          <p className='mt-3'>Имя пользователя: {User.userName}</p>
          <button onClick={DeleteUser(User.id)} className='border rounded-2xl pr-3 pl-3 mb-3 mt-3 cursor-pointer'>Удалить пользователя</button>
        </div>
      }
    </div>
  )
}
