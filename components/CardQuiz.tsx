import { useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";
import { questions } from "../data/questions";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { QuestionItem } from "./QuestionItem";
import { ResultsQuiz } from "./ResultsQuiz";

export function CardQuiz() {
    const [answers, setAnswers] = useState<number[]>([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const title = 'Quiz de culinária'

    const totalQuestions = questions.length 
    let n = currentQuestion
    const progresslFull = 100

    const comlpetedPercentage = n > 0 ? Math.round((n / totalQuestions) * 100) : 0;


    const acertou = questions.map((item, i) => item.answer === answers[i] ? 'Acertou' : 'errou').filter((item) => item === 'Acertou').length
    const total = answers.length
    const errou = (total - acertou)
    const empate = (errou === acertou)


    function loadNextQuestion() {
        if(questions[currentQuestion + 1]) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }

    function hanldeAnswered(answer: number) {
        setAnswers([ ...answers, answer])
        loadNextQuestion()
    }

    function handleRestartButton() {
        setAnswers([])
        setCurrentQuestion(0)
        setShowResult(false)
    }

    return (
        <div className="w-full py-2 flex flex-col items-center justify-center pb-8">
            <div className="flex justify-center items-center flex-col px-10 py-5">
                <Header />
            </div>
            <div className="w-full flex items-center justify-center space-x-3 text-gray-400 dark:text-gray-200">
                <MdQuestionAnswer className="w-10 h-10 md:w-14 md:h-14" />
                <h3 className="text-4xl md:text-6xl">{title}</h3>
            </div>
            <div className="w-full px-3 flex items-center justify-center">
                <div className="w-full md:w-[80%] xl:w-1/3 px-4  mt-6 space-y-4 rounded-md bg-white text-black">
                    {!showResult && 
                        <ProgressBar progress={comlpetedPercentage} />
                    }

                    {showResult && 
                        <>
                            <ProgressBar progress={progresslFull} />
                            <div className="flex gap-2">
                                <p className="font-medium">Acertou: {acertou}</p>
                                <p className="font-medium">Errou: {errou}</p>
                            </div>
                            {acertou > errou ? (
                                <div className="w-full text-center flex flex-col items-center justify-center">
                                    <p className="uppercase text-xl font-bold">Parabens</p>
                                    <span className="pb-2">
                                        {acertou === total ? 'você acertou todas as perguntas' : 'você acertou a maior parte das perguntas'}
                                    </span>
                                    <p className="text-4xl">🏆</p>
                                
                                </div>
                            ):(
                                <div className="w-full text-center flex flex-col items-center justify-center">
                                    <p className="uppercase text-xl font-bold">Que pena</p>
                                    <span className="pb-2">
                                        {errou === total ? 'você errou todas as perguntas' : 'você errou a maior parte das perguntas'}
                                    </span>
                                    <p className="text-4xl">☹️</p>
                                </div>
                            )}
                        </>
                    }
                    
                    <div className="pb-5 px-3">
                        {!showResult && 
                            <QuestionItem
                                question={questions[currentQuestion]}
                                count={currentQuestion + 1}
                                onAnswer={hanldeAnswered}
                            /> 
                        }
                        {showResult &&
                            <ResultsQuiz 
                                questions={questions}
                                answers={answers}
                            />
                        }
                    </div>
                    <div className="p-4 text-center border-t border-gray-300">
                        {!showResult &&
                            <><span className="font-semibold text-black">Pergunta {currentQuestion + 1}</span>  <span className="text-gray-300">de {questions.length} </span></>
                             
                        }
                        {showResult && 
                            <button onClick={handleRestartButton} className="flex items-center justify-center w-full px-4 py-2 gap-2 text-lg md:text-2xl text-gray-50 font-bold  bg-gradient-to-tr from-[#3D1549] to-[#831ba3]  shadow-sm shadow-zinc-800 rounded-xl hover:brightness-125 transition-all duration-300 ease">Reiniciar Quiz</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}