import React from "react";
import "./../../styles/common.scss";
import "./forms.scss";

function EmailForm(props) {
  return (
    <form className="forms-email">
			All fields are required:
      <input
        className="width300 pad4 margin4 radius5 pad4-left"	
				type="email"
				name="name"
				placeholder="Name"
				onChange={props.onChangeHandleName}
				required
      />
			<input
        className="width300 pad4 margin4 radius5 pad4-left"
        type="text"
				name="address"
				placeholder="Address"
        onChange={props.onChangeHandleEmail}
      />
			<textarea
        className="pad4 margin4 radius5 pad4-left"
				type="text"
				rows="4"
				name="message"
				placeholder="Enter your message here..."
        onChange={props.onChangeHandleMessage}
      />
      <button
				onClick={props.onClickHandle}
				id="submit"
				name="submit"
        className="width100 pad4 margin4 radius15 pad4-left" >
        {props.buttonText}
      </button>
    </form>
  );
}

export default EmailForm;
