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
  disabled: "disabled",
  primaryTab: "primary-tab",
  secondaryTab: "secondary-tab",
  successTab: "success-tab",
  dangerTab: "danger-tab",
  warningTab: "warning-tab",
  infoTab: "info-tab",
  lightTab: "light-tab",
  darkTab: "dark-tab",
  disabledTab: "disabled-tab"
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
  ));
