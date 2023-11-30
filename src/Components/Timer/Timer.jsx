import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

const Timer = () => {
  let [isSecond, setIsSecond] = useState(0);
  let [isMinute, setIsMinute] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setIsSecond((prevSecond) => prevSecond + 1);

        if (isSecond >= 59) {
          setIsMinute((prevMinute) => prevMinute + 1);
          setIsSecond(0);
        }
        if (isMinute === 2) {
          alert("your time is over");
          setStart(true);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [start, isSecond, isMinute]);
  const startBtn = () => {
    setStart(!start);
  };
  return (
    <>
      <div>
        <div className="flex gap-4 text-xl">
          {isMinute}:{isSecond}
          <Button
            btn={!start ? "Start The Exam" : "Stop The Exam"}
            onClickHandler={startBtn}
          />
        </div>
      </div>
    </>
  );
};

export default Timer;
