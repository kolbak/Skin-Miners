import * as React from "react"

import howItWorks from '../../images/how-it-works.svg'
import pinkFrame from '../../images/pink-frame.svg'

import '../../styles/components/slide_2_how/mining.scss'

const Mining = () => {
  return (
    <div className="wrap-mining" id="mining">
      <img className="how-it-works-img" src={howItWorks} />
      <div className="frame">
        <img src={pinkFrame} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>
  )
}

export default Mining