import React from "react";
import { useGetStatistics } from "../../hooks/useRequest";

const Submit = (props) => {
  const { data, error, isLoading, isSuccess } = useGetStatistics();

  const handleClick = (e) => {
    e.preventDefault();
    data.AddMoney();
    console.log(data);
  };

  let classes = "w-auto font-semibold rounded-full py-4 px-8 ";
  !props.disabled
    ? (classes += "text-white bg-green-400 hover:bg-green-700")
    : (classes += "bg-gray-400");

  return (
    <input
      className={classes}
      onClick={handleClick}
      type="submit"
      value={props.text}
    ></input>
  );
};

export default Submit;
