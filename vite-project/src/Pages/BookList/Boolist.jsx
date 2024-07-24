import React from 'react'
import { getAllBooks } from '../../data/data'
import BookCard from '../BookCard/BookCard'


const Boolist = () => {
    const {book} = getAllBooks()
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-7'>
        {
            book?.map((book,index) => {
                return(
                    <BookCard key={index} book={book}/>
                )
            })
        }

    </div>
  )
}

export default Boolist