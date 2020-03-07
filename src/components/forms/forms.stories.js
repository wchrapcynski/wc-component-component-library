import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchForm from "./searchform";
import EmailForm from "./emailform";

storiesOf("Forms", module)
  .add("Search", () => (
    <SearchForm
      onClickHandle={action("Clicked!")}
      onChangeHandle={action("Text Changed!")}
    />
  ))
  .add("Email", () => (
    <EmailForm
      onClickHandle={action("Clicked!")}
      onChangeHandle={action("Form Data Changed!", event => event)}
    />
  ));
