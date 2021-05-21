import React from "react";

const BoxContainer = (props) => {
  return (
    <div className="bg-white shadow rounded-xl p-8 h-auto">
      {" "}
      {props.children}{" "}
    </div>
  );
};

export default BoxContainer;
