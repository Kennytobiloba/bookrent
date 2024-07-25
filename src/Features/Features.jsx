import React from 'react';
import { getAllBooks } from '../assets/data';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    <div className='max-w-[80%] mx-auto '>
        <h1 className='text-[22px] font-bold'>Featured This Week</h1>
      <div className='bg-red-500 min-w-[80%] flex p-10'>
        <div className='max-w-[50%] mx-auto'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} // Adjust delay time as needed
            modules={[Navigation, Pagination, Autoplay]}
            className='bg-red-500'
          >
            {features.map((book) => (
              <SwiperSlide key={book.id}>
                <div className='flex gap-4'>
                <div style={{ display: 'flex', justifyContent: 'center' }} className='w-[50%] h-[58vh]'>
                  <img src={book.cover} alt={book.title} style={{ width: '100%' }}  />
                </div>
                <div>
                <h4 className='text-sm mt-2  text-white font-bold md:text-[26px] text-[16px]'>{book.title}</h4>
                <h4 className='text-sm mt-4 text-white  md:text-[16px] text-[14px]'>{book.autor}</h4>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {firstFeature && (
            <div>
              <img src={firstFeature.cover} alt={firstFeature.title} style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
