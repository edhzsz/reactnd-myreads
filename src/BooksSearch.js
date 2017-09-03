import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid.js';

class BooksSearch extends Component {
  onChange = (event) => {
    const query = event.target.value;
    this.props.onSearch && this.props.onSearch(query);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.props.query}
            onChange={this.onChange} />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.props.searchResults} onShelfChange={this.props.onShelfChange} />
        </div>
      </div>
    );
  }
}

export default BooksSearch;