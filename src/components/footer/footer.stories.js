import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Footer from "./footer";

storiesOf("Footer", module)
  .add("Footer", () => (
    <Footer text="Footer text" />
  ));
