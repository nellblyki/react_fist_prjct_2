import React, { useEffect, useState } from 'react'

export default function convirtation() {
    const [summa, setSumma] = useState(0)
    const [currency, setCurrency] = useState('$')
    const [result, setResult] = useState(null)

    useEffect(() => {
        if (currency === '$') {
            setResult((summa / 90).toFixed(2))
        } else if (currency === 'euro') {
            setResult((summa / 101).toFixed(2))
        }
    }, [summa, currency])

    return (
        <div className='ml-3'>
            <p>Введите сумму в рублях</p>
            <input value={summa} onInput={(e) => setSumma(e.target.value)} type="text" placeholder="Введите сумму обмена" />
            <select onChange={(e) => setCurrency(e.target.value)}>
                <option value="$">$</option>
                <option value="euro">Euro</option>
            </select>
            <h3>Вы получите</h3>
            <p>{result}</p>
        </div>

    )
}
