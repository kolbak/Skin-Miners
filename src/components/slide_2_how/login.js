import * as React from "react"

import '../../styles/components/slide_2_how/login.scss'

const Login = () => {

  return (
    <div className="wrap-how" id="login">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <i className="bg-line n-1" />
      <i className="bg-line n-2" />
      <i className="bg-line n-3" />
      <i className="bg-line n-4" />
      <i className="bg-line n-5" />

      <form className="col-3">
        <div className="mb-3"><h4 style={{ textAlign: "center" }}>Форма входа</h4></div>
        <br />
        <div className="mb-3"><input placeholder="Email" type="email" className="form-control" id="inputEmail" /></div>
        <div className="mb-3"><input placeholder="Пароль" type="password" className="form-control" id="inputPassword" /></div>
        <div className="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="check" />
          <label class="form-check-label" for="check">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        <div className="mb-3"><a href="Регистрация" className="mt-3">Регистрация</a></div>

      </form>
      <div className="blue-back"></div>
    </div>
  )
}

export default Login