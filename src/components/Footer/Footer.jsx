import React from "react";

const Footer = () => {
  return (
    <>
      <div class=" relative flex flex-wrap flex-row justify-evenly min-w-screen min-h-10  bg-gray-900 mx-1 mt-3">
       <div className="relative flex flex-wrap flex-row justify-evenly m-5">
              <div className=" relative flex flex-wrap flex-col justify-center text-left max-w-[25%] h-auto text-white m-3 p-3 min-h-9">
                <a href="/" className="text-3xl font-bold m-3 text-left hover:text-orange-400 hover:scale-110 "><p>Azios</p></a>
                <p className="text-sm ">The customer is at the heart of our unique business model, which includes design.</p>
              </div>
              <div className=" relative flex flex-wrap flex-col  max-w-[25%] h-auto text-white m-3 p-4 min-h-9">
                <p href="/" className="text-xl font-semibold m-3 border-b-2 border-red-600 "><p>SHOPPING</p></p>
                <a href="###" className="text-sm items-start text-left m-1 ">Clothing Store</a>
                <a href="###" className="text-sm items-start text-left m-1 ">Trending Shoes</a>
                <a href="###" className="text-sm  items-start text-left m-1">Accessories</a>
                <a href="###" className="text-sm items-start text-left m-1">Sale</a>
              </div>
              <div className=" relative flex flex-wrap flex-col  max-w-[25%] h-auto text-white m-3 p-4 min-h-9">
                <p href="/" className="text-xl font-semibold m-3  border-b-2 border-red-600 "><p>SERVICES</p></p>
                <a href="###" className="text-sm items-start text-left m-1 ">Contact Us</a>
                <a href="###" className="text-sm items-start text-left m-1 ">Payment Methods</a>
                <a href="###" className="text-sm  items-start text-left m-1">Delivary</a>
                <a href="###" className="text-sm items-start text-left m-1">Return & Exchanges</a>
              </div>
              <div className=" relative flex flex-wrap flex-col  max-w-[25%] h-auto text-white m-3 p-4 min-h-9">
                <p href="/" className="text-xl font-semibold m-3 border-b-2 border-red-600 max-w-[120px] ">NEWLETTER</p>
                <p  className="text-sm items-start text-left m-1 ">Be the first to know about new arrivals, look books, sales & promos!</p>
                <div className="relative flex  flex-row m-3">
                <input type="email" name="Email" id="" /> 
                <button type="submit" className="hover:bg-sky-300 hover:text-orange-500 "><p className=" bg-sky-500 p-1 rounded-md ">Submit</p></button>   
                </div>

              </div>
              
       </div>

       <div className="relative flex flex-wrap flex-row justify-evenly min-w-screen m-3 p-1 border-t-2 border-[#292929] min-w-[75%]">
       <p className="text-white">Copyright © 20242020 All rights reserved | This Awesome site is made with BiPu Group</p>
       </div>

      </div>
    </>
  );
};

export default Footer;
