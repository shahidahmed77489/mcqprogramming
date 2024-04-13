import React from "react";
import { useNavigate } from "react-router-dom";

const FinalResult = ({ score, SetFinalResult }) => {
  const navigate = useNavigate();
  const hideBtn = () => {
    navigate("/");
    SetFinalResult(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative bg-black opacity-50 w-full h-full"></div>

      <div className="z-50 h-64 bg-sky-100 rounded px-3 w-1/2 flex items-center text-sky-500 font-mono text-lg justify-center absolute top-[30%] right-[30%]">
        <div>
          <h2 className="text-center">
            😊😊😊
            <br /> Your Score is {score} out of 15. <br /> Thanks For Attending
            Javascript Question ..
            <br />
          </h2>
        </div>
        <span
          className="absolute top-0 text-4xl right-0 px-2 cursor-pointer"
          onClick={hideBtn}
        >
          &times;
        </span>
      </div>
    </div>
  );
};
export default FinalResult;
