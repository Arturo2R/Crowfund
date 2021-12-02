import React from "react";

import Card from "../components/body/Card";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Card",
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <Card
    description="lala"
    title="lala"
    pledge="lala"
    availability="23"
    {...args}
  />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  primary: true,
};
