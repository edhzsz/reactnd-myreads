import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksSearch from './BooksSearch.js'
import BooksList from './BooksList.js'
import update from 'immutability-helper';
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books: books}))
  }

  updateShelf = (book, newShelf) => {
    this.setState(state => {
      const books = state.books;
      if(!books) {
        return {};
      }

      const index = state.books.findIndex(b => b.id === book.id);
      if(index === -1) {
        if(newShelf === 'none') {
          return {};
        }

        const updatedBook = update(book, {shelf: {$set: newShelf}});
        return {books: update(books, {$push: [updatedBook]}) };
      }

      const updatedBook = update(books[index], {shelf: {$set: newShelf}});
      const updatedBooks = update(books, { $splice: [[index, 1, updatedBook]] });

      return {books: updatedBooks};
    });
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(res => {
      this.updateShelf(book, newShelf);
    });
   };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BooksSearch
            onShelfChange={this.changeShelf}
            books={this.state.books}
            query="" />
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
