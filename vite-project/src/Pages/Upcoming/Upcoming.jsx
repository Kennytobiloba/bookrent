import React from 'react'
import { getAllBooks } from '../../data/data'
import BookCard from '../BookCard/BookCard'



const Upcoming = () => {
   const data = getAllBooks()
   const upcomings = data.filter((book) => book.upcoming === true)
   console.log(upcomings)
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-7'>
      {
        upcomings.map((book,id) => {
          return(
            <BookCard book={book} key={id}/>
          )
        })
      }
      
    </div>
  )
}

export default Upcoming