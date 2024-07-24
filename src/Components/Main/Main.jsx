import React, { useState } from 'react';
import { asset } from '../../assets/data'; // Ensure this import is correct

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Main = () => {
  const [hover, setHover] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const autoplay = {
    delay: 2500, // Adjust the delay time as needed
    disableOnInteraction: false,
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      autoplay={autoplay}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative 2xl:w-[80%] md:w-[96%]  sm::w-[96%] w-[98%]  h-[80vh] mx-auto " id="trigger">
          <img src={asset.imageight} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute 2xl:top-[100%]  lg:left-[40%] left-[30] 2xl:w-[18%] text-white space-y-4 opacity-[100%] inset-0">
            <div className="flex justify-center">
              <button className="bg-white text-black border rounded-2xl px-4 py-2 hover:bg-red-600">Science Fiction</button>
            </div>
            <h1 className="text-4xl md:text-5xl text-[40px] 2xl:text-[40px] w-full font-extrabold">
              The History <br /> Of Phipino
            </h1>
            <div className="flex justify-center">
              <button
                className={`bg-red-500 text-white px-8 py-[14px] mt-2 rounded-[20px] ${hover ? "opacity-50" : "opacity-100"} transition-opacity`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Browse Store
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative 2xl:w-[80%] md:w-[96%]  sm::w-[96%] w-[98%] mx-auto h-[80vh] " id="trigger">
          <img src={asset.bgthree} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute top-[30%] left-[40%] w-[18%] text-white space-y-4 opacity-[100%] inset-0">
            <div className="flex justify-center">
              <button className="bg-white text-black border rounded-2xl px-4 py-2 hover:bg-red-600">Science Fiction</button>
            </div>
            <h1 className="text-4xl md:text-5xl 2xl:text-[40px] w-full font-extrabold">
              The History <br /> Of Phipino
            </h1>
            <div className="flex justify-center">
              <button
                className={`bg-red-500 text-white px-8 py-[14px] mt-2 rounded-[20px] ${hover ? "opacity-50" : "opacity-100"} transition-opacity`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Browse Store
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative 2xl:w-[80%] md:w-[96%]  sm::w-[96%] w-[98%] mx-auto  h-[80vh] " id="trigger">
          <img src={asset.bgFour} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute top-[30%] left-[40%] w-[18%] text-white space-y-4 opacity-[100%] inset-0">
            <div className="flex justify-center">
              <button className="bg-white text-black border rounded-2xl px-4 py-2 hover:bg-red-600">Science Fiction</button>
            </div>
            <h1 className="text-4xl md:text-5xl 2xl:text-[40px] w-full font-extrabold">
              The History <br /> Of Phipino
            </h1>
            <div className="flex justify-center">
              <button
                className={`bg-red-500 text-white px-8 py-[14px] mt-2 rounded-[20px] ${hover ? "opacity-50" : "opacity-100"} transition-opacity`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Browse Store
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Main;
