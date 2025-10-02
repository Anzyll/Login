import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreativeHomePage = () => {
    const navigate=useNavigate()
    const logout=()=>{
        navigate("/register")

    }
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-300 w-screen me-5">
        <button onClick={logout} className='bg-white w-30 h-11 rounded-2xl text-violet-600 font-extrabold mt-4 lg:ms-325 sm:ms-140'>Log out</button>
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-300 min-h-screen flex items-center justify-center text-white">
      <div className="text-center px-6 py-12 md:px-12">
        
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Create. Inspire. Believe.
        </h1>
        <p className="text-xl mb-8">
          Explore innovative designs, engaging content, and a touch of magic.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Discover More
        </button>
      </div>
    </div>
    </div>
  );
};

export default CreativeHomePage;
