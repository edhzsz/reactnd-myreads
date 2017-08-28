import React from 'react';
import ReactDOM from 'react-dom';
import BooksSearch from './BooksSearch.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BooksSearch />, div);
});
