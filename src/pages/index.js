import * as React from "react"
import { Helmet } from "react-helmet"
import '../styles/main.scss'

// import bootstrap from 'bootstrap'

//* Импорт компонентов
import Welcome from '../components/slide_0_welcome/welcomeSlide'
import FirstSlide from '../components/slide_1_what/firstSlide'
import SecondSlide from '../components/slide_2_how/secondSlide'
import ThirdSlide from '../components/slide_3_we/thirdSlide'
import FourthSlide from '../components/slide_4_registration/fourthSlide'
import Faq from '../components/slide_5_FAQ/fifthSlide'
import Footer from '../components/slide_6_contacts/footer'
import SideBar from '../components/side_bar'


const bootstrap = typeof window !== `undefined` ? require("bootstrap") : null
// const bootstrap = require('bootstrap');

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,
      initial-scale=1.0,
      maximum-scale=1.0,
      user-scalable=0" />
      <title>Skin Miners</title>
      <meta name="description" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,"/>
      <meta name="keywords" content="skins csgo mining skinminers skins"/>
    </Helmet>

    <div className="side_bar" children={<SideBar />} />

    <div className="slide" children={<Welcome />} />
    <div className="slide slide__what" children={<FirstSlide />} />
    <div className="slide slide__slider" children={<SecondSlide />} />
    <div className="slide slide_without_padding" children={<ThirdSlide />} />

    <div className="slide" children={<FourthSlide />} />
    <div className="slide" children={<Faq />} />
    <div className="slide slide__footer" children={<Footer />} />
    
  </div >)

export default IndexPage
