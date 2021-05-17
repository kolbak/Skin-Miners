import * as React from "react"
import { Helmet } from "react-helmet"

//* Импорт компонентов
import Welcome from '../components/slide_0_welcome/welcomeSlide'
import FirstSlide from '../components/slide_1_what/firstSlide'
import ThirdSlide from '../components/slide_2_how/secondSlide'
import FourthSlide from '../components/slide_3_we/thirdSlide'
import FifthSlide from '../components/slide_4_registration/fourthSlide'
import Faq from '../components/slide_5_FAQ/fifthSlide'
import Footer from '../components/slide_6_contacts/footer'


import '../styles/main.scss'

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skin Miners</title>
      </Helmet>
      <div className="slide" children={<Welcome />} />
      <div className="slide" children={<FirstSlide />} />
      <div className="slide" children={<ThirdSlide />} />
      <div className="slide slide_without_padding" children={<FourthSlide />} />
        
      <div className="slide" children={<FifthSlide />} />
      <div className="slide" children={<Faq />} />
      <div className="slide" children={<Footer />} />
    </div >
  )
}

export default IndexPage
