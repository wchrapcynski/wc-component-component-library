import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchForm from "./SearchForm";
import EmailForm from "./EmailForm";

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
      onChangeHandleName={action("Name Changed!")}
      onChangeHandleEmail={action("Email Changed!")}
      onChangeHandleMessage={action("Message Changed!")}
    />
  ));
