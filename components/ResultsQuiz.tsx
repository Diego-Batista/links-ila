import { Question } from "../types/Question"

type Props = {
    questions: Question[]
    answers: number[]
}

export function ResultsQuiz({ questions, answers }: Props) {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-medium">{key + 1}. {item.question} </div>
                    
                    <div className={`${item.answer === answers[key] ? 'text-green-500' : 'text-red-500'}`}>
                        <span>({item.answer === answers[key] ? 'Acertou' : 'Errou!'}) - </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    )
}