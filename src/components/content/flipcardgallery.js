import React from "react";
import FlipCard from "../cards/flipcard";
import "./flipcardgallery.scss";

function FlipCardGallery(props) {
  const flipcards = props.flipcards.map((data, key) => {
    return <div key={key} className="flipcard-gallery-item"><FlipCard image={data.image} flipCardText={data.flipCardText} /></div>;
  });
  return <div className="flipcard-gallery">{flipcards}</div>;
}

export default FlipCardGallery;
