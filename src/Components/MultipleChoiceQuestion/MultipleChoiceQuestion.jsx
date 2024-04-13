import React, { useState } from "react";
import Button from "../Button/Button";
import FinalResult from "../FinalResult/FinalResult";
import Headers from "../Button/Headers/Headers";
import { useNavigate } from "react-router-dom";
const selectedQuestionVSAns = new Map();
const MultipleChoiceQuestion = ({ isValue }) => {
  const navigate = useNavigate();
  const [isFinalResult, SetFinalResult] = useState(false);
  const [isCount, setIsCount] = useState(0);
  const [isSelected, setIsSelected] = useState([]);
  const [isRunMap, setRunMap] = useState(0);
  const [range, setRange] = useState(1);
  // const[selectedQuestionVSAns,set] = useState({})

  const forwardBtn = () => {
    if (isRunMap < isValue.length - 1) {
      jumpingPageBtn(isRunMap + 1);
    } else {
      alert("Your Question Is Over");
    }
  };
  const backwardBtn = () => {
    if (isRunMap > 0) {
      jumpingPageBtn(isRunMap - 1);
    }
  };
  //
  const jumpingPageBtn = (index) => {
    setRunMap(index);
    setRange(index + 1);
  };
  //
  function checkBoxBtn(e, index, option, id) {
    selectedQuestionVSAns.set(id, option);
    setIsSelected([...isSelected, id]);
    let filterdData = isValue.filter((item) => item.answerkey === option);
    let findAnswer = filterdData.find(
      (item) => item.answerkey === e.target.value
    );
    if (findAnswer) {
      setIsCount(isCount + 1);
    }
    // console.log(selectedQuestionVSAns);
  }
  //
  const submitBtn = () => {
    SetFinalResult(!isFinalResult);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  //
  return (
    <div>
      {isFinalResult && (
        <FinalResult score={isCount} SetFinalResult={SetFinalResult} />
      )}
      <div>
        <Headers />
      </div>
      <div className="w-full   gap-8 mt-8 px-4">
        <div className="w-full ">
          {isValue.length > 0 &&
            isValue.slice(isRunMap, range).map((item, index) => {
              // console.log(selectedQuestionVSAns);
              // console.log(selectedQuestionVSAns.get(item.id) === item.optiona);
              return (
                <React.Fragment key={item.id}>
                  <div className="  bg-white h-auto p-8 rounded mb-4 lg:h-96">
                    <h2 className="my-4 font-mono">
                      Question {isRunMap + 1}. Out Of {isValue.length}
                    </h2>
                    <p className="my-4 font-bold text-2xl font-mono">
                      {item.question}
                    </p>
                    <div>
                      <div>
                        <input
                          type="radio"
                          name={`answer${item.id}`}
                          value={item.optiona}
                          checked={
                            selectedQuestionVSAns.get(item.id) === item.optiona
                          }
                          onChange={(e) =>
                            checkBoxBtn(e, index, item.optiona, item.id)
                          }
                        />
                        <span className="text-xl ml-2 font-mono">
                          {item.optiona}
                        </span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name={`answer${item.id}`}
                          value={item.optionb}
                          checked={
                            selectedQuestionVSAns.get(item.id) === item.optionb
                          }
                          onChange={(e) =>
                            checkBoxBtn(e, index, item.optionb, item.id)
                          }
                        />
                        <span className="text-xl ml-2 font-mono">
                          {item.optionb}
                        </span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name={`answer${item.id}`}
                          value={item.optionc}
                          checked={
                            selectedQuestionVSAns.get(item.id) === item.optionc
                          }
                          onChange={(e) =>
                            checkBoxBtn(e, index, item.optionc, item.id)
                          }
                        />
                        <span className="text-xl ml-2 font-mono">
                          {item.optionc}
                        </span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name={`answer${item.id}`}
                          value={item.optiond}
                          checked={
                            selectedQuestionVSAns.get(item.id) === item.optiond
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            checkBoxBtn(e, index, item.optiond, item.id)
                          }
                        />
                        <span className="text-xl ml-2 font-mono">
                          {item.optiond}
                        </span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          <div className="flex mb-4">
            <Button btn={"Prev"} onClickHandler={backwardBtn} />
            <Button btn={"Next"} onClickHandler={forwardBtn} />
          </div>
        </div>
        <div className="w-full  bg-white rounded py-3 ">
          <div className="flex flex-wrap justify-center">
            {isValue.length > 0 &&
              isValue.map((item, index) => {
                return (
                  <>
                    <div
                      className="m-2 lg:m-3 "
                      onClick={() => jumpingPageBtn(index)}
                    >
                      <p
                        className={`h-4 w-4 hover:cursor-pointer hover:bg-sky-500  border border-s-violet-100 rounded-full font-mono flex justify-center items-center p-4  ${
                          isSelected.includes(item.id)
                            ? "bg-sky-500"
                            : "bg-white"
                        }`}
                      >
                        {index + 1}
                      </p>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="text-center">
            <Button btn="Submit" onClickHandler={submitBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
