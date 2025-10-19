import React from 'react'
import { useParams } from 'react-router'
import QuizDIrectAnswer from '../components/QuizDIrectAnswer'
import QuizSingleAnswer from '../components/QuizSingleAnswer'
import QuizMultipleAnswer from '../components/QuizMultipulAnswer'

export default function playQuizPage() {

  const { id } = useParams()
  const quizes = JSON.parse(localStorage.getItem('quizes'))
  const [quiz] = quizes.filter(items => items.id == id)
  console.log(quiz)



  return (
    <div>
      <h1 className='text-amber-500 text-center text-2xl font-bold mb-10'>{quiz.title}</h1>
      {
        quiz.question.map(question => (
          <div>
            {
              question.type == 'direct' &&
              <QuizDIrectAnswer correctAnswer={question.correctAnswer} question={question.question} />
            }
            {
              question.type == 'single' &&
              <QuizSingleAnswer correctAnswer={question.correctAnswer} question={question.question} variants={question.options} />
            }
            {
              question.type == 'multiple' &&
              <QuizMultipleAnswer correctAnswers={question.correctAnswer} question={question.question} variants={question.options} />
            }
          </div>
        ))
      }
    </div>
  )
}
