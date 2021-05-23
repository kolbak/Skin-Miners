import * as React from "react";

import "../../styles/components/slide_3_we/thirdSlide.scss";

import power_window from "../../images/slide_3_we/power_window.svg";
import grid_window from "../../images/slide_3_we/grid_window.svg";
import trust_window from "../../images/slide_3_we/trust_window.svg";
import safety_window from "../../images/slide_3_we/safety_window.svg";
import fourth_background from '../../images/slide_3_we/wall&desk.png'
import nameless_window from '../../images/slide_3_we/nameless_window.svg'

import hidden_circle from '../../images/slide_3_we/circle.svg'
import hidden_square from '../../images/slide_3_we/square.svg'
import hidden_triangle from '../../images/slide_3_we/triangle.svg'

// TODO: Нормально расположить текст в 3-х глассоморфные карточки

const ThirdSlide = () => {
  return (
    <div className="wrap-slide slide-3">
      <img alt="circle" id="hidden_circle" src={hidden_circle} />
      <img alt="square" id="hidden_square" src={hidden_square} />
      <img alt="triangle" id="hidden_triangle" src={hidden_triangle} />
      <img alt="fourth_background" className="fourth_background" src={fourth_background} />

      <h1 className="h1-main">
        <span className="slide-number">3</span>
        <span className="slide-title">Почему мы?</span>
      </h1>

      <div className="big-capture">
        <img alt="grid" src={grid_window} className="grid_window" />
        <div className="power_container containers">
          <img alt="power" src={power_window} className="power_window three_pictures" />
          <p className="Head_text">Мощность</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="trust_container containers">
          <img alt="trust" src={trust_window} className="trust_window three_pictures" />
          <p className="Head_text">Доверие</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="safety_container containers">
          <img alt="safety" src={safety_window} className="safety_window  three_pictures" />
          <p className="Head_text">Безопасность</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="nameless_container containers">
          <img alt="nameless" src={nameless_window} className="nameless_window" />
          <p className="nameless_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="cardless_container containers">
          <p className="cardless_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSlide;
