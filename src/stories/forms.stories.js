import React from "react";
import { storiesOf } from "@storybook/react";
import SearchForm from "../components/forms/SearchForm";
import EmailForm from "../components/forms/EmailForm";

function onClickHandle(event) {
  event.preventDefault();
  console.log("I have been clicked!");
}

storiesOf("Forms", module)
  .add("Search", () => (
    <SearchForm onClickHandle={onClickHandle} buttonText='Search' />
  ))
  .add("Search - connected", () => (
    <SearchForm onClickHandle={onClickHandle} buttonText='Search' connected />
  ))
  .add("Email", () => (
    <EmailForm onClickHandle={onClickHandle} buttonText='Submit' />
  ));
