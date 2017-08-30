import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksSearch from './BooksSearch.js'
import BooksList from './BooksList.js'
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

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BooksSearch onCancelSearch={() => this.setState({ showSearchPage: false })} />
        ) : (
          <BooksList books={this.state.books} onSearch={() => this.setState({ showSearchPage: true })}/>
        )}
      </div>
    )
  }
}

export default BooksApp
