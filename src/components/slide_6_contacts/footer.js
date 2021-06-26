
import React, { useState, useEffect } from "react"

import '../../styles/components/slide_6_contacts/footer.scss'
import '../../styles/components/slide_6_contacts/footer_mobile.scss'

import four_words from "../../images/slide_6_contacts/four_words.svg";
import mail_and_telephone from "../../images/slide_6_contacts/mail_and_telephone.svg";
import three_figures from "../../images/slide_6_contacts/three_figures.svg";
import arrow_to_contacts from '../../images/slide_6_contacts/arrow_to_contacts.svg'
import two_textboxes from '../../images/slide_6_contacts/two_textboxes.svg'
import two_textboxes_sucs from '../../images/slide_6_contacts/two_textboxes_sucs.svg'
import two_lines from '../../images/slide_6_contacts/two_lines.svg'
import footer__line from '../../images/slide_6_contacts/footer__line.svg'
import vk_gray from '../../images/slide_6_contacts/vk_gray.svg'
import telegram_gray from '../../images/slide_6_contacts/telegram_gray.svg'
import discord_gray from '../../images/slide_6_contacts/discord_gray.svg'

import two_textboxes_mobile from '../../images/slide_6_contacts/two_textboxes_mobile.svg'
// import icons_mobile from '../../images/slide_6_contacts/icons_mobile.svg'
import mail_and_telephone_mobile from "../../images/slide_6_contacts/mail_and_telephone_mobile.svg";
import four_words_mobile from "../../images/slide_6_contacts/four_words_mobile.svg";

