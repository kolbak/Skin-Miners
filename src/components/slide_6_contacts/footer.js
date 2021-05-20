import * as React from "react"

import '../../styles/components/slide_6_contacts/footer.scss'
import four_words from "../../images/four_words.svg";
import mail_and_telephone from "../../images/mail_and_telephone.svg";
import three_figures from "../../images/three_figures.svg";
import arrow_to_contacts from '../../images/arrow_to_contacts.svg'
import two_textboxes from '../../images/two_textboxes.svg'

// TODO: сделать панель контактов

const Footer = () => {
  return (
    <div className="wrap-slide footer_slide">
      <div className="footer_parts footer_left">
        <h1 className="h1-main">
          <span className="slide-number">5</span>
          <span className="slide-title">Контакты</span>
        </h1>
        <img alt="two_textboxes" className="two_textboxes" src={two_textboxes} />
      </div>
      <div className="footer_parts footer_middle">
        <img alt="mail_and_telephone" className="mail_and_telephone" src={mail_and_telephone} />
        <img alt="three_figures" className="three_figures" src={three_figures} />
        <img alt="arrow_to_contacts" className="arrow_to_contacts" src={arrow_to_contacts} />

      </div>
      <div className="footer_parts footer_right">
        <img alt="four_words" className="four_words" src={four_words} />
      </div>
    </div>
  )
}

export default Footer