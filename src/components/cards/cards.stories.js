import React from "react";
import { storiesOf } from "@storybook/react";
import FlipCard from "./flipcard";

const flipCardText = ["Flip Card Title", "This is the flip card discription text", "http://magicaltech.xyz"]

storiesOf("Cards", module).add("Flip Card", () => <FlipCard image="image1.png" flipCardText={flipCardText} />);
