import React from 'react';
import { getAllBooks } from '../../assets/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Books from '../Books/Books';
import { useMediaQuery } from 'react-responsive';

const LatestBooks = ({ category, setCategory }) => {
    const books = getAllBooks();

    // Filter books based on the category
    const filteredBooks = books.filter(book => category === "All" || category === book.category);

    // Use media query to check screen size
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className='w-full mx-auto md:mt-18 mt-10 text-center'>
            {isSmallScreen ? (
                <div className='flex flex-col space-y-4'>
                    {filteredBooks.map((book) => (
                        <div key={book.id} className='w-full m-0 p-0'>
                            <Books book={book} />
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    className='w-full'
                    spaceBetween={10}
                    slidesPerView={6}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={false}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1536: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {filteredBooks.map((book) => (
                        <SwiperSlide key={book.id} className='w-full py-6'>
                            <div className='w-full m-0 p-0'>
                                <Books book={book} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default LatestBooks;
