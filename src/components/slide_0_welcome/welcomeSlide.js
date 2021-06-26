import React from "react"
import Chart from "./chart";

import "../../styles/components/slide_0_welcome/welcomeSlide.scss";
import "../../styles/components/slide_0_welcome/slide_0_mobile.scss";

import logoArt from '../../images/slide_0_welcome/1.png'

import hidden_triangle from '../../images/slide_0_welcome/triangle.svg'
import hidden_square from '../../images/slide_0_welcome/square.svg'

import rhomb from '../../images/slide_0_welcome/chart-bg-rhomb.svg'
import points from '../../images/slide_0_welcome/points.svg'
import ellipse from '../../images/slide_0_welcome/Ellipse.svg'
import ellipseBlurred from '../../images/slide_0_welcome/Ellipse-blurred.svg'
import downArrow from '../../images/slide_0_welcome/down-arrow.svg'

import arrow from '../../images/slide_0_welcome/arrow.svg'


const WelcomeSlide = () => {
  // const [width, setWidth] = useState()

  // useEffect(() => {
  //   window.addEventListener('resize', _ => setWidth(window.screen.width));
  //   setWidth(window.screen.width);
  // }, [])

  return (
    <div className="welcome-slide">

      <img loading="lazy" id="hidden_triangle" alt="triangle" src={hidden_triangle} />
      <img loading="lazy" id="hidden_square" alt="square" src={hidden_square} />

      <div className="welcome">
        {/* <h1 id="h1-skin-miners">Skin<br />Miners</h1> */}
        <img id="h1-skin-miners" alt="h1-skin-miners" src={logoArt} />

        <p id="p-slogan">Не трать своё время просто так </p>
        <a className="btn slide-0__btn-lg" href="#registration-anchor">Стать участником</a>
      </div>

      {/* График */}<Chart />
      <h1 id="top-miners">Top miners</h1>
      <img loading="lazy" id="arrow" alt="arrow" src={arrow} />

      <div className="bg-line n-1" />
      <div className="bg-line n-2" />
      <div className="bg-line n-3" />
      <img loading="lazy" alt="rhomb" className="rhomb" src={rhomb} />
      <img loading="lazy" alt="points" className="points" src={points} />
      <img loading="lazy" alt="ellipse" className="ellipse" src={ellipse} />
      <img loading="lazy" alt="down-arrow" className="down-arrow" src={downArrow} />
      <img loading="lazy" alt="ellipse-blurred" className="ellipse-blurred" src={ellipseBlurred} style={{ overflow: "hidden" }} />

    </div>
  )
}

export default WelcomeSlide;
