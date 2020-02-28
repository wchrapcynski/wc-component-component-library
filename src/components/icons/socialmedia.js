import React from "react";
import "./icons.scss";

function Socialmedia(props) {
  return (
    <div className="Socialmedia">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={require(`../../images/icons/socialmedia-${props.type}.svg`)}
          alt={props.type}
        />
      </a>
    </div>
  );
}

export default Socialmedia