import * as React from "react"

import Registration from './registration'
import DownloadApp from './downloadApp'
import HowItWorks from './howItWorks'
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

  return (
    <div className="wrap-slide slide-2">
      <h1 className="h1-main">
        <span className="slide-number">2</span>
        <span className="slide-title">Как это работает?</span>
      </h1>
      <div className="wrap-tabs">
        <ul>
          <li className={tab === 'tab0' || tab === '' ? 'active' : ''} ><i></i> <h2>Регистрация</h2></li>
          <li className={tab === 'tab1' ? 'active' : ''} ><i></i> <h2>Скачать приложение</h2></li>
          <li className={tab === 'tab2' ? 'active' : ''} ><i></i> <h2>Логин</h2></li>
          <li className={tab === 'tab3' ? 'active' : ''} ><i></i> <h2>Майнинг</h2></li>
        </ul>
        <div className="content" onScroll={contentScroll}>
          <Registration />
          <DownloadApp />
          <HowItWorks />
          <Mining />
        </div>
      </div>
    </div>
    // <div className="wrap-slide slide-2">
    //   <h1 className="h1-main">
    //     <span className="slide-number">2</span>
    //     <span className="slide-title">Как это работает?</span>
    //   </h1>
    //   <div className="wrap-tabs">
    //     <ul>
    //       <li className={tab === 'tab0' || tab === '' ? 'active' : ''} ><i></i> <h2>Регистрация</h2></li>
    //       <li className={tab === 'tab1' ? 'active' : ''} ><i></i> <h2>Скачать приложение</h2></li>
    //       <li className={tab === 'tab2' ? 'active' : ''} ><i></i> <h2>Логин</h2></li>
    //       <li className={tab === 'tab3' ? 'active' : ''} ><i></i> <h2>Майнинг</h2></li>
    //     </ul>
    //     <div className="content" onScroll={contentScroll}>
    //       <Registration />
    //       <DownloadApp />
    //       <HowItWorks />
    //       <Mining />
    //     </div>
    //   </div>
    // </div>
  )
}

export default SecondSlide