import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [logForm, setLogForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;
  setLogForm((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
  const navigate=useNavigate()
  const handleSubmit=()=>{
    navigate("/home")

  }
  return (
    <div className="bg-white h-screen w-screen m-0 p-0 flex items-center justify-center">
      <form className="flex flex-col gap-5 bg-gray-100 h-100 w-150 items-center justify-center rounded-2xl" onSubmit={handleSubmit}>
        <h1 className="text-fuchsia-600 font-bold text-5xl font-serif">
          Login 
        </h1>

        <br />
        <input
          className="border-1 text-black border-black rounded-2xl w-110 h-10 placeholder:text-black ps-4"
          type="email"
          name="email"
          required
          placeholder="enter your email"
          value={logForm.email}
          onChange={handleChange}
        />
           <input
          className="border-1 text-black border-black rounded-2xl w-110 h-10 placeholder:text-black ps-4"
          type="password"
          name="password"
          required
          placeholder="enter your password"
          value={logForm.password}
          onChange={handleChange}
        />
    
      <button className= 'bg-fuchsia-600 w-110 h-11 rounded-2xl text-white font-extrabold' onClick={handleSubmit}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
