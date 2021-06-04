import React, { useState, useEffect } from "react"

import '../../styles/components/slide_5_FAQ/fifthSlide.scss'

import hidden_triangle from '../../images/slide_5_FAQ/triangle.svg'
import hidden_square from '../../images/slide_5_FAQ/square.svg'

// TODO: Найти подходящий код, откуда этот раздел можно было бы адаптировать

const FAQ = [
  {
    num: 1,
    question: "В чем отличие от обычного маркета скинов?",
    answer: "На маркете скины покупаются за реальные деньги, у нас — за время, проведенное в приложении."
  },
  {
    num: 2,
    question: "Почему за работающее приложение платят деньги?",
    answer: "Мы используем мощности компьютера, чтобы решать сложные уравнения. За их решения начисляется вознаграждение. Обрабатывая множество данных, мы понимаем, какое вознаграждение начислено благодаря вам, и отображаем это в личном кабинете."
  },
  {
    num: 3,
    question: "Сколько приложение должно работать, чтобы я начал зарабатывать?",
    answer: "Чем дольше работает приложение, тем больше заработок. Конкретные суммы зависят от мощности компьютера, но в среднем первый скин можно вывести уже через сутки майнинга."
  },
  {
    num: 4,
    question: "Можно ли выключить компьютер после запуска приложения?",
    answer: "Нет. Приложение использует мощности компьютера, а если он будет выключен, сделать это не получится. Но окно можно свернуть, чтобы оно не мешало заниматься привычными делами."
  },
  {
    num: 5,
    question: "Какие скины вы предлагаете?",
    answer: "У нас доступен большой ассортимент скинов, но пока что только для CS:GO. В будущем обязательно добавим dota2 — дайте нам немного времени! Увидеть актуальный каталог можно в разделе \"Маркет\"."
  }
]


const FifthSlide = () => {

  const [info, setInfo] = useState(FAQ[1])
  const [width, setWidth] = useState()

  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])


  return (<div id="FAQ" className="wrap-slide">

    <img id="hidden_triangle" alt="triangle" src={hidden_triangle} />
    <img id="hidden_square" alt="square" src={hidden_square} />


    <h1 className="m-auto" style={{ width: "fit-content" }}>Я хотел бы узнать...</h1>

    {width >= 1050 ? <>
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
    </> : <>
      <div className="accordion" id="accordionFAQ">
        {FAQ.map((x, i) =>
          <div key={i} className="accordion-item">
            <h2 className="accordion-header" id={`heading-${i}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${i}`} aria-expanded="true" aria-controls={`collapse-${i}`}>
                <span>{x.num}</span>{x.question}
              </button>
            </h2>
            <div id={`collapse-${i}`} className="accordion-collapse collapse" aria-labelledby={`heading-${i}`} data-bs-parent="#accordionFAQ">
              <div className="accordion-body">
                <p>{x.answer}</p>
                <div className="endline" />
              </div>
            </div>
          </div>)}
      </div>

    </>}

  </div >)
}

export default FifthSlide