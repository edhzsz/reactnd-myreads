import React from 'react'

const BookCover = ({ coverUrl }) => {
  const style = coverUrl
    ? { width: 128, height: 192, backgroundImage: `url("${url}")` }
    : { width: 128, height: 192 };
    
  return (
    <div className="book-cover" style={style}></div>
  );
}

export default BookCover