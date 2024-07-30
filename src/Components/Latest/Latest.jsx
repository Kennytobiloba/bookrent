import React, { useContext } from 'react'
import Category from './Category'
import LatestBooks from './LatestBooks'
import { BookState } from '../Context'


const Latest = () => {
    const {category, setCategory} = useContext(BookState)
  return (
    <div className='  2xl:w-[80%] md:w-[96%] my-20  sm:w-[96%] w-[98%] mx-auto md:mt-20 mt-[80%] flex flex-col'>
        <Category category={category} setCategory={setCategory} className="flex-1"/>
        <LatestBooks category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Latest