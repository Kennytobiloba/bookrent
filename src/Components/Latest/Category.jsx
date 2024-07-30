import React from 'react'
import { Moviescategory } from '../../assets/data'

const Category = ({ category, setCategory } ) => {
    console.log("category",category)
    console.log("category",setCategory)

  return (
    <div className='flex justify-between md:mt-[20px] mt-[40%] md:flex-row flex-col'>
        <h1  className='lg:text-[30px] text-[24px] md:text-[22px] font-bold mb-6'>Latest Published Items</h1>

        <div className='flex  md:gap-6 gap-2'>
            {
                Moviescategory.slice(0,10).map((movie, id) => {
                    return (
                        <div onClick={()=> setCategory( prev => prev === movie.categorys ? "All" : movie.categorys) } key={id} className='flex items-center justify-center'>
                            <button className={category === movie.categorys ? "md:py-4 md:px-6 p-4 font-bold text-[12px] sm:text-[16px]  border rounded-full bg-rose-600": "md:py-4 sm:px-6 p-4 text-[12px] md:text-[16px] font-bold  border rounded-full" }>{movie.categorys}</button>

                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Category