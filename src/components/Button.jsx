import React from "react";

const Button = (props) => {
  let classes = "w-auto font-semibold rounded-full py-4 px-8 ";

  if (props.modal) {
    classes += "bg-white border-gray-300 border-2 text-black";
  } else if (!props.disabled) {
    classes += "text-white bg-green-400 hover:bg-green-700";
  } else {
    classes += "bg-gray-400";
  }

  return (
    <button
      type={props.modal ? "submit" : "button"}
      title={props.text}
      className={classes}
    >
      {props.text}
    </button>
  );
};

export default Button;
