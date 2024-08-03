import React from 'react'
import { asset } from '../../assets/data'
import Latest from '../../Components/Latest/Latest'
import LatestBooks from '../../Components/Latest/LatestBooks'
import CategoriesPage from './CategoriesPage'
import FilterCategory from './FilterCategory'


const BookCategory = () => {
  return (
    <div className='2xl:w-[80%] md:w-[96%]  sm:w-[96%] w-[98%] mx-auto flex flex-col gap-2   '>
      <div className='relative h-[55vh]'>
        <div className='w-full h-full '>
            <img src={asset.bgone} alt="" className='w-full h-full object-cover' />
        </div>


        <div className=' absolute top-[36%] md:left-[42%] left-[24%]'>
                <h1 className='text-white font-semibold text-[40px]'>Books Category</h1>
            </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-10 grid-cols-5'>

            <div className='col-span-2 md:col-span-1'>
            <FilterCategory />
            </div>

              <div className="lg:col-span-2 col-span-3 w-full">
                 
             <CategoriesPage  />
              </div>
            </div>

    </div>
  )
}

export default BookCategory