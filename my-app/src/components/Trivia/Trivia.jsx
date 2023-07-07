import React, { useEffect, useState, useRef } from 'react'
import "./Trivia.scss"


function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {


    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("option")


    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber,])


    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)
    }


    const handleClick = (a) => {
        setSelectedAnswer(a)
        setClassName("option active")
        delay(1500, () =>
            setClassName(a.isCorrect ? "option correct" : "option wrong")
        )
        setTimeout(() => {
            if (a.isCorrect) {
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
            } else {
                setStop(true)
            }
        }, 5000);
    }


    return (
        <div className='trivia'>
            <div className='question'>{question?.question}</div>
            <div className='options'>
                {
                    question?.options.map((a) => (
                        <div className={selectedAnswer === a ? className : "option"} onClick={() => handleClick(a)}>
                            {a.option}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Trivia
