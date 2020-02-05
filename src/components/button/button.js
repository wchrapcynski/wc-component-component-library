import React from "react";
import './../../styles/common.scss'
import './button.scss'

function Button(props) {

	const cls = `bgYellow	fontBlack pad8 width100 radius15 ${props.type}`.trim();

  return (
    <div className='button'>
      <button className={cls}>{props.children}</button>
    </div>
  );
}

export default Button;
