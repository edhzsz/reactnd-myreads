import React from 'react';
import ReactDOM from 'react-dom';
import BooksGrid from './BooksGrid.js';
import renderer from 'react-test-renderer';

describe('Component: BooksGrid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BooksGrid />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <BooksGrid />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});