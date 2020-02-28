import React from 'react'
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SocialMedia from './socialmedia'

const iconTypes = {
  LinkedIn: "linkedin",
  Github: "github",
  Medium: "medium",
  Resume: "resume"
}

storiesOf("Icons", module)
  .addDecorator(withKnobs)
  .add("Social", () => (
    <SocialMedia
      type={select("Type", iconTypes, "linkedin")}
      onClickHandle={action("Clicked!")}
    />
  ));