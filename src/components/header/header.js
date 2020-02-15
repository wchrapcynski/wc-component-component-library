import React from "react";
import "./header.scss";

function Header() {
  return (
    <div className="header radius5-top">
      <div className="navbar">
        <button className="menu-item radius5-top pad4">Home</button>
        <button className="menu-item-selected radius5-top pad4">About</button>
        <button className="menu-item radius5-top pad4">Contact</button>
      </div>
    </div>
  );
}

export default Header;
