import React, { useState } from "react"

import '../../styles/components/slide_5_FAQ/fifthSlide.scss'

import hidden_triangle from '../../images/slide_5_FAQ/triangle.svg'
import hidden_square from '../../images/slide_5_FAQ/square.svg'

// TODO: Найти подходящий код, откуда этот раздел можно было бы адаптировать

const FAQ = [
  {
    num: 1,
    question: "В чем отличие от обычного маркета скинов?",
    answer: "В чем отличие от обычного маркета скинов?"
  },
  {
    num: 2,
    question: "Почему за работающее приложение платят деньги?",
    answer: "Мы используем мощности компьютера, чтобы решать сложные уравнения. За их решения начисляется вознаграждение. Обрабатывая множество данных, мы понимаем, какое вознаграждение начислено благодаря вам, и отображаем это в личном кабинете."
  },
  {
    num: 3,
    question: "Сколько приложение должно работать, чтобы я начал зарабатывать?",
    answer: "Сколько приложение должно работать, чтобы я начал зарабатывать?"
  },
  {
    num: 4,
    question: "Можно ли выключить компьютер после запуска приложения?",
    answer: "Можно ли выключить компьютер после запуска приложения?"
  },
  {
    num: 5,
    question: "Какие скины вы предлагаете?",
    answer: "Какие скины вы предлагаете?"
  }
]

const FifthSlide = () => {

  const [info, setInfo] = useState(FAQ[1])

  // function changeInfo(num) {

  // }

  return (
    <div id="FAQ" className="wrap-slide">

      <img id="hidden_triangle" alt="triangle" src={hidden_triangle} />
      <img id="hidden_square" alt="square" src={hidden_square} />


      <h1 className="m-auto" style={{ width: "fit-content" }}>Я хотел бы узнать...</h1>
      <div id="leftSide" className="w-50">
        {FAQ.map((x, i) => <button key={i} className="btn btn-dark btn-lg mb-3" type="button"
          onClick={() => setInfo(FAQ[i])} children={
            <span>{x.num}.&nbsp;&nbsp;{x.question}</span>
          } />)}
      </div>

      <div id="rightSide" className="w-50">
        <div id="numZone">
          <span id="num" children={info.num} />
        </div>
        <div id="answerZone">
          <h3 id="question">{info.question}</h3>
          <div id="line" />
          <p id="answer">{info.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FifthSlide