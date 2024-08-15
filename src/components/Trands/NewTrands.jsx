import React from "react";

const productObj = [
    {
   id:1,
   description:"What Curling Irons Are The Best",
   image:"https://themewagon.github.io/malefashion/img/blog/blog-2.jpg",
   date:"21 February 2021",
   herf:"#",
    },
    {
        id:2,
        description:"The Health Benefits Of Sunglasses",
        image:"https://themewagon.github.io/malefashion/img/blog/blog-3.jpg",
        date:"9February 2024",
        herf:"#",
         },
         {
            id:3,
            description:"What Curling Irons Are The Best Ones",
            image:"https://themewagon.github.io/malefashion/img/blog/blog-1.jpg",
            date:"16 February 2023",
            herf:"#",
             },
];


const ProductCard=()=>{

    return(

        <>
        <div className="flex flex-wrap flex-row  justify-center items-center">
          {productObj.map((product)=>{
            return (
               <div className=" flex flex-wrap flex-row m-3 pt-3 ">
               <div className=" flex flex-wrap flex-col  items-center ">
                 <div className=" flex flex-wrap flex-col items-center -mb-[50px]">
                   <img
                     src={product.image}
                     alt=""
                     srcset=""
                     className="w-[80%] h-[90%]"
                   />
                 </div>
                 <div className=" flex flex-wrap flex-col items-center   bg-slate-100 w-[70%]   ">
                   <p className="text-sm">Date:{product.date}</p>
                   <p className="font-semibold text-md">
                     {product.description}
                   </p>
                   <button className="hover:underline "><a href={product.herf}> Read more </a></button>
                 </div>
               </div>
             </div>
          )
           
          })}
         
          
        </div>
        </>

    );
}



const NewTrands = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col justify-center items-center bg-slate-50 m-3 p-1">
        <div>
          <p className="text-red-600">LATEST NEWS</p>
          <p className="font-bold text-black text-3xl">Fashion New Trends</p>
        </div>

        
        <ProductCard/>
        
        {/* <div className="flex flex-wrap flex-row  justify-center items-center">
          {productObj.map((product)=>{
            return (
               <div className=" flex flex-wrap flex-row m-3 pt-3 ">
               <div className=" flex flex-wrap flex-col  items-center ">
                 <div className=" flex flex-wrap flex-col items-center -mb-[50px]">
                   <img
                     src={product.image}
                     alt=""
                     srcset=""
                     className="w-[80%] h-[90%]"
                   />
                 </div>
                 <div className=" flex flex-wrap flex-col items-center   bg-slate-100 w-[70%]   ">
                   <p className="text-sm">Date:{product.date}</p>
                   <p className="font-semibold text-md">
                     {product.description}
                   </p>
                   <button className="hover:underline "><a href={product.herf}> Read more </a></button>
                 </div>
               </div>
             </div>
          )
           
          })}
         
          
        </div> */}
      </div>
    </>
  );
};

export default NewTrands;
