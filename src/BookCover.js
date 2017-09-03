import React from 'react'

const BookCover = ({ imageLinks }) => {
  const url = imageLinks && (imageLinks.thumbnail || imageLinks.smallThumbnail);
  const style = url && { backgroundImage: `url("${url}")` };

  return (
    <div className="book-cover" style={style}></div>
  );
}

export default BookCover;