import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Loader />, div);
  expect(el).toMatchSnapshot();
});
