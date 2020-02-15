import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Header from "./header";

const navbarItems = ["Home", "About", "Contact"]

storiesOf("Header", module).add("Header", () => (
  <Header navbarItems={navbarItems} onClickHandle={action("Clicked!")} title="Title" />
));
