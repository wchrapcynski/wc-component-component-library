import React from "react";
import "./icons.scss";

function Socialmedia(props) {
  return (
    <div className="social-media">
      <a href={props.link} onClick={props.onClickHandle} target="_blank" rel="noopener noreferrer">
        <img
          src={require(`../../images/icons/${props.type}.svg`)}
          alt={props.type}
        />
      </a>
      <div className="social-media-text">
        {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
      </div>
    </div>
  );
}

export default Socialmedia