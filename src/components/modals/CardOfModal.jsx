import React, { useState } from "react";
import { Quantity } from "../body/Quantity";
import Button from "../Button";
import { Input } from "./Input";
import Submit from "./Submit";
import ThanksModal from "./ThanksModal";

const CardOfModal = (props) => {
  const [select, setSelect] = useState(props.selected);

  const handleSelect = (event) => {
    setSelect(!select);
  };
  const nada = (e) => {
    e.stopPropagation();
  };
  const handleClick = (event) => {
    event.preventDefault();
    props.closeFunction();
  };
  return (
    <div
      className={`w-100 rounded-lg shadow p-6 ${select && "border-4 border-green-400"
        }`}
      onClick={!props.disabled && handleSelect}
    >
      <div className={props.disabled ? "flex mb-4 opacity-50" : "flex mb-4"}>
        <div className="w-1/5">
          <input type="radio" value={props.value} checked={select} />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between mb-4">
            <div className="flex flex-col md:flex-row cerca md:space-x-4">
              <h6 className="text-lg font-bold hover:text-green-400 ">
                {props.title}
              </h6>
              {props.pledgeQuantity > 0 && (
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
        <div className="items-center w-full mt-8" onClick={nada}>
          <hr />
          <div className="flex flex-col mt-4 md:flex-row md:justify-between">
            <div className="mx-auto md:mx-0 md:my-auto">
              <p>Enter your pledge:</p>
            </div>
            <div className="flex justify-around w-full mt-4 md:w-auto md:space-x-2 md:mt-0">
              <Input placeholder={props.pledgeQuantity} />
              <ThanksModal>
                <Submit text="Continue" onClick={handleClick}></Submit>
              </ThanksModal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOfModal;
