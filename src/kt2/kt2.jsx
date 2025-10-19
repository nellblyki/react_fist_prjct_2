import React, { useState } from 'react'

export default function kt2() {
  const [data, setData] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ])
  function RemoveData(id) {
    setData(
      data.filter(data => {
        return data.id !== id
      })
    )
  }
  function addProduct(){
    const name = prompt('Введите название товара:')
    if (!name) return
    const priceInput = prompt('Введите цену товара:')
    const price = parseInt(priceInput)
    
    if (!isNaN(price) && price > 0) {
        setData([...data, { 
            id: Date.now(), 
            name, 
            price, 
            count: 1 
        }])
    } else {
        alert('Некорректная цена!')
    }
}

  function increment(product){
    if(product.count >= 25){
      alert("Максимальное количество товара 25 штук")
    }else{
      setData([
        ...data.filter((e) => e.id != product.id),{id: product.id, name: product.name, price: product.price, count: product.count + 1}// Я ЭТОГО ЗАДАНИЯ МАМУ ЛЮБЛЮ У МЕНЯ НЕ РАБОТАЛО ИЗЗА {}
      ])
    }
  }
  function decrement(product){
    if(product.count <= 1){
      RemoveData(product.id)
    }else{
        setData([
          ...data.filter((e) => e.id != product.id),{id: product.id, name: product.name, price: product.price, count: product.count - 1}
        ])
    }
  }
  return (
    <div>
        <div className='flex justify-center mb-10'>
            <button onClick={addProduct} className='cursor-pointer border rounded-2xl w-40'>Добавить новый товар</button>
        </div>

        <div className='flex justify-between flex-wrap ml-10 mr-10 '>
            {
                data.sort((a, b) => a.id - b.id).map(product => (
                    <div className='items-center mb-5 mt-5 text-center border rounded-lg w-md'>
                        <div onDoubleClick={() => RemoveData(product.id)}>
                            <p>{product.name}</p>
                            <p>{product.price} ₽</p>
                        </div>
                        <div className='flex gap-4 justify-center'>
                          <button className='cursor-pointer' onClick={() => decrement(product)}>-</button>
                          <p>{product.count}</p>
                          <button className='cursor-pointer' onClick={() => increment(product)}>+</button>
                        </div>
                        <div>
                          <p>Итоговая стоимость {product.price * product.count}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
