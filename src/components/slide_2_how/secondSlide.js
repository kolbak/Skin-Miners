import * as React from "react"

import '../../styles/components/slide_2_how/secondSlide.scss'

import Registration from './registration'
import DownloadApp from './downloadApp'
import Login from './login'
import Mining from './mining'


const SecondSlide = () => {
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
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (<div className="wrap-slide slide-2">

    <h1 className="h1-main">
      <span className="slide-number">2</span>
      <span className="slide-title">Как это работает?</span>
    </h1>

    <div className="wrap-tabs">
      <ul>
        <li className={tab >= 0 || tab === '' ? 'active' : ''} >
          <a onClick={scrollInto} href="#registration">
            <i className="circle"></i>
            <h2>Регистрация</h2>
          </a>
        </li>
        <li className={tab >= 1 ? 'active' : ''} >
          <a onClick={scrollInto} href="#download">
            <i className="line"></i>
            <i className="circle"></i>
            <h2>Скачать приложение</h2>
          </a>
        </li>
        <li className={tab >= 2 ? 'active' : ''} >
          <a onClick={scrollInto} href="#login">
            <i className="line"></i>
            <i className="circle"></i>
            <h2>Логин</h2>
          </a>
        </li>
        <li className={tab >= 3 ? 'active' : ''} >
          <a onClick={scrollInto} href="#mining">
            <i className="line"></i>
            <i className="circle"></i>
            <h2>Майнинг</h2>
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

  </div>)
}

export default SecondSlide