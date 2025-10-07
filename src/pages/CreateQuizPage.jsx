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

    return (
        <div>
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
                            <CreateMultipleQuestion question={question} />
                        }

                    </div>
                ))
            }


            <button onClick={() => addQuestion()}>Добавить вопрос</button>


        </div>
    )
}