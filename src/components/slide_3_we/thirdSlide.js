import React, { useState, useEffect } from "react"

import "../../styles/components/slide_3_we/thirdSlide.scss";
import "../../styles/components/slide_3_we/thirdSlide_mobile.scss";

// import power_window from "../../images/slide_3_we/power_window.svg";
// import trust_window from "../../images/slide_3_we/trust_window.svg";
// import safety_window from "../../images/slide_3_we/safety_window.svg";
import grid_window from "../../images/slide_3_we/grid_window.svg";
import fourth_background from '../../images/slide_3_we/wall&desk.png'
import nameless_window from '../../images/slide_3_we/nameless_window.svg'

import hidden_circle from '../../images/slide_3_we/circle.svg'
import hidden_square from '../../images/slide_3_we/square.svg'
import hidden_triangle from '../../images/slide_3_we/triangle.svg'

import trust from '../../images/slide_3_we/trust.svg'
import safity from '../../images/slide_3_we/safity.svg'
import power from '../../images/slide_3_we/power.svg'

import fourth_background_mobile from '../../images/slide_3_we/fourth_background_mobile.svg'
import three_triangle from '../../images/slide_3_we/three_triangle.svg'
import mac_fon from '../../images/slide_3_we/mac_fon.svg'


const ThirdSlide = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])

  return (<div className="wrap-slide slide-3" id="we-anchor">
    {width >= 780 ? <>
      <h1 className="h1-main">
        <span className="slide-number">3</span>
        <span className="slide-title">Почему мы?</span>
      </h1>
      
      <img alt="circle" id="hidden_circle" src={hidden_circle} />
      <img alt="square" id="hidden_square" src={hidden_square} />
      <img alt="triangle" id="hidden_triangle" src={hidden_triangle} />
      <img alt="fourth_background" className="fourth_background" src={fourth_background} />


      <div className="big-capture">
        <img alt="grid" src={grid_window} className="grid_window" />

        <div className="power_container containers">
          <p className="Head_text">Мощность</p>
          <div className="line" />
          <img alt="power" src={power} className="safity three_pictures" />
          <p className="thesis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="trust_container containers">
          <p className="Head_text">Доверие</p>
          <div className="line" />
          <img alt="trust" src={trust} className="safity three_pictures" />
          <p className="thesis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="safety_container containers">
          <p className="Head_text">Безопасность</p>
          <div className="line" />
          <img alt="safity" src={safity} className="safity  three_pictures" />
          <p className="thesis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="nameless_container containers">
          <img alt="nameless" src={nameless_window} className="nameless_window" />
          <p className="nameless_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="cardless_container containers">
          <p className="cardless_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </> : <>
      <div className="row">
        <h1 className=" header-third h1-main">
          <span className="slide-number">3</span>
          <span className="slide-title">Почему мы?</span>
        </h1>
      </div>
      <div className="row nameless_container_mobile">
        <p className="nameless_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
      </div>
      <div className="row">
        <img alt="background" className="fourth_background_mobile" src={fourth_background_mobile} />
      </div>
      <div className="row">
        <div className="safety_container_m containers">
          <p className="Head_text">Безопасность</p>
          <div className="line" />
          <img alt="safity" src={safity} className="safity_m  three_pictures" />
          <p className="thesis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
      </div>
      <div className="row">
        <div className="power_container_m containers">
          <p className="Head_text">Мощность</p>
          <div className="line" />
          <img alt="power" src={power} className="safity three_pictures" />
          <p className="thesis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="trust_container_m containers">
          <p className="Head_text">Доверие</p>
          <div className="line" />
          <img alt="trust" src={trust} className="safity three_pictures" />
          <p className="thesis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="row mac_container">
        <img className="three_triangle" src={three_triangle} alt="three triangles" />
        <div className="card dark text-white">
          <img className="card-img" src={mac_fon} alt="card" />
          <div className="card-img-overlay">
            <p className="card-text mac_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>
      </div>
      <div className="row third-button-container">
        <button type="button" className="btn btn-primary btn-lg third-button">Регистрация</button>
      </div>
      {/* <div className="borderr"></div> */}
      {/* <div className="test"></div> */}
    </>}
  </div>)

}
export default ThirdSlide;
