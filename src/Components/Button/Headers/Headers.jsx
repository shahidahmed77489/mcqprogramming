import React from "react";
import Timer from "../../Timer/Timer";

const Headers = () => {
  const handleLanguageChange = (e) => {
    const { value } = e.target;
    if (value === "English") {
      console.log("english");
    } else {
      console.log("hindi");
    }
  };

  return (
    <div className="text-center lg:flex justify-evenly bg-white py-6 items-center">
      <div>
        <p className="font-mono mb-2 text-xl lg:text-2xl ">
          Javascript Quiz Question Based Examination
        </p>
      </div>
      <div className="flex justify-center items-center mb-1">
        <p className="flex  gap-4 justify-center">
          <span className="">
            <i className="fa-regular fa-clock text-2xl"></i>
          </span>
          <span>
            <Timer />
          </span>
        </p>
      </div>
      {/* <div>
        <select className="font-mono" onClick={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div> */}
    </div>
  );
};

export default Headers;
