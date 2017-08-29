import React from 'react'

const BookCover = ({ imageLinks }) => {
  const url = imageLinks && (imageLinks.thumbnail || imageLinks.smallThumbnail);

  const style = url
    ? { width: 128, height: 192, backgroundImage: `url("${url}")` }
    : { width: 128, height: 192 };
    
  return (
    <div className="book-cover" style={style}></div>
  );
}

export default BookCover