import React from "react";
import BoxContainer from "./BoxContainer";

const StatsSection = (props) => {
  const VerticalDivider = (
    <div className="hidden md:block w-px bg-gray-300 h-[65px]"></div>
  );
  return (
    <BoxContainer>
      <div className=" flex flex-col space-y-4">
        <div className="flex items-center divide-y-2 md:divide-y-0 flex-col md:flex-row justify-around">
          <NumberStats number="$89,914" text="of $100,000 backed" />
          {VerticalDivider}
          <NumberStats number="5,007" text="total backers" />
          {VerticalDivider}
          <NumberStats number="56" text="days left" />
        </div>
        <ProgressBar />
      </div>
    </BoxContainer>
  );
};

export default StatsSection;

function ProgressBar() {
  return (
    <span className="w-full bg-blue-50 rounded-full p-0 h-4">
      <div className={`w-[79%] bg-green-400 block h-full rounded-full`}></div>
    </span>
  );
}

function NumberStats(props) {
  return (
    <div className="text-center w-36 md:text-left space-y-1 py-3 px-4">
      <span className="text-3xl text-black font-bold ">{props.number}</span>
      <p className="text-gray-400">{props.text}</p>
    </div>
  );
}
