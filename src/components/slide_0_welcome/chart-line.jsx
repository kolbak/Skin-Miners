import * as React from "react"

import '../../styles/components/slide_0_welcome/chart.scss'
import "../../styles/components/slide_0_welcome/slide_0_mobile.scss";

const ChartLine = ({ current, max }) =>
  <div style={{ width: `calc(${current / max * 100}% - 0.35rem)`, position: "relative", top: "3px" }} className='line-bg-inner' />

export default ChartLine