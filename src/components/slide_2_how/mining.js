import * as React from "react"

import howItWorks from '../../images/slide_2_how/how-it-works.svg'
import pinkFrame from '../../images/slide_2_how/pink-frame.svg'

import '../../styles/components/slide_2_how/mining.scss'

const Mining = () => {
  return (
    <div className="wrap-mining" id="mining">
      <img alt="how it works" className="how-it-works-img" src={howItWorks} />
      <div className="frame">
        <img alt="frame" src={pinkFrame} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>
  )
}

export default Mining