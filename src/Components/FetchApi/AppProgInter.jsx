import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion/MultipleChoiceQuestion";

const AppProgInter = () => {
  const [isValue, setValue] = useState([]);
  const [isInputValue, setInputValue] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  // ///
  // const inputhandler = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue((prevState) => ({ ...prevState, [name]: value }));
  // };

  //  PostData  ///
  // const addBtn = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://65621bfadcd355c083249207.mockapi.io/studenLogin",
  //       isInputValue
  //     );
  //     response.then((res) => {
  //       getData();
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // //   getData //
  async function getData() {
    try {
      let response = await axios.get(
        "https://65621bfadcd355c083249207.mockapi.io/studenLogin"
      );
      // console.log(response.data);
      setValue(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // // DeleteData ///
  // async function deleteBtn(id) {
  //   try {
  //     await axios
  //       .delete(`https://65621bfadcd355c083249207.mockapi.io/studenLogin/${id}`)
  //       .then((response) => {
  //         console.log("successful");
  //         getData();
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  //
  //  async function updatBtn(id) {
  //    try {
  //      await axios
  //        .put(
  //          `https://65621bfadcd355c083249207.mockapi.io/studenLogin/${id}`,isInputValue
  //        )
  //        .then((response) => {
  //          console.log("successful");
  //          getData();
  //        });
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  }
  return (
    <div>
      <MultipleChoiceQuestion isValue={isValue} />
    </div>
    // <div>
    //   <table className="text-white">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Question</th>
    //         <th>OptionA</th>
    //         <th>OptionB</th>
    //         <th>OptionC</th>
    //         <th>OptionD</th>
    //         <th>Answer</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     {isValue.length > 0 &&
    //       isValue.map((item) => {
    //         return (
    //           <>
    //             <tbody>
    //               <tr>
    //                 <td>{item.id}</td>
    //                 <td>{item.question}</td>
    //                 <td>{item.optiona}</td>
    //                 <td>{item.optionb}</td>
    //                 <td>{item.optionc}</td>
    //                 <td>{item.optiond}</td>
    //                 <td>{item.answerkey}</td>
    //                 <td>
    //                   <button>Edit</button>
    //                   <button onClick={() => deleteBtn(item.id)}>Delete</button>
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </>
    //         );
    //       })}
    //   </table>

    //   {/*  */}
    //   <div>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Question"
    //         name="question"
    //         onChange={inputhandler}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Option A"
    //         name="optiona"
    //         onChange={inputhandler}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Option B"
    //         name="optionb"
    //         onChange={inputhandler}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Option C"
    //         name="optionc"
    //         onChange={inputhandler}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Option D"
    //         name="optiond"
    //         onChange={inputhandler}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Answer Key"
    //         name="answerkey"
    //         onChange={inputhandler}
    //       />
    //     </div>
    //     <div></div>
    //     <Button btn={"Add"} onClickHandler={addBtn} />
    //   </div>
    // </div>
  );
};

export default AppProgInter;
