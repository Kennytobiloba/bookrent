import React from 'react';
import { getAllBooks } from '../assets/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Swiper's Autoplay CSS
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Books from '../Components/Books/Books';

const Features = () => {
  const books = getAllBooks();
  const features = books.filter((book) => book.features !== undefined);

  if (!features.length) {
    return <div>Book is empty</div>;
  }

  // Display the first feature separately
  const firstFeature = books[11];

  return (
    <div className='2xl:w-[80%] md:w-[96%]  sm:w-[96%] w-[98%] mx-auto  mt-20 flex justify-center '>
       
      <div className='  min-w-[80%] flex flex-col '>
      <h1 className='text-[28px] font-bold mb-6'>Featured This Week</h1>
        <div className='w-[96%] flex justify-between items-center bg-red-600 p-10 '>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} // Adjust delay time as needed
            modules={[Navigation, Pagination, Autoplay]}
            className='bg-red-600 w-full'
          >
            {features.map((book) => (
              <SwiperSlide key={book.id}>
                <div className='flex gap-4'>
                <div style={{ display: 'flex', justifyContent: 'center' }} className='w-[40%] h-[58vh]'>
                  <img src={book.cover} alt={book.title} style={{ width: '100%' }} className=' object-contain'  />
                </div>
                <div className='flex flex-col items-start  justify-center text-start'>
                <h4 className='text-sm mt-2  text-white font-bold md:text-[26px] text-[16px]'>{book.title}</h4>
                <h4 className='text-sm mt-4 text-white  md:text-[16px] text-[14px]'>By {book.autor}</h4>
                <h3 className='text-white mt-8 text-[22px] '>${book.price}.00</h3>
                <div className='text-white flex gap-2 justify-center mt-2 p-2'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <span className=' text-sm'>(120 Review)</span> </div>
                <button className='px-8 py-4 border rounded-[30px] text-[14px] text-white border-white mt-6 text-center'>View  Details </button>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
      <div  className='w-[100%] h-[80vh]'>
          {firstFeature && (
            <div className='w-full h-full '>
              <img src={firstFeature.cover} className='w-full h-full object-cover' />
            </div>
          )}
        </div>
    </div>
  );
};

export default Features;
