import React from 'react';
import ReactDOM from 'react-dom';
import BookShelf from './BookShelf.js';
import renderer from 'react-test-renderer';

describe('Component: BookShelf', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookShelf />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <BookShelf />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});