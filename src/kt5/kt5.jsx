import React, { useEffect, useState } from 'react'

export default function kt5() {
    const [DataCats, setDataCats] = useState([])
    const [UserInput, setUsetInput] = useState()
    const [result, setResult] = useState()

    useEffect(() => {
        async function GetCats() {
            const resp = await fetch("https://catfact.ninja/facts")
            const data = await resp.json()
            console.log(data)
            const DataCotov = data.data
            setDataCats(DataCotov)
        }
        GetCats()

    }, [])

    return (
        <div>
            <input className='ml-15 mb-5 border border-black cursor-pointer p-2 rounded-2xl'
                value={UserInput} onInput={(e) => setUsetInput(e.target.value)}
                type="text" placeholder='Поиск по фактам' />
            <div className='flex flex-wrap gap-2 justify-around'>
                {
                    DataCats.map(cat => (
                        <div className=' border border-e-fuchsia-900 rounded-2xl p-2 w-xl items-center'>
                            <p>Факты о котах: {cat.fact}</p>
                            <p>Длина: {cat.length}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
