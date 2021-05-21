import React from "react";
import IconBookmark from "/src/images/iconbookmark.jsx";

const ButtonIcon = (props) => {
  const [bookmark, setBookmark] = React.useState(false);

  const handleBookmark = (e) => {
    setBookmark(!bookmark);
  };

  return (
    <button
      onClick={handleBookmark}
      title={props.text}
      className={`flex rounded-full bg-gray-200 hover:bg-gray-300 w-auto md:w-[185px] ${
        bookmark && "bg-blue-50 hover:bg-blue-50"
      }`}
    >
      <div
        className={`inline-block rounded-full ${
          bookmark ? "bg-green-400" : "bg-gray-900"
        }`}
      >
        <IconBookmark clicked={bookmark} />
      </div>
      <p
        className={`hidden md:inline-block p-4 font-semibold  ${
          bookmark ? "text-green-400 " : "text-gray-500"
        }`}
      >
        {bookmark ? props.text + "ed" : props.text}
      </p>
    </button>
  );
};

export default ButtonIcon;