const Footer = () => {
  // * ХУКИ |||||||||||||||||||||||||||
  const [width, setWidth] = useState()
  const [notEmail, setNotEmail] = useState();
  const [notEmpty, setNotEmpty] = useState();
  const [loading, setLoading] = useState(false);
  //* ||||||||||||||||||||||||||||||||

  function checkEmail(e) {
    // const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log('checkEmail :>> ', regex.test(e.target.value));
    if (e.target.value.length === 0)
      setNotEmail(undefined)
    else
      setNotEmail(!regex.test(e.target.value))
  }
  function checkEmpty(e) {
    setNotEmpty(e.target.value.length === 0 ? undefined : false)
  }

  async function sendMessge(e) {
    e.preventDefault()
    console.log(e.target[0].value, e.target[1].value);
    setLoading(true)

    setTimeout(() => { setLoading(false) }, 2000)
    const response = await fetch(`${process.env.GATSBY_URL}/api/send-support-message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: e.target[0].value,
        text: e.target[1].value
      })
    })
    if (await response.json()) {
    }
  }
  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])

  function footer__sucsess(boolean__value) {
    document.getElementById('form_footer').src = two_textboxes_sucs;
    if (boolean__value === true) {
      document.getElementById('formControlTextarea').placeholder = "Ваш запрос отправлен, ожидайте ответа";
      document.getElementById('formControlTextarea').classList.add("footer__form__sucs-text");
    }
    else {
      document.getElementById('formControlTextarea').placeholder = "Ваш запрос не отправлен, повторите попытку позже";
      document.getElementById('formControlTextarea').classList.add("footer__form__fail-text");
    }
    //let div = document.createElement('div');
    //div.className = "form__sucs-text";
    //div.innerHTML = "Ваш запрос отправлен, ожидайте ответа";
    //document.getElementById('append-text').append(div);  
  }

  function footer__sucsess_m(boolean__value) {
    if (boolean__value === true) {
      let p = document.createElement('p');
      p.className = "footer__form__sucs_m-text";
      p.innerHTML = "Ваш запрос отправлен, ожидайте ответа";
      document.getElementById('footer__form_append-text').append(p);
    } else {
      let p = document.createElement('p');
      p.className = "footer__form__fail_m-text";
      p.innerHTML = "Ваш запрос не отправлен, повторите попытку позже";
      document.getElementById('footer__form_append-text').append(p);
    }
  }


  return (<div className="container-fluid footer" id="contacts-anchor" style={{ display: "inline-block" }}>

    {width >= 780 && <>
      <div className="row footer">
        <div className="col-md-5 left-side">
          <h1 className="h1-main ">
            <span className="slide-number">5</span>
            <span className="slide-title footer-header">Контакты</span>
          </h1>
          <div className="card dark text-white textboxes-card">
            <img id="form_footer" alt="two_textboxes" className="card-image two-textboxe1s" src={two_textboxes} />
            <div className="card-img-overlay">

              <form className="question_form" onSubmit={sendMessge}>
                <div className="form-group justify-content-center">
                  <input type="email" id="inputEmail" aria-describedby="emailHelp" placeholder="Email"
                    className={"form-control " + (notEmail ? "support-email-error" : "")} onChange={checkEmail} disabled={loading} />
                </div>
                <div className="form-group question">
                  <textarea className="form-control" id="formControlTextarea" rows="3" placeholder="Вопрос" onChange={checkEmpty} disabled={loading} />
                </div>
                <button type="submit" className="btn btn-primary question_button"
                  disabled={loading || (notEmail ?? true) || (notEmpty ?? true)}>
                  {loading && <>
                    &nbsp;&nbsp;<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />&nbsp;
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />&nbsp;
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />&nbsp;&nbsp;
                  </>}
                  {!loading && "Отправить"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-7  container">
          <div className="row ">
            <div className="col-md-7 ">
              <div className="card dark text-white green-card">
                <img loading="lazy" alt="two_textboxes" className="img-fluid" src={mail_and_telephone} />
                <div className="card-img-overlay wrong_card">
                  <p className="card-text email-telephone" id="email" style={{ overflowWrap: "initial", marginBottom: "0.5rem" }}>skinminers@gmail.com</p>
                  <p className="card-text email-telephone" id="telephone" style={{ overflowWrap: "initial" }}>+7 (965) 753-45-14</p>
                </div>
              </div>
            </div>

            <div className="col-md-5 right-side middle-side">
              <div className="card dark text-white four-words ">
                <img loading="lazy" alt="four_words" className="card-image" src={four_words} />
                <div className="card-img-overlay wrong_card2">
                  <a href="#policy" className="policy_market_link"><p className="card-text policy_market">Policy</p></a>
                  <a href={`${process.env.GATSBY_URL}/market`} className="policy_market_link"><p className="card-text policy_market">Market</p></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-right-bottom">
            <div className="row  footer-images">
              <div className="col-md"><img loading="lazy" alt="three_figures" className="three_figures1 float-left" src={three_figures} /></div>
              <div className="col-md"><img loading="lazy" alt="arrow_to_contacts" className="arrow_to_contacts1" src={arrow_to_contacts} /></div>
              <div className="col-md col__relative">
                <img loading="lazy" alt="two lines" className="two_lines rounded float-right" src={two_lines} />
                <div className="icons">
                  <a href="#telegram" className="links__all"><div className="telegram icons__all"></div></a>
                  <a href="#discord" className="links__all"><div className="discord icons__all"></div></a>
                  <a href="#vk" className="links__all"><div className="vk icons__all"></div></a>
                </div>
              </div>
            </div>
            <div className="row developed-copyright">
              <div className="col-md-7 ">
                <p className="text-developed">Developed by <span className="text_underline">Name Surname</span></p>
              </div>
              <div className="col-md-5 ">
                <p className="copyright">Copyright © skinminers.com, 2021.</p>
                <p className="copyright">Все права защищены.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>}

    {width < 780 && <>
      <div className="row footer-mainheader">
        <h1 className="h1-main ">
          <span className="slide-number">5</span>
          <span className="slide-title footer-header">Контакты</span>
        </h1>
      </div>
      <div className="row ">
        <div className="card dark text-white textboxes-card">
          <img alt="two_textboxes" className="card-image two-textboxe1s" src={two_textboxes_mobile} />
          <div className="card-img-overlay">
            <form id="footer__form_append-text" className="question_form" onSubmit={sendMessge}>
              <div className="form-group justify-content-center">
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email"
                  onChange={checkEmail} disabled={loading} />
              </div>
              <div className="form-group question">
                <textarea className="form-control" id="formControlTextarea" rows="3" placeholder="Вопрос" disabled={loading} />
              </div>
              <button type="submit" className="btn btn-primary question_button"
                disabled={loading || (notEmail ?? true) || (notEmpty ?? true)}>
                {loading && <>
                  &nbsp;<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />&nbsp;
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />&nbsp;
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />&nbsp;
                </>}
                {!loading && "Отправить"}
              </button>
            </form>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="card dark text-white green-card">
          <img loading="lazy" alt="two_textboxes" className="img-fluid" src={mail_and_telephone_mobile} />
          <div className="card-img-overlay wrong_card">
            <p className="card-text email-telephone" id="email">skinminers@gmail.com</p>
            <p className="card-text email-telephone" id="telephone">+7 (965) 753-45-14</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 icons_mobile">
          <img loading="lazy" alt="figure" className="footer__line footer__line_first" src={footer__line} />
          <a href="#vk" className="footer__links_mobile"><img loading="lazy" alt="vk" className="vk_gray" src={vk_gray} /></a>
          <a href="#discord" className="footer__links_mobile footer__links_mobile_second"><img loading="lazy" alt="discord" className="discord_gray" src={discord_gray} /></a>
          <a href="#telegram" className="footer__links_mobile footer__links_mobile_third"><img loading="lazy" alt="telegram" className="telegram_gray" src={telegram_gray} /></a>
          <img loading="lazy" alt="figure" className="footer__line footer__line_second" src={footer__line} />
        </div>
        <div className="col-7 ">
          <div className="card dark text-white four-words">
            <img alt="four_words" className="card-image" src={four_words_mobile} />
            <div className="card-img-overlay">
              <a href="#Policy" className=""><p className="card-text policy_market">Policy</p></a>
              <a href={`${process.env.GATSBY_URL}/market`}><p className="card-text policy_market">Market</p></a>
            </div>
          </div>
          <div className="col-md">
            <img alt="three_figures" className="three_figures1 float-left" src={three_figures} />
          </div>
        </div>
      </div>
      <div className="row ">
        <p className="text-developed">Developed by <span className="text_underline">Name Surname</span></p>
        <p className="copyright">Copyright © skinminers.com, 2021.</p>
        <p className="copyright">Все права защищены.</p>
      </div>
    </>}
  </div >)
}

export default Footer