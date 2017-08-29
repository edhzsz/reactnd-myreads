import React from 'react';
import ReactDOM from 'react-dom';
import BookShelf from './BookShelf.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Component: BookShelf', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookShelf />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = toJson(shallow(
      <BookShelf />
     ));

    expect(tree).toMatchSnapshot();
  });

  it('should render the props', () => {
    const books = [
      {
        title: "To Kill a Mockingbird",
        authors: ["Harper Lee"],
        imageLinks: {
          smallThumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
          thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        },
        shelf: "currentlyReading",
        id: "nggnmAEACAAJ"
      },
      {
        title: "Ender's Game",
        authors: ["Orson Scott Card"],
        imageLinks: {
          smallThumbnail:"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=5&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
          thumbnail:"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        },
        shelf: "currentlyReading",
        id: "sJf1vQAACAAJ"
      }
    ];

    const tree = toJson(shallow(
      <BookShelf title="test shelf" books={books} />
     ));

    expect(tree).toMatchSnapshot();
  });
});