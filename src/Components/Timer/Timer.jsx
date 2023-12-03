import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const navigate = useNavigate();
  let [isSecond, setIsSecond] = useState(0);
  let [isMinute, setIsMinute] = useState(0);
  const [start, setStart] = useState(true);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setIsSecond((prevSecond) => prevSecond + 1);

        if (isSecond >= 59) {
          setIsMinute((prevMinute) => prevMinute + 1);
          setIsSecond(0);
        }
        if (isMinute === 5) {
          alert("your time is over");
          setStart(false);
          navigate("/finalresult");
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [start, isSecond, isMinute, navigate]);

  return (
    <>
      <div>
        <div className="flex gap-4 text-xl">
          {isMinute}min:{isSecond}sec / 05:00
        </div>
      </div>
    </>
  );
};

export default Timer;
