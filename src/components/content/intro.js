import React from "react";
import "./intro.scss";

function Intro(props) {
  return (
    <div className="intro">
      <div className="headshot radius15">
        <img
          className="radius15"
          src={require(`../../images/${props.image}`)}
          alt="headshot"
        />
      </div>
      <div className="description">{props.text}</div>
      <div className="social-media-icons">{props.socialmedia}</div>
    </div>
  );
}

export default Intro;
