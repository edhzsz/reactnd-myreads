import React from 'react'

const BookCover = (props) => { 
  const { width, height, url } = props.cover || { width: 128, height: 192, url: "http://via.placeholder.com/128x192" };
  return (
    <div className="book-cover" style={{ width, height, backgroundImage: `url("${url}")` }}></div>
  );
}

export default BookCover