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

  const [notEmail, setNotEmail] = useState(false);
  const [notNickname, setNotNickname] = useState(false);
  const [notSame, setNotSame] = useState(false);
  const [notSteamLink, setNotSteamLink] = useState(false);

  const password = useRef(null);
  const passwordRepeat = useRef(null);
  //* ||||||||||||||||||||||||||||||||

  function checkSame(e) {

    const pass = password.current.value
    const passRepeat = e.target.value

    if (passRepeat.length === 0
      || pass === passRepeat
      || pass.length === 0) {
      setNotSame(false);
      return;
    }
    let error = pass.length < passRepeat.length;

    for (let i = 0; i < passRepeat.length; i++) {
      if (pass[i] !== passRepeat[i]) {
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
    return await fetch("https://miningskins.com/api/register", {
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
      {errorMessage.isError && <p className="error">
        {errorMessage.message}
      </p>}

      <div className="mb-custom-4">
        <input type="email" name="login" required placeholder="Email" disabled={loading}
          className={"form-control g-light " + (notNickname ? "errorInput errorInputReg" : "")} />
        {width > 1000 && notEmail && <>
          <p id="hint_email_text" className="hint">Амм, тут должен быть email... <br />
            <span className="orange">( имейл )</span>
          </p>
          <img id="hint_email" className="hint-arrow" alt="hint_email" src={hint_email} />
        </>}
      </div>
      <div className="mb-custom-4">
        <input name="name" id="inputNickname" placeholder="Никнейм" required disabled={loading}
          className={"form-control g-light " + (notNickname ? "errorInput errorInputReg" : "")} />
        {width > 1000 && notNickname && <>
          <p id="hint_nickname_text" className="hint">Данный никнейм уже занят кем-то другим <br />
            <span className="orange">( попробуйте ещё какой-нибудь )</span>
          </p>
          <img id="hint_nickname" className="hint-arrow" alt="hint_nickname" src={hint_nickname} />
        </>}
      </div>
      <div className="mb-custom-4">
        <input type="password" className={"form-control g-light " + (notSame ? "errorInput errorInputReg" : "")} ref={password}
          name="password" id="inputPassword" placeholder="Пароль" disabled={loading}
          onChange={_ => { passwordRepeat.current.value = ""; setNotSame(false); }} required />
      </div>
      <div className="mb-custom-4">
        <input type="password" className={"form-control r-light " + (notSame ? "errorInput errorInputReg" : "")} ref={passwordRepeat}
          onChange={checkSame} name="passwordRepeat" id="inputPasswordCheck" disabled={loading}
          placeholder="Проверка пароля" required />
        {width > 1000 && notSame && <>
          <p id="hint_password_check_text" className="hint">Пароли должны быть одинаковыми <br />
            <span className="orange">( потому и проверка )</span>
          </p>
          <img id="hint_password_check" className="hint-arrow" alt="hint_password_check" src={hint_password_check} />
        </>}
      </div>
      <div className="mb-custom-4">
        <input type="link" name="steam_url" id="inputSteamLink" disabled={loading}
          className={"form-control " + (notSteamLink ? "errorInput errorInputReg" : "")}
          onChange={checkSteamLink} placeholder="Ссылка на стим" required />
        {width > 1000 && notSteamLink && <>
          <p id="hint_steam_text" className="hint">Для нахождения этой ссылки, <a href="http://steamcommunity.com/my/tradeoffers/privacy">перейдите на официальный сайт Steam</a></p>
          <img id="hint_steam" className="hint-arrow" alt="hint_steam" src={hint_steam} />
        </>}
      </div>
      <button style={{ marginTop: "1rem" }} disabled={loading} type="submit" className="btn btn-primary btn-lg d-block w-75 m-auto" children={"Регистрация"} />
    </form>
  </div>)

  // function inputData(e) {
  //   setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  // }
  // function inputPassword(e) {
  //   setFormData(prev => ({ ...prev, [e.target.name]: e.target.value, passwordRepeat: "" }));
  //   setNotSame(false);
  // }


  // return (
  //   <div className="wrap-slide">
  //     <h1 className="h1-main">
  //       <span className="slide-number">4</span>
  //       <span className="slide-title">Регистрация</span>
  //     </h1>
  //     <form action="" onSubmit={signUp}>
  //       <h3>Регистрация</h3>

  //       {errorMessage.isError ?
  //         <p className="error" style={{ marginTop: "-1.5rem" }}>{errorMessage.message}</p> :
  //         <br />}

  //       <div className="form-group">
  //         <label className="next-in-group">→ Логин</label>
  //         <input value={formData.login} onChange={(e) => inputData(e)} name="login"
  //           type="login" className="form-control" placeholder="Ваш неповторимый логин" required />

  //         <label className="next-in-group">→ Никнейм</label>
  //         <input value={formData.name} onChange={(e) => inputData(e)} name="name"
  //           className="form-control" placeholder="Ваш интересный никнейм" required />
  //       </div>

  //       <div className="form-group">
  //         <label className="next-in-group">→ Пароль</label>
  //         <input value={formData.password} onChange={(e) => inputPassword(e)} name="password"
  //           type="password" className={"form-control " + (notSame ? "errorInput" : "")}
  //           placeholder="Ваш неприступный пароль" required />

  //         <label className="next-in-group">→ Проверка пароля</label>
  //         <input value={formData.passwordRepeat}
  //           onChange={(e) => { inputData(e); checkSame(e) }} name="passwordRepeat"
  //           type="password" className={"form-control " + (notSame ? "errorInput" : "")}
  //           placeholder="Не могли бы вы его повторить?" required />
  //         {notSame && <small className="errorSmall">Пароли должны совпадать</small>}
  //       </div>
  //       <br />

  //       <div className="form-group">
  //         <label>→ Ваша ссылка Steam</label>
  //         <input value={formData.steam_url}
  //           onChange={(e) => { inputData(e); checkSteamLink(e) }} name="steam_url"
  //           type="text" className={"form-control " + (notSteamLink ? "errorInput" : "")}
  //           placeholder="https://steamcommunity.com/tradeoffer/new/?partner=[данные]&token=[токен]" required />
  //         {notSteamLink && <><small className="errorSmall">Некорректная ссылка</small><br /></>}
  //         <small>Для нахождения этой ссылки, <a href="http://steamcommunity.com/my/tradeoffers/privacy">перейдите на официальный сайт Steam</a></small>
  //       </div>
  //       <br />

  //       <button type="submit" className="btn btn-primary btn-lg btn-block">
  //         {loading && <span className="spinner-grow spinner-grow-sm loader-left" style={{ right: "1rem" }} role="status" aria-hidden="true"></span>}
  //         {loading ? <>Создание аккаунта</> : <>Зарегистрироваться</>}
  //         {loading && <span className="spinner-grow spinner-grow-sm loader-right" style={{ left: "1rem" }} role="status" aria-hidden="true"></span>}
  //       </button>
  //       <br />

  //     </form>

  //   </div>
  // )
}

export default FourthSlide