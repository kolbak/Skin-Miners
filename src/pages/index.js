import * as React from "react"
import { Helmet } from "react-helmet"

//* Импорт компонентов
import FirstSlide from '../components/firstSlide/firstSlide'
import SecondSlide from '../components/secondSlide/secondSlide'
import ThirdSlide from '../components/thirdSlide/thirdSlide'

import '../styles/main.scss'

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skin Miners</title>
      </Helmet>
      <div className="slide">
        <FirstSlide />
      </div>
      <div className="slide">
        <SecondSlide />
      </div>
      <div className="slide">
        <ThirdSlide />
      </div>
    </div>
  )
}

export default IndexPage
