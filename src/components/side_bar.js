import * as React from "react";

import "../styles/components/side-bar.scss";

import hideBtn from '../images/sidebar/sidebar-active.svg'
import showBtn from '../images/sidebar/sidebar-unactive.svg'

const menu = [
  { link: "#what-anchor", title: "Что мы делаем?" },
  { link: "#how-anchor", title: "Как это работает?" },
  { link: "#we-anchor", title: "Почему мы?" },
  { link: "#registration-anchor ", title: "Регистрация" },
  { link: "#contacts-anchor", title: "Контакты" },
]

const SideBar = () => {
  const sidebar = React.useRef();
  const container = React.useRef();
  const menubtn = React.useRef();

  function toggleSidebar() {
    console.log("Toggle");
    sidebar.current.classList.toggle("active-nav");
    container.current.classList.toggle("active-cont");
    menubtn.current.src = menubtn.current.src === showBtn ? hideBtn : showBtn;
  }

  return (<div className="side-bar">

    <div className="p-1 my-container" ref={container}>
      <img alt="close sidebar" src={showBtn}
        id="menu-btn" onClick={toggleSidebar} ref={menubtn} />
    </div>

    <div id="sidebar" ref={sidebar} className="side-navbar d-flex justify-content-between flex-wrap flex-column">
      <ul className="nav flex-column w-100 must-blur">
        <div className="container-fluid ">
          <div className="row" style={{ marginBottom: "10vh", display: "block" }}>
            <p className="sidebar-contain">Содержание</p>
          </div>


          {menu.map((x, i) =>
            <a onClick={toggleSidebar} key={i} href={x.link} className="row swap-to sidebar-lines" style={{ flexWrap: "nowrap" }}>
              <span className="sidebar-numbers col-md-3">{i + 1}</span>
              <span className="sidebar-text col-md-9">{x.title}</span>
            </a>
          )}


          <div className="row sidebar-lastline">
            <a href={`${process.env.LK_URL}/personal-office`} className="sidebar-enter-market">Войти</a>
            <a href={`${process.env.LK_URL}/market`} className="sidebar-enter-market">Маркет</a>
          </div>
        </div>

      </ul>
    </div>
  </div>);
};

export default SideBar;
