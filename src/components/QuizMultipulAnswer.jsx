import { useEffect, useState } from "react"

export default function QuizMultipleAnswer({correctAnswers, question,variants}) {

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
            <h3>{question}</h3>
               { variants.map(variant => (
                    <label>
                        <input type="radio" name="QuizMultipul" onChange={() => setAnswer(variant)}/>
                        {variant}
                    </label>
                ))}
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