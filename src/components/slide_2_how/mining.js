import * as React from "react"

import pinkFrame from '../../images/slide_2_how/pink-frame.svg'
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
    <img alt="frame" src={pinkFrame} />
    <p style={{ top: "3vh", width: "275px", left: "2vw" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

</div>)

export default Mining