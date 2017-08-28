import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

describe('Component: App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <App />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});