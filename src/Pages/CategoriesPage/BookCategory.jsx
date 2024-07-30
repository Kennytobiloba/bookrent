import React from 'react'
import { asset } from '../../assets/data'
import Latest from '../../Components/Latest/Latest'
import LatestBooks from '../../Components/Latest/LatestBooks'
import CategoriesPage from './CategoriesPage'
import FilterCategory from './FilterCategory'


const BookCategory = () => {
  return (
    <div className='w-[80%] mx-auto h-[55vh] relative'>
        <div className='w-full h-full '>
            <img src={asset.bgone} alt="" className='w-full h-full object-cover' />
            

        </div>
        <div className=' absolute top-[36%] left-[42%]'>
                <h1 className='text-white font-semibold text-[40px]'>Books Category</h1>
            </div>

            <div className='grid grid-cols-2'>
              <FilterCategory/>
               
             <CategoriesPage/>
            </div>

    </div>
  )
}

export default BookCategory