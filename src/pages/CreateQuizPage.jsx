import { useState } from "react";
import CreateSingleQuestion from "../components/QuizCreation/CreateSingleQuestion";
import CreateMultipleQuestion from "../components/QuizCreation/CreateMultipleQuestion";
import CreateDirectQuestion from "../components/QuizCreation/CreateDirectQuection";

export default function CreateQuizPage() {
    const [quiz, setQuiz] = useState([
        { id: Date.now(), type: 'direct', options: [''], question: '', correctAnswer: '', },
    ])


    function addQuestion() {
        setQuiz(
            [
                ...quiz,
                { id: Date.now(), type: 'direct', options: [''], question: '', correctAnswer: '', },
            ]
        )
    }

    function editQuestion(id, value, field) {
        setQuiz(
            quiz.map(question => {
                if (question.id === id) {
                    return {
                        ...question,
                        [field]: value
                    }
                } else {
                    return question
                }
            })
        )
    }
    const [title, setTitle] = useState('')

    function saveQuiz() {
        const Quiz = {
            id: Date.now(),
            title: title,
            question: quiz
        }
        if (localStorage.getItem('quizes')) {
            const quizes = JSON.parse(localStorage.getItem('quizes'))
            quizes.push(Quiz)
            localStorage.setItem('quizes', JSON.stringify([quizes]))

        } else {
            localStorage.setItem('quizes', JSON.stringify([Quiz]))
        }

    }

    return (
        <div>
            <div className="flex justify-center">
                <input
                    value={title}
                    onInput={(e) => { setTitle(e.target.value) }}
                    className="border-2 py-2 border-amber-500 px-2 w-120 mb-10"
                    type="text"
                    placeholder="Название квиза"
                />
            </div>
            {
                quiz.map(question => (
                    <div>
                        <select onChange={(e) => editQuestion(question.id, e.target.value, 'type')}>
                            <option value="direct">Прямой ответ</option>
                            <option value="single">1 ответ из вариантов</option>
                            <option value="multiple">Несколько ответов из вариантов</option>
                        </select>
                        {
                            question.type == 'direct' &&
                            <CreateDirectQuestion question={question} editQuestion={editQuestion} />
                        }
                        {
                            question.type == 'single' &&
                            <CreateSingleQuestion question={question} editQuestion={editQuestion} />
                        }
                        {
                            question.type == 'multiple' &&
                            <CreateMultipleQuestion question={question} editQuestion={editQuestion} />

                        }

                    </div>
                ))
            }
            <div className="flex gap-2">
                <button onClick={() => addQuestion()}>Добавить вопрос</button>
                <button onClick={() => saveQuiz()}>Сохранить квиз</button>
            </div>




        </div>
    )
}