import React, { useEffect, useState } from 'react'

export default function Users() {
    const [data, SetData] = useState([])
    useEffect(() => {
        async function getUsers() {
            const UserData = await fetch("https://fakerestapi.azurewebsites.net/api/v1/Users")
            const user = await UserData.json()
            SetData(user)
            console.log(user)
        }
        getUsers()
    }, [])
    async function DeleteUser(id) {
        const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Users/${id}`, {
            method: 'delete',
        })
        if (resp.ok) {
            SetData([
                ...data.filter((e) => e.id != id)
            ])
            alert("Пользователь удален")
        } else {
            alert("Не удалось удалить пользователя")
        }
    }
    async function AddUser(user) {
        const FormData = new FormData(user.taret)
        const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Users/${user}`)
    }
    return (
        <div>
            <h1>Все пользователи</h1>
            <div className='flex justify-around flex-wrap gap-10'>
                {
                    data.map(user => (
                        <div className=' m-auto text-center border border-amber-600 w-xs '>
                            <h3 className='mt-3'>Айди пользователя: {user.id}</h3>
                            <p className='mt-3'>Имя пользователя: {user.userName}</p>
                            <button onClick={() => DeleteUser(user.id)} className='border rounded-2xl pr-3 pl-3 mb-3 mt-3 cursor-pointer'>Удалить пользователя</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
