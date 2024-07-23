import React from 'react'
import { getAllBooks } from '../../assets/data'

const BestSelling = () => {
    const books = getAllBooks()
    console.log(books)
  return (
    <div className='w-[80%] mx-auto'>
        <h3 className='text-black font-semibold text-30px' >Best Selling Books Ever</h3>
    </div>
  )
}

export default BestSelling