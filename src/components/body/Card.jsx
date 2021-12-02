import React from "react";
import Button from "../Button";
import MyModal from "../modals/Modal";
import { Quantity } from "./Quantity";

const Card = (props) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-sm border border-blue-100 ${props.disabled && "opacity-50"
        }`}
    >
      <div className="flex flex-col justify-between mt-2 mb-4 font-semibold md:flex-row">
        <h5 className="text-lg font-semibold">{props.title}</h5>
        <h6 className="text-green-400">Pledge ${props.pledge} or more</h6>
      </div>
      <p className="my-6 mb-8 text-gray-400">{props.description}</p>
      <div className="flex justify-between my-2">
        {Quantity(props)}
        {/* <Button text="Select Reward" {...props} /> */}
        <MyModal
          text="Select Reward"
          titulo="Back This Project"
          description="Want to support us in bringing Mastercraft Bamboo Monitor Riser Out to the world ?"
          selected={props.id}
        ></MyModal>
      </div>
    </div>
  );
};

export default Card;
