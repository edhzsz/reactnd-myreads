import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'
import BookCover from './BookCover.js'

const Book = ({ book }) => {
  const coverUrl = book && book.coverUrl;
  const title = book && book.title;
  const authors = book && book.authors && book.authors.join(', ');

  return (
    <div className="book">
      <div className="book-top">
        <BookCover url={coverUrl} />
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

export default Book;