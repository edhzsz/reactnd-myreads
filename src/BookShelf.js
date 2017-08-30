import React from 'react'
import BooksGrid from './BooksGrid.js'

const BookShelf = ({ title, books, onShelfChange }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BooksGrid books={books} onShelfChange={onShelfChange} />
    </div>
  </div>
  );

export default BookShelf;