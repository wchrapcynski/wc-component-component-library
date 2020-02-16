import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Button from "../buttons/buttons";

function Header(props) {
  const navbarDisplay = props.navbarItems.map((items, key) => {
    return (
      <NavLink to={items} key={key}>
        <Button type="primary-tab" navbar onClickHandle={props.onClickHandle}>
          {items}
        </Button>
      </NavLink>
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
