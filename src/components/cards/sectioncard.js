import React from "react";
import "./cards.scss";
import "../../styles/common.scss";

function SectionCard(props) {
  return (
    <div
      className={`section-card ${props.sectionLocation} ${props.backgroundColorType}`}
      id={props.id}>
      <div className={`${props.cardColorType} ${props.boxSize} radius15 card`}>
        <div className="card-header">{props.description}</div>
        <div className="card-body"></div>
        <div className="card-footer">{props.toTop ? <a href="#Top">To Top</a> : ""}</div>
      </div>
    </div>
  );
}

export default SectionCard;
