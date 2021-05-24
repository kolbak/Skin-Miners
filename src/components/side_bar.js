import * as React from "react";

import "../styles/components/side-bar.scss";

const SideBar = () => {
  const sidebar = React.useRef();
  const container = React.useRef();

  function showSidebar() {
    console.log("menu_btn :>> ", sidebar);
    sidebar.current.classList.toggle("active-nav");
    container.current.classList.toggle("active-cont");
  }

  return (
    <div className="side-bar">
      <div className="p-1 my-container active-cont" ref={container}>
        <a className="btn border-0" id="menu-btn" onClick={showSidebar}>
          <i className="bx bx-menu"></i>
        </a>
      </div>

      <div
        ref={sidebar}
        id="sidebar"
        className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
      >
        <ul className="nav flex-column w-100">
          <div className="container-fluid ">
              <div className="row">
                  <p className="sidebar-contain">Содержание</p>
              </div>
              <div className="row ">
                  <div className="col-md-3 ">
                    <p className="sidebar-numbers">1</p>
                  </div>
                  <div className="col-md-9 ">
                    <p className="sidebar-text">Что мы делаем?</p>
                  </div>
              </div>
              <div className="row ">
                  <div className="col-md-3 ">
                      <p className="sidebar-numbers">2</p>
                  </div>
                  <div className="col-md-9 ">
                      <p className="sidebar-text">Как это работает?</p>
                  </div>
              </div>
              <div className="row ">
                  <div className="col-md-3 ">
                    <p className="sidebar-numbers">3</p>
                  </div>
                  <div className="col-md-9 ">
                      <p className="sidebar-text">Почему мы?</p>
                  </div>
              </div>
              <div className="row ">
                  <div className="col-md-3 ">
                    <p className="sidebar-numbers">4</p>
                  </div>
                  <div className="col-md-9 ">
                      <p className="sidebar-text">Регистрация</p>
                  </div>
              </div>
              <div className="row ">
                  <div className="col-md-3 ">
                    <p className="sidebar-numbers">5</p>
                  </div>
                  <div className="col-md-9 ">
                      <p className="sidebar-text">Контакты</p>
                  </div>
              </div>
              <div className="row ">
                <p className="sidebar-enter-market">Войти</p>
                <p className="sidebar-enter-market">Маркет</p>
              </div>
          </div>
          {/* <a href="#" className="nav-link h3 my-2 sidebar-header">
            Side Nav
          </a>
          <li href="#" className="nav-link">
            <span className="mx-2 sidebar-numbers">1</span>
            <span className="mx-2 sidebar-text">Home</span>
          </li>
          <li href="#" className="nav-link">
            <span className="mx-2 sidebar-text">About</span>
          </li>
          <li href="#" className="nav-link">
            <span className="mx-2 sidebar-text">Contact</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
