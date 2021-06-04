import React, { useState, useEffect } from "react"

import '../../styles/components/slide_1_what/firstSlide.scss'

import bwAmmo from '../../images/slide_1_what/bw-ammo.svg'
import smile from '../../images/slide_1_what/Smile.svg'
import triangle from '../../images/slide_1_what/Triangle.svg'


const FirstSlide = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])

  return (<div className="slide-1" id="what-anchor">

    <h1 className="h1-main">
      <span className="slide-number">1</span>
      <span className="slide-title">Что мы делаем?</span>
    </h1>

    <img alt="bwAmmo" id="bwAmmo" src={bwAmmo} />
    <img alt="smile" id="smile" src={smile} />
    <img alt="triangle" id="triangle" src={triangle} />

    {width >= 768 ?
      <ul>
        <li id="li-head">Упрощаем процесс майнинга для геймеров</li>
        <li>Используем мощности компьютера для генерации криптовалюты</li>
        <li>Автоматически конвертируем ее в скины, которые передаем пользователям</li>
        <li>Больше нет нужды создавать крипто кошельки и управлять ими</li>
        <li>Скачайте приложение для Windows, отслеживайте прогресс на сайте и забирайте скины</li>
      </ul> : <>
        <h3>Упрощаем процесс майнинга для геймеров</h3>
        <p className="what-desc mt-3">
          Используем мощности компьютера для генерации криптовалюты,
          автоматически конвертируем ее в скины, которые передаем пользователям.
        </p></>
    }



  </div >)
}

export default FirstSlide