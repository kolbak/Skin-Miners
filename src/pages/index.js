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
import Favicon from '../images/Icon_skniminners.png'

const bootstrap = typeof window !== `undefined` ? require("bootstrap") : null
// const bootstrap = require('bootstrap');

const IndexPage = () => {

  const preloader = React.useRef()

  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo({ top: 10000, behavior: "instant" })
      setTimeout(() => {
        preloader.current.classList.add('loaded_hiding');
        window.scrollTo({ top: 0, behavior: "instant" })
        setTimeout(() => {
          preloader.current.classList.add('loaded');
          preloader.current.classList.remove('loaded_hiding');
        }, 500)
      }, 1000);
    }
  }, [])

  return (<div>
    <Helmet>
      <link rel="icon" href={Favicon} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,
      initial-scale=1.0,
      maximum-scale=1.0,
      user-scalable=0" />
      <title>Skin Miners</title>
      <meta name="description" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,"/>
      <meta name="keywords" content="skins csgo mining skinminers skins" />
    </Helmet>
    <div className="all-slides">
      <div className="side_bar" children={<SideBar />} />

      <div className="slide" children={<Welcome />} />
      <div className="slide slide__what" children={<FirstSlide />} />
      <div className="slide slide__slider" children={<SecondSlide />} />
      <div className="slide slide_without_padding" children={<ThirdSlide />} />

      <div className="slide slide__registration" children={<FourthSlide />} />
      <div className="slide slide__faq" children={<Faq />} />
      <div className="slide slide__footer" children={<Footer />} />
    </div>
    <h1 className="ask-for-portrait">Переведите устройство в портретный режим</h1>

    {/* Прелоадер */}
    <div className="preloader" ref={preloader}>
      <svg className="preloader__image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
        </path>
      </svg>
    </div>
  </div >)
}

export default IndexPage
