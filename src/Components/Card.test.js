import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});

it('should match the snapshot', () => {
  const div = document.createElement('div');
  const el = ReactDOM.render(<Card />, div);
  expect(el).toMatchSnapshot();
});
