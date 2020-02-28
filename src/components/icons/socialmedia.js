import React from "react";
import "./icons.scss";

function Socialmedia(props) {
  return (
    <div className="Socialmedia">
      <a href={props.link} onClick={props.onClickHandle} target="_blank" rel="noopener noreferrer">
        <img
          src={require(`../../images/icons/${props.type}.svg`)}
          alt={props.type}
        />
      </a>
    </div>
  );
}

export default Socialmedia