import React from 'react';
import ReactDOM from 'react-dom';
import BookShelfChanger from './BookShelfChanger.js';
import renderer from 'react-test-renderer';

describe('Component: BookShelfChanger', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookShelfChanger />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <BookShelfChanger />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});