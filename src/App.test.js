import React from 'react';
import ReactDOM from 'react-dom';
import BooksApp from './App';
import renderer from 'react-test-renderer';

describe('Component: App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BooksApp />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <BooksApp />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});