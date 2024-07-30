import React, { useContext, useState } from 'react'
import Category from '../../Components/Latest/Category'
import LatestBooks from '../../Components/Latest/LatestBooks'
import Latest from '../../Components/Latest/Latest'
import { BookState } from '../../Components/Context'
import { getAllBooks } from '../../assets/data'
import Books from '../../Components/Books/Books'




const CategoriesPage = () => {
  const book = getAllBooks()
  const {category,setCategory} = useContext(BookState)
  const filtered = book.filter((book)=> category=== "All" || category === book.genres)
  console.log("filtered",filtered)
  
  return (
    <div className='grid grid-cols-4 gap-4 mt-16'>
      {
        filtered.map((book,id)=> {
          return(
            <div key={id} className=''>
              <Books book={book}/>

            </div>
          )
        })
      }
      
        
    </div>
  )
}

export default CategoriesPage