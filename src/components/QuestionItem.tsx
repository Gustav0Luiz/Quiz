import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question : Question;
    count : number;
    onAnswer : (answer : number) => void;

}

export const QuestionItem = ({question , count , onAnswer} : Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const checkQuestion = (key: number) => {
        if (selectedAnswer === null ) {
        setSelectedAnswer(key);
        setTimeout( () => {onAnswer(key); setSelectedAnswer(null)},600)
        }
    }

    return (

        <div>
            <div className="text-2xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key = {key}
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300
                        ${selectedAnswer!== null ? 'cursor-auto hover:bg-blue-100' : 'hover:bg-blue-500 cursor-pointer'}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-400 border-green-600 hover:bg-green-400'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-400 border-red-600 hover:bg-red-400'}
                        `}
                        >{item}
                    </div>
                ))}
            </div>
        </div>
    )
}