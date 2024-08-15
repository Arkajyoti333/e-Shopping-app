import React from "react";

const products = [
  {
    id: 1,
    title: "Best Sellers",
    price: 90,
    image: "https://themewagon.github.io/malefashion/img/product/product-4.jpg",
    name: "Piqué Biker Jacket ",
    description: "A brief description of product 1",
    stars: "",
  },
];

const FilterCollection = () => {
  return (
    <>

    {/* menu buttom */}
      <div className="m-3  flex  flex-col  items-center ">
        <div>
          <div class=" grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div class="flex gap-x-1 bg-slate-100 w-[50%] justify-center divide-x divide-gray-800 row">
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0"
                type="button"
              >
                Best Sellers
              </button>
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 rounded-l-none"
                type="button"
              >
                New Arrivals
              </button>
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-l-none"
                type="button"
              >
                Hot Sales
              </button>
            </div>
          </div>
        </div>
      {/* menu buttom end */}

        {/* product cards */}
        <div className="flex flex-row  flex-wrap justify-evenly items-center min-w-[100%] bg-slate-100 shadow-md m-3">
    
        <div className="flex flex-col  w-[20%]  ml-3">
          <img
            src={products[0].image}
            alt=""
            className="min-h-[70%]"
          />
          <div className="w-full min-h-[30%] flex flex-col flex-wrap p-3 mt-1 bg-slate-300">
            <p className="text-left font-semibold">{products[0].name}</p>
            <p  className="text-left"> &#9733;&#9734;&#9734;&#9734; {products[0].stars}</p>
            <p  className="text-left font-bold text-md">${products[0].price}</p>
          </div>
        </div>
        
        <div className="flex flex-col  w-[20%]  ml-3">
          <img
            src={products[0].image}
            alt=""
            className="min-h-[70%]"
          />
          <div className="w-full min-h-[30%] flex flex-col flex-wrap p-3 mt-1 bg-slate-300">
            <p className="text-left font-semibold">{products[0].name}</p>
            <p  className="text-left"> &#9733;&#9734;&#9734;&#9734; {products[0].stars}</p>
            <p  className="text-left font-bold text-md">${products[0].price}</p>
          </div>
        </div>
        <div className="flex flex-col  w-[20%]  ml-3">
          <img
            src={products[0].image}
            alt=""
            className="min-h-[70%]"
          />
          <div className="w-full min-h-[30%] flex flex-col flex-wrap p-3 mt-1 bg-slate-300">
            <p className="text-left font-semibold">{products[0].name}</p>
            <p  className="text-left"> &#9733;&#9734;&#9734;&#9734; {products[0].stars}</p>
            <p  className="text-left font-bold text-md">${products[0].price}</p>
          </div>
        </div>
    </div>
      {/* product cards end */}
    
      </div>
    </>
  );
};

export default FilterCollection;
