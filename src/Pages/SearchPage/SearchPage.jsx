import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllBooks } from '../../assets/data';
import Books from '../../Components/Books/Books';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const books = getAllBooks();

  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (query) {
      const results = books.filter(book =>
        book.autor && book.autor.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(results);
    } else {
      setFilteredBooks([]);
    }
  }, [query, books]);

  return (
    <div className='container mx-auto p-6 bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Search Results for "{query}"</h1>
      {filteredBooks.length === 0 ? (
        <p>No books found for "{query}"</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filteredBooks.map((book,id) => (
           <Books key={id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
