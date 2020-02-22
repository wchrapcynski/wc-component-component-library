import React from "react";
import "./cards.scss";
import "../../styles/common.scss";

function SectionCard(props) {
  return (
    <div
      className={`sectionCard ${props.sectionLocation} ${props.backgroundColorType}`} id={props.id}>
      <div
        className={`${props.cardColorType} ${props.boxSize} radius15 card`}>
        {props.description}
        <div>
          <a href="#Home">To Top</a>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
