import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
export default function Users() {
    const [data, SetData] = useState([])
    const { register, handleSubmit, formState } = useForm()
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
        const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Users`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await resp.json()
        console.log(data)
        if (resp.ok) {
            SetData([
                ...data,
                { id: Date.now(), userName: user.username, password: user.password }
            ])
        }
    }
    return (
        <div>
            <h1>Все пользователи</h1>
            <div>
                <h2 className='text-2xl font-bold'>Добавление пользователя</h2>
                <form onSubmit={handleSubmit(AddUser)} className="flex flex-col max-w-[600px] mx-auto gap-5 mt-5 mb-10">
                    <input {...register('userName', { minLength: 4 })} type="text" placeholder='Имя пользователя' className='border border-amber-600 px-2 py-1' />
                    {formState?.errors?.userName?.type === 'minLength' && (<p>Нужно минимум 4 символа в имени</p>)}
                    <input {...register('password', { minLength: 8 })} type="text" placeholder='Пароль пользователя' className='border border-amber-600 px-2 py-1' />
                    {formState?.errors?.password?.type === 'minLength' && (<p>Нужно минимум 8 символов в пароле</p>)}
                    <button className='border cursor-pointer border-amber-600'>Добавить пользователя</button>
                </form>
            </div>
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
