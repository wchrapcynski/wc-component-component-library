import React from "react";
import { storiesOf } from "@storybook/react";
import FlipCard from "./flipcard";
import SectionCard from "./sectioncard";

const flipCardText = [
  "Flip Card Title",
  "This is the flip card discription text",
  "http://magicaltech.xyz"
];

storiesOf("Cards", module)
  .add("Flip Card", () => (
    <FlipCard image="image1.png" flipCardText={flipCardText} />
  ))
  .add("Section Card", () => (
    <SectionCard
      backgroundColorType="backgroundWhite2"
      cardColorType="backgroundWhite1"
      boxSize="boxSize300x600"
      description="This is a section"
      id="Home"
    />
  ));
