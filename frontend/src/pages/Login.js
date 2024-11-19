import React, { useEffect, useState, useRef } from "react";
import { axiosClient } from "../utils/axiosClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";

document.title = "Login";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("User")) {
      navigate("/");
    }
  }, [navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      ref.current.staticStart();
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      if (response.data.statusCode !== 201) {
        toast.error(response.data.message);
        return;
      }
      toast.success("Successfully Logged In !!");
      localStorage.setItem("User", JSON.stringify(response.data.message));
      ref.current.complete();

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-slate-800 w-screen h-screen flex flex-row ">
      <LoadingBar color="orange" ref={ref}></LoadingBar>
      <div className="left  w-2/5  h-screen ">
        <h1 className="text-white font-thin  w-3/4 pl-10 text-7xl leading-tight relative top-1/4 left-10 whitespace-pre-wrap ">
          <span className="font-medium text-red-500">Expense</span>
          <br></br> 
          
          <span className="font-medium text-yellow-500">Tracker App!!</span>{" "}
        </h1>
      </div>
      <hr className="w-0.5 h-3/4 mt-24 bg-white"></hr>
      <div className="flex justify-center items-center  w-3/5 h-screen ">
        <div className="flex flex-col gap-7 w-3/5 h-2/3 pt-28 items-center">
          <h1 className="text-4xl text-yellow-500 font-bold -top-10 relative ">
            Login
          </h1>
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-96 h-12 pl-6 rounded-2xl transition-all outline-none focus:outline-2 focus:outline-white focus:outline-offset-4  "
          ></input>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-96 h-12 pl-6 rounded-2xl outline-none transition-all focus:outline-2 focus:outline-white focus:outline-offset-4 "
          ></input>
          <button
            onClick={submitForm}
            className="w-96 h-12 justify-center text-lg rounded-2xl   bg-blue-600 text-center flex  items-center font-bold  "
          >
            Submit
          </button>
          <p className="text-white">
            New User ? Go To <a href="/signup" className="text-purple-700">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
