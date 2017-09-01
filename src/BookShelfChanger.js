import React from 'react'

const BookShelfChanger = ({ book, onShelfChange }) => {
  return book
  ? (
    <div className="book-shelf-changer">
      <select value={book.shelf || 'none'} onChange={(event) => onShelfChange(book, event.target.value)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        {book.shelf && <option value="none">None</option>}
      </select>
    </div>
  ) : null;
}

export default BookShelfChanger;