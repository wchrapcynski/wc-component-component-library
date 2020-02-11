import React from "react";
import "./../../styles/common.scss";
import "./forms.scss";

function SearchForm(props) {

  return (
    <form className={`forms-${props.formType}`}>
      <input
        className='radius15 width200 pad4 margin15-right'
        type={props.inputType}
        name={props.formType}
        onChange={props.onChangeHandle}
      />
      <button
        onClick={props.onClickHandle}
        name={props.type}
        className='radius15 width100 pad4'>
        {props.buttonText}
      </button>
    </form>
  );
}

export default SearchForm;
