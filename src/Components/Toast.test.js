import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toast />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Toast />, div);
  expect(el).toMatchSnapshot();
});
