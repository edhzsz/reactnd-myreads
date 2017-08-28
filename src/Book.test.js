import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book.js';
import renderer from 'react-test-renderer';

describe('Component: Book', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Book />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render the props', () => {
    const cover = {width: 100, height:200, url:"test-url"}
    const tree = renderer.create(
      <Book name="Test Name" authors="test authors" cover={cover} />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});