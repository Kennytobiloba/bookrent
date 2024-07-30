import React from 'react';
import { getAllBooks } from '../../assets/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; // Import Swiper's Autoplay CSS
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Books from '../Books/Books';


const BestSelling = () => {
    const books = getAllBooks(); // Fetch the list of books

    return (
        <div className='2xl:w-[80%] md:w-[96%] sm:w-[96%] w-[98%] mx-auto md:mt-20 mt-12 text-center'>
            <h3 className='text-black font-semibold lg:text-3xl md:text-2xl text-[24px] mb-6'>Best Selling Books Ever</h3>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                autoplay={{ delay: 3000 }} // Add autoplay with a delay of 3 seconds
                navigation // Enable navigation
                pagination={false} // Disable pagination
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
                    <SwiperSlide key={book.id} className='w-[100%] py-6'>
                        <div className='w-[100%] m-0 p-0'>
                            <Books book={book} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestSelling;
