import React from "react";
import "./../../styles/common.scss";
import "./forms.scss";

function SearchForm(props) {

  const inputClass = props.connected ? 'radius15-left' : 'radius15 margin15-right';
  const buttonClass = props.connected ? 'radius15-right' : 'radius15';

  return (
    <form className="forms-search">
      <input
        className={`width200 pad4 ${inputClass}`}
        type="text"
        name="search"
        onChange={props.onChangeHandle}
      />
      <button
        onClick={props.onClickHandle}
        name="search"
        className={`width100 pad4 ${buttonClass}`}>
        {props.buttonText}
      </button>
    </form>
  );
}

export default SearchForm;
