import React from "react";
import BoxContainer from "./BoxContainer";
import Card from "./Card";
import { useGetRewards } from "../../hooks/useRequest";

const AboutSection = (props) => {
  const { data, error, isLoading, isSuccess } = useGetRewards();

  return (
    <BoxContainer>
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-semibold">About this project</h2>
        <div className="mb-10 text-gray-400">
          <p>
            The mastercraft bamboo Riser is a sturdy and stylish that elevates
            your screen to a more comfortable viewing high. Placing your monitor
            at eye level has the potential to improve your posture and make you
            more comfortable while at work, helping you stay focused on the task
            at hand.
          </p>
          <p className="mt-8 mb-10">
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
              id={item.id}
            />
          ))}
      </div>
    </BoxContainer>
  );
};

export default AboutSection;
