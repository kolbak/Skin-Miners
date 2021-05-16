import * as React from "react"
import { Helmet } from "react-helmet"

//* Импорт компонентов
import FirstSlide from '../components/firstSlide/firstSlide'
import SecondSlide from '../components/secondSlide/secondSlide'
import ThirdSlide from '../components/thirdSlide/thirdSlide'
import FourthSlide from '../components/fourSlide_why_we/fourthSlide'

import '../styles/main.scss'

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skin Miners</title>
      </Helmet>
      <div className="slide" children={<FirstSlide />} />
      <div className="slide" children={<SecondSlide />} />
      <div className="slide" children={<ThirdSlide />} />
      <div className="slide slide_without_padding" children={<FourthSlide />} />
    </div >
  )
}

export default IndexPage
