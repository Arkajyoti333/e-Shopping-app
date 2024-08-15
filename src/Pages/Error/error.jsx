import React from "react";
// import { NavBar, Footer } from "../../components/Index";
import { Link } from "react-router-dom";



const ErrorCom = () => {
  return (
    <>
   


    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center">
      <div className="text-5xl font-bold text-white">404</div>
      <div className="text-xl text-white mt-4">Oops! Something went wrong.</div>
      <div className="text-md text-white mt-4">Sorry ! Page Not Found.</div>
      <Link to="/" className="mt-8 border-2 shadow-lg border-white p-2 rounded-md text-white hover:bg-blue-700 ">Back to Home &rarr;</Link>
    </div>
    </>
  );
};

const Error = () => {
  return (<>
   
   <ErrorCom/>
  


  </>
  );
};

export default Error;