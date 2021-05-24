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
    console.log('object :>> ', e.target);
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

  </div>)
}

export default SecondSlide