import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchForm from "../components/forms/SearchForm";
import EmailForm from "../components/forms/EmailForm";

storiesOf("Forms", module)
  .add("Search", () => <SearchForm onClickHandle={action("Clicked!")} />)
  .add("Email", () => (
    <EmailForm
      onClickHandle={action("Clicked!")}
      onChangeHandleName={action("Name Changed!")}
      onChangeHandleEmail={action("Email Changed!")}
      onChangeHandleMessage={action("Message Changed!")}
    />
  ));
