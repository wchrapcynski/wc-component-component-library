import React from "react";
import "./cards.scss";

function FlipCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={require("../../images/image1.png")}
            alt="Avatar"
          />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
