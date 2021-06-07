import * as React from "react"

// import pinkFrame from '../../images/slide_2_how/pink-frame.svg'
import miningVideo from '../../images/slide_2_how/schema_animation.mp4'
import miningPoster from '../../images/slide_2_how/schema.png'


import '../../styles/components/slide_2_how/mining.scss'

const Mining = () => (<div className="wrap-mining" id="mining">

  <video
    poster={miningPoster}
    width="500" height="400" preload="true" autoPlay loop muted>
    <source src={miningVideo} type='video/mp4' />
  </video>

  <div className="frame">
    {/* <img alt="frame" src={pinkFrame} /> */}
    <p id="platform-opportunity">Первый скин можно вывести уже после суток майнинга через наш внутренний магазин.</p>
  </div>
  <p className="text">Регулируйте мощность работы:<br />от слабой, при которой можно параллельно играть в игры, до пиковой, с максимально возможной доходностью</p>

</div>)

export default Mining