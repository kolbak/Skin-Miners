import * as React from "react";

import Chart from "./chart";

import "../../styles/components/slide_0_welcome/welcomeSlide.scss";

const WelcomeSlide = () => {
  return (
    <div className="First-slide">
      <div className="welcome">
        <h1 className="h1-skin-miners">
          {" "}
          Skin <br /> Miners{" "}
        </h1>{" "}
        <p id="p-slogan"> Не трать своё время просто так </p>{" "}
        <button className="btn"> Стать участником </button>{" "}
      </div>{" "}
      <Chart />
    </div>
  );
};

export default WelcomeSlide;