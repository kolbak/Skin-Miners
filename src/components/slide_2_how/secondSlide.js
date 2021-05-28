import React, { useState, useEffect } from "react"

import '../../styles/components/slide_2_how/secondSlide.scss'
import '../../styles/components/slide_2_how/secondSlide_mobile.scss'

import Registration from './registration'
import DownloadApp from './downloadApp'
import Login from './login'
import Mining from './mining'

import reg from '../../images/slide_2_how/mobile/reg.svg'
import yellow_arrow from '../../images/slide_2_how/mobile/yellow_arrow.svg'
import download from '../../images/slide_2_how/mobile/download.svg'
import miningVideo from '../../images/slide_2_how/schema_animation.mp4'
import miningPoster from '../../images/slide_2_how/schema.png'
// import three_figures from "../../images/slide_6_contacts/three_figures.svg";
// import arrow_to_contacts from '../../images/slide_6_contacts/arrow_to_contacts.svg'

const SecondSlide = () => {
 
  // $('.carousel').carousel({
  //   interval: false
  // }); 

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
  
 
  
  // var blockPosition = active_slider_btn2.offset().top,
  // windowScrollPosition = (window).scrollTop();
  // console.log(blockPosition);
  // console.log(windowScrollPosition);
  // if( blockPosition < windowScrollPosition ) {
  //   ('.block').addClass('red');
  // } else {
  //   ('.block').removeClass('red');
  // }
 

  function togglecolor1() {
    active_slider_btn2.current.classList.remove("active_color");
    active_slider_btn3.current.classList.remove("active_color");
    active_slider_btn4.current.classList.remove("active_color");
    active_btn_line1.current.classList.remove("active_color")
    active_btn_line2.current.classList.remove("active_color")
    active_btn_line3.current.classList.remove("active_color")
   
  }
  function togglecolor2() {
    active_slider_btn1.current.classList.add("active_color");
    active_slider_btn3.current.classList.remove("active_color");
    active_slider_btn4.current.classList.remove("active_color");

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

  function disableControls(condition) {
    leftslide.current.disabled = condition;
    rightslide.current.disabled = condition;
  }

  let scroll_var = 1;
  // setTimeout(NextSlide, 2000)

  function NextSlide(){
    
    // console.log(leftslide.current, rightslide.current);
    
    if (leftslide.current.disabled) return;
    disableControls(true)

    setTimeout(() => {
      if (scroll_var === 4)
        scroll_var=1;
      else
        scroll_var+=1;
        
      disableControls(false)
      choosecolor(scroll_var);
      console.log(scroll_var);
    }, 1000);
    
  }
   
  function PreviousSlide(e){
    console.log(e);
    if (leftslide.current.disabled) return;

    disableControls(true)
    setTimeout(() => {
      if (scroll_var !== 1)
        scroll_var-=1;
      else 
        scroll_var=4;
      disableControls(false)
      choosecolor(scroll_var);
      console.log(scroll_var);
    }, 1000);
    
    disableControls(true)
  }
  function choosecolor(a){
    if (a===1){
      togglecolor1();
    }
    if(a===2){
      togglecolor2();
    }
    if(a===3){
      togglecolor3();
    }
    if(a===4){
      togglecolor4();
    }

  }
  //mobile

  return (<div className="wrap-slide slide-2" id="how-anchor">
    
    <h1 className="h1-main">
      <span className="slide-number">2</span>
      <span className="slide-title">Как это работает?</span>
    </h1>
    {width >= 780 ? <>
    <div className="wrap-tabs">
      <ul>
        <li className={tab >= 0 || tab === '' ? 'active' : ''} >
          <i className="circle"></i>
          <h2>
            <a onClick={scrollInto} href="#registration">Регистрация</a>
          </h2>
        </li>
        <i className={`line l1 ${tab >= 1 ? 'active' : ''}`}></i>
        <li className={tab >= 1 ? 'active' : ''} >
          <i className="circle"></i>
          <h2>
            <a onClick={scrollInto} href="#download">Скачать приложение</a>
          </h2>
        </li>
        <i className={`line l2 ${tab >= 2 ? 'active' : ''}`}></i>
        <li className={tab >= 2 ? 'active' : ''} >
          <i className="circle"></i>
          <h2>
            <a onClick={scrollInto} href="#login">Логин</a>
          </h2>
        </li>
        <i className={`line l3 ${tab >= 3 ? 'active' : ''}`}></i>
        <li className={tab >= 3 ? 'active' : ''} >
          <i className="circle"></i>
          <h2>
            <a onClick={scrollInto} href="#mining">Майнинг</a>
          </h2>
        </li>
      </ul>

      <div className="content" onScroll={contentScroll}>
        <Registration />
        <DownloadApp />
        <Login />
        <Mining />
      </div>
    </div>
  </> : <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
       <div className="carousel-indicators">
         <button ref={active_slider_btn1} className="active active-slider-btn1 slider-btns" onClick={togglecolor1} type=" button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"/>
         <div ref = {active_btn_line1} class="btn-line"></div>
         <button ref={active_slider_btn2} className="active-slider-btn2 slider-btns" onClick={togglecolor2} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
         <div ref = {active_btn_line2} class="btn-line"></div>
         <button ref={active_slider_btn3} className="active-slider-btn3 slider-btns" onClick={togglecolor3} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
         <div ref = {active_btn_line3} class="btn-line"></div>
         <button ref={active_slider_btn4} className="active-slider-btn4 slider-btns" onClick={togglecolor4} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
      
       </div>
       <div className="carousel-inner">
         <div key={1} className="carousel-item active">
           <div className="row">
             <p className="slide-header">Регистрация</p>
             <img src={reg} className="first-slider-image"/>
             <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
             <img src={yellow_arrow} className="yellow_arrow"/>
           </div>
         </div>
         <div key={2} className="carousel-item">
           <div className="row">
            <p className="slide-header">Скачать приложение</p>
            <img src={download} className="download"/>
            <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
           </div>
         </div>
         <div key={3} className="carousel-item">
           <div className="row">
             <p className="slide-header">Логин</p>
             <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
           </div>
         </div>
         <div key={4} className="carousel-item">
           <div className="row">
             <p className="slide-header">Майнинг</p>
             <video
               poster={miningPoster}
               width="500" height="400" preload="true" autoPlay loop muted>
               <source src={miningVideo} type='video/mp4' />
             </video>
             <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
           </div>
         </div>
       </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={PreviousSlide} ref={rightslide}>
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
       </button>
       <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={NextSlide} ref={leftslide}>
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
     </div>

  </>}
  </div>)
}

export default SecondSlide