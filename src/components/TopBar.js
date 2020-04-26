import React from "react";

const TopBar = () => {
    return (
      <div className="topbar">
        <a href="/" className="logo">
          <h1>
            <span>Inhye</span>
            <span>Choi</span>
          </h1>
        </a>
        <div className="closebtn hover-target" style={{ display: "none" }}>
          <span className="arrow"></span>
        </div>
        <button className="toggle-menu hover-target">
          <span></span>
        </button>
      </div>
    );
}

export default TopBar
