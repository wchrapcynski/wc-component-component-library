import React from 'react'
import { storiesOf } from "@storybook/react";
import SocialMedia from './socialmedia'

storiesOf("Icons", module).add("Social", () => (
  <SocialMedia
    type="linkedin"
    link="https://www.linkedin.com/in/william-chrapcynski/"
  />
));