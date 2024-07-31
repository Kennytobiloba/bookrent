import React, { useContext } from 'react';
import { Dropdown, Button, Space, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { BookState } from '../../Components/Context';
import { getAllBooks } from '../../assets/data';
import Books from '../../Components/Books/Books';

const items = [
  {
    label: 'Browse by popularity',
    key: '1',
  },
  {
    label: 'Name',
    key: '2',
  },
  {
    label: 'old',
    key: '3',
  },
  {
    label: 'Price',
    key: '4',
  },
];

const handleMenuClick = (e) => {
  console.log('click', e);
  // Add your logic here
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const CategoriesPage = () => {
  const book = getAllBooks();
  const { category } = useContext(BookState);
  const filtered = book.filter(
    (book) => category === "All" || category === book.genres || category === book.publisher || category === book.autor
  );
  console.log("filtered", filtered);

  return (
    <div className=' w-full flex flex-col justify-center  '>
     <div className='flex justify-end items-center'>
     <Dropdown menu={menuProps} className='w-[50%] p-4 border rounded-3xl' placement="bottomCenter">
        <Button>
          <Space className='flex justify-between text-[18px]'>
            Browse by popularity
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
     </div>
      <div className='grid grid-cols-4 gap-4 mt-16 w-full '>
        {filtered.map((book, id) => (
          <div key={id} className=''>
            <Books book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
