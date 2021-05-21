import React, { useState } from "react";
import { Quantity } from "../body/Quantity";
import Button from "../Button";
import ThanksModal from "./ThanksModal";

const CardOfModal = (props) => {
  const [select, setSelect] = useState(false);

  const handleSelect = (event) => {
    setSelect(!select);
  };
  const nada = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`w-100 rounded-lg shadow p-6 ${
        select && "border-4 border-green-400"
      }`}
      onClick={!props.disabled && handleSelect}
    >
      <div className={props.disabled ? "flex mb-4 opacity-50" : "flex mb-4"}>
        <div className="w-1/5">
          <input type="radio" value={props.value} checked={select} />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex  justify-between mb-4">
            <div className="flex flex-col md:flex-row cerca md:space-x-4">
              <h6 className="font-bold text-lg hover:text-green-400 ">
                {props.title}
              </h6>
              {props.pledgeQuantity && (
                <p className="text-green-400">
                  Pledge ${props.pledgeQuantity} or more
                </p>
              )}
            </div>
            {props.availability && (
              <Quantity availability={props.availability} modal />
            )}
          </div>
          <p className="text-gray-500">{props.description}</p>
        </div>
      </div>

      {select && (
        <div className="mt-8 w-full items-center" onClick={nada}>
          <hr />
          <div className="flex flex-col md:flex-row md:justify-between mt-4">
            <div className=" mx-auto md:mx-0 md:my-auto">
              <p>Enter your pledge:</p>
            </div>
            <div className="flex w-full md:w-auto justify-around md:space-x-2 mt-4 md:mt-0">
              <div className="flex  bg-white border-gray-300 border-2 text-blackw-auto font-semibold rounded-full py-4 px-8">
                <p>$</p>
                <input
                  id="nose"
                  name="pledge"
                  type="number"
                  placeholder="25"
                  className="w-12"
                  required
                ></input>
              </div>

              <Button text="Continue"></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOfModal;
