import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllBooks } from '../assets/data';

const BookDetails = () => {
  const { itemId } = useParams(); // Get the book ID from the URL
  const books = getAllBooks(); // Retrieve all books
  const bookFound = books.find((book) => book.id === Number(itemId)); // Find the book by ID

  if (!bookFound) return <div>Book not found</div>; // Handle case where book is not found

  return (
    <div>
      <img src={bookFound.cover} alt={bookFound.title} className='' />
      <h1>{bookFound.title}</h1>
      <p>{bookFound.description}</p>
      <p><strong>Genre:</strong> {bookFound.genre}</p>
      <p><strong>Rating:</strong> {bookFound.rating}</p>
      <p><strong>Price:</strong> ${bookFound.price}</p>
      <p><strong>Created At:</strong> {bookFound.createdAt}</p>
      {bookFound.upcoming && <p>This book is coming soon!</p>}
    </div>
  );
};

export default BookDetails;
