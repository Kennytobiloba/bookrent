import React from 'react';
import { getAllBooks } from '../../assets/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Books from '../Books/Books';

const BestSelling = () => {
    const books = getAllBooks(); // Fetch the list of books
    
    return (
        <div className='2xl:w-[80%] md:w-[96%]  sm:w-[96%] w-[98%] mx-auto mt-20 text-center'>
            <h3 className='text-black font-semibold lg:text-3xl  md:text-2xl text-lg mb-6'>Best Selling Books Ever</h3>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                navigation
                pagination={false} // Disable pagination
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                }}
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id} className='w-[100%] py-6 ' >
                        <div className=' w-[100%] bg-white '>
                        <Books book={book} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestSelling;
