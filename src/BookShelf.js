import React from 'react'
import BooksGrid from './BooksGrid.js'

const BookShelf = ({ title, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BooksGrid books={books} />
    </div>
  </div>
  );

export default BookShelf;