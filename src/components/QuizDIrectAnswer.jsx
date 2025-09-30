import { useEffect } from "react"
import { useState } from "react"
export default function QuizDIrectAnswer({correctAnswer,question}){

    const[UserAnswer,setUserAnswer] = useState()
    const[Result,setResult] = useState()
    useEffect(() => {
        if(UserAnswer == correctAnswer){
            setResult("Верно!")
        }else{
            setResult("Неверно :(")
        }
    },[UserAnswer])

    return(
            <div>
                <h3>{question}</h3>
                <input value={UserAnswer} onInput={(e)=> setUserAnswer(e.target.value)} type="text" placeholder="Введите ответ"/>
                <p>{Result}</p>
               
            </div>
    )
}