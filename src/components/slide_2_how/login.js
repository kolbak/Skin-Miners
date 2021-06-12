import * as React from "react"

import '../../styles/components/slide_2_how/login.scss'

import hidden_square1 from '../../images/slide_2_how/square1.svg'
import hidden_square2 from '../../images/slide_2_how/square2.svg'
import hidden_triangle1 from '../../images/slide_2_how/triangle.svg'

// import pyramid from '../../images/slide_2_how/pyramid.svg'
// import points from '../../images/slide_2_how/points.svg'

const Login = () => (
  <div className="wrap-how" id="login">

    <img alt="hidden_square1" id="hidden_square1" src={hidden_square1} />
    <img alt="hidden_square2" id="hidden_square2" src={hidden_square2} />
    <img alt="hidden_triangle1" id="hidden_triangle1" src={hidden_triangle1} />

    <p>Войдите в программу. Используйте те же данные, что и на сайте: так мы сможем автоматически начислять вознаграждение.</p>
    <i className="bg-line_computer_login n-1" />
    <i className="bg-line_computer_login n-2" />
    <i className="bg-line_computer_login n-3" />
    <i className="bg-line_computer_login n-4" />
    <i className="bg-line_computer_login n-5" />

    <form className="offset-md-8 login-computer__form col-3">
      <div className="mb-3"><h4 style={{ textAlign: "center" }}>Форма входа</h4></div>
      <br />
      <div className="mb-3"><input placeholder="Email" type="email" className="form-control" /></div>
      <div className="mb-3"><input placeholder="Пароль" type="password" className="form-control" /></div>
      <br />
      <button type="submit" className="btn btn-primary">Войти</button>

      <div className="mt-3" style={{ textAlign: "center" }}>
        <a href="#registration-anchor">Регистрация</a>
      </div>
    </form>
  </div>
)

export default Login