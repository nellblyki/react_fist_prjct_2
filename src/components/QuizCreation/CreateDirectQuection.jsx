import React from 'react'

export default function CreateDirectQuestion({question,correctAnswer}) {
  return (
    <div>
      <label>
        <p>Введите вопрос</p>
        <input value={question.question} type="text" placeholder='Вопрос' />
      </label>
      <label>
        <p>Введите ответ</p>
        <input  value={question.correctAnswer} type="text" placeholder='Ответ'/>
      </label>
    </div>
  )
}
