import React from "react";

const IconBookmark = (props) => {
  return (
    <div>
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle
            fill={props.clicked ? "#34D399" : "#2F2F2F"}
            cx="28"
            cy="28"
            r="28"
          />
          <path
            fill={props.clicked ? "#EFF6FF" : "#B1B1B1"}
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconBookmark;
