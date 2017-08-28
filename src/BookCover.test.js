import React from 'react';
import ReactDOM from 'react-dom';
import BookCover from './BookCover.js';
import renderer from 'react-test-renderer';

describe('Component: BookCover', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookCover />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <BookCover />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render the props', () => {
    const cover = {width: 100, height:200, url:"test-url"}
    const tree = renderer.create(
      <BookCover cover={cover} />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});