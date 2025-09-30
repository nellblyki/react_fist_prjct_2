import { useEffect, useState } from "react"

export default function QuizMultipleAnswer() {

    const correctAnswers = [
        'Кушал',
        "Относил ключи"
    ]
    const [userAnswers, setUserAnswers] = useState([])
    const [result, setResult] = useState('')

    function checkAnswer(answer) {
        if (userAnswers.includes(answer)) {
            setUserAnswers(
                userAnswers.filter(userAnswer => userAnswer !== answer)
            )
        } else {
            setUserAnswers(
                [
                    ...userAnswers,
                    answer
                ]
            )
        }
    }

    useEffect(() => {

        if (correctAnswers.length === userAnswers.length &&
            correctAnswers.every(element => userAnswers.includes(element))
        ) {
            setResult('Верно!')
        } else {
            setResult("Неверно!")
        }

    }, [userAnswers])

    return (
        <div>
            <h3>Почему я опаздал на пол часа на вторую пару?</h3>

            <div>
                <label>
                    <input type="checkbox" onChange={() => checkAnswer('Кушал')} />
                    Кушал
                </label>
                <label>
                    <input type="checkbox" onChange={() => checkAnswer('Относил ключи')} />
                    Относил ключи
                </label>
                <label>
                    <input type="checkbox" onChange={() => checkAnswer('Не знаю')} />
                    Не знаю
                </label>
                <label>
                    <input type="checkbox" onChange={() => checkAnswer('Переводил бабушку через дорогу')} />
                    Переводил бабушку через дорогу
                </label>

            </div>
            <p>{result}</p>
        </div>
    )
}