import React from "react";
import BoxContainer from "./BoxContainer";
import Card from "./Card";
import { useGetRewards } from "../../hooks/useRequest";

const AboutSection = (props) => {
  const { data, error, isLoading, isSuccess } = useGetRewards();

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

        {error && <h1>Something went wrong!</h1>}
        {isLoading && <h1>Loading...</h1>}

        {isSuccess &&
          data.map((item) => (
            <Card
              title={item.name}
              pledge={item.minimunPledge}
              availability={item.quantityLeft}
              description={item.description}
              disabled={item.agotado}
              key={item.id}
            />
          ))}
      </div>
    </BoxContainer>
  );
};

export default AboutSection;
