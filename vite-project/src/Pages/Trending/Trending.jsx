import React from 'react';
import { getAllBooks } from '../../data/data';
import BookCard from '../BookCard/BookCard';


const Trending = () => {
  const data = getAllBooks();
  
  if (!data) {
    return <div>Error: Failed to fetch books</div>;
  }

  const trendingBooks = data.sort((a, b) => b.rating - a.rating);
  console.log(trendingBooks)

  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-7'>
      {
        trendingBooks?.map((book,index ) => {
          return(
           <BookCard key={index} book={book}/>
          )
        })
      }
      
    </div>
  );
};

export default Trending;
