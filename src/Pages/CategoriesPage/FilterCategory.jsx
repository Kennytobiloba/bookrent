import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";

const FilterCategory = () => {
  const [check, setCheck] = useState(false)
  return (
    <div >
      <div>
        <h3>Fiter by Genres</h3>
        <label className='sidebar-label-container'>
        <input   type="radio" name='name'  />
        <span className='checkmark  justify-center items-center 
        text-[24px] hover:block ' onMouseEnter={()=> setCheck(false)} onMouseMove={() =>setCheck(true)} >{check ?  <IoMdCheckmark className='bg-red-600' /> : "" }</span> 
      </label>
      </div>
        
    </div>
  )
}

export default FilterCategory