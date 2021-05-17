import * as React from "react";

import "../../styles/components/slide_3_we/thirdSlide.scss";

import power_window from "../../images/power_window.svg";
import grid_window from "../../images/grid_window.svg";
import trust_window from "../../images/trust_window.svg";
import safety_window from "../../images/safety_window.svg";
import fourth_background from '../../images/fourth_background.svg'
import nameless_window from '../../images/nameless_window.svg'

// TODO: Нормально расположить текст в 3-х глассоморфные карточки

const ThirdSlide = () => {
  return (
    <div className="wrap-slide slide-3">
      <img alt="fourth_background" className="fourth_background" src={fourth_background} />
      <h1 className="h1-main">
        <span className="slide-number"> 3 </span>
        Почему мы ?
      </h1>
      <div className="big-capture">
        <img alt="grid" className="grid_window" src={grid_window} />
        <div className="power_container containers">
          <img
            alt="power"
            className="power_window  three_pictures"
            src={power_window}
          />
          <p className="Head_text">Мощность</p>
          <p>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="trust_container containers">
          <img
            alt="trust"
            className="trust_window  three_pictures"
            src={trust_window}
          />
          <p className="Head_text">Доверие</p>
          <p>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="safety_container containers">
          <img
            alt="safety"
            className="safety_window  three_pictures"
            src={safety_window}
          />
          <p className="Head_text">Безопасность</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="nameless_container containers">
            <img alt="nameless" className="nameless_window" src={nameless_window} /> 
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
