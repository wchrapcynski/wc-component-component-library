import React from "react";
import './../../styles/common.scss'
import './buttons.scss'

function Buttons(props) {

	// Default button styling. This can be changed as needed.
	const buttonStyle = `pad4 width100 radius15 ${props.type} ${props.navbar ? "navbarTab" : ""}`.trim();

  return (
    <div className='button'>
      <button className={buttonStyle} onClick={props.onClickHandle}>{props.children}</button>
    </div>
  );
}

export default Buttons;
