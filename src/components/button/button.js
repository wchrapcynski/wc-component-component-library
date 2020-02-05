import React from "react";
import './../../styles/common.scss'
import './button.scss'

function Button(props) {
	let localClass = "";
	let types = ["primary", "disabled"];

	// Checks for type and sets localClass when necessary
	for(let i = 0; i < types.length; i++) {
		if(props.type === types[i]) {
			localClass = props.type;
		}
	}

	const cls = `bgYellow	fontBlack pad8 width100 radius15 ${localClass}`.trim();

  return (
    <div className='button'>
      <button className={cls}>{props.children}</button>
    </div>
  );
}

export default Button;
