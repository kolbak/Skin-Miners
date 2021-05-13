import * as React from "react"

import Registration from './registration'

import '../../styles/components/thirdSlide/thirdSlide.scss'

//TODO сделать норм stepper

const ThirdSlide = () => {
  // function stepClick() {

  // }

  return (
    <div className="wrap-slide slide-3">
      <h1 className="h1-main">
        <span className="slide-number">2</span>
        Как это работает?</h1>
      <div className="wrap-tabs">
        <ul>
          <li className="active"><i></i> <h2>Регистрация</h2></li>
          <li><i></i> <h2>Скачать приложение</h2></li>
          <li><i></i> <h2>Логин</h2></li>
          <li><i></i> <h2>Майнинг</h2></li>
        </ul>
        <div className="content">
          <Registration  />
        </div>
      </div>
    </div>
  )
}

export default ThirdSlide