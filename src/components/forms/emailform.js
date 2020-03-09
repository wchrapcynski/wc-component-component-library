import React from "react";
import "./../../styles/common.scss";
import "./forms.scss";
import Button from "../buttons/buttons";

function EmailForm(props) {
  return (
    <>
      <form className="forms-email margin4">
        All fields are required:
        <input
          className="width300 pad4 margin4 radius5 pad4-left"
          type="text"
          name="name"
          placeholder="Name"
          onChange={props.onChangeHandle}
        />
        <input
          className="width300 pad4 margin4 radius5 pad4-left"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={props.onChangeHandle}
        />
        <textarea
          className="pad4 margin4 radius5 pad4-left"
          type="text"
          rows="4"
          name="message"
          placeholder="Enter your message here..."
          onChange={props.onChangeHandle}
        />
        <div className="forms-submit">
          <Button type="primary" onClickHandle={props.onClickHandle}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default EmailForm;
