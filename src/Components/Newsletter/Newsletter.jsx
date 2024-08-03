import React, { useState } from 'react';
import { asset } from '../../assets/data';

const Newsletter = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="2xl:w-[80%] md:w-[96%] sm:w-[96%] w-[98%] mx-auto my-4 flex flex-col">
      <div className="flex flex-col md:flex-row gap-8 w-full h-[30vh] md:h-[26vh] flex-1 md:flex-none">
        <div className="w-full h-full relative">
          <img
            src={asset.imageight}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-4 top-[26%] flex flex-col md:flex-row justify-around w-full md:pr-4 p-2">
            <h1 className="text-white lg:text-[30px] sm:text-[26px] font-semibold">
              The History <br /> of Phipino
            </h1>
            <div className="mt-6 md:mt-0">
              <button
                className={`bg-red-500 text-white px-6 py-4 rounded-[26px] mr-4 ${hover ? "opacity-80" : "opacity-100"} transition-opacity duration-300`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            src={asset.bgFour}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-[26%] flex flex-col md:flex-row justify-around w-full md:pr-4 p-2">
            <h1 className="text-white sm:text-[30px] text-[26px] font-semibold">
              The History <br /> of Phipino
            </h1>
            <div className="mt-6 md:mt-0">
              <button
                className={`bg-red-500 text-white px-6 py-4 rounded-[26px] mr-4 ${hover ? "opacity-80" : "opacity-100"} transition-opacity duration-300`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="w-full mt-6 bg-blue-800 text-center p-8 h-[36vh] flex flex-col justify-center items-center">
        <h1 className="lg:text-[40px] sm:text-[30px] text-[26px] text-white font-bold mt-6">Join Newsletter</h1>
        <p className="w-[98%] sm:text-[16px] text-[14px] md:w-[60%] text-white mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum excepturi voluptatem expedita eveniet deleniti alias, quae nostrum dolores assumenda.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none text-black bg-white md:px-8 md:py-4 px-6 py-2 rounded-[26px] mb-4 md:mb-0 md:mr-4 w-[80%] md:w-auto"
          />
          <button
            className={`bg-red-500 text-white md:px-8 md:py-4 px-t py-2 rounded-[26px] ${hover ? "opacity-80" : "opacity-100"} transition-opacity duration-300`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
