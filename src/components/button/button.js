import React from "react";
import './../../styles/common.scss'
import './button.scss'

function Button(props) {
	let localClass = "";

	if(props.type === "primary") {
		localClass="primary"
	}

	if(props.type === "disabled") {
		localClass="disabled"
	}

	const cls = `bgYellow	fontBlack pad8 width100 radius15 ${localClass}`.trim();

  return (
    <div className='button'>
      <button className={cls}>{props.children}</button>
    </div>
  );
}

export default Button;
