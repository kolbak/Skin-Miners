import * as React from "react"

import '../../styles/components/slide_6_contacts/footer.scss'
import four_words from "../../images/four_words.svg";
import mail_and_telephone from "../../images/mail_and_telephone.svg";
import three_figures from "../../images/three_figures.svg";
import arrow_to_contacts from '../../images/arrow_to_contacts.svg'
import two_textboxes from '../../images/two_textboxes.svg'
import facebook_gray from "../../images/facebook_gray.svg";
import vk_gray from "../../images/vk_gray.svg";
import instagram_gray from '../../images/instagram_gray.svg'
import telegram_gray from '../../images/telegram_gray.svg'
import two_lines from '../../images/two_lines.svg'
import icons from '../../images/icons.svg'

// TODO: сделать панель контактов

const Footer = () => {
  return (
    <div className="container-fluid  footer">
      <div class="row footer">
        <div class="col-md-5 left-side">
          <h1 className="h1-main">
            <span className="slide-number">5</span>
            <span className="slide-title">Контакты</span>
          </h1>
          <div class="card dark text-white textboxes-card">
            <img alt="" className="card-image two-textboxe1s" src={two_textboxes} />
            <div class="card-img-overlay">
              <form class="question_form1">
                 
                 <div class="form-group justify-content-center">
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                 </div>
                 <div class="form-group question">
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Вопрос"></textarea>
                 </div>
                 <button type="submit" class="btn btn-primary  question_button">Отправить</button>
               </form>
            </div>
          </div>
        </div>


        <div class="col-md-7  container">
           <div class="row ">
             <div class="col-md-7 ">
               <div class="card dark text-white green-card">
               <img alt="two_textboxes" className="img-fluid" src={mail_and_telephone} />
               <div class="card-img-overlay wrong_card">
                 <p class="card-text email-telephone" id="email">skinminers@gmail.com</p>
                 <p class="card-text email-telephone" id="telephone">+7 (965) 753-45-14</p>
               </div>
               </div>
             </div>

             <div class="col-md-5 right-side middle-side">
                <div class="card dark text-white four-words ">
                  <img alt="four_words" className="card-image" src={four_words} />
                    <div class="card-img-overlay wrong_card2">
                      <p class="card-text policy_market">Policy</p>
                      <p class="card-text policy_market">Market</p>
                      <p class="card-text policy_market">Policy</p>
                      <p class="card-text policy_market">Market</p>
                    </div> 
                  </div>
             </div>
            </div>
           <div class="row ">
                <div class="row  footer-images">
                  <div class="col-md">               
                    <img alt="" className="three_figures1 float-left" src={three_figures} />
                  </div> 
                  <div class="col-md">  
                    <img alt="" className="arrow_to_contacts1" src={arrow_to_contacts} />
                  </div>   
                  <div class="col-md">
                    <img alt="" className="icons rounded float-right" src={icons} />
                  </div>   
                </div>
                <div class="row ">
                  <div class="col-md-7 ">
                    <p class="text_developed1 fs-2">Developed by <span className="text_underline">Name Surname</span></p>
                  </div>
                  <div class="col-md-5 ">
                    <p class="copyright1 fs-5">Copyright © skinminers.com, 2021.</p>
                    <p class="copyright1 fs-5">Все права защищены.</p>
                  </div>
                </div>
           </div>  
        </div>
      </div>
    </div>

      // {/* <div className="row  col-md-5">
      //   <div className="row">
      //     <h1 className="h1-main">
      //       <span className="slide-number">5</span>
      //       <span className="slide-title">Контакты</span>
      //     </h1>
      //   </div>
      //   <form class="question_form">
      //     <div class="form-group justify-content-center">
      //       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
      //     </div>
      //     <div class="form-group question">
      //       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Вопрос"></textarea>
      //     </div>
      //     <button type="submit" class="btn btn-primary  question_button">Отправить</button>
      //   </form>
      // </div>
        
   
      // <div class="footer_parts containter col-md-3 footer_middle">
      //   <div class="card dark text-white">
      //     <img alt="two_textboxes" className="img-fluid" src={mail_and_telephone} />
         
      //     <div class="card-img-overlay wrong_card">
      //       <p class="card-text fs-3" id="email">skinminers@gmail.com</p>
      //       <p class="card-text fs-3" id="telephone">+7 (965) 753-45-14</p>
      //     </div>
      //   </div>
      //   <img alt="three_figures" className="three_figures" src={three_figures} />
      //   <img alt="arrow_to_contacts" className="arrow_to_contacts" src={arrow_to_contacts} />
      //   <p class="text_developed fs-2">Developed by <span className="text_underline">Name Surname</span></p>
      // </div>

      // <div className="footer_parts footer_right col-md-2">
      //   <div class="card dark text-white">
      //   <img alt="four_words" className="four_words card-image" src={four_words} />
      //     <div class="card-img-overlay wrong_card2">
      //       <p class="card-text fs-1 policy_market">Policy</p>
      //       <p class="card-text fs-1 policy_market">Market</p>
      //       <p class="card-text fs-1 policy_market">Policy</p>
      //       <p class="card-text fs-1 policy_market">Market</p>
      //     </div> 
      //   </div>
      //   <div class="container row justify-content-md-center two_icons">
      //     <img alt="" className="facebook_gray card-image col-4" src={facebook_gray} />
      //     <img alt="" className="vk_gray card-image col-4" src={vk_gray} />
      //   </div>
      //   <div class="container row justify-content-md-center">
      //     <img alt="" className="instagram_gray card-image col-4" src={instagram_gray} />
      //     <img alt="" className="telegram_gray card-image col-4" src={telegram_gray} />
      //   </div>
      //   <img alt="" className="two_lines" src={two_lines} />
      //   <p class="copyright fs-4">Copyright © skinminers.com, 2021. Все права защищены.</p>
      // </div>  */}
    

  )
}

export default Footer