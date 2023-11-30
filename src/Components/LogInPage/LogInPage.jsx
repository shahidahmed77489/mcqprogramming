import React, { useState } from "react";
import SignInPage from "../SignInPage/SignInPage";
import AppProgInter from "../FetchApi/AppProgInter";

const LogInPage = () => {
  const [isSign, setSign] = useState(true);
  const [isForm, setForm] = useState(false);

  const submitHandler = (e) => {
    console.log("submit");
    setForm(!isForm);
  };
  const inputHandler = (e) => {
    console.log(e.target.value);
  };
  const moveToSignPageBtn = (e) => {
    setSign(!isSign);
    e.preventDefault();
  };
  return (
    <div>
      {isForm ? (
        <AppProgInter />
      ) : (
        <>
          {isSign ? (
            <div className="flex items-center justify-center h-screen">
              <div className="w-3/4 lg:w-1/3 bg-white p-8 rounded">
                <div>
                  <h2 className="text-center text-3xl font-mono">
                    {" "}
                    Student LogIn{" "}
                  </h2>
                </div>
                <form action="" onSubmit={submitHandler}>
                  <div className="w-full my-4">
                    <label htmlFor="" className="text-gray-500 font-mono">
                      Email:⇒
                    </label>
                    <br />
                    <input
                      className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                      type="email"
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-gray-500 font-mono">
                      Password:⇒
                    </label>
                    <br />
                    <input
                      className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                      type="text"
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="text-center bg-yellow-400 font-mono px-12 py-1 mt-8 rounded  font-medium text-gray-800"
                    >
                      LogIn
                    </button>
                  </div>
                </form>
                <div className="text-center mt-2 font-mono">
                  <span>
                    Don't have An Account ?{" "}
                    <p onClick={(e) => moveToSignPageBtn(e)}>SignIn</p>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <SignInPage isSign={isSign} setSign={setSign} />
          )}
        </>
      )}
    </div>
  );
};

export default LogInPage;
