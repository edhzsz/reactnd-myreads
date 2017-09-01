import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import debounce from 'lodash/debounce'
import BooksGrid from './BooksGrid.js'

class BooksSearch extends Component {
  constructor (props) {
    super(props);

    const shelfsByBooksIds = this.props.books && this.props.books.reduce
      ? this.props.books.reduce((acc, b) => {
          acc[b.id] = b.shelf;
          return acc;
        }, {})
      : {};

    this.state = {
      query: this.props.query || "",
      searchResults: [],
      booksShelfs: shelfsByBooksIds
    }

    this.performSearch(this.state.query);
  }

  performSearch = (query) => {
    if(query) {
      BooksAPI.search(query, 100).then(results => {
        if(results && !results.error) {
          results.forEach(b => b.shelf = this.state.booksShelfs[b.id]);
          this.setState({searchResults: results});
        }
      });
    }
  }

  debouncedSearch = debounce(this.performSearch, 200);

  search = (query) => {
    this.setState({ query, searchResults:[] });
    this.debouncedSearch(query);
  }

  onChange = (event) => {
    var query = event.target.value
    this.search(query);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.props.onCancelSearch}>Close</a>
          <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.onChange} />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default BooksSearch;