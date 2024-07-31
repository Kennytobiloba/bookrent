import React from 'react'
import { asset } from '../../assets/data'
import Latest from '../../Components/Latest/Latest'
import LatestBooks from '../../Components/Latest/LatestBooks'
import CategoriesPage from './CategoriesPage'
import FilterCategory from './FilterCategory'


const BookCategory = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col gap-2   '>
      <div className='relative h-[55vh]'>
        <div className='w-full h-full '>
            <img src={asset.bgone} alt="" className='w-full h-full object-cover' />
        </div>


        <div className=' absolute top-[36%] left-[42%]'>
                <h1 className='text-white font-semibold text-[40px]'>Books Category</h1>
            </div>
            </div>

            <div className='grid grid-cols-3 gap-10'>

            <div>
            <FilterCategory />
            </div>

              <div className="col-span-2 w-full">
                 
             <CategoriesPage  />
              </div>
            </div>

    </div>
  )
}

export default BookCategory