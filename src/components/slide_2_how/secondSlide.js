import * as React from "react"

import Registration from './registration'

import '../../styles/components/slide_2_how/secondSlide.scss'

// TODO: сделать, а лучше найти норм stepper, карусель, scrollSpy 

const SecondSlide = () => {
  return (
    <div className="wrap-slide slide-2">
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
        <div className="content" children={<Registration />} />
      </div>
    </div>
  )
}

export default SecondSlide