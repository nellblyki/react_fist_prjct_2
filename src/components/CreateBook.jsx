import { useState } from "react" 
import { useForm } from "react-hook-form"
export default function CreateBook() {

    const [isShown, setIsShown] = useState(false)
    const { register, handleSubmit, formState } = useForm()
        async function createSumbit(book) {
            console.log(book)
            const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(book)
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

                        <form onSubmit={handleSubmit(createSumbit)} className="flex flex-col max-w-[600px] mx-auto gap-5 mt-5">

                            <input {...register('title', {required: true,})} className="border border-amber-600 px-2 py-1" type="text" placeholder="Заголовок" />
                            {formState?.errors?.title?.type === 'required' && (<p className="text-amber-600">Поле должно быть заполненным</p>) }
                            <textarea {...register('description', {required: true, minLength: 30, })} className="border border-amber-600 px-2 py-1" placeholder="Описание"></textarea>
                            {formState?.errors?.description?.type === 'minLength' && (<p className="text-amber-600">Описание должно быть минимум в 30 символов</p>)}
                            <input {...register('pageCount', {required: true , min: 3})} className="border border-amber-600 px-2 py-1" type="number" placeholder="Количество " />
                            {formState?.errors?.pageCount?.type === 'min' && (<p className="text-amber-600">Количество страниц должно не меньше 3</p>)}
                            <textarea {...register('excerpt', {required: true, minLength: 100})} className="border border-amber-600 px-2 py-1" placeholder="Отрывок"></textarea>
                            {formState?.errors?.excerpt?.type === 'minLength' && (<p className="text-amber-600">Отрывок должен быть не меньше 100 символов</p>)}
                            <input {...register('publishDate', {required: true})} className="border border-amber-600 px-2 py-1" type="datetime-local" />

                            <button>Создать</button>
                        </form>
                    </div>
                )
            }




        </div>
    )
}