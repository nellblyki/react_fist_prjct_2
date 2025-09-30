import { useEffect, useState } from "react"

export default function QuizSingleAnswer({correctAnswer, question, variants}){

    const [answer, setAnswer] = useState('')

    const [result, setResult] = useState('')

    useEffect(() => {
        if(answer == correctAnswer){
            setResult('Верно !')
        }
        else{
            setResult('Не верно :(')
        }
    }, [answer])

    return(

        <div>
            <h3>{question}</h3>

            {
                variants.map(variant => (
                    <label>
                        <input type="radio" name="QuizSingle" onChange={() => setAnswer(variant)}/>
                        {variant}
                    </label>
                ))
            }

            <p>{result}</p>

        </div>

    )
}