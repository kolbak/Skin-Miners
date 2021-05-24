import * as React from "react"

import '../../styles/components/slide_2_how/login.scss'

import hidden_square1 from '../../images/slide_2_how/square1.svg'
import hidden_square2 from '../../images/slide_2_how/square2.svg'
import hidden_triangle1 from '../../images/slide_2_how/triangle.svg'

import pyramid from '../../images/slide_2_how/pyramid.svg'
import points from '../../images/slide_2_how/points.svg'

const Login = () => (<div className="wrap-how" id="login">

  <img alt="hidden_square1" id="hidden_square1" src={hidden_square1} />
  <img alt="hidden_square2" id="hidden_square2" src={hidden_square2} />
  <img alt="hidden_triangle1" id="hidden_triangle1" src={hidden_triangle1} />

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
  <i className="bg-line n-1" />
  <i className="bg-line n-2" />
  <i className="bg-line n-3" />
  <i className="bg-line n-4" />
  <i className="bg-line n-5" />

  <form className="offset-md-8 col-3">
    <div className="mb-3"><h4 style={{ textAlign: "center" }}>Форма входа</h4></div>
    <br />
    <div className="mb-3"><input placeholder="Email" type="email" className="form-control" id="inputEmail" /></div>
    <div className="mb-3"><input placeholder="Пароль" type="password" className="form-control" id="inputPassword" /></div>
    <div className="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="check" />
      <label class="form-check-label" for="check">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>

    <div className="mt-3" style={{ textAlign: "center" }}>
      <a href="Регистрация">Регистрация</a>
    </div>
    <img alt="pyramid" id="pyramid" src={pyramid} />
    <img alt="points" id="points" src={points} />

  </form>
  <div className="offset-md-9 col-4 blue-back"></div>

</div>)

export default Login