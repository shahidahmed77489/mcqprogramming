import React, { useState } from "react";

const SignInPage = ({ isSign, setSign }) => {
  const [isData, setData] = useState([]);
  const [isInput, setInput] = useState({
    email: "",
    phone: "",
    date: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...isInput, [name]: value });
  };
  const handleSigin = (e) => {
    e.preventDefault();
    setSign(!isSign);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setData([...isData, isInput]);
    localStorage.setItem("user", JSON.stringify([...isData, isInput]));
    setInput({
      email: "",
      phone: "",
      date: "",
      password: "",
    });
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="w-3/4 lg:w-1/3 bg-white p-8 rounded">
            <div>
              <h2 className="text-center text-3xl font-mono">Student SigIn</h2>
            </div>
            <form action="" onSubmit={submitHandler}>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  Email:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="email"
                  name="email"
                  value={isInput.email}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  Phone:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="text"
                  name="phone"
                  value={isInput.phone}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  DOB:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="date"
                  name="date"
                  value={isInput.date}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className=" mb-4">
                <label htmlFor="" className="text-gray-500 font-mono">
                  Password:⇒
                </label>
                <br />
                <input
                  className="border rounded outline-sky-500 font-mono px-2 py-1 border-solid border-gray-500 w-full"
                  type="password"
                  name="password"
                  value={isInput.password}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-center bg-yellow-400 font-mono px-12 py-1 mt-5 rounded  font-medium text-gray-800"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center mt-2 font-mono">
              <p onClick={(e) => handleSigin(e)}>Already Have An Account</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
