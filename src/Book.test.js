import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Component: Book', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = toJson(shallow(
      <Book />
     ));

    expect(tree).toMatchSnapshot();
  });

  it('should render the props', () => {
    const book = { title:"Test Name", authors:["test author 1", "test author 2"], coverUrl: "test-url" };

    const tree = toJson(shallow(
      <Book book={book} />
     ));

    expect(tree).toMatchSnapshot();
  });
});