import React, { useContext } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { filter } from '../../assets/data';
import { BookState } from '../../Components/Context';

const FilterCategory = () => {
  const { category, setCategory } = useContext(BookState);

  const handleClick = (genre) => {
    const newCategory = category === genre ? "All" : genre;
    setCategory(newCategory);
  };

  const handlePublish = (publisher) => {
    const newCategory = category === publisher ? "All" : publisher;
    setCategory(newCategory);
  };

  const handleAuthor = (author) => {
    const newCategory = category === author ? "All" : author;
    setCategory(newCategory);
  };

  return (
    <div className='mt-10 border-2 p-10 border-gray-400 shadow-3xl'>
      <div>
        <h3 className='text-[22px]'>Filter by Genres</h3>
        <div className='flex flex-col gap-4 mt-4'>
          {filter.map((item, id) => (
            <div className='flex items-center' key={id}>
              <label className='sidebar-label-container flex items-center gap-2'>
                <input 
                  type="radio" 
                  name='genre' 
                  checked={category === item.genres} 
                  readOnly 
                />
                <span 
                  className='checkmark justify-center items-center text-[24px] hover:block' 
                  onClick={() => handleClick(item.genres)}
                >
                  {category === item.genres && (
                    <IoMdCheckmark className='bg-red-600 w-full h-full border rounded-[50%] text-white' />
                  )}
                </span>
                <h4 className='text-[18px] font-bold'>{item.genres}</h4>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6'>
        <h3 className='text-[22px]'>Filter by Publisher</h3>
        <div className='flex flex-col gap-4 mt-4'>
          {filter.map((item, id) => (
            <div key={id} className='flex items-center'>
              <label className='sidebar-label-container flex items-center gap-2'>
                <input 
                  type="radio" 
                  name='publisher' 
                  checked={category === item.publisher} 
                  readOnly 
                />
                <span 
                  className='checkmark justify-center items-center text-[24px] hover:block' 
                  onClick={() => handlePublish(item.publisher)}
                >
                  {category === item.publisher && (
                    <IoMdCheckmark className='bg-red-600 w-full h-full border rounded-[50%] text-white' />
                  )}
                </span>
                <h4 className='text-[18px] font-bold'>{item.publisher}</h4>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6'>
        <h3 className='text-[22px]'>Filter by Author Name</h3>
        <div className='flex flex-col gap-4 mt-4'>
          {filter.map((item, id) => (
            <div key={id} className='flex items-center'>
              <label className='sidebar-label-container flex items-center gap-2'>
                <input 
                  type="radio" 
                  name='author' 
                  checked={category === item.Author} 
                  readOnly 
                />
                <span 
                  className='checkmark justify-center items-center text-[24px] hover:block' 
                  onClick={() => handleAuthor(item.Author)}
                >
                  {category === item.Author && (
                    <IoMdCheckmark className='bg-red-600 w-full h-full border rounded-[50%] text-white' />
                  )}
                </span>
                <h4 className='text-[18px] font-bold'>{item.Author}</h4>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
