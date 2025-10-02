import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
    const [regForm,setRegForm]=useState({
        firstname:"",
        lastname:"",
        email:"",
        newPassword:"",
        confirmPassword:""
    })

    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate("/login")
    }

  const handleChange = (e) => {
  const { name, value } = e.target;
  setRegForm((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  return (
    <div className='bg-white h-screen w-screen m-0 p-0 flex items-center justify-center'>
       
    <form className='flex flex-col bg-gray-100 h-140 w-150 justify-center items-center rounded-2xl' onSubmit={handleSubmit}>
       <h1 className='text-fuchsia-600 font-bold text-5xl font-serif'>Registeration</h1>

       <br />
      <input className='border-1 border-black rounded-2xl w-110 h-10 placeholder:text-black ps-4 text-black' type="text" required
      placeholder='enter your first name'
      value={regForm.firstname}
      name='firstname'
      onChange={handleChange}/>
      <br /> 
      <input className='border-1 border-black rounded-2xl w-110 h-10 placeholder:text-black ps-4 text-black' type="text" required
      placeholder='enter your last name'
      value={regForm.lastname}
      name='lastname'
      onChange={handleChange}/>
            <br /> 
      <input className='border-1 border-black rounded-2xl w-110 h-10 placeholder:text-black ps-4 text-black'  type="email" required
      placeholder='enter your email adress'
      value={regForm.email}
      name='email'
       onChange={handleChange}/>
            <br /> 
      <input className='border-1 border-black rounded-2xl w-110 h-10 placeholder:text-black ps-4 text-black'  type="password" required
      placeholder='enter your new password'
      value={regForm.newPassword}
      name='newPassword'
       onChange={handleChange}/>
                <br /> 
      <input className='border-1 border-black rounded-2xl w-110 h-10 placeholder:text-black ps-4 text-black' type="password" required
      placeholder='confirm your new password'
      value={regForm.confirmPassword}
      name='confirmPassword'
       onChange={handleChange}/>
      <br />
      <button className='bg-fuchsia-600 w-110 h-11 rounded-2xl text-white font-extrabold' onClick={handleSubmit}>Sign Up</button>
   </form>
   </div>
  )
}

export default Registration
