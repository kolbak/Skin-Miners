import * as React from "react";
import Chart from "./chart";

import "../../styles/components/slide_0_welcome/welcomeSlide.scss";

import hidden_triangle from '../../images/slide_0_welcome/triangle.svg'
import hidden_square from '../../images/slide_0_welcome/square.svg'


const WelcomeSlide = () => {
  return (
    <div className="welcome-slide">

      <img id="hidden_triangle" alt="triangle" src={hidden_triangle} />
      <img id="hidden_square" alt="square" src={hidden_square} />

      <div className="welcome">
        <h1 className="h1-skin-miners">
          Skin <br /> Miners
        </h1>
        <p id="p-slogan"> Не трать своё время просто так </p>
        <button className="btn"> Стать участником </button>
      </div>
      <Chart />
    </div>
  );
};

export default WelcomeSlide;
