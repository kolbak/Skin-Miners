import React, { useState, useEffect } from "react"

import '../../styles/components/slide_1_what/firstSlide.scss'

import bwAmmo from '../../images/slide_1_what/bw-ammo.svg'
import smile from '../../images/slide_1_what/Smile.svg'
import triangle from '../../images/slide_1_what/Triangle.svg'


const FirstSlide = () => {

  const [width, setWidth] = useState(window.screen.width)

  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
  }, [])

  return (<div className="slide-1" id="what-anchor">

    <h1 className="h1-main">
      <span className="slide-number">1</span>
      <span className="slide-title">Что мы делаем?</span>
    </h1>

    <img alt="bwAmmo" id="bwAmmo" src={bwAmmo} />
    <img alt="smile" id="smile" src={smile} />
    <img alt="triangle" id="triangle" src={triangle} />

    {width >= 768 ? <ul>
      <li>Lorem ipsum dolor sit amet, consectetur</li>
      <li>adipiscing elit, sed do eiusmod tempor</li>
      <li>incididunt ut labore et dolore magna aliqua.</li>
      <li>Ut enim ad minim veniam, quis nostrud</li>
      <li>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    </ul> :
      <p className="what-desc mt-3">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>}



  </div>)
}

export default FirstSlide