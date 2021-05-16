import * as React from "react"

import '../../styles/components/fourSlide_why_we/fourSlide.scss'

import power_window from '../../images/power_window.svg'
import grid_window from '../../images/grid_window.svg'
import trust_window from '../../images/trust_window.svg'
import safety_window from '../../images/safety_window.svg'
import fourth_background from '../../images/fourth_background.svg'

// TODO: Вставить длинную картинку;
// TODO: Скопировать 3 глассоморфные карточки

const FourthSlide = () => {
  return (
    <div className="wrap-slide slide-4">
        <h1 className="h1-main">
          <span className="slide-number">3</span>
          Почему мы?
        </h1>
        {/*<img alt="background" className="fourth_background" src={fourth_background} />*/}
        <div className="big-capture">
          <img alt="grid" className="grid_window" src={grid_window} />

          <div className="power_container">
            <img alt="power" className="power_window  three_pictures" src={power_window} />
          </div>  
          <div className="trust_container">
            <img alt="trust" className="trust_window  three_pictures" src={trust_window} />
          </div>
          <div className="safety_container">
            <img alt="safety" className="safety_window  three_pictures" src={safety_window} />
          </div>
        </div>
    </div>
  )
}

export default FourthSlide