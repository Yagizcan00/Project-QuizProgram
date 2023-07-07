import React, { useEffect, useMemo, useState } from "react";
import "./App.scss"
import Trivia from "./components/Trivia/Trivia";
import Timer from "./components/Timer/Timer";
import Start from "./components/Start/Start";


function App() {


  const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0.00")


  const data = [
    {
      id: 1,
      question: "Example question 1 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 2,
      question: "Example question 2 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 3,
      question: "Example question 3 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 4,
      question: "Example question 4 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 5,
      question: "Example question 5 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 6,
      question: "Example question 6 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 7,
      question: "Example question 7 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 8,
      question: "Example question 8 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 9,
      question: "Example question 9 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 10,
      question: "Example question 10 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 11,
      question: "Example question 11 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 12,
      question: "Example question 12 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 13,
      question: "Example question 13 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
    {
      id: 14,
      question: "Example question 14 ?",
      options: [
        {
          option: "True Answer",
          isCorrect: true,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
        {
          option: "False Answer",
          isCorrect: false,
        },
      ]
    },
  ]


  const moneyPryamid = useMemo(() =>
    [
      { id: 1, amount: "$ 100.00" },
      { id: 2, amount: "$ 250.00" },
      { id: 3, amount: "$ 500.00" },
      { id: 4, amount: "$ 1000.00" },
      { id: 5, amount: "$ 2500.00" },
      { id: 6, amount: "$ 5000.00" },
      { id: 7, amount: "$ 10,000.00" },
      { id: 8, amount: "$ 25,000.00" },
      { id: 9, amount: "$ 50,000.00" },
      { id: 10, amount: "$ 75,000.00" },
      { id: 11, amount: "$ 100,000.00" },
      { id: 12, amount: "$ 250,000.00" },
      { id: 13, amount: "$ 500,000.00" },
      { id: 14, amount: "$ 750,000.00" },
      { id: 15, amount: "$ 1,000,000.00" }
    ].reverse(),
    [])


  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPryamid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPryamid, questionNumber])


  return (
    <div className="app">
      {
        userName ? (
          <>
            <div className="main">
              {
                stop ? <section className="endOption">You earned: {earned}</section> : (
                  <>
                    <div className="top">
                      <div className="timer">
                        <Timer setStop={setStop} questionNumber={questionNumber} />
                      </div>
                    </div>
                    <div className="bottom">
                      <Trivia
                        data={data}
                        setStop={setStop}
                        questionNumber={questionNumber}
                        setQuestionNumber={setQuestionNumber}
                      />
                    </div>
                  </>
                )
              }
            </div>


            <div className="pyramid">
              <ul className="money-list">
                {
                  moneyPryamid
                    .map((m) => (
                      <li className={questionNumber === m.id ? "money-list-item active" : "money-list-item"}>
                        <span className="money-list-item-number">{m.id}.</span>
                        <span className="money-list-item-amount">{m.amount}</span>
                      </li>
                    ))
                }
              </ul>
            </div>
          </>
        ) :
          <Start setUserName={setUserName} />
      }
    </div>
  );
}

export default App;
