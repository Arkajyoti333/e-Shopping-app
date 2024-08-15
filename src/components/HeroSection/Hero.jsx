import React from 'react'



export default function Hero() {
  return (
    <>
     <div className=" relative  p-3 mb-[700px] w-full  ">
        <div className="max-w-[100%] min-h-screen absolute">
          <img
            src="https://themewagon.github.io/malefashion/img/hero/hero-1.jpg"
            alt=""
            srcset=""
          />

          <div className=" w-[40%] absolute inset-0 flex items-center flex-col justify-center  z-10 bg-gradient-to-b from-transparent  to-white opacity-100">
            <p className="text-red-600 text-center text-lg mt-4 font-bold ">
              Summer-collection
            </p>

            <h1 className="text-black text-center text-4xl font-bold ">
              Fall - Winter Collections 2030
            </h1>
            <p className="m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button type="button" className="text-white bg-black p-3 rounded-md hover:bg-slate-500"><pre>S H O P  N O W  &rarr;</pre></button>
          </div>
        </div>
      </div>
    </>
  )
}
