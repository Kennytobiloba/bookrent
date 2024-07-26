import React, { useState } from 'react'
import Category from './Category'
import LatestBooks from './LatestBooks'

const Latest = () => {
    const [category, setCategory] = useState("All")
  return (
    <div className='  2xl:w-[80%] md:w-[96%] my-20  sm:w-[96%] w-[98%] mx-auto md:mt-20 mt-[80%]'>
        <Category category={category} setCategory={setCategory}/>
        <LatestBooks category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Latest