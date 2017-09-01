import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf.js'

const BooksList = ({books, onSearch, onShelfChange}) => {
  const shelfs = ["currentlyReading", "wantToRead", "read"];

  const shelfNames = {
    "currentlyReading": "Currently Reading",
    "wantToRead": "Want to Read",
    "read": "Read"
  }

  const booksByShelf = books
    ? books.reduce((acc, cur) => {
        acc[cur.shelf] = acc[cur.shelf] || [];
        acc[cur.shelf].push(cur);

        return acc;
      }, {})
    : {};

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map(s => (
            <BookShelf title={shelfNames[s]} books={booksByShelf[s]} key={s} onShelfChange={onShelfChange}/>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default BooksList;