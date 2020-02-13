import React from "react";
import "./../../styles/common.scss";
import "./forms.scss";
import Button from "../Buttons/Buttons";

function SearchForm(props) {
  return (
    <div className='forms-search'>
      <form>
        <input
          className='width300 pad4 radius5 margin15-right pad4-left'
          type='text'
          name='search'
          onChange={props.onChangeHandle}
        />
      </form>
      <Button type='primary' onClickHandle={props.onClickHandle}>
        Submit
      </Button>
    </div>
  );
}

export default SearchForm;
