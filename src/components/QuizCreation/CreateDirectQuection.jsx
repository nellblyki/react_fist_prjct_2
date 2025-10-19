import React from 'react'

export default function CreateDirectQuestion({question,correctAnswer}) {
  return (
    <div>
      <label>
        <p>Введите вопрос</p>
        <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')}  type="text" placeholder='Вопрос' />
      </label>
      <label>
        <p>Введите ответ</p>
        <input  value={question.correctAnswer} type="text" placeholder='Ответ'/>
      </label>  
    </div>
  )
}
