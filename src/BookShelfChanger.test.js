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

  it('should select the shelf of the book', () => {
    const book = {
      title: "Harry Potter and the Sorcerer's Stone",
      authors: ["J.K. Rowling"],
      imageLinks: {
        smallThumbnail:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        thumbnail:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
      },
      shelf: "wantToRead",
      id: "wrOQLV6xB-wC"
    };

    const tree = renderer.create(
      <BookShelfChanger book={book} onShelfChange={() => true} />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});