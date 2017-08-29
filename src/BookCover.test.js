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

  it('should render using the thumbnail url as background', () => {
    const imageLinks = { thumbnail: "test-url" };
    const tree = renderer.create(
      <BookCover imageLinks={imageLinks} />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render the smallthumbnail if thumbnail is not available', () => {
    const imageLinks = { smallThumbnail: "test-url-small" };
    const tree = renderer.create(
      <BookCover imageLinks={imageLinks} />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render the thumbnail if both, thumbnail and smallThumbnail, are available', () => {
    const imageLinks = { thumbnail: "test-url", smallThumbnail: "test-url-small" };
    const tree = renderer.create(
      <BookCover imageLinks={imageLinks} />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});