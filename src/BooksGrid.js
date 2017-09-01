import React from 'react'
import Book from './Book.js'

const BooksGrid = ( { books, onShelfChange } ) => (
  <ol className="books-grid">
    {books && books.map && books.map(book => (
      <li key={book.id}>
        <Book book={book} onShelfChange={onShelfChange} />
      </li>
      )
    )}
  </ol>
  );

export default BooksGrid;