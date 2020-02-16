import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, array, text } from "@storybook/addon-knobs";
import Header from "./header";

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .add("Header", () => (
    <Header
      navbarItems={array("Tab Names", ["Home", "About", "Contact"])}
      onClickHandle={action("Clicked!")}
      title={text("Header Title", "Title")}
    />
  ));
