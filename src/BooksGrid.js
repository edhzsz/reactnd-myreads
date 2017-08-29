import React from 'react'
import Book from './Book.js'

const BooksGrid = ( { books } ) => {
  return (
      <ol className="books-grid">
        {books && books.map(book => (
          <li key={book.id}>
            <Book book={book}  />
          </li>
          )
        )}
      </ol>
    );
}

export default BooksGrid;