import React from "react";
import Button from "../Button";
import { Quantity } from "./Quantity";

const Card = (props) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-sm border border-blue-100 ${
        props.disabled && "opacity-50"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between font-semibold mb-4 mt-2">
        <h5 className="text-lg font-semibold">{props.title}</h5>
        <h6 className="text-green-400">Pledge ${props.pledge} or more</h6>
      </div>
      <p className="text-gray-400 mb-8 my-6">{props.description}</p>
      <div className="flex justify-between my-2">
        {Quantity(props)}
        <Button text="Select Reward" {...props} />
      </div>
    </div>
  );
};

export default Card;
