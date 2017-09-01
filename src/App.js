import React from 'react'
import { Route } from 'react-router-dom'
import debounce from 'lodash/debounce'
import * as BooksAPI from './BooksAPI'
import BooksSearch from './BooksSearch.js'
import BooksList from './BooksList.js'
import update from 'immutability-helper';
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: "",
    searchResults: [],
    books: [],
    booksShelfs: {}
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

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(res => {
      this.updateShelf(book, newShelf);
    });
   };

  onSearch = (query) => {
    this.setState({ query, searchResults:[] });
    this.debouncedSearch(query);
  }

  updateBookIn = (list, book, addIfNotFound) => {
    const index = list.findIndex(b => b.id === book.id);
    return index !== -1
      ? update(list, { $splice: [[index, 1, book]] })
      : addIfNotFound
        ? update(list, {$push: [book]})
        : null;
  }

  updateShelf = (book, newShelf) => {
    this.setState(state => {
      const books = state.books;
      if(!books) {
        return {};
      }

      const index = state.books.findIndex(b => b.id === book.id);
      const updatedBook = update(book, {shelf: {$set: newShelf}});

      if(index === -1 && newShelf === 'none') {
          return {};
      }

      const updatedBooks = this.updateBookIn(state.books, updatedBook, true);
      const updatedBooksShelfs = this.getBooksShelfs(updatedBooks);
      const updatedSearchResults = this.updateBookIn(state.searchResults, updatedBook, false);

      return updatedSearchResults
        ? {
          books: updatedBooks,
          booksShelfs: updatedBooksShelfs,
          searchResults: updatedSearchResults
        }
        : {
          books: updatedBooks,
          booksShelfs: updatedBooksShelfs
        }
    });
  }

  getBooksShelfs = books => {
    return books && books.reduce
    ? books.reduce((acc, b) => {
        acc[b.id] = b.shelf;
        return acc;
      }, {})
    : {};
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books, booksShelfs: this.getBooksShelfs(books)})
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BooksSearch
            onShelfChange={this.changeShelf}
            searchResults={this.state.searchResults}
            onSearch={this.onSearch}
            query={this.state.query} />
        )} />

        <Route exact path="/" render={() => (
          <BooksList
            books={this.state.books}
            onShelfChange={this.changeShelf}/>
          )} />
      </div>
    )
  }
}

export default BooksApp
