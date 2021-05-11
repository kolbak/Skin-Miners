import * as React from "react"

//* Импорт компонентов
import FirstSlide from '../components/firstSlide/firstSlide'
import SecondSlide from '../components/secondSlide/secondSlide'

import '../styles/main.scss'

const IndexPage = () => {
  return (
    <div>
      <div className="slide">
        <FirstSlide />
      </div>
      <div className="slide">
        <SecondSlide />
      </div>
    </div>
  )
}

export default IndexPage
