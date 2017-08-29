import React from 'react'

const BookCover = ({ url }) => {
  const style = url
    ? { width: 128, height: 192, backgroundImage: `url("${url}")` }
    : { width: 128, height: 192 };
    
  return (
    <div className="book-cover" style={style}></div>
  );
}

export default BookCover