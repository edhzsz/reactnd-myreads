import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger.js'

class Book extends Component {
  render() {
    const { name, authors, coverWidth, coverHeight, coverUrl} = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: coverWidth, height: coverHeight, backgroundImage: `url("${coverUrl}")` }}></div>
            <BookShelfChanger />
          </div>
        <div className="book-title">{name}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;