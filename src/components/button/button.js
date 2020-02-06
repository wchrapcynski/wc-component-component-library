import React from "react";
import './../../styles/common.scss'
import './button.scss'

function Button(props) {

	const buttonStyle = `pad8 width100 radius15 ${props.type}`.trim();

  return (
    <div className='button'>
      <button className={buttonStyle} onClick={props.onClickHandle}>{props.children}</button>
    </div>
  );
}

export default Button;
