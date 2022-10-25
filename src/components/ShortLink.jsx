import React, { useState } from "react";

const ShortLink = (props) => {
  const copyValue = (val) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", val);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  };
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-10 bg-white mx-6 lg:mx-64 rounded-lg py-4 grid grid-cols-1 lg:grid-cols-3">
      <h1 className="text-left ml-6 lg:mt-4 lg:mb-4 lg:ml-20 font-bold">
        <a href={props.shorted[1]}> {props.shorted[1]}</a>
      </h1>
      <div className="bg-gray-200 h-[1px] mx-0 my-2 lg:hidden"></div>
      <h1 className="text-left ml-6 lg:mt-4 lg:mb-4 lg:ml-40 font-bold text-cyan-500">
        <a href={props.shorted[0]}> {props.shorted[0]}</a>
      </h1>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setCopied(true);
            copyValue(props.shorted[0]);
          }}
          className="btnBlue py-2 rounded-lg w-[100%] lg:w-[50%]  mx-4 mt-10 lg:mt-0 text-white"
        >
          {copied ? <p>Copied</p> : <p>Copy</p>}
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
