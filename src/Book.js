import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'
import BookCover from './BookCover.js'

let Book = ({ name, authors, cover}) => (
    <div className="book">
      <div className="book-top">
        <BookCover cover={cover} />
        <BookShelfChanger />
      </div>
      <div className="book-title">{name}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );

export default Book;