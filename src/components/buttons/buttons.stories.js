import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Buttons from "./buttons";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  warning: "warning",
  info: "info",
  light: "light",
  dark: "dark",
  disabled: "disabled"
};

const defaultType = "primary";

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .add("Button", () => (
    <Buttons
      type={select("Type", buttonTypes, defaultType)}
      onClickHandle={action("Clicked!")}>
      {text("Button Text", "Submit")}
    </Buttons>
  ))