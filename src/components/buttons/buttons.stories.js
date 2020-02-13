import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Buttons from "./Buttons"

storiesOf("Buttons", module)
  .add("Button - primary", () => (
    <Buttons type='primary' onClickHandle={action("Clicked!")}>
      Primary
    </Buttons>
  ))
  .add("Button - secondary", () => (
    <Buttons type='secondary' onClickHandle={action("Clicked!")}>
      Secondary
    </Buttons>
  ))
  .add("Button - success", () => (
    <Buttons type='success' onClickHandle={action("Clicked!")}>
      Success
    </Buttons>
  ))
  .add("Button - danger", () => (
    <Buttons type='danger' onClickHandle={action("Clicked!")}>
      Danger
    </Buttons>
  ))
  .add("Button - warning", () => (
    <Buttons type='warning' onClickHandle={action("Clicked!")}>
      Warning
    </Buttons>
  ))
  .add("Button - info", () => (
    <Buttons type='info' onClickHandle={action("Clicked!")}>
      Info
    </Buttons>
  ))
  .add("Button - light", () => (
    <Buttons type='light' onClickHandle={action("Clicked!")}>
      Light
    </Buttons>
  ))
  .add("Button - dark", () => (
    <Buttons type='dark' onClickHandle={action("Clicked!")}>
      Dark
    </Buttons>
  ))
  .add("Button - disabled", () => (
    <Buttons type='disabled' onClickHandle={action("Clicked!")}>
      Disabled
    </Buttons>
  ));
