import * as React from "react"

import '../../styles/components/slide_2_how/registration.scss'

import imgRegistration from '../../images/slide_2_how/registration.png'
import hidden_account from '../../images/slide_2_how/hidden_account.svg'
import hidden_circle from '../../images/slide_2_how/circle.svg'
import hidden_square from '../../images/slide_2_how/square.svg'


const Registration = () => (<div className="wrap-reg" id="registration">

  <img alt="hidden_account" id="hidden_account" src={hidden_account} />
  <img alt="hidden_circle" id="hidden_circle" src={hidden_circle} />
  <img alt="hidden_square" id="hidden_square" src={hidden_square} />

  <p>Создайте аккаунт на сайте, чтобы получить доступ к приложению.<br />Отслеживайте прогресс прямо из браузера</p>
  <img alt="registration" className="registration-img" src={imgRegistration} />

</div>)

export default Registration