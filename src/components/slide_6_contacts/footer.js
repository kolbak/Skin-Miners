
import React, { useState, useEffect } from "react"

import '../../styles/components/slide_6_contacts/footer.scss'
import '../../styles/components/slide_6_contacts/footer_mobile.scss'

import four_words from "../../images/slide_6_contacts/four_words.svg";
import mail_and_telephone from "../../images/slide_6_contacts/mail_and_telephone.svg";
import three_figures from "../../images/slide_6_contacts/three_figures.svg";
import arrow_to_contacts from '../../images/slide_6_contacts/arrow_to_contacts.svg'
import two_textboxes from '../../images/slide_6_contacts/two_textboxes.svg'
import icons from '../../images/slide_6_contacts/icons.svg'

import two_textboxes_mobile from '../../images/slide_6_contacts/two_textboxes_mobile.svg'
import icons_mobile from '../../images/slide_6_contacts/icons_mobile.svg'
import mail_and_telephone_mobile from "../../images/slide_6_contacts/mail_and_telephone_mobile.svg";
import four_words_mobile from "../../images/slide_6_contacts/four_words_mobile.svg";
// import vk_gray from "../../images/slide_6_contacts/vk_gray.svg";
// import facebook_gray from "../../images/slide_6_contacts/facebook_gray.svg";
// import instagram_gray from '../../images/slide_6_contacts/instagram_gray.svg'
// import telegram_gray from '../../images/slide_6_contacts/telegram_gray.svg'

// import two_lines from '../../images/slide_6_contacts/two_lines.svg'

const Footer = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])

  return (<div className="container-fluid footer" id="contacts-anchor" style={{ display: "inline-block" }}>
    {width >= 780 && <>
      <div className="row footer">
        <div className="col-md-5 left-side">
          <h1 className="h1-main ">
            <span className="slide-number">5</span>
            <span className="slide-title footer-header">Контакты</span>
          </h1>
          <div className="card dark text-white textboxes-card">
            <img alt="two_textboxes" className="card-image two-textboxe1s" src={two_textboxes} />
            <div className="card-img-overlay">
              <form className="question_form1">

                <div className="form-group justify-content-center">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="form-group question">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Вопрос" />
                </div>
                <button type="submit" className="btn btn-primary question_button" children={"Отправить"} />
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-7  container">
          <div className="row ">
            <div className="col-md-7 ">
              <div className="card dark text-white green-card">
                <img alt="two_textboxes" className="img-fluid" src={mail_and_telephone} />
                <div className="card-img-overlay wrong_card">
                  <p className="card-text email-telephone" id="email" style={{ overflowWrap: "initial" }}>skinminers@gmail.com</p>
                  <p className="card-text email-telephone" id="telephone" style={{ overflowWrap: "initial" }}>+7 (965) 753-45-14</p>
                </div>
              </div>
            </div>

            <div className="col-md-5 right-side middle-side">
              <div className="card dark text-white four-words ">
                <img alt="four_words" className="card-image" src={four_words} />
                <div className="card-img-overlay wrong_card2">
                  <p className="card-text policy_market">Policy</p>
                  <p className="card-text policy_market">Market</p>
                  <p className="card-text policy_market">Policy</p>
                  <p className="card-text policy_market">Market</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-right-bottom">
            <div className="row  footer-images">
              <div className="col-md"><img alt="three_figures" className="three_figures1 float-left" src={three_figures} /></div>
              <div className="col-md"><img alt="arrow_to_contacts" className="arrow_to_contacts1" src={arrow_to_contacts} /></div>
              <div className="col-md"><img alt="icons" className="icons rounded float-right" src={icons} /></div>
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
            <form className="question_form1">

              <div className="form-group justify-content-center">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group question">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Вопрос" />
              </div>
              <button type="submit" className="btn btn-primary question_button" children={"Отправить"} />
            </form>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="card dark text-white green-card">
          <img alt="two_textboxes" className="img-fluid" src={mail_and_telephone_mobile} />
          <div className="card-img-overlay wrong_card">
            <p className="card-text email-telephone" id="email">skinminers@gmail.com</p>
            <p className="card-text email-telephone" id="telephone">+7 (965) 753-45-14</p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-5 "><img alt="" className="icons rounded float-right" src={icons_mobile} /></div>
        <div className="col-7 ">
          <div className="card dark text-white four-words">
            <img alt="four_words" className="card-image" src={four_words_mobile} />
            <div className="card-img-overlay">
              <p className="card-text policy_market">Policy</p>
              <p className="card-text policy_market">Market</p>
              <p className="card-text policy_market">Policy</p>
            </div>
          </div>
          <div className="col-md"><img alt="three_figures" className="three_figures1 float-left" src={three_figures} /></div>
        </div>
      </div>
      <div className="row ">
        <p className="text-developed">Developed by <span className="text_underline">Name Surname</span></p>
        <p className="copyright">Copyright © skinminers.com, 2021.</p>
        <p className="copyright">Все права защищены.</p>
      </div>

    </>}
  </div>)
}
export default Footer