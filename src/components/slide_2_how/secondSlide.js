import * as React from "react"

import Registration from './registration'
import DownloadApp from './downloadApp'
import Login from './login'
import Mining from './mining'

import '../../styles/components/slide_2_how/secondSlide.scss'

// TODO: сделать, а лучше найти норм stepper, карусель, scrollSpy 

const SecondSlide = () => {
  const [tab, setTab] = React.useState('');

  function contentScroll(e) {
    let scrollTopChildren = [];
    let scrollTop = e.target.scrollTop;
    for (let i = 0, l = e.target.children.length; i < l; i++) {
      scrollTopChildren.push(e.target.children[i].offsetTop);
      if (scrollTop < scrollTopChildren[i]) {
        setTab(`tab${i}`);
        return;
      }
    }
  }


  // const smoothLinks = document.querySelectorAll('a[href^="#"]');
  // for (let smoothLink of smoothLinks) {
  //     smoothLink.addEventListener('click', function (e) {
  //         e.preventDefault();
  //         const id = smoothLink.getAttribute('href');

  //         document.querySelector(id).scrollIntoView({
  //             behavior: 'smooth',
  //             block: 'start'
  //         });
  //     });
  // };

  function scrollInto(e) {
    e.preventDefault();
    console.log('e.target :>> ', e.target);
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <div className="wrap-slide slide-2">
      <h1 className="h1-main">
        <span className="slide-number">2</span>
        <span className="slide-title">Как это работает?</span>
      </h1>
      <div className="wrap-tabs">
        <ul>
          <li className={tab === 'tab0' || tab === '' ? 'active' : ''} >
            <a onClick={scrollInto} href="#registration">
              <i  className="circle"></i>
              <h2>Регистрация</h2>
              <i className="line"></i>
            </a>
          </li>
          <li className={tab === 'tab1' ? 'active' : ''} >
            <a onClick={scrollInto} href="#download">
              <i  className="circle"></i>
              <h2>Скачать приложение</h2>
              <i className="line"></i>
            </a>
          </li>
          <li className={tab === 'tab2' ? 'active' : ''} >
            <a onClick={scrollInto} href="#login">
              <i  className="circle"></i>
              <h2>Логин</h2>
              <i className="line"></i>
            </a>
          </li>
          <li className={tab === 'tab3' ? 'active' : ''} >
            <a onClick={scrollInto} href="#mining">
              <i  className="circle"></i>
              <h2>Майнинг</h2>
              {/* <i className="line"></i> */}
            </a>
          </li>
        </ul>
        <div className="content" onScroll={contentScroll}>
          <Registration />
          <DownloadApp />
          <Login />
          <Mining />
        </div>
      </div>
    </div>
  )
}

export default SecondSlide