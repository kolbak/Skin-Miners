import * as React from "react"

import '../../styles/components/slide_1_what/firstSlide.scss'

import bwAmmo from '../../images/bw-ammo.svg'

const FirstSlide = () => {
  return (
    <div className="wrap-slide slide-1">
      <h1 className="h1-main">
        <span className="slide-number">1</span>
        <span className="slide-title">Что мы делаем?</span>
      </h1>
      <img alt="ammo" className="bw-ammo" src={bwAmmo} />
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur</li>
        <li>adipiscing elit, sed do eiusmod tempor</li>
        <li>incididunt ut labore et dolore magna aliqua.</li>
        <li>Ut enim ad minim veniam, quis nostrud</li>
        <li>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
      </ul>
    </div>
  )
}

export default FirstSlide