import React from "react";
import BoxContainer from "./BoxContainer";
import Card from "./Card";

const AboutSection = () => {
  return (
    <BoxContainer>
      <div className="space-y-3 flex flex-col">
        <h2 className="font-semibold text-xl">About this project</h2>
        <div className="text-gray-400 mb-10">
          <p>
            The mastercraft bamboo Riser is a sturdy and stylish that elevates
            your screen to a more comfortable viewing high. Placing your monitor
            at eye level has the potential to improve your posture and make you
            more comfortable while at work, helping you stay focused on the task
            at hand.
          </p>
          <p className="mb-10 mt-8">
            Featuring artisan craftmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens and USB
            sticks to be stored under the stand
          </p>
        </div>

        <Card
          title="Bamboo Stand"
          pledge="25"
          availability="101"
          description="You get an ergonomic stand od natural bamboo. You've hekped us launch or promotional ccampaign, and you'll be added to a special Backer member list"
        />
        <Card
          title="Black Edition Stand"
          pledge="75"
          availability="64"
          description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping included"
        />
        <Card
          disabled
          title="Mahogany"
          pledge="200"
          availability="0"
          description="You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be addeed to out backer member list. Shipping i included"
        />
      </div>
    </BoxContainer>
  );
};

export default AboutSection;
