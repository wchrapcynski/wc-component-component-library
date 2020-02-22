import React from "react";
import "./cards.scss";

function FlipCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front radius15">
          <img
            src={require(`../../images/${props.image}`)}
            alt="Avatar"
            className="radius15"
          />
        </div>
        <div className="flip-card-back radius15">
          <a href={props.flipCardText[2]}>
            <h1>{props.flipCardText[0]}</h1>
          </a>
          <p>{props.flipCardText[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
