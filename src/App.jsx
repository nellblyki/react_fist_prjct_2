import QuizDIrectAnswer from "./components/quizDIrectAnswer";
import QuizMultipulAnswer from "./components/quizMultipulAnswer";
import QuizSingleAnswer from "./components/quizSingleAnswer";

export default function App(){
  return(
   <div>
      <QuizDIrectAnswer correctAnswer="4" question="Сколько будет 2+2" />
      <QuizSingleAnswer correctAnswer="10" question="5+5" variants={['5', "11", "10"]}/>
       <QuizMultipulAnswer /> 
   </div>
  )
}