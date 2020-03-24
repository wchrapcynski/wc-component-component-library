import React from "react";
import { storiesOf } from "@storybook/react";
import Footer from "./footer";

storiesOf("Footer", module)
  .add("Footer", () => (
    <Footer footerText="Footer text" author="William Chrapcynski" />
  ));
