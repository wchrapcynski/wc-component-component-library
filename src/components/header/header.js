import React from "react";
import "./header.scss";
import Button from "../buttons/buttons";

function Header(props) {
  const navbarDisplay = props.navbarItems.map((items, key) => {
    return (
      <Button
        key={key}
        type="primary-tab"
        navbar
        onClickHandle={props.onClickHandle}>
        {items}
      </Button>
    );
  });

  return (
    <div className="header radius5-top">
      <div className="title">{props.title}</div>
      <div className="navbar">{navbarDisplay}</div>
    </div>
  );
}

export default Header;
