import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toggle />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Toggle />, div);
  expect(el).toMatchSnapshot();
});
