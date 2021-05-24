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
          <a href="#" className="nav-link h3 my-2 sidebar-header">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
