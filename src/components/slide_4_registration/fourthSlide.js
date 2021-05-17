import React, { useState, ChangeEvent } from 'react';

import '../../styles/components/slide_4_registration/fourSlide.scss'

// TODO: Вставить панель регистрации из предыдущего проекта
// TODO: расположить стрелочки с подсказками



const FourthSlide = () => {
  const URL = "http://178.154.195.155:8000/api";
  const REGISTER = "/register";
  //* ХУКИ |||||||||||||||||||||||||||
  const [formData, setFormData] = useState(
    {
      login: process.env.NODE_ENV === 'development' ? "development@gmail.com" : "",
      password: process.env.NODE_ENV === 'development' ? "development" : "",
      passwordRepeat: process.env.NODE_ENV === 'development' ? "development" : "",
      name: process.env.NODE_ENV === 'development' ? "developer" : "",
      steam_url: process.env.NODE_ENV === 'development' ? "https://steamcommunity.com/tradeoffer/new/?partner=your_partner&token=your_token" : ""
    });
  const [errorMessage, setErrorMessage] = useState({
    isError: false, message: "Что-то пошло не так с формой. Решение: спроси у мамы"
  });
  const [loading, setLoading] = useState(false);
  const [notSame, setNotSame] = useState(false);
  const [notSteamLink, setNotSteamLink] = useState(false);
  //* ||||||||||||||||||||||||||||||||

  function inputData(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function inputPassword(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value, passwordRepeat: "" }));
    setNotSame(false);
  }
  function checkSame(e) {

    if (e.target.value.length === 0
      || formData.password === e.target.value
      || formData.password.length === 0) {
      setNotSame(false);
      return;
    }
    let error = formData.password.length < e.target.value.length;

    for (let i = 0; i < e.target.value.length; i++) {
      if (formData.password[i] !== e.target.value[i]) {
        error = true; break;
      }
    }
    // console.group('same');
    // console.log(formData.password);
    // console.log(e.target.value);
    // console.log(error);
    // console.groupEnd();
    setNotSame(error);
  }
  function checkSteamLink(e) {
    const regexArr = e.target.value.match(
      /^https:\/\/steamcommunity\.com\/tradeoffer\/new\/\?partner=\w*&token=\w*(?!&)$/);

    setNotSteamLink(
      e.target.value.length !== 0 &&
      (regexArr === null || regexArr.length !== 1)
    )
  }
  function hideError() {
    setErrorMessage({ isError: false, message: "" });
  }
  function showError(message) {
    setErrorMessage({ isError: true, message: message });
    // setFormData(x => ({ ...x, password: "", passwordRepeat: "" }));
  }


  async function signUpRequest(formData) {

    //* Разбитие steam_url
    const steam_partner = formData.steam_url.split("partner=")[1].split("&")[0]
    const steam_token = formData.steam_url.split("token=")[1]

    // Все данные с формы
    // console.log(URL + requests.LOGIN, {
    //   login: formData.login,
    //   name: formData.name,
    //   password: formData.password,
    //   passwordRepeat: formData.passwordRepeat,
    //   steam_url: formData.steam_url,
    //   partner: steam_partner,
    //   token: steam_token
    // });

    // Запрос на регистрацию
    const response = await fetch(URL + REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: formData.login,
        name: formData.name,
        password: formData.password,
        partner: steam_partner,
        token: steam_token
      })
    })
      .then(async resp => {
        const text = await resp.text();
        try {
          return { ok: true, message: "ok", data: JSON.parse(text) }
        } catch (error) {
          return { ok: false, message: text, data: null }
        }
      })

    return response;
  }

  async function signUp(e) {
    e.preventDefault();
    setLoading(true);
    hideError();
    const response = await signUpRequest(formData);
    // console.log('/register message :>> ', response.message, response.ok);

    if (!response.ok) {
      setLoading(false);
      showError(response.message);
      return;
    }
    // history.push("/about");
  }



  return (
    <div className="wrap-slide">
      <form action="" onSubmit={signUp}>
        <h3>Регистрация</h3>

        {errorMessage.isError ?
          <p className="error" style={{ marginTop: "-1.5rem" }}>{errorMessage.message}</p> :
          <br />}

        <div className="form-group">
          <label className="next-in-group">→ Логин</label>
          <input value={formData.login} onChange={(e) => inputData(e)} name="login"
            type="login" className="form-control" placeholder="Ваш неповторимый логин" required />

          <label className="next-in-group">→ Никнейм</label>
          <input value={formData.name} onChange={(e) => inputData(e)} name="name"
            className="form-control" placeholder="Ваш интересный никнейм" required />
        </div>

        <div className="form-group">
          <label className="next-in-group">→ Пароль</label>
          <input value={formData.password} onChange={(e) => inputPassword(e)} name="password"
            type="password" className={"form-control " + (notSame ? "errorInput" : "")}
            placeholder="Ваш неприступный пароль" required />

          <label className="next-in-group">→ Проверка пароля</label>
          <input value={formData.passwordRepeat}
            onChange={(e) => { inputData(e); checkSame(e) }} name="passwordRepeat"
            type="password" className={"form-control " + (notSame ? "errorInput" : "")}
            placeholder="Не могли бы вы его повторить?" required />
          {notSame && <small className="errorSmall">Пароли должны совпадать</small>}
        </div>
        <br />

        <div className="form-group">
          <label>→ Ваша ссылка Steam</label>
          <input value={formData.steam_url}
            onChange={(e) => { inputData(e); checkSteamLink(e) }} name="steam_url"
            type="text" className={"form-control " + (notSteamLink ? "errorInput" : "")}
            placeholder="https://steamcommunity.com/tradeoffer/new/?partner=[данные]&token=[токен]" required />
          {notSteamLink && <><small className="errorSmall">Некорректная ссылка</small><br /></>}
          <small>Для нахождения этой ссылки, <a href="http://steamcommunity.com/my/tradeoffers/privacy">перейдите на официальный сайт Steam</a></small>
        </div>
        <br />

        <button type="submit" className="btn btn-primary btn-lg btn-block">
          {loading && <span className="spinner-grow spinner-grow-sm loader-left" style={{ right: "1rem" }} role="status" aria-hidden="true"></span>}
          {loading ? <>Создание аккаунта</> : <>Зарегистрироваться</>}
          {loading && <span className="spinner-grow spinner-grow-sm loader-right" style={{ left: "1rem" }} role="status" aria-hidden="true"></span>}
        </button>
        <br />

      </form>

    </div>
  )
}

export default FourthSlide