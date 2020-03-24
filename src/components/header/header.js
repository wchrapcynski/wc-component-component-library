import React from "react";
import "./header.scss";
import Button from "../buttons/buttons";

function Header(props) {
  const navbarDisplay = props.navbarItems.map((items, key) => {
    return (
      <a href={`#${items}`} key={key}>
        <Button type="primary-tab" onClickHandle={props.onClickHandle}>
          {items}
        </Button>
      </a>
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
