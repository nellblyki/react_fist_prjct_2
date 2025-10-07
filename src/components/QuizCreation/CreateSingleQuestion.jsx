export default function CreateSingleQuestion({ question, editQuestion }) { 
     function editOptions(value,index){
        const options = question.options
        options[index] = value
        editQuestion(question.id,options,'options')
    }
    return (
        <div>

            <label>
                <p>Введите вопрос</p>
                <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Вопрос" />
            </label>

            <div className="flex flex-col gap-y-2">
                {
                question.options.map((option,index) => (
                    <div className="flex gap-x-3">
                        <input className="bg-blue-500" type="text" value={option} onInput={(e)=>{editOptions(e.target.value,index)}} placeholder={`Вариант ${index + 1}`} />
                        <button onClick={()=> editQuestion(question.id,option,'correctAnswer')} className="text-sm border p1 border-b-fuchsia-500" >Отметить правильный ответ</button>
                    </div>
                ))
            }
            </div>
            <div>
                <button onClick={()=> editQuestion(question.id,[...question.options,''],'options')}>Добавить вариант ответа</button>
            </div>



        </div>
    )
}