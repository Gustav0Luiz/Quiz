import { Question } from "@/types/Question"

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers} : Props) => {
 
    let points = 0;
    let erros = 0;
    return (

        <div>
            {questions.map((item,key) => (
                <div key = {key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <div>
                        <span className={` ${item.answer === answers[key] ? 'text-lime-600' : "text-red-600" }`}>
                            {item.answer === answers[key] ? 'Acertou': "Errou"} 
                        </span>
                         <span> - </span>
                         <span className="hidden">{item.answer === answers[key] ? points++: erros++} </span>
                        {item.options[item.answer]}.
                    </div>
                </div>
            ))}
            <div className="text-center font-bold text-lg ">
                        Pontuação Final: {points} de {points + erros}
            </div>
        </div>
    )
}