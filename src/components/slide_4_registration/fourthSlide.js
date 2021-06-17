import React, { useState, useEffect, useRef } from "react"
import '../../styles/components/slide_4_registration/fourSlide.scss'

import hint_email from '../../images/slide_4_registration/hint_email.svg'
import hint_nickname from '../../images/slide_4_registration/hint_nickname.svg'
import hint_password_check from '../../images/slide_4_registration/hint_password_check.svg'
import hint_steam from '../../images/slide_4_registration/hint_steam.svg'

import circle from '../../images/slide_4_registration/circle.svg'
import hidden_triangle from '../../images/slide_4_registration/hidden_triangle.svg'

//Присутствуют недопустимые символы


const FourthSlide = () => {
  // * ХУКИ |||||||||||||||||||||||||||
  // const [formData, setFormData] = useState(
  //   {
  //     login: process.env.NODE_ENV === 'development' ? "development@gmail.com" : "",
  //     password: process.env.NODE_ENV === 'development' ? "development" : "",
  //     passwordRepeat: process.env.NODE_ENV === 'development' ? "development" : "",
  //     name: process.env.NODE_ENV === 'development' ? "developer" : "",
  //     steam_url: process.env.NODE_ENV === 'development' ? "https://steamcommunity.com/tradeoffer/new/?partner=your_partner&token=your_token" : ""
  //   });
  const [errorMessage, setErrorMessage] = useState({
    isError: false, message: "Что-то пошло не так с формой. Решение: спроси у мамы"
  });
  const [width, setWidth] = useState()
  const [loading, setLoading] = useState(false);

  const [notEmail, setNotEmail] = useState(); //true
  const [notNickname, setNotNickname] = useState(); //true
  const [notPassword, setNotPassword] = useState(); //true
  const [notPasswordRepeat, setNotPasswordRepeat] = useState(); //true
  const [notSteamLink, setNotSteamLink] = useState(); //true

  const password = useRef(null);
  const passwordRepeat = useRef(null);
  //* ||||||||||||||||||||||||||||||||

  function checkEmail(e) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log('checkEmail :>> ', regex.test(e.target.value));
    if (e.target.value.length === 0)
      setNotEmail(undefined)
    else
      setNotEmail(!regex.test(e.target.value))
  }
  function checkNickname(e) {
    if (e.target.value.length === 0)
      setNotNickname(undefined)
    else
      setNotNickname(false)
  }
  function checkPassword(e) {
    passwordRepeat.current.value = "";
    setNotPasswordRepeat(undefined)
    setNotPassword(e.target.value.length === 0 ? undefined : false)
  }
  function checkSame(e) {
    const pass = password.current.value
    const passRepeat = e.target.value
    console.log(checkSame);
    if (passRepeat.length === 0 || pass.length === 0)
      return setNotPasswordRepeat(undefined);
    if (pass === passRepeat)
      return setNotPasswordRepeat(false)

    let error = pass.length < passRepeat.length;

    for (let i = 0; i < passRepeat.length; i++) {
      if (pass[i] !== passRepeat[i]) {
        error = true; break;
      }
    }
    setNotPasswordRepeat(error);
  }
  function checkSteamLink(e) {
    const regexArr = e.target.value.match(
      /^https:\/\/steamcommunity\.com\/tradeoffer\/new\/\?partner=\w*&token=\w*(?!&)$/);

    if (e.target.value.length === 0)
      setNotSteamLink(undefined)
    else
      setNotSteamLink(regexArr === null || regexArr.length !== 1)
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
    const steam_partner = formData[4].value.split("partner=")[1].split("&")[0]
    const steam_token = formData[4].value.split("token=")[1]

    console.log({
      login: formData[0].value,
      name: formData[1].value,
      password: formData[2].value,
      partner: steam_partner,
      token: steam_token
    });
    //* Запрос на регистрацию
    return await fetch(`${process.env.GATSBY_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: formData[0].value,
        name: formData[1].value,
        password: formData[2].value,
        partner: steam_partner,
        token: steam_token
      })
    })
      .then(resp => resp.text())
      .then(resp => { console.log(resp); return resp })
      .then(text => {
        try {
          return { ok: true, message: "ok", data: JSON.parse(text) }
        } catch (error) {
          return { ok: false, message: text, data: null }
        }
      })
  }

  async function signUp(e) {
    e.preventDefault();
    setLoading(true);
    hideError();
    const response = await signUpRequest(e.target);
    console.log('/register message :>> ', response.message, response.ok);

    if (!response.ok) {
      setLoading(false);
      showError(response.message);
      return;
    }
    // history.push("/about");
  }

  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])


  return (<div className="wrap-slide" id="registration-anchor" style={{ height: "100vh" }}>

    <h1 className="h1-main">
      <span className="slide-number">4</span>
      <span className="slide-title">Регистрация</span>
    </h1>

    <img id="circle" alt="circle" src={circle} />
    <img id="hidden_triangle" alt="hidden_triangle" src={hidden_triangle} />

    <form id="formRegistration" onSubmit={signUp}>
      {errorMessage.isError && <p className="error" children={errorMessage.message} />}

      <div className={notEmail === true && width <= 1000 ? "mb-custom-2" : "mb-custom-4"}>
        <input type="email" name="login" id="login-registration" required placeholder="Email" disabled={loading} onBlur={checkEmail}
          className={"form-control " + (notEmail === undefined || notEmail === null ? "" : notEmail === true ? "errorInput errorInputReg r-light" : "g-light")} />
        {width <= 1000 && notEmail && <label htmlFor="login-registration" className="label-error">Тут должен быть email...</label>}
        {width > 1000 && notEmail && <>
          <p id="hint_email_text" className="hint">Амм, тут должен быть email... <br />
            <span className="orange">( имейл )</span>
          </p>
          <img id="hint_email" className="hint-arrow" alt="hint_email" src={hint_email} />
        </>}
      </div>
      <div className={notNickname === true && width <= 1000 ? "mb-custom-2" : "mb-custom-4"}>
        <input name="name" id="inputNickname" placeholder="Никнейм" required disabled={loading} onChange={checkNickname}
          className={"form-control " + (notNickname === undefined ? "" : notNickname === true ? "errorInput errorInputReg r-light" : "g-light")} />
        {width <= 1000 && notNickname && <label htmlFor="inputNickname" className="label-error">Данный никнейм занят</label>}
        {width > 1000 && notNickname && <>
          <p id="hint_nickname_text" className="hint">Данный никнейм уже занят кем-то другим <br />
            <span className="orange">( попробуйте ещё какой-нибудь )</span>
          </p>
          <img id="hint_nickname" className="hint-arrow" alt="hint_nickname" src={hint_nickname} />
        </>}
      </div>
      <div className={notPassword === true && width <= 1000 ? "mb-custom-2" : "mb-custom-4"}>
        <input type="password" placeholder="Пароль" disabled={loading} required
          className={"form-control " + (notPassword === undefined ? "" : notPassword === true ? "errorInput errorInputReg r-light" : "g-light")}
          ref={password} onChange={checkPassword} name="password" id="inputPassword" />
        <label htmlFor="inputPassword" style={{ display: "none" }} />
      </div>
      <div className={notPasswordRepeat === true && width <= 1000 ? "mb-custom-2" : "mb-custom-4"}>
        <input type="password" placeholder="Проверка пароля" disabled={loading} required
          className={"form-control " + (notPasswordRepeat === undefined ? "" : notPasswordRepeat === true ? "errorInput errorInputReg r-light " : "g-light")}
          ref={passwordRepeat} onChange={checkSame} name="passwordRepeat" id="inputPasswordCheck" />
        {width <= 1000 && notPasswordRepeat && <label htmlFor="inputPasswordCheck" className="label-error">Пароли не совпадают</label>}
        {width > 1000 && notPasswordRepeat && <>
          <p id="hint_password_check_text" className="hint">
            Пароли должны быть одинаковыми <br />
            <span className="orange">( потому и проверка )</span>
          </p>
          <img id="hint_password_check" className="hint-arrow" alt="hint_password_check" src={hint_password_check} />
        </>}
      </div>
      <div className={notSteamLink === true && width <= 1000 ? "mb-custom-2" : "mb-custom-4"}>
        <input type="link" name="steam_url" id="inputSteamLink" disabled={loading}
          className={"form-control " + (notSteamLink === undefined ? "" : notSteamLink === true ? "errorInput errorInputReg r-light" : "g-light")}
          onChange={checkSteamLink} placeholder="Ссылка на стим" required />
        {width <= 1000 && notSteamLink && <label className="label-error" htmlFor="inputSteamLink">Её можно найти в <a href="http://steamcommunity.com/my/tradeoffers/privacy">Steam</a></label>}
        {width > 1000 && notSteamLink && <>
          <p id="hint_steam_text" className="hint">Для нахождения этой ссылки, <a href="http://steamcommunity.com/my/tradeoffers/privacy">перейдите на официальный сайт Steam</a></p>
          <img id="hint_steam" className="hint-arrow" alt="hint_steam" src={hint_steam} />
        </>}
      </div>
      <button style={{ marginTop: "1rem" }} type="submit" className="btn btn-primary btn-lg d-block w-75 m-auto"
        disabled={loading || (notEmail ?? true) || (notNickname ?? true) || (notPassword ?? true) || (notPasswordRepeat ?? true) || (notSteamLink ?? true)}>
        {loading && <>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
        </>}
        {!loading && "Регистрация"}
      </button>
    </form>
  </div>)
}

export default FourthSlide