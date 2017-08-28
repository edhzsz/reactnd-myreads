import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'

let Book = ({ name, authors, coverWidth, coverHeight, coverUrl}) => (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: coverWidth, height: coverHeight, backgroundImage: `url("${coverUrl}")` }}></div>
          <BookShelfChanger />
        </div>
      <div className="book-title">{name}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );

export default Book;