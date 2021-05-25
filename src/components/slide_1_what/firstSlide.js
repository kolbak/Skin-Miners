import * as React from "react"

import '../../styles/components/slide_1_what/firstSlide.scss'

import bwAmmo from '../../images/slide_1_what/bw-ammo.svg'
import smile from '../../images/slide_1_what/Smile.svg'
import triangle from '../../images/slide_1_what/Triangle.svg'

const FirstSlide = () => (<div className="slide-1" id="what-anchor">

  <h1 className="h1-main">
    <span className="slide-number">1</span>
    <span className="slide-title">Что мы делаем?</span>
  </h1>

  <img alt="bwAmmo" id="bwAmmo" src={bwAmmo} />
  <img alt="smile" id="smile" src={smile} />
  <img alt="triangle" id="triangle" src={triangle} />

  <ul>
    <li>Lorem ipsum dolor sit amet, consectetur</li>
    <li>adipiscing elit, sed do eiusmod tempor</li>
    <li>incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud</li>
    <li>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
  </ul>

</div>)

export default FirstSlide