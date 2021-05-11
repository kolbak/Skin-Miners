import * as React from "react"

import Chart from './chart'

import '../../styles/components/firstSlide/firstSlide.scss'

// TODO сделать градиент по фигме .h1-skin-miners

const FirstSlide = () => {
  return (
    <div>
      <div><h1 className="h1-skin-miners">Skin Miners</h1></div>
      <Chart />
    </div>
  )
}

export default FirstSlide
