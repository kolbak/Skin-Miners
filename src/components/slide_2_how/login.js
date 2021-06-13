import * as React from "react"

import '../../styles/components/slide_2_how/login.scss'

import hidden_square1 from '../../images/slide_2_how/square1.svg'
import hidden_square2 from '../../images/slide_2_how/square2.svg'

// import pyramid from '../../images/slide_2_how/pyramid.svg'
// import points from '../../images/slide_2_how/points.svg'

const Login = () => {
  //* ХУКИ |||||||||||||||||||||||||||
  const [errorMessage, setErrorMessage] = React.useState({
    isError: false, message: "Неверный логин или пароль"
  });
  const [loading, setLoading] = React.useState(false);
  //* ||||||||||||||||||||||||||||||||
  function showError(message) {
    setErrorMessage({ isError: true, message: message });

    const formDiv = document.querySelector("form.login-computer__form");
    const login = document.querySelector("form.login-computer__form input[type=login]");
    const password = document.querySelector("form.login-computer__form input[type=password]");
    console.log(formDiv, login, password);
    formDiv?.classList.add("errorDiv");
    [login, password].forEach(x => x?.classList.add("errorInput"));

    setTimeout(() => {
      formDiv?.classList.remove("errorDiv");
      [login, password].forEach(x => x?.classList.remove("errorInput"));
    }, 1000)
  }

  async function signIn(e) {
    e.preventDefault();
    setLoading(true);
    // hideError();
    console.log("login", e.target[0].value, e.target[1].value);
    const response = await fetch("https://miningskins.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: e.target[0].value,
        password: e.target[1].value
      })
    })

    if (response.ok && typeof window !== `undefined`) {
      window.location.href = "https://miningskins.com/statistic"
    } else {
      const status = await response.text()
      console.log('/login message :>> ', status)
      setLoading(false)
      showError("Неверный логин или пароль")
    }
  }


  return <div className="wrap-how" id="login">

    <img alt="hidden_square1" id="hidden_square1" src={hidden_square1} />
    <img alt="hidden_square2" id="hidden_square2" src={hidden_square2} />

    <p id="login_desс">Войдите в программу. Используйте те же данные, что и на сайте: так мы сможем автоматически начислять вознаграждение.</p>
    <i className="bg-line_computer_login n-1" />
    <i className="bg-line_computer_login n-2" />
    <i className="bg-line_computer_login n-3" />
    <i className="bg-line_computer_login n-4" />
    <i className="bg-line_computer_login n-5" />

    <form className="offset-md-8 login-computer__form col-3" onSubmit={signIn}>
      <div className="mb-3"><h4 style={{ textAlign: "center" }}>Форма входа</h4></div>

      {errorMessage.isError ?
        <p className="error">{errorMessage.message}</p> :
        <br />}

      <div className="mb-3"><input className="form-control" disabled={loading} required placeholder="Логин" type="login" /></div>
      <div className="mb-3"><input className="form-control" disabled={loading} required placeholder="Пароль" type="password" /></div>
      {/* <div className="mb-3"><input className="form-control" required placeholder="Логин" onChange={inputData} value={formData.login} name="login" type="login" /></div>
      <div className="mb-3"><input className="form-control" required placeholder="Пароль" onChange={inputData} value={formData.password} name="password" type="password" /></div> */}

      <br />
      <button type="submit" className="btn btn-primary" disabled={loading}>
        Войти
      </button>

      <div className="mt-3" style={{ textAlign: "center" }}>
        <a href="#registration-anchor">Регистрация</a>
      </div>
    </form>
  </div>
}

export default Login