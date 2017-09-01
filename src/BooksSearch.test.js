import React from 'react';
import ReactDOM from 'react-dom';
import BooksSearch from './BooksSearch.js';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><BooksSearch /></BrowserRouter>, div);
});
