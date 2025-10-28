import { useState } from "react"

export default function CreateBook() {

    const [isShown, setIsShown] = useState(false)



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
                "pageCount": formData.get('pages'),
                "excerpt": formData.get('excerpt'),
                "publishDate": formData.get('date')
            })
        })

        const data = await resp.json()

        console.log(data)

    }


    return (
        <div>
            <div className="text-right">
                <button
                    onClick={() => setIsShown(!isShown)}
                    className="border border-amber-600 py-1 px-2">
                    {isShown ? 'Отменить' : 'Создать книгу'}
                </button>
            </div>

            {
                isShown && (
                    <div>
                        <h2 className="text-center font-bold text-3xl">Добавить книгу</h2>

                        <form onSubmit={(e) => createBook(e)} className="flex flex-col max-w-[600px] mx-auto gap-5 mt-5">

                            <input name="title" className="border border-amber-600 px-2 py-1" type="text" placeholder="Заголовок" />
                            <textarea name="description" className="border border-amber-600 px-2 py-1" placeholder="Описание"></textarea>
                            <input name="pages" className="border border-amber-600 px-2 py-1" type="number" placeholder="КОличество " />
                            <textarea name="excerpt" className="border border-amber-600 px-2 py-1" placeholder="Отрывок"></textarea>
                            <input name="date" className="border border-amber-600 px-2 py-1" type="datetime-local" />

                            <button>Создать</button>
                        </form>
                    </div>
                )
            }




        </div>
    )
}