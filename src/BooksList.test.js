import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './BooksList.js';
import renderer from 'react-test-renderer';

describe('Component: BooksList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BooksList />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <BooksList />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});