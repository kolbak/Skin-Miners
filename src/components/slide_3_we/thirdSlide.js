import React, { useState, useEffect } from "react"

import "../../styles/components/slide_3_we/thirdSlide.scss";
import "../../styles/components/slide_3_we/thirdSlide_mobile.scss";

// import power_window from "../../images/slide_3_we/power_window.svg";
// import trust_window from "../../images/slide_3_we/trust_window.svg";
// import safety_window from "../../images/slide_3_we/safety_window.svg";
import grid_window from "../../images/slide_3_we/grid_window_content.png";
import fourth_background from '../../images/slide_3_we/wall&desk.png'
import nameless_window from '../../images/slide_3_we/nameless_window.svg'

import hidden_circle from '../../images/slide_3_we/circle.svg'
import hidden_square from '../../images/slide_3_we/square.svg'
import hidden_triangle from '../../images/slide_3_we/triangle.svg'

import trust from '../../images/slide_3_we/trust.png'
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
      <h1 className="h1-main" style={{ padding: "0 5vw", zIndex: 3 }}>
        <span className="slide-number" style={{ marginLeft: "5vw" }}>3</span>
        <span className="slide-title">Почему мы?</span>
      </h1>

      <img loading="lazy" alt="circle" id="hidden_circle" src={hidden_circle} />
      <img loading="lazy" alt="square" id="hidden_square" src={hidden_square} />
      <img loading="lazy" alt="triangle" id="hidden_triangle" src={hidden_triangle} />
      <img alt="fourth_background" className="fourth_background" src={fourth_background} />


      <div className="big-capture">
        <img alt="grid" src={grid_window} className="grid_window" />

        <div className="nameless_container containers">
          <img alt="nameless" src={nameless_window} className="nameless_window" />
          <p className="nameless_text">
            Мы — лучшее решение для геймеров.
            Мы сделали сложные вещи простым. Мы совмещаем в себе: ↓↓↓
          </p>
        </div>
        <div className="safety_container containers">
          <p className="Head_text">Безопасность</p>
          <div className="line" />
          <img alt="safity" src={safity} className="safity  three_pictures" />
          <p className="thesis">
            Оптимально рассчитываем нагрузку для безопасности вашего компьютера.
            Процессор и видеокарта выполняют математические расчеты — это не опаснее, чем компьютерные игры!
          </p>
        </div>
        <div className="power_container containers">
          <p className="Head_text">Простоту</p>
          <div className="line" />
          <img alt="power" src={power} className="safity three_pictures" />
          <p className="thesis">
            Скачиваете приложение — зарабатываете скины.
            Никаких дополнительных действий — заработок в пару кликов.
          </p>
        </div>
        <div className="trust_container containers">
          <p className="Head_text">Любовь</p>
          <div className="line" />
          <img alt="trust" src={trust} className="safity three_pictures" style={{ height: "70px", width: "70px" }} />
          <p className="thesis">
            Мы очень ценим выбор нашего сервиса, поэтому часто поощряем различными розыгрышами.
          </p>
        </div>
        <div className="cardless_container containers">
          <p className="cardless_text">
            При возникновении проблем вы всегда можете написать нам в поддержку, мы разберемся!
          </p>
        </div>
      </div>
    </> : <>
      <div className="row">
        <h1 className="header-third h1-main">
          <span className="slide-number">3</span>
          <span className="slide-title">Почему мы?</span>
        </h1>
      </div>

      <div className="row nameless_container_mobile">
        <p className="nameless_text">
          Мы — лучшее решение для геймеров.
          Мы сделали сложные вещи простым. Мы совмещаем в себе: ↓↓↓
        </p>
      </div>
      <div className="row">
        <img loading="lazy" alt="background" className="fourth_background_mobile" src={fourth_background_mobile} />
      </div>
      <div className="row">
        <div className="safety_container_m containers">
          <p className="Head_text">Безопасность</p>
          <div className="line" />
          <img alt="safity" src={safity} className="safity_m  three_pictures" />
          <p className="thesis">
            Оптимально рассчитываем нагрузку для безопасности вашего компьютера.
            Процессор и видеокарта выполняют математические расчеты — это не опаснее, чем компьютерные игры!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="power_container_m containers">
          <p className="Head_text">Простоту</p>
          <div className="line" />
          <img alt="power" src={power} className="safity three_pictures" />
          <p className="thesis">
            Скачиваете приложение — зарабатываете скины.
            Никаких дополнительных действий — заработок в пару кликов.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="trust_container_m containers">
          <p className="Head_text">Любовь</p>
          <div className="line" />
          <img alt="trust" src={trust} className="safity three_pictures" style={{ height: "70px", width: "70px" }} />
          <p className="thesis">
            Мы очень ценим выбор нашего сервиса, поэтому часто поощряем различными розыгрышами.
          </p>
        </div>
      </div>
      <div className="row mac_container">
        <img loading="lazy" className="three_triangle" src={three_triangle} alt="three triangles" />
        <div className="card dark text-white">
          <img loading="lazy" className="card-img" src={mac_fon} alt="card" />
          <div className="card-img-overlay">
            <p className="card-text mac_text">
              При возникновении проблем вы всегда можете написать нам в поддержку, мы разберемся!
            </p>
          </div>
        </div>
      </div>
    </>
    }
  </div >)

}
export default ThirdSlide;
