import React, { useEffect, useState } from "react";
import BoxContainer from "./BoxContainer";
import { useGetStatistics } from "../../hooks/useRequest";

const StatsSection = (props) => {
  var { data, error, isLoading, isSuccess } = useGetStatistics();

  const HorizontalDivider = (
    <div className="hidden md:block w-px bg-gray-300 h-[65px]"></div>
  );

  return (
    <BoxContainer>
      <div className="flex flex-col space-y-4 ">
        <div className="flex flex-col items-center justify-around divide-y-2 md:divide-y-0 md:flex-row">
          {isLoading && <h4>Cargando</h4>}
          {error && <h4>Error</h4>}
          {isSuccess && (
            <>
              <NumberStats number={data.total} text="of $100,000 backed" />
              {HorizontalDivider}
              <NumberStats number={data.list.length} text="total backers" />
              {HorizontalDivider}
              <NumberStats number="56" text="days left" />
            </>
          )}
        </div>
        {isSuccess && <ProgressBar percentage={data.Progress()} />}
      </div>
    </BoxContainer>
  );
};

export default StatsSection;

function ProgressBar({ percentage }) {
  return (
    <span className="w-full h-4 p-0 rounded-full bg-blue-50">
      <div
        className={`bg-green-400 block h-full rounded-full`}
        style={{ width: `${percentage}%` }}
      ></div>
    </span>
  );
}

function NumberStats(props) {
  return (
    <div className="px-4 py-3 space-y-1 text-center w-36 md:text-left">
      <span className="text-3xl font-bold text-black ">{props.number}</span>
      <p className="text-gray-400">{props.text}</p>
    </div>
  );
}
