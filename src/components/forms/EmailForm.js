import React from "react";
import "./../../styles/common.scss";
import "./forms.scss";
import Button from "../Buttons/Buttons";

function EmailForm(props) {
  return (
    <>
      <form className='forms-email margin4'>
        All fields are required:
        <input
          className='width300 pad4 margin4 radius5 pad4-left'
          type='email'
          name='name'
          placeholder='Name'
          onChange={props.onChangeHandleName}
          required
        />
        <input
          className='width300 pad4 margin4 radius5 pad4-left'
          type='text'
          name='address'
          placeholder='Address'
          onChange={props.onChangeHandleEmail}
        />
        <textarea
          className='pad4 margin4 radius5 pad4-left'
          type='text'
          rows='4'
          name='message'
          placeholder='Enter your message here...'
          onChange={props.onChangeHandleMessage}
        />
      </form>
      <Button type='primary' onClickHandle={props.onClickHandle}>
        Submit
      </Button>
    </>
  );
}

export default EmailForm;
