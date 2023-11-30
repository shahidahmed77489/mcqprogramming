import React from "react";

const Button = ({ btn, onClickHandler }) => {
  return (
    <div>
      <button
        className="text-center px-5 rounded text-maroon-900 py-1 hover:bg-blue-300 bg-sky-500 font-mono"
        onClick={onClickHandler}
      >
        {btn}
      </button>
    </div>
  );
};

export default Button;
