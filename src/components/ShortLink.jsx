import React from "react";

const ShortLink = (props) => {
  return (
    <div className="mt-10 bg-white mx-6 rounded-lg py-4">
      <h1 className="text-left ml-4">
        <a href={props.shorted[1]}> {props.shorted[1]}</a>
      </h1>
      <div className="bg-gray-200 h-[1px] mx-0 my-2"></div>
      <h1 className="text-left ml-4 text-cyan-500">
        <a href={props.shorted[0]}> {props.shorted[0]}</a>
      </h1>
      <div className="flex justify-center">
        <button className="btnBlue py-2 rounded-lg w-[100%] mx-4 mt-2 text-white">
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
