import js from '@eslint/js'
import React, { useEffect, useState } from 'react'
import kt2 from '../kt2/kt2'

export default function LeetSpeak() {
  const [InputUser, setInputUser] = useState('')
  const [result, setResult] = useState()
  const [Leet, setLeet] = useState({
    a: '4',
    b: '6',
    c: '<',
    d: '9',
    e: '3',
    f: '7',
    g: '8',
    h: '|>',
    i: "1",
    j: "!",
    k: "|<",
    l: '|_',
    m: '|v|',
    n: '|',
    o: "0",
    p: '|?',
    q: '<|',
    r: '|^',
    s: '5',
    t: "+",
    u: '//|',
    v: '\\/',
    w: '\\//\\//',
    x: "><",
    y: '^/',
    z: '`/_',
  })


  useEffect(() => {
      const arr = InputUser.split('')
      const result = arr.map((e) => {
        return Leet[e]
      })
      setResult(
        result
      )
  })


  return (
    <div>
      <input className='m-5 border p-5 border-fuchsia-500' type="text" placeholder='Введите текст' value={InputUser} onInput={(e) => setInputUser(e.target.value)} />
      <input className='ml-5 border border-fuchsia-500 p-5 w-max' type="text" value={result} placeholder='Тут будет слово'/>
    </div>
  )
}
