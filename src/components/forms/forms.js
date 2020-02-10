import React from "react";
import './forms.scss'

function Forms(props) {
  return (
    <form className={`forms-${props.formType}`}>
      <input
        type={props.inputType}
        name={props.formType}
        onChange={props.onChangeHandle}
      />
      <button onClick={props.onClickHandle} name={props.type}>
        {props.buttonText}
      </button>
    </form>
  );
}

export default Forms;
