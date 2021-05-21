import React from "react";

const Body = (props) => {
  return (
    <div className="relative z-10 top-[140px]  md:top-[200px] mb-20">
      <div className="max-w-3xl h-auto mx-auto px-2 md:px-0 space-y-6 ">
        {props.children}
      </div>
    </div>
  );
};

export default Body;
