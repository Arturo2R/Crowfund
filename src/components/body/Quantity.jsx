import React from "react";

export function Quantity({ availability, modal }) {
  return (
    <div className="flex flex-row space-x-1 my-auto">
      <span className={`font-bold ${!modal && "text-3xl"}`}>
        {availability}
      </span>
      <p className="text-gray-400 ">left</p>
    </div>
  );
}
