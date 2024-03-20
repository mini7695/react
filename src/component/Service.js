import React from "react";
import img1 from "../image/img2.jpeg";
import img2 from "../image/img1.jpeg";
import img3 from "../image/img3.jpeg";

function Service() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:mt-10  grid grid-cols-1 mt-10">
        <div className="md:items-center md:text-center md:justify-center items-center text-center justify-center ">
          <img
            src={img2}
            alt="Implementation"
            className="w-[200px] h-[300px]  py-4 px-6  md:w-[500px] md:h-[300px]  md:py-4 md:px-6 "
          />
          <section
            className="  bg-white border w-[200px] h-[500px] items-center justify-center text-center p-5  rounded-lg -mt-10 z-50 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
          
          
          md:bg-white md:border md:w-[400px] md:h-[200px] md:items-center md:justify-center md:text-center md:p-5  md:rounded-lg md:-mt-10 md:z-50 md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          >
            <h1 className="md:text-center md:bg-orange-400/90   md:hover:bg-orange-600 md:inline-block md:ml-32 md:mt-2  md:font-bold md:rounded-lg md:p-2 md:z-50 text-center bg-orange-400/90   hover:bg-orange-600 inline-block ml-32 mt-2  font-bold rounded-lg p-2 z-50">
              Implementation
            </h1>
            <p className=" sm:hidden md:text-justify md:px-4 md:mt-2">
              Carotenoids give the characteristic yellow color to autumn leaves,
              corn, canaries, daffodils, and lemons, as well as egg yolks,
              buttercups, and bananas. They absorb light energy and protect
              plants from photo damage in some cases.
            </p>
          </section>
        </div>

        <div className="md:items-center md:text-center md:justify-center items-center text-center justify-center ">
          <img
            src={img1}
            alt="Implementation"
            className="w-[200px] h-[300px]  py-4 px-6  md:w-[500px] md:h-[300px]  md:py-4 md:px-6 "
          />
          <section
            className="  bg-white border w-[200px] h-[500px] items-center justify-center text-center p-5  rounded-lg -mt-10 z-50 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
          
          
          md:bg-white md:border md:w-[400px] md:h-[200px] md:items-center md:justify-center md:text-center md:p-5  md:rounded-lg md:-mt-10 md:z-50 md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          >
            <h1 className="md:text-center md:bg-orange-400/90   md:hover:bg-orange-600 md:inline-block md:ml-32 md:mt-2  md:font-bold md:rounded-lg md:p-2 md:z-50 text-center bg-orange-400/90   hover:bg-orange-600 inline-block ml-32 mt-2  font-bold rounded-lg p-2 z-50">
              Implementation
            </h1>
            <p className=" sm:hidden md:block  md:text-justify md:px-4 md:mt-2">
              Carotenoids give the characteristic yellow color to autumn leaves,
              corn, canaries, daffodils, and lemons, as well as egg yolks,
              buttercups, and bananas. They absorb light energy and protect
              plants from photo damage in some cases.
            </p>
          </section>
        </div>
        <div className="md:items-center md:text-center md:justify-center items-center text-center justify-center ">
          <img
            src={img3}
            alt="Implementation"
            className="w-[200px] h-[300px]  py-4 px-6  md:w-[500px] md:h-[300px]  md:py-4 md:px-6 "
          />
          <section
            className="  bg-white border w-[200px] h-[500px] items-center justify-center text-center p-5  rounded-lg -mt-10 z-50 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
          
          
          md:bg-white md:border md:w-[400px] md:h-[200px] md:items-center md:justify-center md:text-center md:p-5  md:rounded-lg md:-mt-10 md:z-50 md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          >
            <h1 className="md:text-center md:bg-orange-400/90   md:hover:bg-orange-600 md:inline-block md:ml-32 md:mt-2  md:font-bold md:rounded-lg md:p-2 md:z-50 text-center bg-orange-400/90   hover:bg-orange-600 inline-block ml-32 mt-2  font-bold rounded-lg p-2 z-50">
              Implementation
            </h1>
            {/* <p className=" sm:hidden md:text-justify md:px-4 md:mt-2">
              Carotenoids give the characteristic yellow color to autumn leaves,
              corn, canaries, daffodils, and lemons, as well as egg yolks,
              buttercups, and bananas. They absorb light energy and protect
              plants from photo damage in some cases.
            </p> */}
          </section>
        </div>
      </div>
    </>
  );
}

export default Service;
