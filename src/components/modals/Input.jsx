import React from "react";
import { useGetStatistics } from "../../hooks/useRequest";

export function Input(props) {
  const { data, error, isLoading, isSuccess } = useGetStatistics();

  const handleChange = (e) => {
    e.target.value > props.placeholder
      ? (data.MoneytoAdd = parseInt(e.target.value))
      : Error();
  };

  return (
    <div className="flex  bg-white border-gray-300 border-2 text-blackw-auto font-semibold rounded-full py-4 px-8">
      <p>$</p>
      <input
        id="nose"
        name="pledge"
        type="number"
        placeholder={props.placeholder}
        className="w-12"
        onChange={handleChange}
        required
      ></input>
    </div>
  );
}
