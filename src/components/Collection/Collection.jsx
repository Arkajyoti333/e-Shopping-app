import React from "react";

const Collection = () => {
  return (
    <>
      <div className=" flex  flex-row justify-end max-w-[100%] m-3 p-3">
        <div className="flex flex-col m-5">
          <h1 className="text-black text-3xl font-bold mb-4">Clothing</h1>
          <p className="text-black text-lg max-w-[50%]">
            Collections 2030 Men Summer Wear Online. Shop for Men Summer Wear in
            India ✯ Buy latest range of Men Summer Wear at Myntra.
          </p>
         <div> <button className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded-md mt-8">
            SHOP NOW &rarr;
          </button></div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://themewagon.github.io/malefashion/img/banner/banner-1.jpg"
            alt="I description"
            className="object-cover w-[70%] h-[110%] rounded-md pl-3 mr-5"
          />
        </div>
      </div>
      <div className=" flex  flex-row justify-end max-w-[100%] m-3 p-3">
      <div className="flex justify-center">
          <img
            src="https://themewagon.github.io/malefashion/img/banner/banner-3.jpg"
            alt="I description"
            className="object-cover w-[70%] h-[110%] rounded-md pl-3 mr-5"
          />
        </div>
        <div className="flex flex-col m-5">
          <h1 className="text-black text-3xl font-bold mb-4"> Shoes Spring</h1>
          <p className="text-black text-lg max-w-[50%]">
            Collections 2030 Men Summer Wear Online. Shop for Men Summer Wear in
            India ✯ Buy latest range of Men Summer Wear at Myntra.
          </p>
         <div> <button className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded-md mt-8">
            SHOP NOW &rarr;
          </button></div>
        </div> 
        
      </div>
      <div className=" flex  flex-row justify-end max-w-[100%] m-3 p-3">
        <div className="flex flex-col m-5">
          <h1 className="text-black text-3xl font-bold mb-4">Accessories</h1>
          <p className="text-black text-lg max-w-[50%]">
            Collections 2030 Men Summer Wear Online. Shop for Men Summer Wear in
            India ✯ Buy latest range of Men Summer Wear at Myntra.
          </p>
         <div> <button className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded-md mt-8">
            SHOP NOW &rarr;
          </button></div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://themewagon.github.io/malefashion/img/banner/banner-2.jpg"
            alt="I description"
            className="object-cover w-[70%] h-[110%] rounded-md pl-3 mr-5"
          />
        </div>
      </div>
    </>
  );
};

export default Collection;
