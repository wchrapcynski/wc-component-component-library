import React from "react";
import "./../../styles/common.scss";
import "./forms.scss";

function EmailForm(props) {

  return (
    <form className="forms-email">
      <input
        className="width300 pad4"
        type="text"
        name="name"
        onChange={props.onChangeHandle}
      />
			<input
        className="width300 pad4"
        type="text"
        name="address"
        onChange={props.onChangeHandle}
      />
			<input
        className="width300 pad4"
        type="text"
        name="message"
        onChange={props.onChangeHandle}
      />
      <button
        onClick={props.onClickHandle}
        name="submit"
        className="width100 pad4">
        {props.buttonText}
      </button>
    </form>
  );
}

export default EmailForm;
