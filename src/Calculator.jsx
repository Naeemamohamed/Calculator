import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-purple-500">
      <div className="bg-purple-500 p-4 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full h-12 px-4 mb-4 rounded-md bg-purple-300 text-black"
          value={display}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-3 bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClear()}
          >
            Clear
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-md h-12 text-black"
            onClick={() => handleClick("/")}
          >
            /
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-md h-12 text-black"
            onClick={() => handleClick("*")}
          >
            *
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-md h-12 text-black"
            onClick={() => handleClick("-")}
          >
            -
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-md h-12 text-black"
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button
            className="col-span-2 bg-yellow-500 hover:bg-yellow-600 rounded-md h-12 text-black"
            onClick={() => handleCalculate()}
          >
            =
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 rounded-md h-12 text-purple-500"
            onClick={() => handleClick(".")}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
