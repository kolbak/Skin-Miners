import React, { useState, useEffect } from "react"

import '../../styles/components/slide_2_how/secondSlide.scss'
import '../../styles/components/slide_2_how/secondSlide_mobile.scss'

import Registration from './registration'
import DownloadApp from './downloadApp'
import Login from './login'
import Mining from './mining'

//*------------------------------------------------------- Мобильная версия
import reg from '../../images/slide_2_how/registration.png'
// import reg from '../../images/slide_2_how/mobile/reg.svg'
import download from '../../images/slide_2_how/installation.png'
// import download from '../../images/slide_2_how/mobile/download.svg'
import yellow_arrow from '../../images/slide_2_how/mobile/yellow_arrow.svg'

//*------------------------------------------------------- Видео
import miningPoster from '../../images/slide_2_how/schema.png'
import miningVideo from '../../images/slide_2_how/schema_animation.mp4'
// import miningVideo_h264 from '../../images/slide_2_how/schema_animation.h264'
import miningVideo_webm from '../../images/slide_2_how/schema_animation.webm'
// import three_figures from "../../images/slide_6_contacts/three_figures.svg";
// import arrow_to_contacts from '../../images/slide_6_contacts/arrow_to_contacts.svg'

const SecondSlide = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])

  const [tab, setTab] = React.useState(0);


  function contentScroll(e) {
    let scrollTopChildren = [];
    let scrollTop = e.target.scrollTop;
    for (let i = 0, l = e.target.children.length; i < l; i++) {
      scrollTopChildren.push(e.target.children[i].offsetTop);
      if (scrollTop < scrollTopChildren[i]) {
        setTab(i);
        return;
      }
    }
  }

  function scrollInto(e) {
    e.preventDefault();
    console.log('object :>> ', e.target);
    const id = e.target.getAttribute('href');

    if (typeof document !== "undefined") {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  //mobile
  const active_slider_btn1 = React.useRef();
  const active_slider_btn2 = React.useRef();
  const active_slider_btn3 = React.useRef();
  const active_slider_btn4 = React.useRef();
  const active_btn_line1 = React.useRef();
  const active_btn_line2 = React.useRef();
  const active_btn_line3 = React.useRef();
  const rightslide = React.useRef();
  const leftslide = React.useRef();


  function togglecolor1() {
    active_slider_btn2.current.classList.remove("active_color")
    active_slider_btn3.current.classList.remove("active_color")
    active_slider_btn4.current.classList.remove("active_color")

    active_btn_line1.current.classList.remove("active_color")
    active_btn_line2.current.classList.remove("active_color")
    active_btn_line3.current.classList.remove("active_color")
  }
  function togglecolor2() {
    active_slider_btn1.current.classList.add("active_color")
    active_slider_btn3.current.classList.remove("active_color")
    active_slider_btn4.current.classList.remove("active_color")

    active_btn_line1.current.classList.add("active_color")
    active_btn_line2.current.classList.remove("active_color")
    active_btn_line3.current.classList.remove("active_color")
  }
  function togglecolor3() {
    active_slider_btn1.current.classList.add("active_color");
    active_slider_btn2.current.classList.add("active_color");
    active_slider_btn4.current.classList.remove("active_color");

    active_btn_line1.current.classList.add("active_color")
    active_btn_line2.current.classList.add("active_color")
    active_btn_line3.current.classList.remove("active_color")
  }
  function togglecolor4() {
    active_slider_btn1.current.classList.add("active_color");
    active_slider_btn2.current.classList.add("active_color");
    active_slider_btn3.current.classList.add("active_color");

    active_btn_line1.current.classList.add("active_color")
    active_btn_line2.current.classList.add("active_color")
    active_btn_line3.current.classList.add("active_color")
  }
  function choosecolor(a) {
    switch (a) {
      case 1: togglecolor1(); break;
      case 2: togglecolor2(); break;
      case 3: togglecolor3(); break;
      case 4: togglecolor4(); break;
      default: break;
    }
  }

  function NextSlide() {
    const element1 = document.getElementById('first-slide-pos');
    const element2 = document.getElementById('second-slide-pos');
    const element3 = document.getElementById('third-slide-pos');
    const element4 = document.getElementById('fourth-slide-pos');

    const a = element1.getBoundingClientRect();
    const b = element2.getBoundingClientRect();
    const c = element3.getBoundingClientRect();
    const d = element4.getBoundingClientRect();
    //если значение left больше 200 - это слайд до которого скролится
    if (a.left > 200) choosecolor(1);
    if (b.left > 200) choosecolor(2);
    if (c.left > 200) choosecolor(3);
    if (d.left > 200) choosecolor(4);
  }
  function PreviousSlide(e) {
    const element1 = document.getElementById('first-slide-pos');
    const element2 = document.getElementById('second-slide-pos');
    const element3 = document.getElementById('third-slide-pos');
    const element4 = document.getElementById('fourth-slide-pos');

    const a = element1.getBoundingClientRect();
    const b = element2.getBoundingClientRect();
    const c = element3.getBoundingClientRect();
    const d = element4.getBoundingClientRect();

    if (a.left < -200) choosecolor(1);
    if (b.left < -200) choosecolor(2);
    if (c.left < -200) choosecolor(3);
    if (d.left < -200) choosecolor(4);
    //то значение которое меньше -200 означает слайд до которого скролится
  }
  return (<div className="wrap-slide slide-2" id="how-anchor">

    <h1 className="h1-main">
      <span className="slide-number">2</span>
      <span className="slide-title">Как это работает?</span>
    </h1>

    {width >= 780 ? <>
      <div className="wrap-tabs">
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: (tab) * 33.3 + '%' }} aria-valuenow={(tab + 1) * 25} aria-label="jump to slide" aria-valuemin="0" aria-valuemax="100" />
          <i className={`circle c1 ${tab >= 0 && 'active'}`} />
          <i className={`circle c2 ${tab >= 1 && 'active'}`} />
          <i className={`circle c3 ${tab >= 2 && 'active'}`} />
          <i className={`circle c4 ${tab >= 3 && 'active'}`} />
        </div>
        <ul>
          <li className={tab >= 0 || tab === '' ? 'active' : ''}><h2><a onClick={scrollInto} href="#registration">Регистрация</a></h2></li>
          <li className={tab >= 1 ? 'active' : ''}><h2><a onClick={scrollInto} href="#download">Скачать приложение</a></h2></li>
          <li className={tab >= 2 ? 'active' : ''}><h2><a onClick={scrollInto} href="#login">Логин</a></h2></li>
          <li className={tab === 3 ? 'active' : ''}><h2><a onClick={scrollInto} href="#mining">Майнинг</a></h2></li>
        </ul>

        <div className="content" onScroll={contentScroll}>
          <Registration />
          <DownloadApp />
          <Login />
          <Mining />
        </div>
      </div>
    </> : <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
        <div className="carousel-indicators">
          <button ref={active_slider_btn1} className="active active-slider-btn1 slider-btns" onClick={togglecolor1} type=" button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" />
          <div ref={active_btn_line1} className="btn-line" />
          <button ref={active_slider_btn2} className="active-slider-btn2 slider-btns" onClick={togglecolor2} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
          <div ref={active_btn_line2} className="btn-line" />
          <button ref={active_slider_btn3} className="active-slider-btn3 slider-btns" onClick={togglecolor3} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
          <div ref={active_btn_line3} className="btn-line" />
          <button ref={active_slider_btn4} className="active-slider-btn4 slider-btns" onClick={togglecolor4} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
        </div>

        <div className="carousel-inner">
          <div key={1} className="carousel-item active" id="first-slide-pos">
            <div className="row">
              <p className="slide-header">Регистрация</p>
              <img alt="registration" src={reg} className="first-slider-image" style={{ maxHeight: "80vh" }} />
              <p className="slide-text">Создайте аккаунт на сайте, чтобы получить доступ к приложению. Отслеживайте прогресс прямо из браузера</p>
              <img alt="figure" src={yellow_arrow} className="yellow_arrow" />
            </div>
          </div>
          <div key={2} className="carousel-item" id="second-slide-pos">
            <div className="row">
              <p className="slide-header">Скачать приложение</p>
              <img alt="download" src={download} className="download" style={{ maxHeight: "80vh" }} />
              <p className="slide-text slide-text__download">
                Скачайте приложение из личного кабинета. Оно автоматически определит мощность и подберет оптимальный режим майнинга.
              </p>
            </div>
          </div>
          <div key={3} className="carousel-item" id="third-slide-pos">
            <div className="row third-slide__mobile">
              <p className="slide-header">Логин</p>
              <i className="bg-line_m n-1"/>
              <i className="bg-line_m n-2"/>
              <form className="offset-md-8 col-3">
                <div className="mb-3"><h4 style={{ textAlign: "center" }}>Форма входа</h4></div>
                <br />
                <div className="mb-3"><input placeholder="Email" type="email" className="form-control" /></div>
                <div className="mb-3"><input placeholder="Пароль" type="password" className="form-control" /></div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="check" />
                  <label className="form-check-label" htmlFor="check">Не выходить</label>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
          
                <div className="mt-3" style={{ textAlign: "center" }}>
                  <a href="Регистрация">Регистрация</a>
                </div>
              </form>
              <i className="bg-line_m n-4" />
              <i className="bg-line_m n-5" />
              <p className="slide-text">
                Войдите в программу. Используйте те же данные, что и на сайте:
                так мы сможем автоматически начислять вознаграждение.
              </p>
             
            </div>
          </div>
          <div key={4} className="carousel-item" id="fourth-slide-pos">
            <div className="row">
              <p className="slide-header slide-header__video">Майнинг</p>
              <video poster={miningPoster} width="500" height="400" preload="true" autoPlay loop muted>
                <source src={miningVideo} type='video/mp4' />
                {/* <source src={miningVideo_h264} type='video/h264' />  */}
                <source src={miningVideo_webm} type='video/webm' />
              </video>
              <p className="slide-text slide-text__video">
                Регулируйте мощность работы: от слабой, при которой можно параллельно
                играть в игры, до пиковой, с максимально возможной доходностью
                Первый скин можно вывести уже после суток майнинга через наш
                внутренний магазин.
              </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={PreviousSlide} ref={rightslide}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={NextSlide} ref={leftslide}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>}

  </div>)
}

export default SecondSlide