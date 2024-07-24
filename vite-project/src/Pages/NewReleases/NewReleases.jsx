import React from 'react'
import { getAllBooks } from '../../data/data';
import BookCard from '../BookCard/BookCard';

const NewReleases = () => {

  
  const data = getAllBooks()
  const today = new Date(); // Get today's date

  // Filter books
  const oneDay = 24 * 60 * 60 * 1000; 
  const sevenDaysAgo = today.getTime() - (7 * oneDay); // Calculate timestamp for 7 days ago

  const latestBooks = data.filter((book) => {
    const bookCreatedDate = new Date(book.createdAt).getTime(); 
    return bookCreatedDate >= sevenDaysAgo;
  });
  console.log(latestBooks)
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-7'>
      {
        latestBooks?.map((book,id) => {
          return(
            <BookCard key={id} book={book}/>
          )
        })
      }

    </div>
  )
}

export default NewReleases