import React from "react";
import "./cards.scss";
import "../../styles/common.scss";
import ToTopIcon from "../../images/to_top.svg"

function SectionCard(props) {
  return (
    <div
      className={`section-card ${props.margin}`}
      id={props.id}>
      <div className={`${props.cardColorType} radius15 card`}>
        <div className="card-header">
          <div className="card-header-description font-size-2">
            {props.description}
          </div>
          <div className="card-header-totop">
            {props.toTop ? <a href="#Top"><img src={ToTopIcon} alt="to-top" /></a> : ""}
          </div>
        </div>
        <hr />
        <div className="card-body">{props.children}</div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default SectionCard;
