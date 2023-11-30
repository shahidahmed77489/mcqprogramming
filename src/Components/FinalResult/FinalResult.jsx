import React from "react";

const FinalResult = ({ score }) => {
  return (
    <div className="h-64 bg-sky-100 rounded  w-1/2 flex  m-auto items-center text-sky-500 font-mono text-lg justify-center fixed top-[40%] right-[30%]">
      <div>
        <h2 className="text-center">
          😊😊😊
          <br /> Your Score is {score} out of 15. <br /> Thanks For Attending
          Javascript Question ..
          <br />
        </h2>
      </div>
    </div>
  );
};

export default FinalResult;
