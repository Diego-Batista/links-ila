import { useState } from "react"
import { Question } from "../types/Question"

type Props = {
    question: Question
    count: number
    onAnswer: (answer: number) => void
}

export function QuestionItem({question, count, onAnswer}: Props) {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key)
            setTimeout(() => {
                onAnswer(key)
                setSelectedAnswer(null)
            }, 1000)
            
        }
    }

    return (
        <div>
            <div className="text-xl font-medium mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div 
                        key={key} 
                        className={`px-3 py-2 rounded-md text-base mb-4 bg-purple-100 
                        ${selectedAnswer !== null ? 'cursor-not-allowed hover:opacity-100' : 'md:hover:opacity-60 cursor-pointer'}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-300'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-300'}
                        `}
                        onClick={() => checkQuestion(key)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}